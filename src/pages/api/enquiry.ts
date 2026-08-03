export const prerender = false;

import type { APIRoute } from 'astro';

type EnquiryBody = {
  name?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  serviceInterest?: string;
  industry?: string;
  message?: string;
  consent?: string;
  landingPage?: string;
  referrer?: string;
  device?: string;
  utm?: string;
};

export const POST: APIRoute = async ({ request }) => {
  let body: EnquiryBody;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400 });
  }

  const required = ['name', 'email', 'phone', 'enquiryType', 'serviceInterest', 'message', 'consent'] as const;
  for (const key of required) {
    if (!body[key] || String(body[key]).trim() === '') {
      return new Response(JSON.stringify({ error: `Missing ${key}` }), { status: 400 });
    }
  }

  const payload = {
    ...body,
    receivedAt: new Date().toISOString(),
  };

  const webhook = import.meta.env.CRM_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error('CRM webhook failed', error);
    }
  }

  const resendKey = import.meta.env.RESEND_API_KEY;
  const notifyTo = import.meta.env.ENQUIRY_TO_EMAIL || 'dev@okmg.com';
  const notifyCc = import.meta.env.ENQUIRY_CC_EMAIL || 'andy@okmg.com';
  const notifyFrom = import.meta.env.ENQUIRY_FROM_EMAIL || 'onboarding@resend.dev';

  if (!resendKey) {
    console.error('Enquiry received but RESEND_API_KEY is not configured:', payload);
    return new Response(JSON.stringify({ error: 'Form delivery is not configured' }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: notifyFrom,
        to: [notifyTo],
        cc: [notifyCc],
        reply_to: body.email,
        subject: `New ${body.enquiryType} enquiry from ${body.name}`,
        text: [
          `Name: ${body.name}`,
          `Email: ${body.email}`,
          `Phone: ${body.phone}`,
          `Type: ${body.enquiryType}`,
          `Service: ${body.serviceInterest}`,
          `Industry: ${body.industry || 'Not provided'}`,
          `Message: ${body.message}`,
          `Landing page: ${body.landingPage || ''}`,
          `Referrer: ${body.referrer || ''}`,
          `Device: ${body.device || ''}`,
          `UTM: ${body.utm || ''}`,
          `Received: ${payload.receivedAt}`,
        ].join('\n'),
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('Resend email failed', res.status, detail);
      return new Response(JSON.stringify({ error: 'Could not send enquiry' }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Resend request failed', error);
    return new Response(JSON.stringify({ error: 'Could not send enquiry' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
