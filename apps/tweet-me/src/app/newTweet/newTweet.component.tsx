import styles from './newTweet.module.scss';
import { Card, Button, TextField, CardActions, CardContent } from '@material-ui/core';
import { useState } from 'react';


/* eslint-disable-next-line */
//export interface TweetProps { }

export function NewTweet() {
  const [twettText, setTwettText] = useState('dozi');
  return (
    <Card variant="outlined" className={styles.tweetLayout}>
      <>
      <div className={styles.tweetCard}>
        <CardContent>
        <TextField
            id="filled-multiline-flexible"
            label="What's on your mind?"
            multiline
            maxRows={4}
            //value={twettText}
            variant="filled"
            fullWidth 
          />
        </CardContent>
      </div>
      <CardActions>
      <Button className={styles.commentButton} size="small">Tweet</Button>
      
    </CardActions>
    </>
    </Card>
  );
}

export default NewTweet;
