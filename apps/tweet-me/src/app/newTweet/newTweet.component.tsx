import styles from './newTweet.module.scss';
import { Card, Button, TextField, CardActions, CardContent } from '@material-ui/core';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useAddTweet } from './useAddTweet';
import { ChangeEvent } from 'react';
import { useLoggedInProfileId } from '../profiles/profile.hooks';
//@ts-expect-error
import ParticleEffectButton from 'react-particle-effect-button'

export function NewTweet() {
  const [ tweetText, setTweetText] = useState('');
  const { addTweet, loading, newTweet } = useAddTweet();
  const { profileId} = useLoggedInProfileId();
  const [showButton, setShowButton] = useState(true);

  function createAddTweet() {
    setShowButton(false);
    addTweet({content: tweetText, profileId, parentId: ""});
    setTweetText('');

    setTimeout(() => setShowButton(true), 5000);
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
      <ParticleEffectButton
        color='#121019'
        hidden={!showButton}
      >
        <Button className={styles.commentButton} size="small" onClick={createAddTweet}>Tweet</Button>
      </ParticleEffectButton>
      
    </CardActions>
    </>
    </Card>
  );
}

export default NewTweet;