import { useContext } from 'react';
import AudioPlayer from 'react-h5-audio-player'
import "react-h5-audio-player/lib/styles.css";
import { Songs } from '../context';

function Playing() {
    const dataSong = useContext(Songs)
    const song = dataSong[1]
    const handleSetSong = dataSong[2]

    const handleNext = () => {
        handleSetSong(song.id + 1)
    }

    const handlePrevious = () => {
        handleSetSong(song.id - 1)
    }
    return (
        <div>
            <AudioPlayer
                className="player-music"
                src={song.url}
                layout="stacked-reverse"
                showSkipControls={true}
                showJumpControls={false}
                onClickNext={handleNext}
                onClickPrevious={handlePrevious}

            />
        </div>
    );
}

export default Playing;