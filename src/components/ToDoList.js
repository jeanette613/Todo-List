//interate through seed data (hard coded NEEDS TO BE PASSED)

//https://reactjs.org/docs/components-and-props.html

export default function ToDoList(props) {
    const todolists = [
        {
            //data needs key
            key: 1,
            title: "Get out of Bed",
            done: true,
        },

        {
            key: 2,
            title: "Breath",
            done: true,
        },
        {
            key: 3,
            title: "Do better than yesterday",
            done: false,
        }
    ];

    return (
        <div className="list">
            {
                todolists.map((todolistitem) => {
                    const { key, title, done } = todolistitem;
                    return (
                        <h2>
                            <ul>
                                {title}
                                {done}
                            </ul>
                        </h2>
                    )
                })
            }
        </div>
        //https://reactjs.org/docs/faq-functions.html
        //https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
    )

};