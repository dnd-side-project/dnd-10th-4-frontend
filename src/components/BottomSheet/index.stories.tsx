import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import Navbar from '../Navbar';
import Button from '../Button';
import BottomSheet from '.';

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;

const styles = {
  button: css`
    width: 100%;
    height: 50px;
  `,
  content: css`
    padding-inline: 16px;
  `,
  navbar: css`
    padding: 0;
  `,
};

export const 바텀시트: StoryObj = {
  render: () => {
    const BottomSheetComponent = () => {
      const [open, setOpen] = useState(false);

      const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };

      return (
        <>
          <button css={styles.button} onClick={toggleDrawer(true)}>
            바텀시트열기
          </button>
          <BottomSheet
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            <div css={styles.content}>
              <h1>
                바텀시트에 들어갈 내용입니다. 모바일에서는 스와이프로 닫을 수
                있습니다.
              </h1>
              <h2>누구에게 보낼까요?</h2>
            </div>
            <Navbar css={styles.navbar}>
              <Button
                variant="semi-transparent-unaccent"
                onClick={toggleDrawer(false)}
              >
                닫기
              </Button>
              <Button variant="semi-transparent" onClick={toggleDrawer(false)}>
                완료
              </Button>
            </Navbar>
          </BottomSheet>
        </>
      );
    };

    return <BottomSheetComponent />;
  },
};
