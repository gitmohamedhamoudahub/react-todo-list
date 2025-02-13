import ToDoListItem from "./ToDoListItem.jsx";
import {GetToDoListData} from "../data/ToDoListData.js"
// import { useReducer } from "react";
function ToDoList()
{
   
    const ToDoListData = GetToDoListData();
    // const [toDo, dispatch] = useReducer(reducer, [...ToDoListData]);
    console.log("ToDoList", ToDoListData);
    return(
        <>
        
        <div className="toDoListContainer">
        
        <div className="toDoListHeader">To Do List</div>
        
        <div className="txtAddContainer">
        <input type="text" placeholder="Add new task..." />
        <button>📋 Add </button>
        </div>
        
        {ToDoListData.map((item, index) => (
            
                    <ToDoListItem 
                    key={index} 
                    title={item.title} 
                    completed={item.completed} 
                    />
                ))}
        </div>
        </>
    )
}

export default ToDoList;