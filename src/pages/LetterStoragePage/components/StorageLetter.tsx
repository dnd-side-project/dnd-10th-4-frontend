import { useState } from 'react';
import { css } from '@emotion/react';
import { type Reply, type SendLetter } from '@/types/letter';
import DrowerImage from '@/assets/storageDrawer.png';
import BottleImage from '@/assets/images/bottleStorage.png';
import useBoolean from '@/hooks/useBoolean';
import SentLetterModal from './SentLetterModal';
import StorageContent from './StorageContent';
import ReplyLetterModal from './ReplyLetterModal';

interface StorageLetterProps {
  letters: Reply[] | SendLetter[];
  type?: 'reply' | 'sent';
}

const StorageLetter = ({ letters, type = 'sent' }: StorageLetterProps) => {
  const [clickLetter, setClickLetter] = useState<Reply | SendLetter | null>(
    null,
  );
  const replyletterModalProps = useBoolean(false);
  const sentletterModalProps = useBoolean(false);

  const handleBottleClick = (item: Reply | SendLetter) => {
    setClickLetter(item);
    console.log(item);
    if (type === 'reply') {
      replyletterModalProps.on();
    } else {
      sentletterModalProps.on();
    }
  };

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
                <li key={item.letterId} onClick={() => handleBottleClick(item)}>
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
      {clickLetter && type === 'reply' && (
        <ReplyLetterModal
          {...replyletterModalProps}
          letter={clickLetter as Reply}
        />
      )}
      {clickLetter && type === 'sent' && (
        <SentLetterModal
          {...sentletterModalProps}
          letter={clickLetter as SendLetter}
        />
      )}
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
    height: 11vh;
    margin-bottom: 13.2svh;
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
