import "./styles.css";

const InputField = () => {
  return (
    <form className="input">
        <input
            type="text"
            className="input__box"
            placeholder="Add a todo"
        />
        <button
            type="submit"
            className="input_submit"
        >
            Add
        </button>
    </form>
  )
}

export default InputField;