import styles from './tweet.module.scss';
import { Card, Button, Typography, CardActions, CardContent } from '@material-ui/core';
import FollowButton from '../components/follow-button/follow-button';


/* eslint-disable-next-line */
export interface TweetProps { profileName: string, text: string, comments: any[], time: string }

export function Tweet({profileName, text, comments, time}: TweetProps) {
  return (
    <Card variant="outlined" className={styles.tweetLayout}>
      <>
      <div className={styles.tweetCard}>
      <CardContent>
      
      <div><span className={styles.profileName}>{profileName}</span>-<span className={styles.time}>{time}</span></div>
      <Typography className={styles.text}>{text}</Typography>
      </CardContent>
      <FollowButton isFollowing={true}/>
      </div>
      <CardActions>
      <Button className={styles.commentButton} size="small">{comments.length}</Button>
      
    </CardActions>
    </>
    </Card>
  );
}

export default Tweet;
