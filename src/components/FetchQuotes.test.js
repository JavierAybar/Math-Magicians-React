import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import FetchQuotes from './FetchQuotes';

describe('FetchQuotes component', () => {
  test('renders loading message', () => {
    const { container } = render(<FetchQuotes />);
    expect(container).toMatchSnapshot();
  });

  test('renders error message when fetch fails', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Network Error'));

    await (async () => {
      const { container } = render(<FetchQuotes />);
      await waitFor(() => expect(container).toMatchSnapshot());
    });
  });

  test('renders quotes after successful fetch', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => [{ quote: 'Quote 1', author: 'Author 1' }],
    });

    await (async () => {
      const { container } = render(<FetchQuotes />);
      await waitFor(() => expect(container).toMatchSnapshot());
    });
  });
});
