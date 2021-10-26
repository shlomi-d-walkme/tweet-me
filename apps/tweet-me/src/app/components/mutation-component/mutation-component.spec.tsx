import { render } from '@testing-library/react';

import MutationComponent from './mutation-component';

describe('MutationComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< MutationComponent />);
    expect(baseElement).toBeTruthy();
  });
});
