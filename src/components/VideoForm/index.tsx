import React, { useEffect, useState } from 'react';
import { Button, FormControl, FormLabel, Grid, MenuItem, OutlinedInput, Select, Stack, TextField } from '../../common/mui';
import { ProcessedVideo, VideoFormProps } from '../../common/interfaces';
import { isVideoFormSubmitDisabled } from '../../helpers/utils';
import { CANCEL_BUTTON_TEXT, SUBMIT_BUTTON_TEXT, VIDEO_AUTHOR_TEXT, VIDEO_CATEGORY_TEXT, VIDEO_NAME_TEXT } from '../../common/constants';
import { SelectChangeEvent } from '../../common/mui';

const defaultValues = {
  name: '',
  author: '',
  categories: [] as string[],
  id: 0,
  format: '',
  releaseDate: '',
};
const VideoForm: React.FC<VideoFormProps> = ({ authors, categories, onSubmit, selectedVideo, isEdit, onCancel }) => {
  const [formValues, setFormValues] = useState<ProcessedVideo>(defaultValues);

  useEffect(() => {
    if (isEdit) {
      setFormValues({
        ...formValues,
        ...selectedVideo,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, selectedVideo]);

  const handleInputChange = (event: SelectChangeEvent<string | string[]> | React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} id="video-form">
      <Grid>
        <Grid item>
          <FormControl sx={{ mb: 2, width: '100%' }}>
            <FormLabel>{VIDEO_NAME_TEXT}</FormLabel>
            <TextField id="name-input" name="name" type="text" value={formValues.name} onChange={handleInputChange} />
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl sx={{ mb: 2, width: '100%' }}>
            <FormLabel>{VIDEO_AUTHOR_TEXT}</FormLabel>
            <Select name="author" value={formValues.author} onChange={handleInputChange} data-testid="author-list">
              {authors.map((author) => (
                <MenuItem key={author} value={author}>
                  {author}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl sx={{ mb: 2, width: '100%' }}>
            <FormLabel>{VIDEO_CATEGORY_TEXT}</FormLabel>
            <Select
              multiple
              value={formValues.categories}
              onChange={handleInputChange}
              input={<OutlinedInput label="Video Category" />}
              name="categories">
              {categories.map(({ id, name }) => (
                <MenuItem key={id} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="primary" type="submit" disabled={isVideoFormSubmitDisabled(formValues)}>
            {SUBMIT_BUTTON_TEXT}
          </Button>
          <Button variant="outlined" color="primary" type="button" onClick={onCancel}>
            {CANCEL_BUTTON_TEXT}
          </Button>
        </Stack>
      </Grid>
    </form>
  );
};
export default VideoForm;
