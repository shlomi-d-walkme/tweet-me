import styles from './tweet.module.scss';
import { Card, Button, Typography, CardActions, CardContent } from '@material-ui/core';
import { FollowButton } from '../components/follow-button/follow-button';
import ReactTimeAgo from 'react-time-ago'

/* eslint-disable-next-line */
export interface TweetProps { profileName: string, text: string, comments: any[], time: Date }

export function Tweet({profileName, text, comments, time}: TweetProps) {
  return (
    <Card variant="outlined" className={styles.tweetLayout}>

      <div className={styles.tweetCard}>
        <CardContent>
          <div>
            <span className={styles.profileName}>{profileName}</span>-<ReactTimeAgo className={styles.time} date={time}/>
          </div>
          <Typography className={styles.text}>{text}</Typography>
        </CardContent>

        <div className={styles.followButtonWrapper}>
          <FollowButton isFollowing={true}/>
        </div>
      </div>

      <CardActions>
        <Button className={styles.commentButton} size="small">{comments.length}</Button>
      </CardActions>
      
    </Card>
  );
}

export default Tweet;
