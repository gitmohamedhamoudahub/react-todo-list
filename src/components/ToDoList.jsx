import ToDoListItem from "./ToDoListItem.jsx";
function ToDoList()
{
    return(
        <>
        <div className="toDoListContainer">
        <div className="toDoListHeader">To Do List</div>
        
            <ToDoListItem/>
            <ToDoListItem/>
            <ToDoListItem/>       
        </div>
        </>
    )
}

export default ToDoList;