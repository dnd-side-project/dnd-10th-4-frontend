import { useState, ChangeEvent } from 'react';
import useBoolean from '@/hooks/useBoolean';
import BottomSheet from '../BottomSheet';
import Button from '../Button';
import style from './styles';
import Radio from './components/Radio';

interface ReportBottomSheetProps extends ReturnType<typeof useBoolean> {}

const reportList = [
  { text: '욕설', value: 'a' },
  { text: '광고 및 도배', value: 'b' },
  { text: '음란성 게시물', value: 'c' },
  { text: '그 외 부적절한 내용', value: 'd' },
];

const ReportBottomSheet = ({ value, on, off }: ReportBottomSheetProps) => {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  const onChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedReport(e.target.value);
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <div css={style.container}>
        <div>
          <BottomSheet.Title>신고하기</BottomSheet.Title>
        </div>
        <div css={style.radioContainer}>
          {reportList.map((report) => (
            <Radio
              key={report.value}
              value={report.value}
              text={report.text}
              selectedValue={selectedReport}
              onChange={onChangeRadio}
            />
          ))}
        </div>
        <div css={style.textareaContainer}>
          <label htmlFor="reportDetails">상세 내용</label>
          <textarea
            css={style.textarea}
            id="reportDetails"
            placeholder="상세내용을 적어주세요."
            rows={5}
            maxLength={150}
          />
        </div>
      </div>
      <BottomSheet.ButtonSection>
        <Button variant="cancel" onClick={off}>
          취소하기
        </Button>
        <Button variant="danger">신고하기</Button>
      </BottomSheet.ButtonSection>
    </BottomSheet>
  );
};

export default ReportBottomSheet;
