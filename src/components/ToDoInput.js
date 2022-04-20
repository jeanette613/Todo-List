//input form for new task
import { useState } from "react";

export default ({ handleAdd }) => {
    const [item, setItem] = useState('');
    //https://code-paper.com/javascript/examples-target-value-in-react
    const holdItem = (e) => {
        setItem(e.target.item)
    };
    const resetForm = (e) => {
        //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
        e.preventDefault();
        handleAdd(item);
        setItem("");
    };
    return (
        <form onSubmit={resetForm}>
            <input type="text" value={item} onChange={holdItem} />
            <input type="submit" value="Add" />

        </form>
    );
};