import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import SongItem from './SongItem'


const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>

        <h1 className='my-5 text-2xl font-bold'>Featured Charts</h1>
        <div className='flex overflow-auto'>
          {albumsData.map((album, index) => (<Albumitem key={index} name={album.name} image={album.image} desc={album.desc} id={album.id} />))}
        </div>
      </div>


      <div className='mb-4'>

        <h1 className='my-5 text-2xl font-bold'>Today's biggest Hits</h1>
        <div className='flex overflow-auto'>
          {songsData.map((song, index) => (<SongItem key={index} name={song.name} image={song.image} desc={song.desc} id={song.id} file={song.file} duration={song.duration} />))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome