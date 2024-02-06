import { useRef, useEffect } from 'react';

interface AudioProps {
  /** 재생할 음악의 URL입니다. */
  src: string;
  /** 음악이 재생되는지 여부를 나타냅니다. */
  isPlaying: boolean;
}

const Audio = ({ src, isPlaying }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;

      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return <audio ref={audioRef} src={src} autoPlay loop />;
};

export default Audio;
