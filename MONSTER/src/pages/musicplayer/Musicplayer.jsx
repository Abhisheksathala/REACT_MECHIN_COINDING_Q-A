import React, { useEffect, useRef, useState } from 'react';

const Musicplayer = () => {
  const audioRef = useRef(null);
  const [isplaying, setIsplaying] = useState(false);
  const [currentmusictrack, setCurrentmusictrack] = useState(0);
  const [trackprogress, setTrackprogress] = useState(0);

  const tracks = [
    {
      title: 'Track 1',
      source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Track 2',
      source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      image: 'https://via.placeholder.com/150',
    },
  ];

  useEffect(() => {
    if (isplaying) {
      const interval = setInterval(() => {
        setTrackprogress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isplaying]);

  const handlepuseandplay = () => {
    if (isplaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsplaying(!isplaying);
  };

  const handleskip = (diraction) => {
    if (diraction === 'forword') {
      setCurrentmusictrack((prev) => prev + 1);
    }
    if (diraction === 'backword') {
      setCurrentmusictrack((prev) => prev - 1);
    }
    setTrackprogress(0);
  };

  return (
    <div>
      <div className="text-4xl">Musicplayer</div>
      <p className="text-xl">{tracks[currentmusictrack].title}</p>

      <img
        src={tracks[currentmusictrack].image}
        alt={tracks[currentmusictrack].title}
        className="w-48 h-48 rounded-xl shadow-lg"
      />

      <audio ref={audioRef} src={tracks[currentmusictrack].source} controls></audio>

      <div
        className="progress-bar"
        style={{ width: `${trackprogress}%`, background: isplaying ? '#3498db' : '#ddd' }}
      ></div>
      <div className="track control">
        <button
          onClick={() => {
            handleskip('backword');
          }}
        >
          backword
        </button>
        <button onClick={handlepuseandplay}>{isplaying ? 'pause' : 'play'}</button>
        <button
          onClick={() => {
            handleskip('forword');
          }}
        >
          fowrword
        </button>
      </div>
    </div>
  );
};

export default Musicplayer;
