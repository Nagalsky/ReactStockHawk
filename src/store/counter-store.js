import create from 'zustand'

const counterStore = create((set) => ({
  counter: [15, 123, 1212, 121124],
  increase: () => set((state) => ({ counter: state.counter + 1 })),
  remove: () => set({ counter: 0 }),
}))

export default counterStore
