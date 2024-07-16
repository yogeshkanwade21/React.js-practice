import { useRef } from "react";
import "./styles.css";

interface InputFieldProps {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: InputFieldProps) => {

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
        }}>
        <input
            ref={inputRef}
            type="text"
            className="input__box"
            placeholder="Add a todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
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