import { useState } from "react";
import {
  useGetTodosQuery,
  useAddTodosMutation,
  useDeleteTodosMutation,
} from "../../Redux/TodosApi";
import { Button, Input } from "antd";
import "./Todos.css";
import { CloseOutlined, SettingTwoTone } from "@ant-design/icons";
import { Itodo } from "../../types";

const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const { data = [], isLoading } = useGetTodosQuery();
  const [addTodo] = useAddTodosMutation();
  const [deleteTodo] = useDeleteTodosMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = async () => {
    if (newTodo) {
      await addTodo({ title: newTodo }).unwrap();
      setNewTodo("");
    }
  };
  const handleDeleteProduct = async (id: number) => {
    await deleteTodo(id).unwrap();
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
                <div className="todo_title">{item.title}</div>
                <div
                  className="todo_delete"
                  onClick={() => handleDeleteProduct(item.id)}
                >
                  <CloseOutlined style={{ color: "white" }} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Todos;
