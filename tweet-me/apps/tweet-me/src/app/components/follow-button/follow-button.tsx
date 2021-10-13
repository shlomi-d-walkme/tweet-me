import css from './follow-button.module.scss';

/* eslint-disable-next-line */
export interface FollowButtonProps {}

export function FollowButton(props: FollowButtonProps) {
  return (
    <div>
      <button className={css.followButton}>Follow</button>
    </div>
  );
}

export default FollowButton;
