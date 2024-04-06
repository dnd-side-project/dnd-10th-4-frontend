import { useState } from 'react';
import { css } from '@emotion/react';
import { type Reply, type SendLetter } from '@/types/letter';
import DrowerImage from '@/assets/storageDrawer.png';
import BottleImage from '@/assets/images/bottleStorage.png';
import useBoolean from '@/hooks/useBoolean';
import {
  startIndexList,
  LINE_BOTTLES,
  MIDDLE_LINE_BOTTLES,
} from '@/constants/letterStorage';
import ReplyLetterModal from '../ReplyStorage/ReplyLetterModal';
import SentLetterModal from '../SentStorage/SentLetterModal';
import StorageContent from './StorageContent';

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
        {startIndexList.map((startIndex, line) => {
          const bottleCount = line === 1 ? MIDDLE_LINE_BOTTLES : LINE_BOTTLES;
          const lettersSlice = letters.slice(
            startIndex,
            startIndex + bottleCount,
          );
          const emptyCount = bottleCount - lettersSlice.length;

          return (
            <div css={style.bottles} key={`line-${line}`}>
              {lettersSlice.map((item) => (
                <li key={item.letterId} onClick={() => handleBottleClick(item)}>
                  <img src={BottleImage} css={style.bottle} />
                </li>
              ))}
              {[...Array(emptyCount)].map((_, idx) => (
                <li key={`empty-${line}-${idx}`}>
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
