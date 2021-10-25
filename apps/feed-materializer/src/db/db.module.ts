import { Module } from '@nestjs/common';
import mongoose from 'mongoose';
import { resolve } from 'path';

@Module({})
export class DbModule {

    async onModuleInit() {
        try {
            const result = await mongoose.connect(process.env.DB_PATH);
            console.log('connected to DB');
        } catch(e) {
            console.error(e);
        }
    }
    
}