
import './App.css';
import NavBar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import { Songs } from './context'
import DataSongs from './data/songs.json'
import Playing from './components/Playing';
import { useState } from 'react';

function App() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {


    const songState = DataSongs.find(song => song.id === idSong)
    if (!songState) {
      setSong(DataSongs[0])
    } else {
      setSong(songState)
    }

  }
  return (
    <div className="App">
      <Songs.Provider value={[DataSongs, song, handleSetSong]}>
        <NavBar />
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
          {/* span-1 */}
          <DetailSong />
          {/* span-2 */}

          <ListSong />
        </div>
        <Playing />
      </Songs.Provider>
    </div>
  );
}

export default App;
