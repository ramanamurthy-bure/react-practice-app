import React from 'react';
import ReactLogo from './ReactLogo.png';
import AudioFile from './SampleMusic.mp3';
import VideoFile from './KarthikeyaVideo.mp4';

export const App = () => {
  return (
    <div>
      <center>
        <img src={ReactLogo} height="250" width="auto" alt="React Logo Import Practice" ></img><br/>
        <audio controls>
          <source src={AudioFile} type="audio/ogg"></source>
        </audio><br/>
        <video width="320" height="250" controls>
          <source src={VideoFile} type="video/mp4"></source>
        </video>
      </center>
    </div>
  )
}
export default App;