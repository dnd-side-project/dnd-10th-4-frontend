import { css } from '@emotion/react';
import { Reply } from '@/types/letter';
import DrowerImage from '@/assets/storageDrawer.png';
import BottleImage from '@/assets/images/bottleStorage.png';
import StorageContent from './StorageContent';

interface StorageLetterProps {
  letters: Reply[];
}

const StorageLetter = ({ letters }: StorageLetterProps) => {
  return (
    <StorageContent>
      <img css={style.drower} src={DrowerImage} />
      <ol css={style.bottleStorage}>
        <div css={style.bottles}>
          {letters.slice(0, 3).map((item) => (
            <li key={item.letterId}>
              <img
                onClick={() => console.log(item.letterId)}
                src={BottleImage}
                css={style.bottle}
              />
            </li>
          ))}
        </div>
        <div css={style.bottles}>
          {letters.slice(3, 7).map((item) => (
            <li key={item.letterId}>
              <img
                onClick={() => console.log(item.letterId)}
                src={BottleImage}
                css={style.bottle}
              />
            </li>
          ))}
        </div>
        <div css={style.bottles}>
          {letters.slice(7).map((item) => (
            <li key={item.letterId}>
              <img
                onClick={() => console.log(item.letterId)}
                src={BottleImage}
                css={style.bottle}
              />
            </li>
          ))}
        </div>
      </ol>
    </StorageContent>
  );
};

export default StorageLetter;

const style = {
  drower: css`
    position: relative;
    height: 70svh;
    margin: auto;
  `,
  bottleStorage: css`
    position: absolute;
    left: 50%;
    margin-top: 1.5svh;
    transform: translate(-50%);
  `,
  bottles: css`
    display: flex;
    gap: 4.5vh;
    justify-content: space-between;
    margin-bottom: 13svh;
  `,
  bottle: css`
    height: 11vh;
    cursor: pointer;
  `,
};
