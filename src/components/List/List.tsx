import React from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

export default function List() {
  // We can read data from store with useSelector
  const persons = useAppSelector((state) => state.person.persons);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
