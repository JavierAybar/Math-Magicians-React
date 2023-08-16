import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ChildContent from './PanelButtons';

describe('ChildContent componen test', () => {
  test('renders without crashing', () => {
    const mockClickHandler = jest.fn();
    const { getByText } = render(<ChildContent clickHandler={mockClickHandler} />);
    expect(getByText('7')).toBeInTheDocument();
    expect(getByText('AC')).toBeInTheDocument();
  });

  test('calls clickHandler when a button is clicked', () => {
    const mockClickHandler = jest.fn();
    const { getByText } = render(<ChildContent clickHandler={mockClickHandler} />);
    fireEvent.click(getByText('1'));
    expect(mockClickHandler).toHaveBeenCalledWith('1');
  });

  test('matches snapshot', () => {
    const mockClickHandler = jest.fn();
    const { container } = render(<ChildContent clickHandler={mockClickHandler} />);
    expect(container).toMatchSnapshot();
  });
});
