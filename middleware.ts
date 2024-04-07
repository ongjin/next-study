import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse } from 'next/server';
import { jwtVerify } from "jose";

export default NextAuth(authConfig).auth;

// export async function middleware(request: { cookies: { get: (arg0: string) => any; }; url: string | URL | undefined; }) {
//     console.log('request', request);
//     // const jwt = request.cookies.get("myTokenName");


//     // if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

//     // this condition avoid to show the login page if the user is logged in
//     // if (jwt) {
//     //   if (request.nextUrl.pathname.includes("/login")) {
//     //     try {
//     //       await jwtVerify(jwt, new TextEncoder().encode("secret"));
//     //       return NextResponse.redirect(new URL("/dashboard", request.url));
//     //     } catch (error) {
//     //       return NextResponse.next();
//     //     }
//     //   }
//     // }

//     return NextResponse.next();
//     try {
//         // const { payload } = await jwtVerify(
//             //     jwt.value,
//             //     new TextEncoder().encode("secret")
//             // );
//             return NextResponse.next();
//     } catch (error) {
//         // return NextResponse.redirect(new URL("/login", request.url));
//     }
// }

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};