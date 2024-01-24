import React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styles from './styles';

interface BottomSheetProps extends React.ComponentPropsWithoutRef<'div'> {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
  children: React.ReactNode;
}

const BottomSheet = ({ open, onClose, onOpen, children }: BottomSheetProps) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      transitionDuration={400}
      PaperProps={{ style: styles.paper }}
    >
      <div />
      <div>{children}</div>
    </SwipeableDrawer>
  );
};

export default BottomSheet;
