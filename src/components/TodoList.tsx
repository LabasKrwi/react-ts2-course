import { ITodo } from "../types/data"
import { TodoItem } from "./TodoItem";

interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id:number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    const {items, removeTodo, toggleTodo} = props;

    return <div>
        {
            items.map(todo => (
            <TodoItem 
                key={todo.id} 
                removeTodo={removeTodo} 
                toggleTodo={toggleTodo} 
                {...todo} />
            ))
        }
    </div>
}

export {TodoList}