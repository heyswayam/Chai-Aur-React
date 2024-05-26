import { createSlice,nanoid } from "@reduxjs/toolkit";
import { startTransition } from "react";

const initialState = {
    todoList: [{
        id:1,
        text:"Hello World" 
    }]
}

export const todoSlice = createSlice({
    name: "todoApp",
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const obj = {
                id: nanoid(),
                text: action.payload
            }
            state.todoList.push(obj)
        },
        removeTodo: (state,action)=>{
            state.todoList = state.todoList.filter((obj)=>obj.id !==action.payload )
        },
        editTodo: (state,action)=>{
            state.todoList = state.todoList.map((obj)=>{
                console.log(action.payload.text);
                if (obj.id === action.payload.id) {
                    obj.text = action.payload.text;
                }
                return obj;
            })
        },
        setTodoList: (state, action) => {
            // return action.payload;
            state.todoList = action.payload;
          }
    }
})
export const {addTodo,removeTodo,editTodo,setTodoList} = todoSlice.actions

export const todoReducer = todoSlice.reducer