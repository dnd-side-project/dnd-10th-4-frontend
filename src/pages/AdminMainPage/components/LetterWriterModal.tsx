import {
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

interface LetterWriterModalProps extends ReturnType<typeof useBoolean> {
  targetEmail: string;
}

const LetterWriterModal = ({
  targetEmail,
  off,
  value: isOpen,
}: LetterWriterModalProps) => {
  const { register, control, handleSubmit, reset } = useForm<ReplyInputs>({
    resolver: zodResolver(replySchema),
    defaultValues: {
      replyContent: '',
    },
  });

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
    console.log(errors);
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
