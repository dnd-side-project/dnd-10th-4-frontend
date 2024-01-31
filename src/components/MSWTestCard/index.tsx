import { useSuspenseQuery } from '@tanstack/react-query';
import testOptions from '@/api/test/queryOptions';

interface MSWTestCardProps {
  testId: string;
}

/**
 * API 모킹 테스트용 컴포넌트입니다.
 * useSuspenseQuery를 사용하여 데이터를 불러오는 비동기 컴포넌트이므로 Suspense로 감싸주어야 합니다.
 *
 * 스토리북에서는 decorators를 사용하여 감싸주었습니다.
 */
const MSWTestCard = ({ testId }: MSWTestCardProps) => {
  const { data } = useSuspenseQuery({
    ...testOptions.detail(testId),
  });

  return (
    <div>
      <div>{data.id}</div>
      <div>{data.name}</div>
      <div>{data.content}</div>
    </div>
  );
};

export default MSWTestCard;
