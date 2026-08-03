import type { CollectionEntry } from 'astro:content';

type Service = CollectionEntry<'services'>;
type Location = CollectionEntry<'locations'>;

export function serviceLocationPath(serviceId: string, locationId: string): string {
  return `/services/${serviceId}/${locationId}/`;
}

export function serviceLocationTitle(service: Service, location: Location): string {
  return `${service.data.title} in ${location.data.title}`;
}

export function serviceLocationDescription(service: Service, location: Location): string {
  return `${service.data.title} for businesses in ${location.data.title}, WA — ${service.data.excerpt}`;
}

export function serviceLocationFaqs(service: Service, location: Location) {
  const suburb = location.data.title;
  const serviceFaqs = service.data.faqs.slice(0, 4).map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  const locationFaqs = location.data.faqs.slice(0, 3).map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));

  const combo = [
    {
      question: `Do you offer ${service.data.title.toLowerCase()} in ${suburb}?`,
      answer: `Yes. We deliver ${service.data.title.toLowerCase()} for businesses in ${suburb} as part of our Perth-wide coverage. Meetings can be online or on-site by appointment — we do not claim a local office in ${suburb} unless one exists.`,
    },
    {
      question: `How does local context in ${suburb} affect the project?`,
      answer: location.data.localContext,
    },
    ...serviceFaqs,
    ...locationFaqs,
  ];

  // Dedupe by question
  const seen = new Set<string>();
  return combo.filter((faq) => {
    const key = faq.question.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
