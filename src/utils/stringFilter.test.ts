import { stringFilter1, stringFilter2 } from './stringFilter';

const text = '이 문장은 욕설이 없는 깨긋한 문장입니다!!!!!!!!!';
const text10 = '안녕하세요 개새끼야';
const text100 =
  '시발 시발 시발 시발 시발 씨발씨1발 개새키 개새끼 욕 하는 중 시발 시발 시발 시발 시발 씨발씨1발 개새키 개새끼 욕 하는 중 시발 시발 시발 시발 시발 씨발씨1발 개새키 개새끼';
const text300 =
  '300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 시발 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 시발 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 시발 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 시발 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 시발 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!!!! 금칙어 필터링';

const text10Filter = '안녕하세요 ***야';
const text100Filter =
  '** ** ** ** ** ***** 개** *** 욕 하는 중 ** ** ** ** ** ***** 개** *** 욕 하는 중 ** ** ** ** ** ***** 개** ***';
const text300Filter =
  '300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 ** 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 ** 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 ** 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 ** 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!! 금칙어 필터링 테스트 ** 300 삼백 글자 텍스트 이 문장에는 가끔 욕이 들어갑니다!!!!! 금칙어 필터링';

describe('욕설 필터링 - 정규식 사용', () => {
  it('정규식 사용', () => {
    console.time();
    expect(stringFilter1(text)).toBe(text);
    console.timeEnd();
  });
  it('정규식 사용 - 10글자', () => {
    console.time();
    expect(stringFilter1(text10)).toBe(text10Filter);
    console.timeEnd();
  });
  it('정규식 사용 - 100글자', () => {
    console.time();
    expect(stringFilter1(text100)).toBe(text100Filter);
    console.timeEnd();
  });
  it('정규식 사용 - 300글자', () => {
    console.time();
    expect(stringFilter1(text300)).toBe(text300Filter);
    console.timeEnd();
  });
});

describe('욕설 필터링 - 반복문 사용', () => {
  it('반복문 사용', () => {
    console.time();
    expect(stringFilter1(text)).toBe(text);
    console.timeEnd();
  });
  it('반복문 사용 - 10글자', () => {
    console.time();
    expect(stringFilter2(text10)).toBe(text10Filter);
    console.timeEnd();
  });
  it('반복문 사용 - 100글자', () => {
    console.time();
    expect(stringFilter2(text100)).toBe(text100Filter);
    console.timeEnd();
  });
  it('반복문 사용 - 300글자', () => {
    console.time();
    expect(stringFilter2(text300)).toBe(text300Filter);
    console.timeEnd();
  });
});
