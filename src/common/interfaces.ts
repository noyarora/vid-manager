export interface Category {
  id: number;
  name: string;
}

export interface Video {
  id: number;
  catIds: number[];
  name: string;
  formats: Formats;
  releaseDate: string;
}

export interface Author {
  id: number;
  name: string;
  videos: Video[];
}

export interface ProcessedVideo {
  id: number;
  name: string;
  author: string;
  categories: string[];
  format: string;
  releaseDate: string;
}

export interface VideoFormProps {
  authors: string[];
  categories: Category[];
  onSubmit: (videoData: ProcessedVideo) => void;
  selectedVideo?: ProcessedVideo;
  isEdit?: boolean;
  onCancel: () => void;
}

export interface DialogProps {
  isOpen: boolean;
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export type Format = {
  res: string;
  size: number;
};

export type Formats = {
  [key: string]: Format;
};

export interface VideoStore {
  videoList: ProcessedVideo[];
  categories: Category[];
  authors: string[];
  isLoaded: boolean;
}

export interface AllVideoData {
  videos: ProcessedVideo[];
  authors: string[];
  categories: Category[];
}
