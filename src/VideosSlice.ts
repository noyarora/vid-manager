import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { VideoStore } from './common/interfaces';
import { getHighestQualityFormat } from './helpers/utils';
import { getAuthors } from './services/authors';
import { getCategories } from './services/categories';
import { getVideos } from './services/videos';

const initialState: VideoStore = {
  videoList: [],
  categories: [],
  authors: [],
  isLoaded: false,
};

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
  const values = await Promise.all([getVideos(), getAuthors(), getCategories()]);
  return { videos: values[0], authors: values[1], categories: values[2] };
});

const VideoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    add(state, action) {
      const formats = {
        one: { res: '1080p', size: 1000 },
      };
      const newVideo = {
        ...action.payload,
        id: new Date().getTime(),
        format: getHighestQualityFormat(formats),
        releaseDate: '2022-08-09',
      };
      state.videoList = [...state.videoList, newVideo];
    },
    update(state, action) {
      state.videoList = state.videoList.map((video) => {
        if (video.id === Number(action.payload.videoId)) {
          return { ...video, ...action.payload.videoData };
        }

        return video;
      });
    },
    del(state, action) {
      state.videoList = state.videoList.filter((video) => video.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.videoList = action.payload.videos;
      state.isLoaded = true;
      state.categories = action.payload.categories;
      state.authors = action.payload.authors.map((author) => author.name);
    });
  },
});

export const { add, update, del } = VideoSlice.actions;
export default VideoSlice.reducer;
