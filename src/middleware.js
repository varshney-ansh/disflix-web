export { default } from 'next-auth/middleware';

export const config = {
    matcher: ["/subscription/:path*", "/watch/:path*", "/settings/:path*", "/detail/:path*", "/series/:path*", "/mystuff/:path*"]
}

