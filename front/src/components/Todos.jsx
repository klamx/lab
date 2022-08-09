
import Todo from './Todo'

function Todos (props) {
  return (
    <ul>
      {props.todos.map(({ id, todo, done }) => (
        <Todo
          key={id}
          onHandleChangeState={props.handleChangeState}
          onHandleDelete={props.handleDelete}
          id={id}
          todo={todo}
          done={done}
        />
      ))}
    </ul>
  )
}

export default Todos
