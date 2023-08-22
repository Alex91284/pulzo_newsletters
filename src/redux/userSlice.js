import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 21,
        email: "coordinadorredaccion@pulzo.com",
        password: "123456"
    }
]
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SessionUser: (state, action) => {
            state.push(action.payload)
        },
        changePassword: (state, action) => {
            state.password = action.payload
        }
    }
})

export const { SessionUser, changePassword } = userSlice.actions
export default userSlice.reducer