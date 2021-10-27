import styles from './sign-up-button.module.scss';

export function SignUpButton() {

  function onSignUpClicked() {
    alert("Hi!");
  }

  return (
    <div>
      <button onClick={onSignUpClicked} className={styles.signUpButton}>Sign Up</button>
    </div>
  );
}