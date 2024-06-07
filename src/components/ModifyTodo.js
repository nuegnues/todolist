import React from "react";
import { useState } from "react";
import "./ModifyTodo.css";

function ModifyTodo({ handlePopup, setItem, item, date }) {
  const [task, setTask] = useState(`${item.text}`);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (task != "") {
      fetch(
        `https://json-server-todolist-liart.vercel.app/${date}/${item.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...item,
            text: task,
          }),
        }
      ).then((res) => {
        if (res.ok) {
          setItem({
            ...item,
            text: task,
          });
        }
      });
      handlePopup();
    }
    event.target[0].value = "";
    setTask("");
  };

  return (
    <div className="popup_bg">
      <form className="modify_container" onSubmit={onSubmit}>
        <h4 className="modify_text">수정하기</h4>
        <div className="modify_inputbutton">
          <input
            className="modify_input"
            type="text"
            defaultValue={item.text}
            onChange={handleChange}
            placeholder="할 일을 입력해주세요"
          />
          <button className="modify_button">완료</button>
        </div>
      </form>
    </div>
  );
}

export default ModifyTodo;
