function Form (props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type='text'
        placeholder='Crea una tarea'
        value={props.input}
        onChange={props.handleChange}
      />
    </form>
  )
}

export default Form
