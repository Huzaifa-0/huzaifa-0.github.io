import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/projects/*.webp', { eager: true });

// projects.json stores "/images/<file>" (local) or an absolute URL (remote).
// Cast: remote strings work at runtime, but the union breaks <Image>'s overloads.
export const projectImage = (imageUrl: string) =>
  (imageUrl.startsWith('http') ? imageUrl : images[`../assets/projects/${imageUrl.split('/').pop()}`].default) as ImageMetadata;
