import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { useState } from "react";

function TodoSearch() {
	const [text, setText] = useState("");
	const dispatch = useDispatch();
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(text));
		setText("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className='flex w-fit mx-auto mt-20 '>
				<input type='text' placeholder='Search...' value={text} onChange={(e) => setText(e.target.value)} className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none' />
				<button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 font-medium rounded-lg text-sm px-4 mx-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800'>
					Add
				</button>
			</div>
		</form>
	);
}

export default TodoSearch;
