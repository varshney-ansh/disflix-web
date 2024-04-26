export { default } from 'next-auth/middleware';

export const config = {
    matcher: ["/subscription/:path*", "/watch/:path*", "/settings/:path*", "/mystuff/:path*"]
}

