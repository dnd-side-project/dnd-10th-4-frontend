import React from 'react';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import Tooltip from '@/components/Tooltip';
import IconButton from '@/components/IconButton';
import { SoundOff } from '@/assets/icons';
import NavHeader from './NavHeader';

interface StepTemplateProps {
  children: React.ReactNode;
  navHeaderProps?: React.ComponentProps<typeof NavHeader>;
  buttonContent?: React.ReactNode;
}

const StepTemplate = ({
  children,
  navHeaderProps,
  buttonContent,
}: StepTemplateProps) => {
  return (
    <div css={styles.container}>
      <NavHeader {...navHeaderProps} />
      <Header
        rightContent={
          <Tooltip
            side="bottom"
            align="end"
            delay={1000}
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
    text-align: center;
  `,
  main: css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10rem;
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
