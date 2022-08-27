import { Format, Formats, ProcessedVideo } from '../common/interfaces';

const getResolution = (res: string): number => parseInt(res.match(/[0-9]+/g)?.join('') || '');

export const getHighestQualityFormat = (formats: Formats): string => {
  let highestQuality = {} as Format;
  let qualityName = '';
  let highestSize = 0;
  let highestRes = 0;

  for (let format in formats) {
    const resolution = getResolution(formats[format].res);
    if (formats[format].size === highestSize && resolution > highestRes) {
      highestRes = resolution;
      highestQuality = formats[format];
      qualityName = format;
    }
    if (formats[format].size > highestSize) {
      highestSize = formats[format].size;
      highestRes = resolution;
      highestQuality = formats[format];
      qualityName = format;
    }
  }

  return `${qualityName} ${highestQuality.res}`;
};

export const isVideoFormSubmitDisabled = (formValues: ProcessedVideo): boolean => {
  return !(formValues.name && formValues.author && !!formValues.categories.length);
};

export const generateVideoId = (videos: ProcessedVideo[]) => {
  const count = 20 //to add upto 20 videos
  for(let i=1; i <= count; i++) {
    const video = videos.find(vid => vid.id === i)
    if(!video) return i
  }
}
