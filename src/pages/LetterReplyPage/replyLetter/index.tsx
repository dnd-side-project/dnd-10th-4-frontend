import LetterCard from '@/components/LetterCard';
import LetterContent from '../components/LetterContent';

const ReplyLetter = () => {
  return (
    <LetterCard isOpen={true}>
      <LetterContent
        receiver="낯선 고양이"
        content="여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말 이대로 다 남겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오"
        date="24년 02월 13일"
        sender="낯선 강아지"
      />
    </LetterCard>
  );
};

export default ReplyLetter;
