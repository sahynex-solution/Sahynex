import { NextResponse } from 'next/server';
import dbConnect from '@/utils/db';
import Subscription from '@/models/Subscription';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const { email } = body;
        if (!email) {
            return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
        }
        const newSubscription = await Subscription.create({ email });
        return NextResponse.json({ success: true, data: newSubscription }, { status: 201 });
    } catch (error: any) {
        // Handle duplicate key error (E11000)
        if (error.code === 11000) {
            return NextResponse.json({ success: false, error: 'This email is already subscribed.' }, { status: 400 });
        }
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        return NextResponse.json({ success: false, error: 'Server Error', details: errorMessage }, { status: 500 });
    }
} 