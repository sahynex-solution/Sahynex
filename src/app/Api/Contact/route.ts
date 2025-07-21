import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Contact from '@/models/Contact';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { name, email, phone, message } = body;

        if (!name || !email || !phone || !message) {
            return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
        }

        const newContact = await Contact.create({
            name,
            email,
            phone,
            message,
        });

        return NextResponse.json({ success: true, data: newContact }, { status: 201 });
    } catch (error) {
        console.error('Error in contact API:', error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return NextResponse.json({ success: false, error: 'Server Error', details: errorMessage }, { status: 500 });
    }
}