import { ProcessedVideo } from '../common/interfaces';
import { isVideoFormSubmitDisabled } from './utils';

describe('isVideoFormSubmitDisabled', () => {
  it('return true if form values object is empty', async () => {
    let formValue = {} as ProcessedVideo;
    expect(isVideoFormSubmitDisabled(formValue)).toEqual(true);
  });

  it('return true if form values object is not valid', async () => {
    let formValue = {
      name: '',
      author: 'Bob',
      categories: ['Horror', 'Comedy'],
    } as ProcessedVideo;
    expect(isVideoFormSubmitDisabled(formValue)).toEqual(true);
  });

  it('return false if form values object is valid', async () => {
    let formValue = {
      name: 'Dunkirk',
      author: 'Bob',
      categories: ['Horror', 'Comedy'],
    } as ProcessedVideo;
    expect(isVideoFormSubmitDisabled(formValue)).toEqual(false);
  });
});
