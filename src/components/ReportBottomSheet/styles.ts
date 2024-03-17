import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem 1rem 1.25rem;

    h2 {
      padding-inline: 0;
    }
  `,
  radioContainer: css`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.5rem 0;
  `,
  textareaContainer: css`
    display: flex;
    flex-direction: column;
    width: 100%;

    > label {
      ${textStyles.t3}
      padding: 1rem 0;
    }
  `,
  textarea: css`
    background: none;
    outline: none;
    resize: none;
    ${textStyles.l1m}
    padding: .75rem 1rem;
    border-radius: 8px;
    border: 1px solid ${COLORS.gray5};

    :focus {
      border: 1px solid ${COLORS.danger};
    }
  `,
};

export default style;
