import create from 'zustand';

const useCryptoStore = create((set) => ({
  myTokens: [],

  addToMyTokens: (tokenData) => set((state) => ({ myTokens: [...state.myTokens, tokenData] })),
}));

export default useCryptoStore;