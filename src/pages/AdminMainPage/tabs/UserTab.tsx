import { useMemo, useState } from 'react';
import Paper from '@mui/material/Paper';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Dropdown from '@/components/Dropdown';
import { Copy, MoreHorizontal, TrashCan } from '@/assets/icons';
import COLORS from '@/constants/colors';
import useBoolean from '@/hooks/useBoolean';
import { debounce } from '@/utils/timerUtils';
import usePagedUserQuery from '../hooks/usePagedUserQuery';
import styles from '../style';
import UserExpelBottomSheet from '../components/UserExpelBottomSheet';
import LetterWriterModal from '../components/LetterWriterModal';

interface SuspensedUserTabProps {
  searchEmail: string;
}

const SuspensedUserTab = ({ searchEmail }: SuspensedUserTabProps) => {
  const { data } = usePagedUserQuery(searchEmail);
  const [expelEmail, setExpelEmail] = useState('');
  const [writerTargetEmail, setWriterTargetEmail] = useState('');
  const userExpelBottomSheetProps = useBoolean(false);
  const letterWriterModalProps = useBoolean(false);

  const handleOpenExpelModal = (email: string) => {
    setExpelEmail(email);
    userExpelBottomSheetProps.on();
  };

  const handleOpenWriterModal = (email: string) => {
    setWriterTargetEmail(email);
    letterWriterModalProps.on();
  };

  return (
    <>
      <UserExpelBottomSheet
        expelEmail={expelEmail}
        {...userExpelBottomSheetProps}
      />
      <LetterWriterModal
        targetEmail={writerTargetEmail}
        {...letterWriterModalProps}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>이메일</TableCell>
              <TableCell>닉네임</TableCell>
              <TableCell align="right">동작</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.members.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.email}</TableCell>
                <TableCell>{member.nickname}</TableCell>
                <TableCell align="right">
                  <Dropdown
                    triggerComponent={<MoreHorizontal />}
                    options={[
                      {
                        icon: <Copy width={20} height={20} />,
                        label: '편지 보내기',
                        onClick: () => handleOpenWriterModal(member.email),
                        color: COLORS.gray2,
                      },
                      {
                        icon: <TrashCan width={20} height={20} />,
                        label: '회원 탈퇴',
                        onClick: () => handleOpenExpelModal(member.email),
                        color: COLORS.danger,
                      },
                    ]}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

const UserTab = () => {
  const [email, setEmail] = useState('');

  const handleDebouncedSearch = useMemo(
    () =>
      debounce((e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
      }, 500),
    [],
  );

  return (
    <div css={styles.tabContent}>
      <input
        css={styles.input}
        onChange={handleDebouncedSearch}
        placeholder="검색할 이메일을 입력하세요"
      />

      <SuspensedUserTab searchEmail={email} />
    </div>
  );
};

export default UserTab;
