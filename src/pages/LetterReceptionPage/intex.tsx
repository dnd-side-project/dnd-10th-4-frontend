import { useState } from 'react';
import { css } from '@emotion/react';
import { FunnelProvider } from '@/contexts/useFunnelContext';
import createFunnel from '@/components/Funnel/createFunnel';
import ReceivedLetter from './ReceivedLetter';
import ReplyToLetter from './ReplyToLetter';
import ReceptionHeader from './components/ReceptionHeader';

const { Funnel, Step, useFunnel } = createFunnel([
  'ReceivedLetter', // 흘러온 편지 보기
  'ReplyToLetter', // 흘러온 편지 답장
] as const);

const LetterReceptionPage = () => {
  const { step, toPrev, toNext, toFirst, toLast } = useFunnel();
  const [navigate, setNavigage] =
    useState<React.ComponentProps<typeof ReceptionHeader>>();

  return (
    <FunnelProvider value={{ toPrev, toNext, toFirst, toLast }}>
      <div css={style.container}>
        <ReceptionHeader {...navigate} />
        <Funnel step={step}>
          <Step
            name="ReceivedLetter"
            onEnter={() =>
              setNavigage({
                goHome: true,
              })
            }
          >
            <ReceivedLetter />
          </Step>
          <Step
            name="ReplyToLetter"
            onEnter={() =>
              setNavigage({
                goHome: false,
              })
            }
          >
            <ReplyToLetter />
          </Step>
        </Funnel>
      </div>
    </FunnelProvider>
  );
};

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  `,
};

export default LetterReceptionPage;
