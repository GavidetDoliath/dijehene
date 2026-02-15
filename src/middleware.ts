import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const response = next();

  return response.then(res => {
    // Remove noindex header if present and add proper robots directive
    res.headers.delete('x-robots-tag');
    res.headers.set('x-robots-tag', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    return res;
  });
});
