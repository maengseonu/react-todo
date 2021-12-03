import React from "react";
import { useSetRecoilState } from "recoil";
import { Categoties, IToDo, toDoState } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);

  //카테고리 변경. 배열안에 원소 교체
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const deleteToDo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);

      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li className="todo">
      <span className="todo__span">✔ {text}</span>
      {category !== Categoties.TO_DO && (
        <button name={Categoties.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categoties.DOING && (
        <button name={Categoties.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categoties.DONE && (
        <button name={Categoties.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <span className="todo__delete" onClick={deleteToDo}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </li>
  );
}

export default ToDo;
