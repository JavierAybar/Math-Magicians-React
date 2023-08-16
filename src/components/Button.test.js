import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  test('renders correctly', () => {
    const clickHandlerMock = jest.fn();
    const { container } = render(<Button clickHandler={clickHandlerMock} name="Test" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with orange style', () => {
    const clickHandlerMock = jest.fn();
    const { container } = render(<Button clickHandler={clickHandlerMock} name="Test" orange />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders with grey style', () => {
    const clickHandlerMock = jest.fn();
    const { container } = render(<Button clickHandler={clickHandlerMock} name="Test" grey />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('renders as wide', () => {
    const clickHandlerMock = jest.fn();
    const { container } = render(<Button clickHandler={clickHandlerMock} name="Test" wide />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('calls click handler on button click', () => {
    const clickHandlerMock = jest.fn();
    const { getByText } = render(<Button clickHandler={clickHandlerMock} name="Test" />);

    fireEvent.click(getByText('Test'));
    expect(clickHandlerMock).toHaveBeenCalledWith('Test');
  });
});
