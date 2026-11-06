import mongoose from 'mongoose';

const manzil = process.env.MONGO_URL;

console.log("Kuting... kampyuter xotira daftar bilan bog'lanmoqda ");

try {
    await mongoose.connect(manzil);
    console.log("Yurray! Kampyuter bazaga ulandi.");
} catch (xato) {
    console.log("Ulanishda xatolik yuz berdi:", xato.message);
}