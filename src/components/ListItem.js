import toDoData from "../data";

const ListItem = (props) => {
    //https://reactjs.org/docs/components-and-props.html
    return (
        <ul onClick={() => props.action(props.data)} >
            {props.data.title}
        </ul>
    );
};

export default ListItem;