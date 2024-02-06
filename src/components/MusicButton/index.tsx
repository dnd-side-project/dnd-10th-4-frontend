import { SoundOn, SoundOff } from '@/assets/icons';
import useBoolean from '@/hooks/useBoolean';
import BackgroundMusic from '@/assets/background.mp3';
import Tooltip from '../Tooltip';
import IconButton from '../IconButton';
import Audio from '../Audio';

interface MusicButtonProps {
  /** 아이콘 색상 */
  color?: string;
}

/** 바다 소리를 On/Off 하는 컴포넌트입니다. */
const MusicButton = ({ color = 'white' }: MusicButtonProps) => {
  const { value: isPlaying, toggle } = useBoolean(false);

  return (
    <>
      <Audio src={BackgroundMusic} isPlaying={isPlaying} />
      <Tooltip
        side="bottom"
        align="end"
        delay={5000}
        triggerContent={
          <IconButton onClick={toggle}>
            {isPlaying ? <SoundOn color={color} /> : <SoundOff color={color} />}
          </IconButton>
        }
      >
        {isPlaying
          ? '바다 소리를 끌 수 있어요.'
          : '소리를 켜 바다를 느껴보세요'}
      </Tooltip>
    </>
  );
};

export default MusicButton;
