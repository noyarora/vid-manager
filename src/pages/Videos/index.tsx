import { TextField } from '../../common/mui';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProcessedVideo } from '../../common/interfaces';
import ConfirmationDialog from '../../components/Dialog';
import SubHeader from '../../components/SubHeader';
import { VideosTable } from '../../components/VideoTable';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { del, fetchVideos } from '../../VideosSlice';
import {
  DIALOG_DELETE_VIDEO_DESCRIPTION_TEXT,
  DIALOG_DELETE_VIDEO_TITLE_TEXT,
  SEARCH_FIELD_LABEL_TEXT,
  VIDEOS_PAGE_TITLE_TEXT,
} from '../../common/constants';
import { useFetchAllVideoData } from '../../hooks/useFetchAllVideoData';

const Videos = () => {
  const { videos } = useFetchAllVideoData();
  const [allVideos, setAllVideos] = useState<ProcessedVideo[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [deleteVideoId, setDeleteVideoId] = useState<number>();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    setAllVideos(videos);
  }, [videos]);

  const handleOnVideoEdit = (id: number) => navigate(`/edit-video/${id}`);
  const handleOnVideoDelete = (id: number) => {
    setIsDialogOpen(true);
    setDeleteVideoId(id);
  };

  const handleOnDeleteConfirn = () => {
    setIsDialogOpen(false);
    dispatch(del(deleteVideoId));
  };

  const handleOnDeleteCancel = () => setIsDialogOpen(false);
  const handleOnSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const filterVideos = videos.filter(
      (video) =>
        video.name.toLowerCase().includes(value.toLowerCase()) ||
        video.author.toLowerCase().includes(value.toLowerCase()) ||
        video.format.toLowerCase().includes(value.toLowerCase()) ||
        video.categories.join('').toLowerCase().includes(value.toLowerCase())
    );
    setAllVideos(filterVideos);
  };

  return (
    <div>
      <SubHeader title={VIDEOS_PAGE_TITLE_TEXT} />
      <TextField id="outlined-search" label={SEARCH_FIELD_LABEL_TEXT} type="search" onChange={handleOnSearch} />
      <VideosTable videos={allVideos} onEdit={handleOnVideoEdit} onDelete={handleOnVideoDelete} />
      <ConfirmationDialog
        isOpen={isDialogOpen}
        title={DIALOG_DELETE_VIDEO_TITLE_TEXT}
        content={DIALOG_DELETE_VIDEO_DESCRIPTION_TEXT}
        onConfirm={handleOnDeleteConfirn}
        onCancel={handleOnDeleteCancel}
      />
    </div>
  );
};

export default Videos;
