//import toDoData from "../data";
//cant import here data has to be iterrated over both completed AND pending so cant be done stored here

const ListItem = (props) => {
    //https://reactjs.org/docs/components-and-props.html
    return (
        <ul onClick={() => props.action(props.data)} >
            {props.data.title}
        </ul>
    );
};

export default ListItem;