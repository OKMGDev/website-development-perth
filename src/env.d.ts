/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GA4_ID?: string;
  readonly RESEND_API_KEY?: string;
  readonly ENQUIRY_TO_EMAIL?: string;
  readonly ENQUIRY_FROM_EMAIL?: string;
  readonly CRM_WEBHOOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  dataLayer: unknown[];
  gtag?: (...args: unknown[]) => void;
}
