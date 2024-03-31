import usePagination from '@mui/material/usePagination/usePagination';
import { CaretLeft, CaretRight } from '@/assets/icons';
import IconButton from '../IconButton';
import styles from './style';

interface PaginationBarProps {
  /** 현재 페이지 번호 */
  page?: number;
  /** 기본 페이지 번호 */
  defaultPage: number;
  /** 페이지 갯수 */
  count: number;
  /** 페이지 변경 이벤트 */
  onChange?: (page: number) => void;
}

const PaginationBar = ({
  page,
  defaultPage,
  count,
  onChange = () => {},
}: PaginationBarProps) => {
  const { items } = usePagination({
    siblingCount: 0,
    boundaryCount: 1,
    page,
    defaultPage,
    count,
    onChange: (_, page) => onChange(page),
  });

  return (
    <ul css={styles.container}>
      {items.map(({ page, type, selected, ...rest }, idx) => (
        <li key={idx}>
          {type === 'previous' && (
            <IconButton variant="carousel" {...rest}>
              <CaretLeft />
            </IconButton>
          )}
          {type === 'next' && (
            <IconButton variant="carousel" {...rest}>
              <CaretRight />
            </IconButton>
          )}
          {type === 'page' && (
            <button css={styles.pageItem(selected)} {...rest}>
              {page}
            </button>
          )}
          {(type === 'start-ellipsis' || type === 'end-ellipsis') && <p>...</p>}
        </li>
      ))}
    </ul>
  );
};

export default PaginationBar;
