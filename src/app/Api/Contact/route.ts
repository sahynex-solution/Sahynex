import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/db';
import Contact from '@/models/Contact';

export async function POST(req: NextRequest) {
    try {
        await connect();
        const body = await req.json();
        const { name, email, phone, message } = body;
        const newContact = new Contact({ name, email, phone, message });
        await newContact.save();
        return NextResponse.json({ message: 'Contact form submitted successfully!' }, { status: 200 });
    } catch (error: any) {
        console.error('Error submitting contact form:', error);
        return NextResponse.json({ error: error.message || 'Failed to submit contact form' }, { status: 500 });
    }
}
