import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "react-bootstrap";

export const AddWorkout = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Workout</Label>
        <Input type="text" placeholder="Enter Workout Name">
          {" "}
        </Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
};
