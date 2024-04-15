import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  useWatch,
} from 'react-hook-form';
import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useBoolean from '@/hooks/useBoolean';
import Modal from '@/components/Modal';
import Header from '@/components/Header';
import IconButton from '@/components/IconButton';
import { Xmark } from '@/assets/icons';
import LetterCard from '@/components/LetterCard';
import LetterHeader from '@/components/LetterHeader';
import LetterTextarea from '@/components/LetterTextarea';
import {
  replySchema,
  type ReplyInputs,
} from '@/pages/LetterReceptionPage/NormalReception';
import LetterLengthDate from '@/components/LetterLengthDate';
import Button from '@/components/Button';
import Navbar from '@/components/Navbar';
import adminAPI from '@/api/admin/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import letterOptions from '@/api/letter/queryOptions';
import ReplyImage from '@/pages/LetterReceptionPage/NormalReception/ReplyToLetter/ReplyImage';

interface LetterWriterModalProps extends ReturnType<typeof useBoolean> {
  targetEmail: string;
}

const LetterWriterModal = ({
  targetEmail,
  off,
  value: isOpen,
}: LetterWriterModalProps) => {
  const form = useForm<ReplyInputs>({
    resolver: zodResolver(replySchema),
    defaultValues: {
      replyContent: '',
    },
  });

  const { register, control, handleSubmit, reset } = form;

  const { replyContent } = useWatch({
    control,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: adminAPI.postSpecialLetter,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
    },
  });

  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<ReplyInputs> = (data) => {
    mutate(
      {
        email: targetEmail,
        content: data.replyContent,
        image: data.image,
      },
      {
        onSuccess: () => {
          toast.success('편지를 보냈어요', {
            position: 'bottom-center',
            autoClose: 1500,
            hideProgressBar: true,
          });
          off();
          reset();
        },
      },
    );
  };

  const onError: SubmitErrorHandler<ReplyInputs> = (errors) => {
    const errorMessages = Object.values(errors).map((error) => error.message);

    if (typeof errorMessages[0] === 'string') {
      toast.warn(errorMessages[0], {
        position: 'bottom-center',
        autoClose: 1500,
        hideProgressBar: true,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} close={off}>
      <Header>
        <Header.Right>
          <IconButton onClick={off} variant="header">
            <Xmark color="white" />
          </IconButton>
        </Header.Right>
      </Header>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormProvider {...form}>
          <LetterCard isOpen>
            <LetterHeader title="To" nickname={targetEmail} />
            <LetterTextarea
              {...register('replyContent')}
              name="replyContent"
              placeholder="하고싶은 이야기를 편지로 적어보세요. (10자 이상)"
            />
            <LetterLengthDate letterLength={replyContent?.length || 0} />
            <LetterHeader
              title="From"
              titlePosition="right"
              nickname="낯선 바다"
            />
            <ReplyImage />
          </LetterCard>
          <Navbar css={styles.navbar}>
            <Button
              type="submit"
              variant="primary"
              size="sm"
              disabled={isPending}
            >
              {isPending ? <LoadingSpinner /> : '편지 보내기'}
            </Button>
            <Button type="button" variant="cancel" size="sm" onClick={off}>
              취소
            </Button>
          </Navbar>
        </FormProvider>
      </form>
    </Modal>
  );
};

const styles = {
  navbar: css`
    box-sizing: border-box;
  `,
};

export default LetterWriterModal;
