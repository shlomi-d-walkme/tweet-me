import {
  gql,
  useLazyQuery
} from "@apollo/client";

const QUERY = gql`query Query($email: String!){
  profileByEmail(email: $email) {
    name
    _id
    userName
  }
}`;


interface LoginQuery {
  profile: {
    email:string;
    name:string;
  }
}

export function useLogin(){
  const [doLoginGql, { loading, data }] = useLazyQuery<LoginQuery>(QUERY);

const doLogin = (email:string) => {
  doLoginGql({
    variables: {email}
  })
}

  return {doLogin, loading, data}
}