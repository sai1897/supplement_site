import React from 'react'

import { create } from 'zustand'

    const useBearStore = create((set) => ({
        bears: 'Sign In',
        data:"test",
        // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
        // removeAllBears: () => set({ bears: 0 }),
        setVal:(vl)=>set({bears:vl}),

        setData:(d)=>set({data:d})
      }))
 

export default useBearStore