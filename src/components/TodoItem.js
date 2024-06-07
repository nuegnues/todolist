import React from "react";
import "./TodoItem.css";
import { useState } from "react";
import ModifyTodo from "./ModifyTodo";

function TodoItem({ item: i, date = "", setDel, setMod }) {
  const [item, setItem] = useState(i);
  const [popup, setPopup] = useState(false);

  const toggle = () => {
    fetch(`https://json-server-todolist-liart.vercel.app/${date}/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...item,
        done: item.done == true ? false : true,
      }),
    }).then((res) => {
      if (res.ok) {
        setItem({
          ...item,
          done: item.done == true ? false : true,
        });
      }
    });
  };

  const handlePopup = () => {
    setMod(true);
    return setPopup(!popup);
  };

  const deleteTodo = () => {
    fetch(`https://json-server-todolist-liart.vercel.app/${date}/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setItem({ id: 0 });
        }
      })
      .then(() => {
        if (item.id == 0) {
          return null;
        }
      });
    setDel(true);
  };

  return (
    <>
      <div className="item_line_container">
        <div className="item_checktext">
          <input
            style={{ zoom: 1.5 }}
            type="checkbox"
            checked={item.done == true ? true : false}
            onClick={toggle}
          ></input>
          <div className={item.done ? "item_done_text" : "item_default_text"}>
            {item.text}
          </div>
        </div>
        <div className="item_buttons">
          <button className="item_modify_button" onClick={handlePopup}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </button>
          <button className="item_delete_button" onClick={deleteTodo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-dash-square"
              viewBox="0 0 16 16"
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8" />
            </svg>
          </button>
        </div>
      </div>
      <div className="modify_popup">
        {popup ? (
          <ModifyTodo
            handlePopup={handlePopup}
            setItem={setItem}
            item={i}
            date={date}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default TodoItem;
