import { useState } from 'react';
import { css } from '@emotion/react';
import LetterCard from '@/components/LetterCard';
import LetterAccordion from '@/components/LetterAccordion';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import ImageUploadButton from '@/components/ImageUploadButton';
import Chip from '@/components/Chip';
import LetterTextarea from '@/components/LetterTextarea';
import { letterWrite } from '@/constants/schemaLiteral';
import { formatDate } from '@/utils/dateUtils';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';
import ReceptionPolaroid from '../components/ReceptionPolaroid';
import LetterContent from '../components/LetterContent';

const ReplyToLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toPrev } = useFunnelContext();
  const tagList = ['20~24세', '모두에게', '기타'];

  const handleAccordionToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log(file);
  };

  return (
    <LetterContent isBlock={true}>
      <div css={style.letter}>
        <LetterCard css={{ marginBottom: '1rem' }}>
          <div css={style.from}>
            <span>From.</span>
            <span>낯선 고양이</span>
          </div>
          <div css={style.tag}>
            {tagList.map((item) => (
              <Chip variant="filter" key={item}>
                # {item}
              </Chip>
            ))}
          </div>
          <LetterAccordion
            isOpen={isOpen}
            onToggle={handleAccordionToggle}
            id="1"
            text="여기까지가 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오여기까지가 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋"
            date={new Date()}
            line={2}
            type="send"
          />
          <ReceptionPolaroid />
        </LetterCard>
        <LetterCard isOpen={true}>
          <div css={style.from}>
            <span>To.</span>
            <span>낯선 고양이</span>
          </div>
          <LetterTextarea
            name="content"
            placeholder="하고싶은 이야기를 답장으로 적어보세요."
          />
          <div css={style.textCount}>
            <span>0</span>
            <span>&nbsp;/ {letterWrite.content.max.value}</span>
          </div>
          <div css={style.date}>
            <span>{formatDate(new Date())}</span>
          </div>
        </LetterCard>
      </div>
      <Navbar css={style.navbar}>
        <Button
          type="button"
          variant="semi-transparent-unaccent"
          size="sm"
          onClick={toPrev}
        >
          다시 흘러보내기
        </Button>
        <Button type="submit" variant="semi-transparent" size="sm">
          답장 보내기
        </Button>
        <ImageUploadButton onChangeImage={handleFileChange} />
      </Navbar>
    </LetterContent>
  );
};

const style = {
  from: css`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    & > span:nth-of-type(1) {
      color: ${COLORS.gray1};
      ${textStyles.t4};
    }

    & > span:nth-of-type(2) {
      color: ${COLORS.gray3};
      font-weight: 500;
      font-style: normal;
      font-size: 14px;
      line-height: 16px;
    }
  `,
  tag: css`
    display: flex;
    gap: 0.5rem;
  `,
  text: css`
    ${textStyles.l1m};
  `,
  letter: css`
    overflow-y: auto;
    max-height: calc(100svh - 60px - 80px - 16px);
  `,
  textCount: css`
    display: flex;
    justify-content: flex-end;

    ${textStyles.c1m}
    & > span:nth-of-type(1) {
      color: ${COLORS.gray1};
    }

    & > span:nth-of-type(2) {
      color: ${COLORS.gray4};
    }
  `,
  date: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 2.5rem;
    ${textStyles.c1r}
    color: ${COLORS.gray4};
  `,
  navbar: css`
    position: fixed;
    bottom: 0;
    width: 96vw;
    max-width: 580px;
    padding-inline: 0;
  `,
};

export default ReplyToLetter;
