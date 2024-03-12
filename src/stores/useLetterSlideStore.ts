import { createStore, useStore } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  MAX_SLIDES,
  RECEPTIONS_PER_SLIDE,
  REPLIES_PER_SLIDE,
} from '@/constants/letters';
import STORAGE_KEYS from '@/constants/storageKeys';

type StateItem = {
  id: number;
  isRead: boolean;
};

type State = {
  receptions: (StateItem | null)[];
  replies: (StateItem | null)[];
};

type Action = {
  syncReceptions: (newReceptionIds: number[]) => void;
  syncReplies: (newReplyIds: number[]) => void;
  readReception: (id: number) => void;
  readReply: (id: number) => void;
};

export const letterSlideStore = createStore<State & Action>()(
  persist(
    (set) => ({
      receptions: new Array(MAX_SLIDES * RECEPTIONS_PER_SLIDE).fill(null),
      replies: new Array(MAX_SLIDES * REPLIES_PER_SLIDE).fill(null),
      syncReceptions: (newReceptionIds) =>
        set((state) => ({
          receptions: syncArrayWithNewIds(state.receptions, newReceptionIds),
        })),
      syncReplies: (newReplyIds) =>
        set((state) => ({
          replies: syncArrayWithNewIds(state.replies, newReplyIds),
        })),
      readReception: (id) =>
        set((state) => ({
          receptions: state.receptions.map((reception) =>
            reception?.id === id ? { ...reception, isRead: true } : reception,
          ),
        })),
      readReply: (id) =>
        set((state) => ({
          replies: state.replies.map((reply) =>
            reply?.id === id ? { ...reply, isRead: true } : reply,
          ),
        })),
    }),
    {
      name: STORAGE_KEYS.letterSlide,
    },
  ),
);

const useLetterSlideStore = <T>(selector: (state: State & Action) => T) =>
  useStore(letterSlideStore, selector);

export default useLetterSlideStore;

/**
 * 원본 아이템 배열에서 새로운 아이디 배열로 동기화합니다.
 * 1. 원본 아이템 배열에서 새로운 아이디 배열에 있지 않은 아이템은 null로 변경합니다.
 * 2. 새로운 아이디 배열에 있는 아이디 중 원본 배열에 없는 아이디는 새로운 아이디로 채웁니다.
 *
 * @param original 원본 아이템 배열
 * @param newIds 새로운 아이디 배열
 */
const syncArrayWithNewIds = (
  original: (StateItem | null)[],
  newIds: number[],
) => {
  const nonExistingIds = newIds.filter(
    (id) => !original.some((item) => item?.id === id),
  );

  return original
    .map((item) => (item && newIds.includes(item.id) ? item : null))
    .map((item) =>
      item
        ? item
        : nonExistingIds.length > 0
          ? { id: nonExistingIds.shift()!, isRead: false }
          : null,
    );
};
