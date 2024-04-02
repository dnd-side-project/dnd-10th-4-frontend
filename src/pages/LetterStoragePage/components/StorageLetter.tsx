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
        {[0, 3, 7].map((startIndex, index) => {
          const bottleCount = index === 1 ? 4 : 3;
          const lettersSlice = letters.slice(
            startIndex,
            startIndex + bottleCount,
          );
          const emptyCount = bottleCount - lettersSlice.length;

          return (
            <div css={style.bottles} key={`line-${index}`}>
              {lettersSlice.map((item) => (
                <li key={item.letterId}>
                  <img src={BottleImage} css={style.bottle} />
                </li>
              ))}
              {[...Array(emptyCount)].map((_, idx) => (
                <li key={`empty-${index}-${idx}`}>
                  <div css={style.empty} />
                </li>
              ))}
            </div>
          );
        })}
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
    gap: 4vh;
    justify-content: space-around;
    margin-bottom: 13svh;
  `,
  bottle: css`
    width: 3.4vh;
    height: 11vh;
    cursor: pointer;
  `,
  empty: css`
    width: 3.4vh;
    height: 11vh;
    margin-inline: -0.8vh;
    padding-inline: 0.8vh;
    border-radius: 8px;
    background-color: rgb(255 255 255 / 0.4);
  `,
};
