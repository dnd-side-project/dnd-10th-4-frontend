import React from 'react';
import { css } from '@emotion/react';

interface StepTemplateProps {
  children: React.ReactNode;
  buttonContent?: React.ReactNode;
}

const StepTemplate = ({ children, buttonContent }: StepTemplateProps) => {
  return (
    <>
      <main css={styles.main}>{children}</main>
      <section css={styles.buttonSection}>{buttonContent}</section>
    </>
  );
};

export default StepTemplate;

const styles = {
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
