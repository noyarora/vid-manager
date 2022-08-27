import { getCategories } from './categories';
import { getAuthors } from './authors';
import { ProcessedVideo } from '../common/interfaces';
import { getHighestQualityFormat } from '../helpers/utils';

export const getVideos = (): Promise<ProcessedVideo[]> => {
  return Promise.all([getCategories(), getAuthors()]).then(([categories, authors]) => {
    return authors.reduce((allVideos: ProcessedVideo[], author) => {
      author.videos.forEach((video) => {
        allVideos.push({
          id: video.id,
          name: video.name,
          author: author.name,
          categories: video.catIds.map((catId) => categories.find((category) => category.id === catId)?.name || ''),
          releaseDate: video.releaseDate,
          format: getHighestQualityFormat(video.formats),
        });
      });
      return allVideos;
    }, []);
  });
};
