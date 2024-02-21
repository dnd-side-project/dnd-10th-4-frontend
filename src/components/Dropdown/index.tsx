import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import style from './styles';

interface OptionProps {
  /** 옵션 아이콘 */
  icon?: React.ReactNode;
  /** 옵션 이름 */
  label: string;
  /** 옵션 색상 */
  color?: string;
  /** 옵션 클릭 이벤트 */
  onClick: () => void;
}

interface DropdownProps {
  /** 드롭다운 트리거하는 컴포넌트 */
  triggerComponent: React.ReactNode;
  /** 드롭다운 옵션 목록 */
  options: OptionProps[];
}

const Dropdown = ({ triggerComponent, options }: DropdownProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div
        css={style.trigger}
        aria-expanded={open ? true : false}
        onClick={handleClick}
      >
        {triggerComponent}
      </div>
      <Menu
        disableScrollLock={true}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              option.onClick();
              handleClose();
            }}
            css={style.option(option.color)}
          >
            {option.icon}
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Dropdown;
