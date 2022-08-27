import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ADD_VIDEO_TEXT, MAIN_HEADING_TEXT } from '../../common/constants';
import { AppBar, Button, Grid, Toolbar, Typography } from '../../common/mui';

const VideoAppBar = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">{MAIN_HEADING_TEXT}</Typography>
          <Button onClick={() => navigate('/add-video')} type="button" variant="contained" color="success">
            {ADD_VIDEO_TEXT}
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default VideoAppBar;
