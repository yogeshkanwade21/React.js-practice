import "./styles.css";

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: InputFieldProps) => {
  return (
    <form className="input">
        <input
            type="text"
            className="input__box"
            placeholder="Add a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button
            type="submit"
            className="input_submit"
            onClick={handleAdd}
        >
            Add
        </button>
    </form>
  )
}

export default InputField;