import styles from './newTweet.module.scss';
import { Card, Button, TextField, CardActions, CardContent } from '@material-ui/core';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useAddTweet } from './useAddTweet';
import { ChangeEvent } from 'react';
import { useLoggedInProfileId } from '../profiles/profile.hooks';

export function NewTweet() {
  const [ tweetText, setTweetText] = useState('');
  const { addTweet, loading, newTweet } = useAddTweet();
  const { profileId} = useLoggedInProfileId();

  function createAddTweet() {
    addTweet({content: tweetText, profileId, parentId: ""});
    setTweetText('');
  }

  const handleTweetChange = (event:ChangeEvent<HTMLInputElement>) => {
    setTweetText(event.target.value);
  }

  return (
    <Card variant="outlined" className={styles.tweetLayout}>
      <>
      <div className={styles.tweetCard}>
        <CardContent>
        <TextField
            id="filled-multiline-flexible"
            label="What's on your mind?"
            value={tweetText}
            onChange={handleTweetChange}
            multiline
            maxRows={4}
            variant="filled"
            fullWidth 
          />
        </CardContent>
      </div>
      <CardActions>
      <Button className={styles.commentButton} size="small" onClick={createAddTweet}>Tweet</Button>
    </CardActions>
    </>
    </Card>
  );
}

export default NewTweet;