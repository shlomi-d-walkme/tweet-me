import { render } from '@testing-library/react';

import Profiles from './profiles';

describe('Profiles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< Profiles />);
    expect(baseElement).toBeTruthy();
  });
});
