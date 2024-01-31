import { useSuspenseQuery } from '@tanstack/react-query';
import testOptions from '@/api/test/queryOptions';

interface MSWTestCardProps {
  testId: string;
}

const MSWTestCard = ({ testId }: MSWTestCardProps) => {
  const { data } = useSuspenseQuery({
    ...testOptions.detail(testId),
  });

  return (
    <div>
      <div>반갑습니다</div>
      <div>{data.id}</div>
      <div>{data.name}</div>
    </div>
  );
};

export default MSWTestCard;
