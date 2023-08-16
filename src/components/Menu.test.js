import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './Menu';

test('renders correctly', () => {
  const { container } = render(
    <Router>
      <Menu />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});
