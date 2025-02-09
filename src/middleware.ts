import { NextURL } from 'next/dist/server/web/next-url';
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const {pathname, origin} = request.nextUrl;
        
    if((pathname === "/dashboard" || pathname === "/cart") && !request.cookies.get("token")?.value) {
        const loginUrl = new NextURL("/login", origin)
        return NextResponse.redirect(loginUrl)
    } else {
        return NextResponse.next();
    }
}
