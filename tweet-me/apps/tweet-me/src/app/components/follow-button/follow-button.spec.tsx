import { render } from '@testing-library/react';

import FollowButton from './follow-button';

describe('FollowButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FollowButton />);
    expect(baseElement).toBeTruthy();
  });
});
