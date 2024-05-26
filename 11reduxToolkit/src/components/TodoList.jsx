import { useDispatch, useSelector } from "react-redux";
import { removeTodo, editTodo } from "../features/todoSlice";
import { useState } from "react";
export default function TodoList({ obj }) {
	const [input, setInput] = useState(obj.text || "");
	const [isEditable, setIsEditable] = useState(false);
	const list = useSelector((state) => state.todoList);

	const dispatch = useDispatch();
	const handleEdit = (id ) => {
        console.log("handleEdit: "+JSON.stringify(list));
        if(isEditable) dispatch(editTodo({ id: id, text: input }));
		setIsEditable((prev) => !prev);
	};
	return (
		<div className='p-5'>
			<div key={obj.id} className='flex mx-auto w-3/6 items-center justify-between bg-gray-100 p-4 my-2 rounded-md shadow-sm'>
				<input type='text' name='textinput' id='textInput' className='text-lg font-medium' readOnly={!isEditable} value={input} onChange={(e) => setInput(e.target.value)} />
				{/* delete button */}
                <button onClick={() => dispatch(removeTodo(obj.id))} className='bg-red-300 text-white px-2 py-1 rounded hover:bg-red-400 transition-colors duration-200'>
					❌
				</button>
                {/* edit button */}
				<button onClick={() => handleEdit(obj.id )} className='bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors duration-200'>
					{isEditable ? "📁" : "✏"}
				</button>
			</div>
		</div>
	);
}
