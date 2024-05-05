import { NextResponse, NextRequest } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export function middleware(request: NextRequest) {
	const response = NextResponse.next();
    const oneDay = 24 * 60 * 60 * 1000;
    if(!request.cookies.get('user_id')) {
        response.cookies.set("user_id", uuidv4(), { maxAge: oneDay });
    }
    return response;
}