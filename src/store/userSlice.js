import { configureStore, createSlice } from "@reduxjs/toolkit";


// 리덕스에서는 스테이트를 슬라이스라 부름
let user = createSlice({
    // name : 'state 이름...',
    // initialState : '값'
    // 과 동일 
    // let user = useState('kim);
    name: 'user',
    initialState: { name: 'kim', age: 20 },
    reducers: {
        changeName(state) {
            state.name = 'park';
        },
        increase(state, action) {
            state.age = state.age + action.payload;
        }
    }
})

export let { changeName, increase } = user.actions
export default user;