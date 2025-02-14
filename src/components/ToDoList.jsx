import ToDoListItem from "./ToDoListItem.jsx";
import {GetToDoListData} from "../data/ToDoListData.js"
import { useReducer, useState } from "react";
function ToDoList()
{

    const [toDo, dispatch] = useReducer(reducer, 
        [...GetToDoListData()].sort(function(a, b){return b.id - a.id}));

    const[addedItem, setAddedItem]= useState('');

   function reducer(state, action)
   {
        switch (action.type) {
          case "ADD":
            {
                if(action.payload.title.trim() == '' ) return state;
                console.log('ADDING',action.payload);
                return  [{
                    userId: action.payload.userId, 
                    id: action.payload.id, 
                    title: action.payload.title, 
                    completed: action.payload.completed,
                    },
                    ...state ]
                    
        }
      
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
      

    
    
    function handleAdd(title)
    {
        dispatch({ type: "ADD", payload: { 
            userId: 1,
            id: toDo.length + 1,
            title: addedItem,
            completed: false
        } });
        setAddedItem('');
    }
    return(
        <>
        
        <div className="toDoListContainer">
        
        <div className="toDoListHeader">📋 ToDo List 📋</div>
        
        <div className="txtAddContainer">
        
        <input 
        type="text" 
        onChange={(e) => setAddedItem(e.target.value)} 
        value={addedItem}
        placeholder="Add new task..." />
        
        <button onClick={handleAdd}>➕ Add </button>
        
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