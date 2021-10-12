import { render } from '@testing-library/react';

import Feed from './feed.component';

describe('Feed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Feed />);
    expect(baseElement).toBeTruthy();
  });
});
