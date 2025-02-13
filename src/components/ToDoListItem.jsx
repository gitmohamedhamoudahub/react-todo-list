import {useState, useReducer } from "react";

function ToDoListItem({title,completed})
{

    const [toDo, dispatch] = useReducer(reducer, {title,completed});
    const [DeleteEnabled, setDeleteEnabled] = useState(completed);
    
     function reducer(state, action)
     {
        const ACTIONS = {
            ADD: 'add',
            DELETE: 'delete',
            EDIT: 'edit',
            SELECT: 'select'
            }

         switch(action.type)
         {
             case "SELECT":
                 {
                    console.log(DeleteEnabled);
                    setDeleteEnabled((flag)=> flag = !flag);
                    console.log(DeleteEnabled);
                    return {...state, completed:!state.completed}};
             case "EDIT":
                 return {...state, title: action.title};
             case "ADD":
                 return {...state, title: action.title};
             case "DELETE":
                 return {...state, title: action.title};
                default:
                 return state;
         }
     }
    function handleEdit()
    {
        dispatch({type: "EDIT", title: "New Title"})
    }     
    function handleSelect()
    {
        dispatch({type: "SELECT"})
    }
    function handleCompleted()
    {
        setDeleteEnabled((prev)=> !prev)
    }
    console.log('completed = >',completed);
    console.log('DeleteEnabled = >',DeleteEnabled);
    return(
    <>
    <div className="toDoListItem">
        <div><input type="checkbox" onChange={handleCompleted} checked={DeleteEnabled}/></div>
    
        <div><input className="txtTask" value={title} readOnly ></input></div>
        <div><button className="btnToDoEdit" onClick={handleEdit}>📝 Edit</button></div>
        <div><button className="btnToDoDelete" disabled={!DeleteEnabled}>🗑️ Delete</button></div>
            
    </div>
    
    </>
    )
}
export default ToDoListItem;