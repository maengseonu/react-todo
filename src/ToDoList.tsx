import React, { useState } from "react";

import { useForm } from "react-hook-form";

/* function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setToDo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} placeholder="Write a to do" />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
} */

interface IForm {
  Email: string;
  FirstName: string;
  LastName: string;
  UserName: string;
  Password: string;
  Password1: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      Email: "@naver.com",
    },
  });

  const onValid = (data: IForm) => {
    if (data.Password !== data.Password1) {
      setError(
        "Password1",
        { message: "비밀번호가 같지 않습니다." },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline." });
  };
  console.log(errors);

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", {
            required: "필수항목입니다",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.Email?.message}</span>
        <input
          {...register("FirstName", {
            required: "필수항목입니다",
            validate: {
              noSeonu: (value) =>
                value.includes("선우") ? "선우는 사용 할 수없습니다" : true,
              noSuhyun: (value) =>
                value.includes("수현") ? "수현은 사용 할 수없습니다" : true,
            },
          })}
          placeholder="First Name"
        />
        <span>{errors?.FirstName?.message}</span>
        <input
          {...register("LastName", { required: "필수항목입니다" })}
          placeholder="Last Name"
        />
        <span>{errors?.LastName?.message}</span>
        <input
          {...register("UserName", {
            required: "필수항목입니다",
            minLength: 10,
          })}
          placeholder="User Name"
        />
        <span>{errors?.UserName?.message}</span>
        <input
          {...register("Password", {
            required: "필수항목입니다",
            minLength: 5,
          })}
          placeholder="Password"
        />
        <span>{errors?.Password?.message}</span>
        <input
          {...register("Password1", {
            required: "필수항목입니다",
            minLength: {
              value: 5,
              message: "패스워드가 짧습니다.",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.Password1?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
