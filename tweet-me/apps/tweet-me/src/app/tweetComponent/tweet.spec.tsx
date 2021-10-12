import { render } from '@testing-library/react';

import TweetComponent from './tweet.component';

describe('TweetComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TweetComponent />);
    expect(baseElement).toBeTruthy();
  });
});
