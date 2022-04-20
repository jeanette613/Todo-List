//interate through seed data (hard coded NEEDS TO BE PASSED) needs to pass to two siblings so cant live here BUT you can import calling of the content
import ListItem from "./ListItem";

const ToDoList = ({ toDoLists, movetoCompl }) => {
    return (
        <>
            <h2> A To Do List</h2>
            <ul>
                {toDoLists.map((item, idx) => (
                    <ListItem key={item.key} data={item} label={"Done"} />
                ))}
            </ul>

        </>
    );

};

//https://reactjs.org/docs/faq-functions.html}
//https://upmostly.com/tutorials/react-onclick-event-handling-with-examples}
export default ToDoList;