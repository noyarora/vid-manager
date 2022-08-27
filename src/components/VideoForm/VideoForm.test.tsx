import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import VideoForm from '.';

const data = {
  authors: ['Bob', 'John'],
  categories: [
    { id: 1, name: 'Crime' },
    { id: 2, name: 'Horror' },
  ],
};

const selectedVideo = {
  id: 2,
  name: 'Germany',
  author: 'John',
  releaseDate: '21-08-2022',
  format: 'two 720p',
  categories: ['Thriller, Crime'],
};

describe('VideoForm', () => {
  it('change values on user input', async () => {
    render(<VideoForm {...data} onCancel={() => {}} onSubmit={() => {}} />);
    const name = screen.getByRole('textbox');
    userEvent.type(name, 'Dunkirk');
    expect(name).toHaveValue('Dunkirk');
  });

  it('should have disabled submit button when form is invalid', () => {
    render(<VideoForm {...data} onCancel={() => {}} onSubmit={() => {}} />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDisabled();
  });

  it('should have enabled submit button when form is in edit mode', () => {
    render(<VideoForm {...data} onCancel={() => {}} onSubmit={() => {}} selectedVideo={selectedVideo} isEdit />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeEnabled();
  });
});
