import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { EDIT_VIDEO_PAGE_TITLE_TEXT } from '../../common/constants';
import { ProcessedVideo } from '../../common/interfaces';
import SubHeader from '../../components/SubHeader';
import VideoForm from '../../components/VideoForm';
import { useAppDispatch } from '../../hooks/store-hooks';
import { useFetchAllVideoData } from '../../hooks/useFetchAllVideoData';
import { update } from '../../VideosSlice';

const EditVideo = () => {
  const { videos, authors, categories } = useFetchAllVideoData();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [selectedVideo, setSelectedVideo] = useState<ProcessedVideo>();

  const { videoId } = useParams();
  useEffect(() => {
    const selectedVideo = videos.find((video) => video.id === Number(videoId)) as ProcessedVideo;
    setSelectedVideo(selectedVideo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos]);

  const handleOnVideoEdit = (videoData: ProcessedVideo) => {
    navigate('/videos');
    dispatch(update({ videoData, videoId }));
  };

  const handleOnCancel = () => navigate('/videos');

  return (
    <>
      <SubHeader title={`${EDIT_VIDEO_PAGE_TITLE_TEXT} ${selectedVideo?.name}`} />
      <VideoForm
        isEdit
        authors={authors}
        categories={categories}
        onSubmit={handleOnVideoEdit}
        selectedVideo={selectedVideo}
        onCancel={handleOnCancel}
      />
    </>
  );
};

export default EditVideo;
