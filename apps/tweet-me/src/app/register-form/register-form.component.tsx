import { useFormik } from 'formik';
import styles from './register-form.module.scss';
import { useRegister } from './useRegister';

/* eslint-disable-next-line */
export interface RegisterFormProps {}

const initailForm = {
  email: '',
  name:'',
  userName: '',
  password: ''
}

export function RegisterForm(props: RegisterFormProps) {
  const { register, loading: registerLoading } = useRegister();

  const submit = async (values: typeof initailForm) => {
    register(values.email, values.password, values.userName, values.name);
    window.open("/login", "_self");
  }

  const {handleSubmit, getFieldProps} = useFormik({
    initialValues: initailForm,
    onSubmit: submit,
    validate: (values) => {
      const errors:any = {}
      return errors;
    }
  });

  
  return (<div>
    <div>
      form:
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          <form onSubmit={handleSubmit}>
            <div className={'form-group text-left ' + styles.formDiv }>
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
                />
                </label>
            </div>
            <button 
                type="submit" 
                className={styles.registerButton}>
                Register
            </button>
          </form>
        </div>
    </div>
    </div>
  );
}

export default RegisterForm;
