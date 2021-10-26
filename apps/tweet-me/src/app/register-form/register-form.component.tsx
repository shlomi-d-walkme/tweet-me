import { Field, Form, Formik, useFormik } from 'formik';
import { DefaultApi, ProfileResponse, Configuration } from '@tweet-me/sdk/profile-sdk';
import './register-form.module.scss';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { apolloClient } from './../../apollo-client';

interface ProfileQuery {
  profile: {
    email:string;
    name:string;
  }
}

interface ProfileQueryVars {
  id: string;
}


/* eslint-disable-next-line */
export interface RegisterFormProps {}

const initailForm = {
  email: '',
  name:'',
  userName: '',
  password: '',
  confirmPassword: '',
}

const api = new DefaultApi(new Configuration({basePath: "http://localhost:4200"}));

export function RegisterForm(props: RegisterFormProps) {
  const { data, loading, error } = useQuery<ProfileQuery, ProfileQueryVars>(
    gql`
      query Query($id: String!) {
        profile(id: $id) {
          email 
          name
        }
      }
    `, {
      variables: { id: "6177b3f2df843d8e3994e3ef"}
    
  });
  console.log(data);

  const [user, setUser] = useState<ProfileResponse | null>(null);

  const submit = async (values: typeof initailForm) => {
    const {data} = await api.register(values);
    setUser(data);
  }

  const {handleSubmit, getFieldProps} = useFormik({
    initialValues: initailForm,
    onSubmit: submit,
    validate: (values) => {
      const errors:any = {}
      if(values.password !== values.confirmPassword) errors.confirmPassword = "Passwords do not match!";
      return errors;
    }
  });

  
  return (<div>
    <div> Hello { data && data.profile.name }</div>
    <div>
      form:
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                <form onSubmit={handleSubmit}>
                  <div className="form-group text-left">
                  <label>Email address
                  <input type="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        {...getFieldProps('email')}
                  />
                  </label>
                </div>
                <div className="form-group text-left">
                  <label>Name
                  <input type="text" 
                        className="form-control" 
                        {...getFieldProps('name')}
                        placeholder="Enter your first name"
                  />
                  </label>
                </div>
        
                <div className="form-group text-left">
                  <label>Username
                  <input type="text" 
                        className="form-control" 
                        placeholder="Enter your username"
                        {...getFieldProps('userName')}
                  />
                  </label>
                </div>            
                <div className="form-group text-left">
                    <label>Password
                    <input type="password" 
                        className="form-control" 
                        placeholder="Password"
                        {...getFieldProps('password')}
                    />
                    </label>
                </div>
                <div className="form-group text-left">
                    <label>Confirm Password
                    <input type="password" 
                        className="form-control" 
                        placeholder="Confirm Password"
                        {...getFieldProps('confirmPassword')}
                    />
                    </label>
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary">
                    Register
                </button>
                </form>
        </div>
    </div>
    </div>
  );
}

export default RegisterForm;
