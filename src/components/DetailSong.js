function DetailSong() {
    return (
        <div className="col-span-1 p-3">
            <h2 className="text-cyan-500 font-bold">Now Playing</h2>
            <h2 className="text-neutral-400 text-2xl">Sing me to sleep</h2>
            <div className="w-[240px] m-auto mt-5">
                <img className="w-full" src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="avatar" />
            </div>
            <div className="flex justify-evenly items-center mt-5">
                <img className="w-[50px] rounded-full" src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576" alt="avatar" />
                <span className="text-xl text-white">Alan Walker</span>
            </div>
        </div>
    );
}

export default DetailSong;