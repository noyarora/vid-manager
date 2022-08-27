import { render, screen } from '@testing-library/react';
import SubHeader from '.';

describe('SubHeader', () => {
  it('renders with given title', async () => {
    render(<SubHeader title="Title Text" />);
    expect(screen.getByText('Title Text')).toBeInTheDocument();
  });
});
