import {
  formatTimechipDate,
  getTimeDifference,
  isValidDate,
} from './dateUtils';

describe('formatTimechipDate', () => {
  it('두 날짜의 차이를 TimeChip에서 사용되는 문자열 형태로 반환해야 한다', () => {
    expect(
      formatTimechipDate(
        new Date('2021-01-01T00:00:00'),
        new Date('2021-01-01T00:01:00'),
      ),
    ).toBe('01m');

    expect(
      formatTimechipDate(
        new Date('2021-01-01T00:00:00'),
        new Date('2021-01-01T00:59:00'),
      ),
    ).toBe('59m');

    expect(
      formatTimechipDate(
        new Date('2021-01-01T00:00:00'),
        new Date('2021-01-01T01:00:00'),
      ),
    ).toBe('01h');

    expect(
      formatTimechipDate(
        new Date('2021-01-01T00:00:00'),
        new Date('2021-01-03T00:00:00'),
      ),
    ).toBe('48h');
  });

  it('from이 to보다 크면 00m을 반환해야 한다.', () => {
    expect(
      formatTimechipDate(
        new Date('2022-01-01T00:00:00'),
        new Date('2021-01-01T00:00:00'),
      ),
    ).toBe('00m');
  });

  it('유효하지 않은 Date 객체가 들어오면 에러를 반환해야 한다', () => {
    expect(() => {
      formatTimechipDate(new Date('이상한문자열'), new Date());
    }).toThrowError('Invalid Date');

    expect(() => {
      formatTimechipDate(new Date(), new Date('이상한문자열'));
    }).toThrowError('Invalid Date');
  });
});

describe('isValidDate', () => {
  it('정상적인 Date 객체이면 true를, 아니면 false를 반환해야 한다', () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate(new Date('December 17, 1995 03:24:00'))).toBe(true);
    expect(isValidDate(new Date(1995, 11, 17, 3, 24, 0))).toBe(true);
    expect(isValidDate(new Date(1995, 11, 17))).toBe(true);
    expect(isValidDate(new Date('2021-01-01'))).toBe(true);
    expect(isValidDate(new Date('2021-01-01T00:00:00'))).toBe(true);
    expect(isValidDate(new Date('이상한문자열'))).toBe(false);
  });
});

describe('getTimeDifference', () => {
  it('두 날짜의 차이를 반환해야 한다', () => {
    expect(
      getTimeDifference(
        new Date('2021-01-01T00:00:00'),
        new Date('2021-01-01T00:00:01'),
      ),
    ).toEqual({
      second: 1,
      minute: 0,
      hour: 0,
    });

    expect(
      getTimeDifference(
        new Date('2021-01-01T00:00:00'),
        new Date('2021-01-01T00:01:00'),
      ),
    ).toEqual({
      second: 60,
      minute: 1,
      hour: 0,
    });

    expect(
      getTimeDifference(
        new Date('2021-01-01T00:00:00'),
        new Date('2021-01-01T01:00:00'),
      ),
    ).toEqual({
      second: 3600,
      minute: 60,
      hour: 1,
    });

    expect(
      getTimeDifference(
        new Date('2021-01-01T00:00:00'),
        new Date('2021-01-02T00:00:00'),
      ),
    ).toEqual({
      second: 86400,
      minute: 1440,
      hour: 24,
    });

    expect(
      getTimeDifference(
        new Date('2021-01-01T00:00:00'),
        new Date('2022-01-01T00:00:00'),
      ),
    ).toEqual({
      second: 31536000,
      minute: 525600,
      hour: 8760,
    });
  });

  it('from이 to보다 크면 시간 차이는 마이너스가 아닌 0을 반환해야 한다.', () => {
    expect(
      getTimeDifference(
        new Date('2022-01-01T00:00:00'),
        new Date('2021-01-01T00:00:00'),
      ),
    ).toEqual({
      second: 0,
      minute: 0,
      hour: 0,
    });
  });

  it('유효하지 않은 Date 객체가 들어오면 에러를 반환해야 한다', () => {
    expect(() => {
      getTimeDifference(new Date('이상한문자열'), new Date());
    }).toThrowError('Invalid Date');

    expect(() => {
      getTimeDifference(new Date(), new Date('이상한문자열'));
    }).toThrowError('Invalid Date');
  });
});
