import React from 'react';
import { SoundOn, SoundOff } from '@/assets/icons';
import useMusicStore from '@/stores/useMusicStore';
import Tooltip from '../Tooltip';
import IconButton from '../IconButton';

interface MusicButtonProps {
  /** 아이콘 색상 */
  color?: string;
  /** 툴팁 Content 컴포넌트에 전달할 props */
  tooltipContentProps?: React.ComponentPropsWithoutRef<typeof Tooltip.Content>;
}

/** 바다 소리를 On/Off 하는 컴포넌트입니다. */
const MusicButton = ({
  color = 'white',
  tooltipContentProps,
  ...props
}: MusicButtonProps) => {
  const isPlaying = useMusicStore((s) => s.isPlaying);
  const toggle = useMusicStore((s) => s.togglePlaying);

  return (
    <Tooltip side="bottom" align="end" delay={5000} {...tooltipContentProps}>
      <Tooltip.Trigger>
        <IconButton type="button" onClick={toggle} {...props}>
          {isPlaying ? <SoundOn color={color} /> : <SoundOff color={color} />}
        </IconButton>
      </Tooltip.Trigger>
      <Tooltip.Content>
        {isPlaying
          ? '바다 소리를 끌 수 있어요.'
          : '소리를 켜 바다를 느껴보세요'}
      </Tooltip.Content>
    </Tooltip>
  );
};

export default MusicButton;
