import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let stock = createSlice({
    name: 'stock',
    initialState: [10, 11, 12],
    reducers: {
        changestock() {
        }
    }
}) // {stock : [10, 11 ,12]}

// 리덕스 사용하여 수정함수 만드는 순서
// 1. 수정함수 만들기
// 2. export 
// 3. 원하는 곳에서 import 
let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: "white and Black", count: 1 },
        { id: 1, name: "Grey Yordan", count: 1 },
    ],
    reducers: {
        addCount(state, action) {
            let index = state.findIndex((a)=>{return action.payload === a.id})
            state[index].count++;
        },
        // 주문하기 버튼을 누르면 장바구니에 추가
        addItem(state, action){
            state.push(action.payload)
        },

        subItem(state , action){
            //배열에서 특정 인덱스의 요소를 삭제
            state.splice(action.payload, 1);
        }
    }
})

export let { addCount , addItem , subItem} = cart.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        cart: cart.reducer
    }
});

