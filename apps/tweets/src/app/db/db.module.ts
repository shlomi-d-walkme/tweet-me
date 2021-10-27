import { Module } from '@nestjs/common';
import mongoose from 'mongoose';

@Module({})
export class DbModule {
    async onModuleInit() {
        try {
            await mongoose.connect(process.env.DB_PATH);
            console.log('connected to DB');
        } catch(e) {
            console.error("Can't connet to DB", e);
        }
    }
}