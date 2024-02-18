import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styles from './styles';
import Title from './components/Title';
import Content from './components/Content';
import Description from './components/Description';
import Divider from './components/Divider';

interface BottomSheetProps {
  /** 바텀시트의 열림(true), 닫힘(false) 상태입니다. */
  open: boolean;
  /** 바텀 시트를 닫을 때 실행될 함수 입니다. */
  onClose: () => void;
  /** 바텀 시트가 열릴 때 실행될 함수입니다. */
  onOpen: () => void;
  /** BottomSheet 컴포넌트 안에 포함될 내용입니다. */
  children: React.ReactNode;
}

const BottomSheet = ({
  open,
  onClose,
  onOpen,
  children,
  ...props
}: BottomSheetProps) => {
  return (
    <SwipeableDrawer
      aria-autocomplete="inline"
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      transitionDuration={400}
      PaperProps={{ sx: styles.paper }}
    >
      <div css={styles.header} />
      <div css={styles.content} {...props}>
        {children}
      </div>
    </SwipeableDrawer>
  );
};

BottomSheet.Title = Title;
BottomSheet.Content = Content;
BottomSheet.Description = Description;
BottomSheet.Divider = Divider;

export default BottomSheet;
