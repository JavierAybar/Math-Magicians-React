import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Calculator from './Calculator';

describe('Calculator Component', () => {
  test('renders the Calculator component', () => {
    const { container } = render(<Calculator />);
    expect(container).toMatchSnapshot();
  });
});
