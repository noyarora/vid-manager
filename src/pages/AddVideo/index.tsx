import React from 'react';
import { ProcessedVideo } from '../../common/interfaces';
import VideoForm from '../../components/VideoForm';
import { useAppDispatch } from '../../hooks/store-hooks';
import { add } from '../../VideosSlice';
import { useNavigate } from 'react-router-dom';
import SubHeader from '../../components/SubHeader';
import { ADD_VIDEO_PAGE_TITLE_TEXT } from '../../common/constants';
import { useFetchAllVideoData } from '../../hooks/useFetchAllVideoData';
import { generateVideoId } from '../../helpers/utils';

const AddVideo = () => {
  const {videos, authors, categories } = useFetchAllVideoData();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOnVideoAdd = (videoData: ProcessedVideo) => {
    const updatedVideoData = {...videoData, id: generateVideoId(videos)}
    navigate('/videos');
    dispatch(add(updatedVideoData));
  };

  const handleOnCancel = () => navigate('/videos');

  return (
    <>
      <SubHeader title={ADD_VIDEO_PAGE_TITLE_TEXT} />
      <VideoForm authors={authors} categories={categories} onSubmit={handleOnVideoAdd} onCancel={handleOnCancel} />
    </>
  );
};

export default AddVideo;
