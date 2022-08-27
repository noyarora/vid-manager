import { Divider, Grid, Typography } from '../../common/mui';
import React from 'react';

const SubHeader: React.FC<{ title: string }> = ({ title }) => {
  if (!title) return null;
  return (
    <Grid sx={{ mb: 5 }}>
      <Typography variant="h6">{title}</Typography>
      <Divider />
    </Grid>
  );
};

export default SubHeader;
