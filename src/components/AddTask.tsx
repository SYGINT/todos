import { useState, FormEvent } from "react";
import styled from "styled-components";

import TextField from "./shared/TextField";
import { Button, Form } from "./shared/styles";

type AddTaskProps = {
  onAdd: (data: string) => void;
};

const AddTaskContainer = styled.div`
  padding: 1rem 0.5rem;
`;

function AddTask({ onAdd }: AddTaskProps) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAdd(newTask);
    setNewTask("");
  };

  return (
    <AddTaskContainer>
      <Form onSubmit={handleSubmit}>
        <TextField
          id="addName"
          label="Add a task"
          placeholder="Buy Milk"
          value={newTask}
          onChange={setNewTask}
        />
        <Button className="button is-primary">Add</Button>
      </Form>
    </AddTaskContainer>
  );
}

export default AddTask;
