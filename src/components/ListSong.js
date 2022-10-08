import { useContext, useEffect, useState } from 'react';
import { Songs } from '../context'

function ListSong() {

    const [listSongs, song, handleSetSong] = useContext(Songs)

    const [idSong, setIdSong] = useState(0)
    console.log(listSongs);

    const handlePlaySong = (id) => {
        setIdSong(id)
        handleSetSong(id)
    }

    useEffect(() => {
        setIdSong(song.id)
    }, [song])


    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className="w-full table-auto ">
                <thead className="text-white h-12">
                    <tr>
                        <th className="w-[10%]">#</th>
                        <th className="text-left">Title</th>
                        <th className="w-[10%]">Author</th>
                        <th className="w-[10%]"><i className="fa fa-download"></i></th>
                    </tr>
                </thead>
                <tbody>
                    {listSongs.map((song, index) => (
                        <tr key={index} className={`bg-slate-800 h-12 text-gray-500 hover:bg-gray-400 hover:text-gray-200 ${idSong === song.id && 'text-teal-400 bg-gray-400'}`}
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center">{index + 1}</td>
                            <td>{song.name}</td>
                            <td className="text-center">{song.author}</td>
                            <td className="text-center">
                                <a href={song.url}>
                                    <i className='fa fa-download'></i>
                                </a>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div >
    );
}

export default ListSong;