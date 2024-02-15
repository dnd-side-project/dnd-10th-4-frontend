import LetterCard from '@/components/LetterCard';
import LetterContent from '../components/LetterContent';

const ReplyLetter = () => {
  return (
    <LetterCard isOpen={true}>
      <LetterContent
        receiver="낯선 고양이"
        content="여기까지가 끝인가 보오 이제 나는 돌아서겠소 억지 노력으로 인연을 거슬러 괴롭히지는 않겠소 하고 싶은 말 하려 했던 말 이대로 다 남겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여"
        date="24년 02월 13일"
        sender="낯선 강아지"
      />
    </LetterCard>
  );
};

export default ReplyLetter;
