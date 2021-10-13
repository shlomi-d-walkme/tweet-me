import { Test, TestingModule } from '@nestjs/testing';
import { TweetsRepo } from '../repo/tweets.repo';
import { Tweets } from './tweets.controller';

describe('Tweets Controller', () => {
  let controller: Tweets;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Tweets],
      providers: [TweetsRepo]
    }).compile();

    controller = module.get<Tweets>(Tweets);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all empty tweets', () => {
    const tweets = controller.getTweets("1");
    expect(tweets.length).toEqual(0);
  });

  it('should be add tweet', () => {
    const tweet = controller.addTweet("1","My Tweet");
    expect(tweet.content).toEqual("My Tweet");
  });

  it('should be add and query tweet', () => {
    const content = "My Tweet";
    controller.addTweet("1", content);
    const tweets = controller.getTweets("1");
    expect(tweets[0].content).toEqual(content);
  });

  it('should be add and query many tweets', () => {
    controller.addTweet("1","My Tweet");
    controller.addTweet("1","@2@");
    controller.addTweet("1","###");
    const tweets = controller.getTweets("1");
    expect(tweets.length).toEqual(3);
    expect(tweets[2].content).toEqual("###");
  });

  it('should be add and query tweet from multiple users', () => {
    controller.addTweet("1","X");
    controller.addTweet("2","R");
    controller.addTweet("1","G");
    const tweets1 = controller.getTweets("1");
    const tweets2 = controller.getTweets("2");
    expect(tweets1.length).toEqual(2);
    expect(tweets2.length).toEqual(1);
  });

  it('should be remove tweets', () => {
    const t1 = controller.addTweet("1","X1");
    const t2 = controller.addTweet("1","Y2");
    const t3 = controller.addTweet("1","Z3");

    controller.deleteTweet("1", t2.id);
    let tweets = controller.getTweets("1");

    expect(tweets.length).toEqual(2);
    expect(tweets[1].content).toEqual("Z3");

    controller.deleteTweet("1", t1.id);
    controller.deleteTweet("1", t3.id);
    tweets = controller.getTweets("1");
    expect(tweets.length).toEqual(0);
  });

  it('should be update tweet', () => {
    const tweet = controller.addTweet("1","X1");
    controller.updateTweet("1", tweet.id, "YYY");
    const tweets = controller.getTweets("1");

    expect(tweets.length).toEqual(1);
    expect(tweets[0].content).toEqual("YYY");
  });
  
  it('should be add update remove', () => {
    const t1 = controller.addTweet("1","X1");
    const t2 = controller.addTweet("1","Y2");
    controller.updateTweet("1", t2.id, "YYY");
    controller.deleteTweet("1", t1.id);
    const tweets = controller.getTweets("1");

    expect(tweets.length).toEqual(1);
    expect(tweets[0].content).toEqual("YYY");
  });


  it('should be multi user balagn', () => {
    const t1 = controller.addTweet("1","X1");
    const t2 = controller.addTweet("2","Y2");
    const t3 = controller.addTweet("3","Z2");
    const t4 = controller.addTweet("2","ZZZZ");
    const t5 = controller.addTweet("1","KKKK");
    const t6 = controller.addTweet("1","Amir");
    
    let u1 = controller.getTweets("1");
    let u2 = controller.getTweets("2");
    let u3 = controller.getTweets("3");
    expect(u1.length).toEqual(3);
    expect(u2.length).toEqual(2);
    expect(u3.length).toEqual(1);

    controller.deleteTweet("1", t1.id);
    controller.updateTweet("2", t2.id, "My New Content");
    u1 = controller.getTweets("1");
    u2 = controller.getTweets("2");
    u3 = controller.getTweets("3");
    expect(u1.length).toEqual(2);
    expect(u2.length).toEqual(2);
    expect(u3.length).toEqual(1);

    expect(u2[0].content).toEqual("My New Content");
  });

});
