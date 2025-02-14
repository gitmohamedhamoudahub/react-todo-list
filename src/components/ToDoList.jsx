import ToDoListItem from "./ToDoListItem.jsx";
import {GetToDoListData} from "../data/ToDoListData.js"
import { useReducer } from "react";
function ToDoList()
{
   function reducer(state, action)
   {
        switch (action.type) {
          case "ADD":
            return [
              ...state,
              { id: Date.now(), title: action.payload, isSelected: false }
            ];
      
          case "DELETE":
            {
                console.log("DELETE: " + action.payload.id);
                return state.filter(todo => todo.id !== action.payload.id);
                    
            }
      
          case "EDIT":
            {
                console.log("EDIT: " + action.payload.id, action.payload.title);
            return state.map(todo =>
              todo.id === action.payload.id
                ? { ...todo, title: action.payload.title }
                : todo
            );
        }
          case "SELECT":
            {
            return state.map(todo =>
              todo.id === action.payload.id
                ? { ...todo, completed: !action.payload.completed }
                : todo
            );
        }
      
          default:
            return state;
        }
      }
      

    
    const [toDo, dispatch] = useReducer(reducer, [...GetToDoListData()]);
    // console.log("ToDoList", ToDoListData);
    return(
        <>
        
        <div className="toDoListContainer">
        
        <div className="toDoListHeader">To Do List</div>
        
        <div className="txtAddContainer">
        <input type="text" placeholder="Add new task..." />
        <button>📋 Add </button>
        </div>
        
        {toDo.map((item) => (
            
                    <ToDoListItem 
                    key={item.id}
                    toDo={item}
                    dispatch={dispatch} 
                     
                    />
                ))}
        </div>
        </>
    )
}

export default ToDoList;