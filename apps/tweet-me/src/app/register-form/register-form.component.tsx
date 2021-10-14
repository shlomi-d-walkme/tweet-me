import { Field, Form, Formik, useFormik } from 'formik';
import { DefaultApi, ProfileResponse } from '@tweet-me/sdk/profile-sdk';
import './register-form.module.scss';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface RegisterFormProps {}

const initailForm = {
  email: '',
  name:'',
  userName: '',
  password: '',
  confirmPassword: '',
}

const api = new DefaultApi();

export function RegisterForm(props: RegisterFormProps) {

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

  if(user) return <div>Hello {user.name}</div>
  
  return (
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
  );
}

export default RegisterForm;