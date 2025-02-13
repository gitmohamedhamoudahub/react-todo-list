function ToDoListItem()
{
    return(
    <>
    <div className="toDoListItem">
        <input type="checkbox" />
        <span>Task 1</span>
        <button className="btnToDoDelete">🗑️ Delete</button>
    </div>
    </>
    )
}
export default ToDoListItem;