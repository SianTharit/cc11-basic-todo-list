import Todo from "./Todo";

function TodoList(props) {
    return (
        <ul className="list-group shadow mt-4">
            {props.todoList.map((el) => (
                <Todo
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    completed={el.completed}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                />
            ))}
            {/* <Todo title="Homework" completed={true} />
            <Todo title="Personal project figma" completed={false} />
            <Todo title="Midterm exam" completed={false} />
            <Todo title="Lab" completed={true} /> */}
        </ul>
    );
}

export default TodoList;
