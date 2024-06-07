import React from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState, useEffect } from "react";

function TodoList({ date, add, setAdd }) {
  const [data, setData] = useState([]);
  const [del, setDel] = useState(false);
  const [mod, setMod] = useState(false);

  useEffect(() => {
    fetch(`https://json-server-todolist-liart.vercel.app/${date}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res_json) => {
        setData(res_json);
      });

    setDel(false);
    setMod(false);
    setAdd(false);
  }, [date, del, mod, add]);

  return (
    <div className="list_container">
      {data.map((item) => {
        return (
          <div className="todoitem_line">
            <TodoItem
              key={item.id}
              item={item}
              date={date}
              setDel={setDel}
              setMod={setMod}
            />
          </div>
        );
      })}
    </div>
  );
}

export default TodoList;
