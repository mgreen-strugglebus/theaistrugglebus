import { createClient, ContentfulClientApi } from 'contentful';

function getClient(preview = false): ContentfulClientApi<undefined> {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = preview
    ? process.env.CONTENTFUL_PREVIEW_TOKEN
    : process.env.CONTENTFUL_ACCESS_TOKEN;

  if (!spaceId || !accessToken) {
    throw new Error('Contentful credentials are not configured');
  }

  return createClient({
    space: spaceId,
    accessToken,
    host: preview ? 'preview.contentful.com' : undefined,
  });
}

export async function getCaseStudies(preview = false) {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'caseStudy',
    order: ['-sys.createdAt'],
  });
  return entries.items;
}

export async function getCaseStudyBySlug(slug: string, preview = false) {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'caseStudy',
    'fields.slug': slug,
    limit: 1,
  });
  return entries.items[0] ?? null;
}

export async function getResources(preview = false) {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'resource',
    order: ['-sys.createdAt'],
  });
  return entries.items;
}

export async function getFAQs(preview = false) {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'faq',
    order: ['fields.order'],
  });
  return entries.items;
}

export async function getPageContent(slug: string, preview = false) {
  const client = getClient(preview);
  const entries = await client.getEntries({
    content_type: 'page',
    'fields.slug': slug,
    limit: 1,
  });
  return entries.items[0] ?? null;
}
