import { NextRequest } from 'next/server';
export async function POST(req: NextRequest) {
    try {
        const api_key = 'private_8ca3e2bb01e9c5c917fa47c017982219';
        const { email } = await req.json();
        const res = await fetch(`https://api.neverbounce.com/v4/single/check?key=${process.env.API_KEY}&email=${email}`, {
            method: 'POST'
        });
        const data = await res.json();
        console.log(data);
        return Response.json(data);
    }
    catch (err) {
        return Response.json({
            error: err
        });
    }
}