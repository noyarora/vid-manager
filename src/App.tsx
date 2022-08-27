import React from 'react';
import { Container } from './common/mui';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Videos from './pages/Videos';
import AddVideo from './pages/AddVideo';
import EditVideo from './pages/EditVideo';
import VideoAppBar from './components/VideoAppBar';
const App: React.FC = () => {
  return (
    <>
      <Router>
        <VideoAppBar />
        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/videos" element={<Videos />} />
            <Route path="/add-video" element={<AddVideo />} />
            <Route path="/edit-video/:videoId" element={<EditVideo />} />
            <Route path="/" element={<Navigate to="/videos" />} />
          </Routes>
        </Container>
      </Router>
    </>
  );
};

export default App;
