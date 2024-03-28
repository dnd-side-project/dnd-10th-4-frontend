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
import LoadingSpinner from '@/components/LoadingSpinner';
import { Copy, MoreHorizontal, TrashCan } from '@/assets/icons';
import COLORS from '@/constants/colors';
import { REPORT_TYPE_DICT } from '@/constants/report';
import usePagedReportQuery from '../hooks/usePagedReportQuery';
import styles from '../style';

interface SuspensedReportTabProps {
  email?: string;
}

const SuspensedReportTab = ({ email }: SuspensedReportTabProps) => {
  const { data } = usePagedReportQuery(email);

  return (
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

const ReportTab = () => {
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
        <SuspensedReportTab email={email} />
      </Suspense>
    </div>
  );
};

export default ReportTab;
