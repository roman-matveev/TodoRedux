# Flow

## In Redux, we cannot write action creators that are asynchronous.
- We use redux-thunk to return functions instead of objects.
- The evaluation of the dispatch is delayed until the fetch is finished.

### getTodos
1. rootReducer initializes with `@@INIT` state
2. mapStateToProps with the data
3. render, trigger `componentDidMount()`
4. Trigger `getTodos()` function (async)
5. Fetch, dispatch `handleTodos()` with backend data
6. Dispatch `GET_TODOS` action
7. rootReducer, `GET_TODOS` case
8. mapStateToProps with new data
9. Render the new data

### addTodos
1. Trigger `addTodo()` function
2. Fetch, dispatch `handleAdd()` with new todo object
3. Dispatch `ADD_TODO` action
4. rootReducer, `ADD_TODO` case
5. mapStateToProps with new data
6. Render the new data

### removeTodo
1. Trigger `removeTodo()` function
2. Fetch, dispatch `handleRemove()` with bound id
3. Dispatch `REMOVE_TODO` action
4. rootReducer, `REMOVE_TODO` case
5. mapStateToProps with new data
6. Render the new data
