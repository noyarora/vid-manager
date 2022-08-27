import React from 'react';
import { ProcessedVideo } from '../../common/interfaces';
import VideoForm from '../../components/VideoForm';
import { useAppDispatch } from '../../hooks/store-hooks';
import { add } from '../../VideosSlice';
import { useNavigate } from 'react-router-dom';
import SubHeader from '../../components/SubHeader';
import { ADD_VIDEO_PAGE_TITLE_TEXT } from '../../common/constants';
import { useFetchAllVideoData } from '../../hooks/useFetchAllVideoData';

const AddVideo = () => {
  const { authors, categories } = useFetchAllVideoData();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOnVideoAdd = (videoData: ProcessedVideo) => {
    navigate('/videos');
    dispatch(add(videoData));
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
