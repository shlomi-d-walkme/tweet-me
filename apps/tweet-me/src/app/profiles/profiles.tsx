




  import { useQuery } from '@apollo/client';
import './profiles.module.scss';
  

/* eslint-disable-next-line */
export interface ProfilesProps {
}



export function Profiles(props: ProfilesProps) {
  // const { data, loading, error } = useQuery<ProfileQuery, ProfileQueryVars>(
  //   gql`
  //     query Query($id: String!) {
  //       profile(id: $id) {
  //         email 
  //         name
  //       }
  //     }
  //   `, {
  //     variables: { id: "6177b3f2df843d8e3994e3ef"}
    
  // });
  const data = [
    {userName: 'me'},
    {userName: 'omty'},
    {userName: 'roy'}
  ]
  return (
    <div>
      <h1>Recomanded profiles!</h1>
      {data.map((objectMapped) =>
        <li key={`${objectMapped.userName}`}>
            {objectMapped.userName}
            <button type="button">Follow!</button>
        </li>
        )}
        <br/>
  
    </div>
  );
};


export default Profiles;
