import { render } from '@testing-library/react';

import AmirComponent from './amir-component';

describe('AmirComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< AmirComponent />);
    expect(baseElement).toBeTruthy();
  });
});
