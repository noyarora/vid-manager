import React from 'react';
import { Button, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '../../common/mui';
import { ProcessedVideo } from '../../common/interfaces';
import {
  DELETE_BUTTON_TEXT,
  EDIT_BUTTON_TEXT,
  NO_VIDEO_TEXT,
  TABLE_AUTHOR_HEADING_TEXT,
  TABLE_CATEGORIES_HEADING_TEXT,
  TABLE_HIGHEST_QUALITY_HEADING_TEXT,
  TABLE_OPTIONS_HEADING_TEXT,
  TABLE_RELEASE_HEADING_TEXT,
  TABLE_VIDEO_NAME_HEADING_TEXT,
} from '../../common/constants';

interface VideosTableProps {
  videos: ProcessedVideo[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

export const VideosTable: React.FC<VideosTableProps> = ({ videos, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: '40px' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{TABLE_VIDEO_NAME_HEADING_TEXT}</TableCell>
            <TableCell>{TABLE_AUTHOR_HEADING_TEXT}</TableCell>
            <TableCell>{TABLE_CATEGORIES_HEADING_TEXT}</TableCell>
            <TableCell>{TABLE_HIGHEST_QUALITY_HEADING_TEXT}</TableCell>
            <TableCell>{TABLE_RELEASE_HEADING_TEXT}</TableCell>
            <TableCell>{TABLE_OPTIONS_HEADING_TEXT}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!!videos.length ? (
            videos.map((video) => (
              <TableRow key={video.id}>
                <TableCell component="th" scope="row">
                  {video.name}
                </TableCell>
                <TableCell>{video.author}</TableCell>
                <TableCell>{video.categories.join(', ')}</TableCell>
                <TableCell>{video.format}</TableCell>
                <TableCell>{video.releaseDate}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" color="success" onClick={() => onEdit(video.id)}>
                      {EDIT_BUTTON_TEXT}
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => onDelete(video.id)}>
                      {DELETE_BUTTON_TEXT}
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow sx={{ m: 2 }}>
              <TableCell>{NO_VIDEO_TEXT}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
