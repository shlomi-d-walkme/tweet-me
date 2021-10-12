import './feed.module.scss';
import { Tweet } from '../tweetComponent/tweet.component'

/* eslint-disable-next-line */
export interface FeedProps {}

export function FeedComponent(props: FeedProps) {
  return (
    <div>
      <h1>Welcome to Feed!</h1>
      <Tweet></Tweet>
    </div>
  );
}

export default FeedComponent;
