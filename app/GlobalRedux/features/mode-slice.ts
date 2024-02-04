import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const mode = createSlice({
    name: 'mode',
    initialState: {
        mode: "dark"
    } as { mode: string },
    reducers: {
        changeMode: (state, action: PayloadAction<string>) => {
            return { mode: action.payload, }
        }
    }
})

export const { changeMode } = mode.actions
export default mode.reducer