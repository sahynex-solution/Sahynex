import mongoose, { Schema, Model } from 'mongoose';

interface IContact {
    name: string;
    email: string;
    phone: string;
    message: string;
}

const ContactSchema: Schema<IContact> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
});

const Contact: Model<IContact> = mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
