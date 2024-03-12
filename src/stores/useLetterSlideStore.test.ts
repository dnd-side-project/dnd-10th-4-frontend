import { letterSlideStore } from './useLetterSlideStore';

beforeEach(() => {
  letterSlideStore.setState({
    receptions: new Array(16).fill(null),
    replies: new Array(8).fill(null),
  });
});

describe('syncReceptions', () => {
  it('새로운 ID 배열 인자에 맞춰서 스토어의 상태가 동기화된다.', () => {
    // 최초에는 모든 원소가 null이다.
    expect(letterSlideStore.getState().receptions).toEqual(
      new Array(16).fill(null),
    );

    // 새로운 reception을 추가할 수 있다.
    letterSlideStore.getState().syncReceptions([1, 2, 3, 4, 5]);
    expect(letterSlideStore.getState().receptions).toEqual([
      { id: 1, isRead: false },
      { id: 2, isRead: false },
      { id: 3, isRead: false },
      { id: 4, isRead: false },
      { id: 5, isRead: false },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);

    // 인자로 주어진 배열의 원소에 포함되지 않는 원소는 null로 변경된다.
    letterSlideStore.getState().syncReceptions([2, 5]);
    expect(letterSlideStore.getState().receptions).toEqual([
      null,
      { id: 2, isRead: false },
      null,
      null,
      { id: 5, isRead: false },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);

    // 새로운 원소는 앞에서부터 채워지며, 기존 원소의 순서는 유지된다.
    letterSlideStore.getState().syncReceptions([2, 6, 7, 8, 5]);
    expect(letterSlideStore.getState().receptions).toEqual([
      { id: 6, isRead: false },
      { id: 2, isRead: false },
      { id: 7, isRead: false },
      { id: 8, isRead: false },
      { id: 5, isRead: false },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  });

  it('최대 길이를 넘어가면 초과된 길이만큼은 무시된다.', () => {
    letterSlideStore
      .getState()
      .syncReceptions([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      ]);
    expect(letterSlideStore.getState().receptions).toEqual([
      { id: 1, isRead: false },
      { id: 2, isRead: false },
      { id: 3, isRead: false },
      { id: 4, isRead: false },
      { id: 5, isRead: false },
      { id: 6, isRead: false },
      { id: 7, isRead: false },
      { id: 8, isRead: false },
      { id: 9, isRead: false },
      { id: 10, isRead: false },
      { id: 11, isRead: false },
      { id: 12, isRead: false },
      { id: 13, isRead: false },
      { id: 14, isRead: false },
      { id: 15, isRead: false },
      { id: 16, isRead: false },
    ]);
  });
});

describe('syncReplies', () => {
  it('새로운 ID 배열 인자에 맞춰서 스토어의 상태가 동기화된다.', () => {
    // 최초에는 모든 원소가 null이다.
    expect(letterSlideStore.getState().replies).toEqual(
      new Array(8).fill(null),
    );

    // 새로운 reply를 추가할 수 있다.
    letterSlideStore.getState().syncReplies([1, 2, 3, 4, 5]);
    expect(letterSlideStore.getState().replies).toEqual([
      { id: 1, isRead: false },
      { id: 2, isRead: false },
      { id: 3, isRead: false },
      { id: 4, isRead: false },
      { id: 5, isRead: false },
      null,
      null,
      null,
    ]);

    // 인자로 주어진 배열의 원소에 포함되지 않는 원소는 null로 변경된다.
    letterSlideStore.getState().syncReplies([2, 5]);
    expect(letterSlideStore.getState().replies).toEqual([
      null,
      { id: 2, isRead: false },
      null,
      null,
      { id: 5, isRead: false },
      null,
      null,
      null,
    ]);

    // 새로운 원소는 앞에서부터 채워지며, 기존 원소의 순서는 유지된다.
    letterSlideStore.getState().syncReplies([2, 6, 7, 8, 5]);
    expect(letterSlideStore.getState().replies).toEqual([
      { id: 6, isRead: false },
      { id: 2, isRead: false },
      { id: 7, isRead: false },
      { id: 8, isRead: false },
      { id: 5, isRead: false },
      null,
      null,
      null,
    ]);
  });

  it('최대 길이를 넘어가면 초과된 길이만큼은 무시된다.', () => {
    letterSlideStore.getState().syncReplies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(letterSlideStore.getState().replies).toEqual([
      { id: 1, isRead: false },
      { id: 2, isRead: false },
      { id: 3, isRead: false },
      { id: 4, isRead: false },
      { id: 5, isRead: false },
      { id: 6, isRead: false },
      { id: 7, isRead: false },
      { id: 8, isRead: false },
    ]);
  });
});

describe('readReception', () => {
  it('특정 reception을 읽음 처리하여 isRead가 true로 변경된다.', () => {
    letterSlideStore.getState().syncReceptions([0, 1, 2, 3, 4]);
    letterSlideStore.getState().readReception(3);
    expect(letterSlideStore.getState().receptions[3]).toEqual({
      id: 3,
      isRead: true,
    });

    letterSlideStore.getState().readReception(1);
    expect(letterSlideStore.getState().receptions[1]).toEqual({
      id: 1,
      isRead: true,
    });

    expect(letterSlideStore.getState().receptions).toEqual([
      { id: 0, isRead: false },
      { id: 1, isRead: true },
      { id: 2, isRead: false },
      { id: 3, isRead: true },
      { id: 4, isRead: false },
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  });
});

describe('readReply', () => {
  it('특정 reply를 읽음 처리하여 isRead가 true로 변경된다', () => {
    letterSlideStore.getState().syncReplies([0, 1, 2, 3, 4]);
    letterSlideStore.getState().readReply(4);
    expect(letterSlideStore.getState().replies[4]).toEqual({
      id: 4,
      isRead: true,
    });

    letterSlideStore.getState().readReply(0);
    expect(letterSlideStore.getState().replies[0]).toEqual({
      id: 0,
      isRead: true,
    });

    expect(letterSlideStore.getState().replies).toEqual([
      { id: 0, isRead: true },
      { id: 1, isRead: false },
      { id: 2, isRead: false },
      { id: 3, isRead: false },
      { id: 4, isRead: true },
      null,
      null,
      null,
    ]);
  });
});

describe('hasReadReception', () => {
  it('특정 reception이 읽혀진 상태인지를 반환한다.', () => {
    letterSlideStore.getState().syncReceptions([0, 1, 2, 3, 4]);
    expect(letterSlideStore.getState().hasReadReception(3)).toBe(false);

    letterSlideStore.getState().readReception(3);
    expect(letterSlideStore.getState().hasReadReception(3)).toBe(true);
  });
});

describe('hasReadReply', () => {
  it('특정 reply가 읽혀진 상태인지를 반환한다.', () => {
    letterSlideStore.getState().syncReplies([0, 1, 2, 3, 4]);
    expect(letterSlideStore.getState().hasReadReply(1)).toBe(false);

    letterSlideStore.getState().readReply(1);
    expect(letterSlideStore.getState().hasReadReply(1)).toBe(true);
  });
});
