import { useNavigate, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import LoadingSpinner from '@/components/LoadingSpinner';
import createFunnel from '@/components/Funnel/createFunnel';
import { ROUTER_PATHS } from '@/router';
import UnknownErrorBoundary from '@/components/ErrorBoundary/UnknownErrorBoundary';
import LetterAccessFallback from '@/components/ErrorBoundary/fallback/LetterAccessFallback';
import { letterWrite } from '@/constants/schemaLiteral';
import style from './styles';
import ReceptionHeader from './components/ReceptionHeader';
import ReplyToLetter from './ReplyToLetter';
import ReceivedLetter from './ReceivedLetter';

const L = letterWrite;

const replySchema = z.object({
  replyContent: z
    .string()
    .min(L.content.min.value, { message: L.content.min.message })
    .max(L.content.max.value, { message: L.content.max.message }),
  image: z
    .any()
    .optional()
    .refine(
      (files) => !files || files[0].size <= L.image.maxFileSize.value,
      L.image.maxFileSize.message,
    )
    .refine(
      (files) => !files || L.image.acceptType.list.includes(files[0].type),
      L.image.acceptType.message,
    ),
});

export type ReplyInputs = z.infer<typeof replySchema>;

const { Funnel, Step, useFunnel } = createFunnel([
  'ReceivedLetter',
  'ReplyToLetter',
] as const);

const LetterReceptionPage = () => {
  const navigate = useNavigate();
  const { step, setStep, toPrev } = useFunnel();

  const { letterId } = useParams();

  const methods = useForm<ReplyInputs>({
    resolver: zodResolver(replySchema),
    defaultValues: {
      replyContent: '',
    },
  });

  return (
    <UnknownErrorBoundary FallbackComponent={LetterAccessFallback}>
      <Suspense
        fallback={
          <div css={style.loadingSpinner}>
            <LoadingSpinner size="4rem" />
            <p>흘러온 편지 가져오는 중...</p>
          </div>
        }
      >
        <FormProvider {...methods}>
          <div css={style.container}>
            <ReceptionHeader
              onClickPrev={
                step === 'ReceivedLetter'
                  ? () => navigate(ROUTER_PATHS.ROOT)
                  : toPrev
              }
              letterId={Number(letterId)}
            />
            <Funnel step={step}>
              <Step name="ReceivedLetter">
                <ReceivedLetter
                  letterId={Number(letterId)}
                  onNext={() => setStep('ReplyToLetter')}
                />
              </Step>
              <Step name="ReplyToLetter">
                <ReplyToLetter
                  letterId={Number(letterId)}
                  onPrev={() => setStep('ReceivedLetter')}
                />
              </Step>
            </Funnel>
          </div>
        </FormProvider>
      </Suspense>
    </UnknownErrorBoundary>
  );
};

export default LetterReceptionPage;
