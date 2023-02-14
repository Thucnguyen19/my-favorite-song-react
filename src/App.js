// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Songs } from './components/context';
import DetailSong from './components/DatailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import Playing from './components/Playing';
import DataSongs from './data/songs.json';
function App() {
  const [song,setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong)=>{
    const song =DataSongs.find(song=>song.id === idSong )
    if(!song)
    setSong(DataSongs[0])
    else
    setSong(song)
  }
  return (
    <div className="App">
      <Songs.Provider value={{DataSongs, song, handleSetSong}}>
      <Navbar/>
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
        <DetailSong/>
        {/*  span1 */}
         <ListSong/> 
        {/* span2  */}
      </div>
      <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
