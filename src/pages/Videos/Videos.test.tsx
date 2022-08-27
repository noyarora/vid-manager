import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Videos from '.';
import { ProcessedVideo } from '../../common/interfaces';
import { render } from '../../helpers/test-util';

const videos: ProcessedVideo[] = [
  {
    id: 1,
    name: 'Dunkirk',
    author: 'Bob',
    releaseDate: '20-08-2022',
    format: 'two 720p',
    categories: ['Horror, Crime'],
  },
  {
    id: 2,
    name: 'Germany',
    author: 'John',
    releaseDate: '21-08-2022',
    format: 'two 720p',
    categories: ['Thriller, Crime'],
  },
];
describe('Videos', () => {
  const preloadedState = {
    videos: {
      videoList: videos,
      categories: [],
      authors: [],
      isLoaded: false,
    },
  };

  const componentRenderer = () =>
    render(
      <Router>
        <Videos />
      </Router>,
      { preloadedState }
    );
  it('renders with given videos', () => {
    componentRenderer();
    expect(screen.getByText('Dunkirk')).toBeInTheDocument();
  });

  it('should show results when typing in search', () => {
    componentRenderer();
    const searchBox = screen.getByRole('searchbox');
    userEvent.type(searchBox, 'dun');
    expect(screen.getByText(/dunkirk/i)).toBeInTheDocument();
  });

  it("should show 'No results found' when typing non available video name in search", () => {
    componentRenderer();
    const searchBox = screen.getByRole('searchbox');
    userEvent.type(searchBox, 'set');
    expect(screen.getByText(/no videos found/i)).toBeInTheDocument();
  });
});
