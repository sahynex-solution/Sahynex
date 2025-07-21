import mongoose, { Schema, Model } from 'mongoose';

interface ISubscription {
    email: string;
}

const SubscriptionSchema: Schema<ISubscription> = new Schema({
    email: { type: String, required: true, unique: true },
}, {
    timestamps: true
});

const Subscription: Model<ISubscription> = mongoose.models.Subscription || mongoose.model<ISubscription>('Subscription', SubscriptionSchema);

export default Subscription; 