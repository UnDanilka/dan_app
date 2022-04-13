import { useEffect, useState } from "react";
import {
  useChangeTodosMutation,
  useGetTodosQuery,
  useAddTodosMutation,
  useDeleteTodosMutation,
  deleteTodoNative,
} from "../../Redux/TodosApi";
import { Button, Input } from "antd";
import "./Todos.css";
import {
  CloseOutlined,
  CheckOutlined,
  SettingTwoTone,
} from "@ant-design/icons";
import { Itodo } from "../../types";

const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { data = [], isLoading } = useGetTodosQuery();
  const [addTodo] = useAddTodosMutation();
  const [deleteTodo] = useDeleteTodosMutation();
  const [changeTodo] = useChangeTodosMutation();

  useEffect(() => console.log(data), [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = async () => {
    if (newTodo) {
      await addTodo({ title: newTodo, done: false }).unwrap();
      setNewTodo("");
    }
  };
  const handleDeleteProduct = async (id: number, e: React.MouseEvent) => {
    const btn = e.target as Element;

    const todo = btn.closest(".todo");
    todo?.classList.add("todo_removed");
    todo?.addEventListener("animationend", async () => {
      await deleteTodo(id).unwrap();
    });
  };

  const handleChangeProduct = (todo: Itodo) => {
    changeTodo({ ...todo, done: true });
  };

  const handleResetTodos = async () => {
    setDisabled(true);
    const deleteArr = data.map(
      async (item: Itodo) => await deleteTodoNative(item.id)
    );
    Promise.all(deleteArr).then(() =>
      addTodo({ title: "first", done: false })
        .unwrap()
        .then(() => addTodo({ title: "second", done: false }).unwrap())
        .then(() => addTodo({ title: "third", done: false }).unwrap())
        .then(() => setDisabled(false))
    );
  };

  return (
    <div className="todos">
      <div className="todos_again">
        Could you make a TODO's list...? OHHH ####... Here we go again...
      </div>

      <div>
        <Input
          value={newTodo}
          placeholder="enter todo here"
          className="input"
          onChange={handleInputChange}
          onPressEnter={handleAddTodo}
        />
        <Button className="todo_add" onClick={handleAddTodo}>
          Send
        </Button>
      </div>
      <div className="todos_list">
        {isLoading ? (
          <SettingTwoTone
            twoToneColor="#eb2f96"
            spin
            style={{ fontSize: "70px", marginTop: "20px" }}
          />
        ) : (
          data.map((item: Itodo) => {
            return (
              <div className="todo" key={item.id}>
                <div className={`todo_title ${item.done ? "todo_done" : ""}`}>
                  {item.title}
                </div>
                <div
                  className="todo_delete"
                  onClick={(e) => handleDeleteProduct(item.id, e)}
                >
                  <CloseOutlined style={{ color: "white" }} />
                </div>
                <div
                  className="todo_change"
                  onClick={(e) => handleChangeProduct(item)}
                >
                  <CheckOutlined style={{ color: "white" }} />
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="todos_reset">
        <div className="todos_reset_text">
          The data is taken from the server, please reset to the default
          settings after using, thank you!
        </div>
        <Button
          size="small"
          className="todos_reset_btn"
          onClick={() => handleResetTodos()}
          disabled={disabled}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Todos;
