import { useRef, useEffect } from 'react';
import useMusicStore from '@/stores/useMusicStore';

interface AudioProps {
  /** 재생할 음악의 URL입니다. */
  src: string;
}

const Audio = ({ src }: AudioProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const isPlaying = useMusicStore((s) => s.isPlaying);

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
