import { create } from 'react-test-renderer';
import Display from './Display';

test('renders correctly', () => {
  const value = 'some value';
  const componet = create(<Display value={value} />);
  expect(componet).toMatchSnapshot();
});
