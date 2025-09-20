// Cloudflare Pages Function for SPA routing
export async function onRequest({ request, next }) {
  const response = await next();
  
  // If it's a 404 and not requesting an asset, serve the index.html
  if (response.status === 404 && !request.url.includes('.')) {
    return new Response(await (await fetch(new URL('/index.html', request.url))).text(), {
      headers: { 'Content-Type': 'text/html' }
    });
  }
  
  return response;
}