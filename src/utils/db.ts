import mongoose from 'mongoose';

const connection: { isConnected?: number } = {};

async function connect(): Promise<void> {
    if (connection.isConnected) {
        console.log('Already connected');
        return;
    }

    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            console.log('Use existing connection');
            return;
        }
        await mongoose.disconnect();
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI as string); // Use environment variable
        console.log('New connection');
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1); // Exit the process on connection failure in production
    }
}

export default connect;
