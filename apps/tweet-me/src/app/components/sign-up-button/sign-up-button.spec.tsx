import { render } from '@testing-library/react';

import { SignUpButton } from './sign-up-button';

describe('SignUpButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignUpButton />);
    expect(baseElement).toBeTruthy();
  });
});
