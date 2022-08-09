function Todo ({ done, id, todo, onHandleChangeState, onHandleDelete }) {
  return (
    <li>
      {!done ? todo : (<del>{todo}</del>)}{' '}
      <button className='btn' onClick={() => onHandleChangeState(id)}>
        {!done ? 'terminar' : 'abrir'}
      </button>
      <button className='btn' onClick={() => onHandleDelete(id)}>eliminar</button>
    </li>
  )
}

export default Todo
