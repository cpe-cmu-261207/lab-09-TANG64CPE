import React, { useState } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";

export default function Todo(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  return (
    <li
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      <span
        className="me-auto"
        style={
          props.completed
            ? {
                textDecoration: "line-through",
              }
            : null
        }
      >
        {props.title}
      </span>
      <>
        {isMouseOver && (
          <button onClick={() => props.onMark()} className="btn btn-success">
            <IconCheck />
          </button>
        )}
        {isMouseOver && (
          <button className="btn btn-secondary">
            <IconArrowUp />
          </button>
        )}
        {isMouseOver && (
          <button className="btn btn-secondary">
            <IconArrowDown />
          </button>
        )}
        {isMouseOver && (
          <button onClick={() => props.onDelete()} className="btn btn-danger">
            <IconTrash />
          </button>
        )}
      </>
    </li>
  );
}
