import Chip from '@/components/Chip';
import style from './styles';

interface TagsProps {
  tags: string[];
  variant?: 'tag' | 'filter';
}

const TagList = ({ tags, variant = 'tag' }: TagsProps) => {
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
