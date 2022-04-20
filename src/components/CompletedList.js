import ListItem from "./ListItem";

const CompletedList = ({ doneList, remove }) => {
    return (
        <>
            <h2>Completed Items:</h2>
            <ul>
                {doneList.map((item, idx) => (
                    <ListItem key={item.key} data={item} label={"Remove"} />
                ))}
            </ul>

        </>
    );

};

//https://reactjs.org/docs/faq-functions.html}
//https://upmostly.com/tutorials/react-onclick-event-handling-with-examples}
export default CompletedList;