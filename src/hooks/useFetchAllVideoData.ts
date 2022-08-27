import { useEffect } from 'react';
import { AllVideoData, VideoStore } from '../common/interfaces';
import { fetchVideos } from '../VideosSlice';
import { useAppDispatch, useAppSelector } from './store-hooks';

export const useFetchAllVideoData = (): AllVideoData => {
  const { videoList, authors, categories, isLoaded } = useAppSelector<VideoStore>((state) => state.videos);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!isLoaded) {
      dispatch(fetchVideos());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { videos: videoList, authors, categories };
};
