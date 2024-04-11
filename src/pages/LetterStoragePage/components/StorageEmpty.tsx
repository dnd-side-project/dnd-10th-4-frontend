import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import Button from '@/components/Button';
import textStyles from '@/styles/textStyles';
import StorageContent from './StorageContent';

interface StorageEmptyProps {
  textTitle: string;
  text: React.ReactNode;
  linkPath: string;
  buttonIcon: React.ReactNode;
  buttonText: string;
}

const StorageEmpty = ({
  textTitle,
  text,
  linkPath,
  buttonIcon,
  buttonText,
}: StorageEmptyProps) => {
  return (
    <div css={style.container}>
      <StorageContent>
        <div css={style.text}>
          <span>{textTitle}</span>
          <p>{text}</p>
        </div>
      </StorageContent>
      <Link to={linkPath}>
        <Button size="md" rounded="md" css={style.button}>
          {buttonIcon}
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default StorageEmpty;

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100svh - 8rem);
  `,
  text: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 126px;
    text-align: center;

    > span {
      color: white;
      ${textStyles.b2m}
    }

    > p {
      color: ${COLORS.gray6};
      ${textStyles.b4R}
    }
  `,
  button: css`
    width: 100%;
    margin-bottom: 1.25rem;
  `,
};
