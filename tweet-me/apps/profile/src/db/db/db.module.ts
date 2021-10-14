import { Module } from '@nestjs/common';
import mongoose from 'mongoose';

@Module({})
export class DbModule {
    constructor() {
        this.connect();
    }

    async connect() {
        await mongoose.connect(process.env.DB_PATH);
        console.log('connected to DB');
    }
}
