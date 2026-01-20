import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Extract preview path if it exists (e.g., /preview/696e623807d368a01544a4f0-test-next-...)
  const previewMatch = pathname.match(/^(\/preview\/[^/]+)/);
  
  if (previewMatch) {
    const basePath = previewMatch[1];
    const remainingPath = pathname.slice(basePath.length) || '/';
    
    // Rewrite the URL to remove the preview prefix for Next.js routing
    const url = request.nextUrl.clone();
    url.pathname = remainingPath;
    
    // Store the basePath for client-side usage
    const response = NextResponse.rewrite(url);
    response.headers.set('x-preview-base', basePath);
    
    return response;
  }
}

export const config = {
  matcher: ['/preview/:path*'],
};