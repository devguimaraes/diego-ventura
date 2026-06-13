export const config = {
  matcher: '/:path*',
};

export default function middleware(request: Request): Response | Promise<Response> {
  const host = request.headers.get('host');
  const url = new URL(request.url);

  if (host === 'diego-ventura.vercel.app' || host === 'clinicaventura.com.br') {
    url.hostname = 'www.clinicaventura.com.br';
    url.protocol = 'https:';
    return Response.redirect(url, 301);
  }

  return fetch(request);
}
