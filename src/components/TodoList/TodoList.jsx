import { Todo } from "../Todo"
import { TodoFilters } from "../TodoFilters"

const TodoList = ({
    todos,
    activeFilter,
    handleSetCompleted,
    handleDelete,
    handleClearCompleted,
    showAllTodos,
    showActiveTodos,
    showCompletedTodos }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => (
                <Todo 
                    key={todo.id} 
                    todo={todo} 
                    handleSetCompleted={handleSetCompleted} 
                    handleDelete={handleDelete}
                 />
            )
            )}
            <TodoFilters
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearCompleted={handleClearCompleted}
            />
        </div>
    )
}

export { TodoList }