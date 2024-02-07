import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import STORAGE_KEYS from '@/constants/storageKeys';

interface SoundState {
  isPlaying: boolean;
  togglePlaying: VoidFunction;
}

const useMusicStore = create<SoundState>()(
  persist(
    (set) => ({
      isPlaying: false,
      togglePlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
    }),
    {
      name: STORAGE_KEYS.isPlayingMusic,
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useMusicStore;
