import { atom, selector } from "recoil";

export enum Categoties {
  "TO_DO" = "TO_DO", // 0
  "DOING" = "DOING", // 1
  "DONE" = "DONE", // 2
}

export interface IToDo {
  id: number;
  text: string;
  category: Categoties;
}

export const categoryState = atom<Categoties>({
  key: "category",
  default: Categoties.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

export const toDoselector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
