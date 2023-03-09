import { useEffect } from "react";
import "./App.css";
import { Add, List } from "./components";
import { fetchPerson } from "./store/features/personSlice";
import { useAppDispatch } from "./store/hooks";

function App() {
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchPerson());
  // }, []);
  return (
    <div>
      <Add />
      <List />
    </div>
  );
}

export default App;
