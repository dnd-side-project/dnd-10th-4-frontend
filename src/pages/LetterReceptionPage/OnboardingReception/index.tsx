import { useNavigate, useParams } from 'react-router-dom';
import { Fragment, useMemo, useRef } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import Header from '@/components/Header';
import { CaretLeft, Siren } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import Tooltip from '@/components/Tooltip';
import textStyles from '@/styles/textStyles';
import useBoolean from '@/hooks/useBoolean';
import { formatDate } from '@/utils/dateUtils';
import { ROUTER_PATHS } from '@/router';
import letterOptions from '@/api/letter/queryOptions';
import letterAPI from '@/api/letter/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import PolaroidModal from './components/PolaroidModal';
import styles from './styles';

const OnboardingReception = () => {
  const navigate = useNavigate();
  const modalProps = useBoolean(false);
  const storageTooltipKey = useRef(0);
  const { letterId } = useParams();
  const queryClient = useQueryClient();

  const { data: letter } = useSuspenseQuery(
    letterOptions.singleReception(Number(letterId)),
  );

  const { mutateAsync, isPending } = useMutation({
    mutationFn: letterAPI.patchReplyStorage,
  });

  const createdAt = useMemo(
    () => new Date(letter.createdAt),
    [letter.createdAt],
  );

  const handleCloseModal = () => {
    storageTooltipKey.current = storageTooltipKey.current + 1;
    modalProps.off();
  };

  const handleNavigateToRoot = () => {
    navigate(ROUTER_PATHS.ROOT, {
      replace: true,
      state: { from: ROUTER_PATHS.ONBOARDING },
    });
  };

  const handleStorage = async () => {
    try {
      await mutateAsync(Number(letterId));
      toast.success('편지를 보관함에 넣었어요', { position: 'bottom-center' });
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
      handleNavigateToRoot();
    } catch (err) {
      const defaultMessage = '보관에 실패했어요';

      if (isAxiosError(err)) {
        toast.error(err.response?.data ?? defaultMessage, {
          position: 'bottom-center',
        });
      } else {
        toast.error(defaultMessage, { position: 'bottom-center' });
      }
    }
  };

  return (
    <div css={styles.container}>
      <PolaroidModal
        {...modalProps}
        imagePath={letter.sendImagePath}
        off={handleCloseModal}
      />
      <Header
        css={styles.header}
        leftContent={
          <CaretLeft
            css={styles.icon}
            strokeWidth={2.5}
            onClick={handleNavigateToRoot}
          />
        }
        rightContent={
          <IconButton>
            <Siren css={styles.icon} />
          </IconButton>
        }
      />
      <motion.main
        css={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <LetterCard css={styles.card}>
          <LetterHeader title="To" nickname="처음 방문한 너에게" />
          <section css={styles.content}>
            {letter.content.split('\n').map((line, i) => (
              <Fragment key={i}>
                <p>{line}</p>
                <br />
              </Fragment>
            ))}
          </section>
          <div css={styles.date}>
            <span>{formatDate(createdAt)}</span>
          </div>
          <LetterHeader
            title="From"
            titlePosition="right"
            nickname={letter.senderNickname}
          />
          <Tooltip
            side="right"
            delay={300000}
            triggerContent={
              <div css={styles.polaroidContainer}>
                {letter.sendImagePath && (
                  <img
                    css={styles.polaroid}
                    src={letter.sendImagePath}
                    alt="폴라로이드"
                    onClick={() => modalProps.on()}
                  />
                )}
              </div>
            }
          >
            <p css={textStyles.c1r}>사진을 클릭해 볼 수 있어요</p>
          </Tooltip>
        </LetterCard>
      </motion.main>
      <Navbar css={styles.navbar}>
        <Button
          variant="secondary"
          size="sm"
          rounded="md"
          onClick={handleNavigateToRoot}
        >
          닫기
        </Button>
        <Tooltip
          key={storageTooltipKey.current}
          delay={storageTooltipKey.current > 0 ? 300000 : 0}
          side="top"
          triggerContent={
            <Button
              variant="primary"
              size="sm"
              rounded="md"
              disabled={isPending}
              onClick={handleStorage}
            >
              {isPending ? <LoadingSpinner /> : '보관하기'}
            </Button>
          }
        >
          <p css={textStyles.c1r}>보관하기를 눌러 편지를 간직하세요</p>
        </Tooltip>
      </Navbar>
    </div>
  );
};

export default OnboardingReception;
