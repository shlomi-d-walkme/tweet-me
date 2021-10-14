import { Injectable } from '@nestjs/common';
import { FeedDto } from './feed-dto';


@Injectable()
export class FeedService {

    public findAll(): FeedDto {
        return {id: '1', tweets: [
            {content:'Dozi is the best!', authorId:'1', authorName: 'Dozi', date: new Date()},
            {content:'Dozi is de best!', authorId:'1', authorName: 'Shauli', date: new Date()},
            {content:'Dozi is best!', authorId:'1', authorName: 'Adi', date: new Date()},
            {content:'Dozi best!', authorId:'1', authorName: 'Chen', date: new Date()}]};
    }
}
