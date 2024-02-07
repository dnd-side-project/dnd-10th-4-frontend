import { useState } from 'react';
import { SoundOn, SoundOff } from '@/assets/icons';
import Tooltip from '../Tooltip';
import IconButton from '../IconButton';

interface MusicButtonProps {
  /** 아이콘 색상 */
  color?: string;
}

/** 바다 소리 음악을 On/Off 하는 컴포넌트입니다. */
const MusicButton = ({ color = 'white' }: MusicButtonProps) => {
  const [isMuted, setIsMuted] = useState(true);

  const handleToggle = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <Tooltip
      side="bottom"
      align="end"
      delay={5000}
      triggerContent={
        <IconButton onClick={handleToggle}>
          {isMuted ? <SoundOff color={color} /> : <SoundOn color={color} />}
        </IconButton>
      }
    >
      {isMuted ? '소리를 켜 바다를 느껴보세요' : '바다 소리를 끌 수 있어요.'}
    </Tooltip>
  );
};

export default MusicButton;
