import { createStore, useStore } from 'zustand';

type State = {
  totalPage: number;
};

type Action = {
  setTotalPage: (totalPage: number) => void;
};

export const adminPageStore = createStore<State & Action>((set) => ({
  totalPage: 1,
  setTotalPage: (totalPage) => set({ totalPage }),
}));

const useAdminPageStore = <T>(selector: (state: State & Action) => T) =>
  useStore(adminPageStore, selector);

export default useAdminPageStore;
