import Chip from '@/components/Chip';
import style from './styles';

interface tagsProps {
  tags: string[];
  variant?: 'tag' | 'filter';
}

const TagList = ({ tags, variant = 'tag' }: tagsProps) => {
  return (
    <div css={style.tagList}>
      {tags.map((tag) => (
        <Chip key={tag} variant={variant}>
          {tag}
        </Chip>
      ))}
    </div>
  );
};

export default TagList;
