import { render } from '@testing-library/react';

import Tweet from './newTweet.component';

describe('Tweet', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tweet/>);
    expect(baseElement).toBeTruthy();
  });
});
