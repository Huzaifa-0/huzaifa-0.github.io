import { getCollection } from 'astro:content';
import order from '../content/case-studies/caseStudies.json';

// The file() loader doesn't preserve JSON array order — sort by position in the file.
const ids = order.map((s) => s.id);

export async function getCaseStudies() {
  return (await getCollection('caseStudies')).sort((a, b) => ids.indexOf(a.id) - ids.indexOf(b.id));
}
