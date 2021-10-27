import { gql, useMutation } from "@apollo/client";

export function useAddTweet() {
    const [addTweetGql, {data, loading, error}] = useMutation<AddTweet, AddTweetVars>(addTweetMutation);

    function addTweet(tweetVars: AddTweetVars) {
        addTweetGql({ variables: tweetVars});
    }

    return { addTweet, loading, newTweet: data?.addTweet };
}

const addTweetMutation = gql`
    mutation Mutation($profileId: String!, $content: String!, $parentId: String!){
    addTweet(profileId:$profileId, content:$content, parentId:$parentId) {
      id,
      content
    }
  }`;

interface AddTweetVars {
    profileId: string,
    content: string,
    parentId: string
}

interface AddTweet {
    addTweet:{
    id: string,
    content: string
    }
} 