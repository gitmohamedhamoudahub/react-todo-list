import {useState, useReducer } from "react";

function ToDoListItem({toDo,dispatch})
{

    // const [DeleteEnabled, setDeleteEnabled] = useState(toDo.completed);
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(toDo.title);
  
    
         
    
    function handleCompleted()
    {
        dispatch(
            { 
                type: "SELECT", 
                payload: { 
                    id: toDo.id, 
                    completed: toDo.completed 
                   } 
            }
        );
    }
    
    const handleEdit = () => {
        setIsEditing(!isEditing);
      if (isEditing) {
        dispatch({ type: "EDIT", payload: { id: toDo.id, title:newTitle } });
        setIsEditing(!isEditing);
      }
    };
    // console.log('completed = >',completed);
    // console.log('DeleteEnabled = >',DeleteEnabled);
    return(
    <>
    <div className="toDoListItem">
        <div><input 
        type="checkbox" 
        onChange={handleCompleted} 
        checked={toDo.completed}/></div>
    
        <div>
        <input 
        type="text"
        className={`txtTask ${isEditing ? "txtTaskEditMode" : "txtTask"}`} 
        value={newTitle}
        readOnly={!isEditing}
        onChange={(e) => setNewTitle(e.target.value)} 
        >
            </input></div>
        <div>
            <button className="btnToDoEdit" 
            onClick={handleEdit}>  
            {isEditing ? "✔ Save" : "📝 Edit"}
            </button>
            </div>
        <div><button 
        className="btnToDoDelete" 
        disabled={!toDo.completed}  
        onClick={() => dispatch({ type: "DELETE", payload: toDo.id })}>
            🗑️ Delete</button></div>
            
    </div>
    
    </>
    )
}
export default ToDoListItem;