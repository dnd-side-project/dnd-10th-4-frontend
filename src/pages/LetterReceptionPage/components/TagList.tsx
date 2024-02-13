import { css } from '@emotion/react';
import Chip from '@/components/Chip';

interface tagsProps {
  tags: string[];
}

const TagList = ({ tags }: tagsProps) => {
  return (
    <div css={style.tag}>
      {tags.map((tag) => (
        <Chip key={tag} variant="filter">
          {tag}
        </Chip>
      ))}
    </div>
  );
};

export default TagList;

const style = {
  tag: css`
    display: flex;
    gap: 0.5rem;
  `,
};
