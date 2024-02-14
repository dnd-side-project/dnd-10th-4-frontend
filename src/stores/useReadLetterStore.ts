import { StateCreator, createStore, useStore } from 'zustand';
import { persist } from 'zustand/middleware';
import STORAGE_KEYS from '@/constants/storageKeys';
import { pushUniqueItemToArray } from '@/utils/arrayUtils';

interface ReceptionSlice {
  receptions: number[];
  addReception: (receptionId: number) => void;
}

interface ReplySlice {
  replies: number[];
  addReply: (replyId: number) => void;
}

const createReceptionSlice: StateCreator<ReceptionSlice> = (set) => ({
  receptions: [],
  addReception: (receptionId) =>
    set((state) => ({
      receptions: pushUniqueItemToArray(state.receptions, receptionId),
    })),
});

const createReplySlice: StateCreator<ReplySlice> = (set) => ({
  replies: [],
  addReply: (replyId) =>
    set((state) => ({
      replies: pushUniqueItemToArray(state.replies, replyId),
    })),
});

type ReadLetterStore = ReceptionSlice & ReplySlice;

export const readLetterStore = createStore<ReadLetterStore>()(
  persist(
    (...a) => ({
      ...createReceptionSlice(...a),
      ...createReplySlice(...a),
    }),
    {
      name: STORAGE_KEYS.readLetter,
    },
  ),
);

const useReadLetterStore = <T>(selector: (state: ReadLetterStore) => T) =>
  useStore(readLetterStore, selector);

export default useReadLetterStore;
