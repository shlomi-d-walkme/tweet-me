import { gql, useMutation } from "@apollo/client";

export interface RegisterVars {
    input: {
        email: string,
        name: String,
        password: String,
        userName: String
    }
}
  
export interface CreateRegister {
    _id: string
    creationDate: Date
    email: string
    name: string
    password: string
    userName: string
} 

export function useRegister() {
    const [registerUser, {data, loading, error}] = useMutation<CreateRegister, RegisterVars>(
      gql`
      mutation Mutation($input:ProfileInput!) {
        register(input:$input) {
          _id
        }
      }`);
  
    const register = (email: string, password: string, userName: string, name: string) => {
      registerUser({ 
          variables: {
            input: {
                email,
                password,
                userName,
                name
            }
        }});
    }
  
    return {
      register, data, loading, error
    }
  }