import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: {
    address: "string",
    id: 0,
    name: "string",
    order_cnt: 0,
    role: "ADMINISTRATOR",
    uid: "string"
  },
  reducers : {
    changeUserState(state, action){
      state.address = action.payload.address
      state.id = action.payload.id
      state.name = action.payload.name
      state.order_cnt = action.payload.order_cnt
      state.role = action.payload.role
      state.uid = action.payload.uid
    }
  }
})

let seeModal = createSlice({
  name : 'seeModal',
  initialState : {상태 : false},
  reducers : {
    setSeeModal(state){
      state.상태 = !(state.상태);
    }
  }
})

export default configureStore({
  reducer: {
    user : user.reducer,
    seeModal : seeModal.reducer
  }
})

export let { changeUserState } = user.actions
export let { setSeeModal } = seeModal.actions