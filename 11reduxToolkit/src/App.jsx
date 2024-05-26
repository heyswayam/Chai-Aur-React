import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import SearchTodo from "./components/TodoSearch";
import { useSelector, useDispatch } from "react-redux";
import { setTodoList } from "./features/todoSlice";

// function App() {
//   const [liist, setLisst] = useState([]);
//   const list = useSelector((state) => state.todoList);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const storedTodos = localStorage.getItem("todos");
//     if (storedTodos) {
//       const parsedTodos = JSON.parse(storedTodos);
//       setLisst(parsedTodos); // Update the local state
//       dispatch(setTodoList(parsedTodos)); // Update the Redux state
//     }
//   }, [dispatch]);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(liist));
//   }, [liist]);

//   return (
//     <>
//       <SearchTodo />
//       {liist.map((obj) => (
//         <div key={obj.id}>
//           <TodoList obj={obj} />
//         </div>
//       ))}
//     </>
//   );
// }


// In your App component
function App() {
  const list = useSelector((state) => state.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      dispatch(setTodoList(parsedTodos)); // Update the Redux state // setTodoList is defined inside todoSlice
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <SearchTodo />
      {list.map((obj) => (
        <div key={obj.id}>
          <TodoList obj={obj} />
        </div>
      ))}
    </>
  );
}
export default App;