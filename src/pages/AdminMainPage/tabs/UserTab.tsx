import { Suspense, useState } from 'react';
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
import LoadingSpinner from '@/components/LoadingSpinner';
import usePagedUserQuery from '../hooks/usePagedUserQuery';
import styles from '../style';

interface SuspensedUserTabProps {
  email: string;
}

const SuspensedUserTab = ({ email }: SuspensedUserTabProps) => {
  const { data } = usePagedUserQuery(email);

  return (
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
                      label: '복사하기',
                      onClick: () => {
                        console.log('복사히기 클릭');
                      },
                      color: COLORS.gray2,
                    },
                    {
                      icon: <TrashCan width={20} height={20} />,
                      label: '삭제하기',
                      onClick: () => {
                        console.log('삭제하기 클릭');
                      },
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
  );
};

const UserTab = () => {
  const [email, setEmail] = useState('');

  return (
    <div css={styles.tabContent}>
      <input
        css={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="검색할 이메일을 입력하세요"
      />

      <Suspense fallback={<LoadingSpinner />}>
        <SuspensedUserTab email={email} />
      </Suspense>
    </div>
  );
};

export default UserTab;
