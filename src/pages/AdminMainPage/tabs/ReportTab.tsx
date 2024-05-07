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
import { MoreHorizontal, TrashCan } from '@/assets/icons';
import COLORS from '@/constants/colors';
import { REPORT_TYPE_DICT } from '@/constants/report';
import useBoolean from '@/hooks/useBoolean';
import { debounce } from '@/utils/timerUtils';
import usePagedReportQuery from '../hooks/usePagedReportQuery';
import styles from '../style';
import UserExpelBottomSheet from '../components/UserExpelBottomSheet';

interface SuspensedReportTabProps {
  email?: string;
}

const SuspensedReportTab = ({ email }: SuspensedReportTabProps) => {
  const { data } = usePagedReportQuery(email);
  const [expelEmail, setExpelEmail] = useState('');
  const userExpelBottomSheetProps = useBoolean(false);

  const handleOpenExpelModal = (email: string) => {
    setExpelEmail(email);
    userExpelBottomSheetProps.on();
  };

  return (
    <>
      <UserExpelBottomSheet
        expelEmail={expelEmail}
        {...userExpelBottomSheetProps}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>유형</TableCell>
              <TableCell>신고 대상</TableCell>
              <TableCell>제보자</TableCell>
              <TableCell>신고 내용</TableCell>
              <TableCell align="right">동작</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.letters.map((letter) => (
              <TableRow key={letter.id}>
                <TableCell>{REPORT_TYPE_DICT[letter.reportType]}</TableCell>
                <TableCell>{letter.reportedEmail}</TableCell>
                <TableCell>{letter.reporterEmail}</TableCell>
                <TableCell>{letter.content}</TableCell>
                <TableCell align="right">
                  <Dropdown
                    triggerComponent={<MoreHorizontal />}
                    options={[
                      {
                        icon: <TrashCan width={20} height={20} />,
                        label: '회원 탈퇴',
                        onClick: () =>
                          handleOpenExpelModal(letter.reportedEmail),
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

const ReportTab = () => {
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

      <SuspensedReportTab email={email} />
    </div>
  );
};

export default ReportTab;
