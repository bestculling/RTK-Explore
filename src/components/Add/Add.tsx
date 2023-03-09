import React, { useRef } from "react";
import { addPerson } from "../../store/features/personSlice";
import { useAppDispatch } from "../../store/hooks";

export default function Add() {
  const name = useRef<string>("");
  // Use Redux State and Action in React Components
  // dispatch actions using useDispatch
  const dispatch = useAppDispatch();
  return (
    <div>
      <label htmlFor="">Person Name: </label>
      <input type="text" onChange={(e) => (name.current = e.target.value)} />
      <button
        // dispatch actions
        onClick={() =>
          dispatch(
            addPerson({
              name: name.current,
            })
          )
        }
      >
        Add
      </button>
    </div>
  );
}
