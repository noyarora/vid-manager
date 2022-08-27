import { render, screen } from '@testing-library/react';
import { VideosTable } from '.';
import { ProcessedVideo } from '../../common/interfaces';

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
describe('VideoTable', () => {
  it('renders with given videos', async () => {
    render(<VideosTable videos={videos} onEdit={() => {}} onDelete={() => {}} />);
    expect(screen.getByText('Dunkirk')).toBeInTheDocument();
  });

  it('renders with 2 rows for video and 1 row for table headings', async () => {
    render(<VideosTable videos={videos} onEdit={() => {}} onDelete={() => {}} />);
    expect(screen.getAllByRole('row')).toHaveLength(3);
  });
});
