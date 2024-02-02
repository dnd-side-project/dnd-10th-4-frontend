import React from 'react';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import Tooltip from '@/components/Tooltip';
import IconButton from '@/components/IconButton';
import { SoundOff } from '@/assets/icons';

interface StepTemplateProps {
  children: React.ReactNode;
  buttonContent?: React.ReactNode;
}

const StepTemplate = ({ children, buttonContent }: StepTemplateProps) => {
  return (
    <div css={styles.container}>
      <Header
        leftContent={<div>뒤로</div>}
        centerContent={<div>게이지바</div>}
        rightContent={<div>건너뛰기</div>}
      />
      <Header
        rightContent={
          <Tooltip
            side="bottom"
            align="end"
            triggerContent={
              <IconButton>
                <SoundOff color="white" />
              </IconButton>
            }
          >
            소리를 켜 바다를 느껴보세요
          </Tooltip>
        }
      />
      <main css={styles.main}>{children}</main>
      <section css={styles.buttonSection}>{buttonContent}</section>
    </div>
  );
};

export default StepTemplate;

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 100%;
    color: white;
  `,
  main: css`
    flex-grow: 1;
  `,
  buttonSection: css`
    width: 100%;
    max-width: 12.5rem;
    margin-bottom: 1.25rem;

    button {
      width: 100%;
    }
  `,
};
