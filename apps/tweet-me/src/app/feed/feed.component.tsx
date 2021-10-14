import './feed.module.scss';

/* eslint-disable-next-line */
export interface FeedProps { children: any}

export function Feed(props: FeedProps) {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default Feed;
