import { stringFilter1, stringFilter2 } from './stringFilter';

const text10 = '안녕하세요 개새끼야';
const text100 =
  '시발 시발 시발 시발 시발 씨발씨1발 개새키 개새끼 욕 하는 중 시발 시발 시발 시발 시발 씨발씨1발 개새키 개새끼 욕 하는 중 시발 시발 시발 시발 시발 씨발씨1발 개새키 개새끼';
const text300 =
  '300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 시발 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 시발 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 시발 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 시발 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 시발 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!!!! 금칙어 필터링';

describe('욕설 필터링 - 정규식 사용', () => {
  it('정규식 사용 - 10글자', () => {
    console.time();
    console.log(stringFilter1(text10));
    console.timeEnd();
  });
  it('정규식 사용 - 100글자', () => {
    console.time();
    console.log(stringFilter1(text100));
    console.timeEnd();
  });
  it('정규식 사용 - 300글자', () => {
    console.time();
    console.log(stringFilter1(text300));
    console.timeEnd();
  });
});

describe('욕설 필터링 - 반복문 사용', () => {
  it('반복문 사용 - 10글자', () => {
    console.time();
    console.log(stringFilter2(text10));
    console.timeEnd();
  });
  it('반복문 사용 - 100글자', () => {
    console.time();
    console.log(stringFilter2(text100));
    console.timeEnd();
  });
  it('반복문 사용 - 300글자', () => {
    console.time();
    console.log(stringFilter2(text300));
    console.timeEnd();
  });
});
