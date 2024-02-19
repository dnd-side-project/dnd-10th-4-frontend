import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { css } from '@emotion/react';
import useBoolean from '@/hooks/useBoolean';
import { GENDER_DICT, Gender } from '@/constants/users';
import Navbar from '../Navbar';
import Button from '../Button';
import GenderCard from '../GenderCard';
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
  genderSection: css`
    display: flex;
    gap: 1rem;
    width: 100%;
    max-width: 15rem;
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

export const 성별_선택_바텀시트: StoryObj = {
  render: () => {
    const BottomSheetComponent = () => {
      const { value, on, off } = useBoolean(false);
      const [gender, setGender] = useState<Gender>();

      const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value as Gender;

        if (value in GENDER_DICT) {
          setGender(value);
        }
      };

      return (
        <>
          <Button onClick={on}>바텀시트열기</Button>
          <BottomSheet open={value} onOpen={on} onClose={off}>
            <BottomSheet.Title>어떤 성별로 변경하시겠어요?</BottomSheet.Title>
            <BottomSheet.Content>
              <section css={styles.genderSection}>
                <GenderCard
                  value="MALE"
                  variant="secondary"
                  name="gender"
                  selectedValue={gender}
                  onChange={handleSelect}
                />
                <GenderCard
                  value="FEMALE"
                  variant="secondary"
                  name="gender"
                  selectedValue={gender}
                  onChange={handleSelect}
                />
              </section>
            </BottomSheet.Content>
            <BottomSheet.Description>
              성별은 한 번만 수정할 수 있어요
            </BottomSheet.Description>
            <BottomSheet.Divider />
            <BottomSheet.ButtonSection>
              <Button variant="cancel" onClick={off}>
                닫기
              </Button>
              <Button variant="primary" onClick={off}>
                변경 완료
              </Button>
            </BottomSheet.ButtonSection>
          </BottomSheet>
        </>
      );
    };

    return <BottomSheetComponent />;
  },
};

export const 로그아웃_바텀시트: StoryObj = {
  render: () => {
    const BottomSheetComponent = () => {
      const { value, on, off } = useBoolean(false);

      return (
        <>
          <Button onClick={on}>바텀시트열기</Button>
          <BottomSheet open={value} onOpen={on} onClose={off}>
            <BottomSheet.Title>로그아웃하시겠어요?</BottomSheet.Title>
            <BottomSheet.Description css={css({ marginTop: '0.75rem' })}>
              언제든 다시 로그인 할 수 있어요
            </BottomSheet.Description>
            <BottomSheet.Divider />
            <BottomSheet.ButtonSection>
              <Button variant="cancel" onClick={off}>
                취소
              </Button>
              <Button variant="primary" onClick={off}>
                로그아웃
              </Button>
            </BottomSheet.ButtonSection>
          </BottomSheet>
        </>
      );
    };

    return <BottomSheetComponent />;
  },
};
