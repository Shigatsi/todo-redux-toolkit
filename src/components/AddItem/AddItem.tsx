import React from "react";
import { useDispatch } from "react-redux";
import { createItem } from "../../store/todoReducer.tsx";
import { Input, Button, Form } from "antd";

const AddItem: React.FC = () => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length) {
      dispatch(createItem({ text: text }));
    }
    setText("");
  };

  return (
    <Form
      style={{ display: "flex", width: "100%" }}
      className="add-item"
      onSubmitCapture={submitHandler}
    >
      <Form.Item>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          placeholder="add new item..."
          type="text"
          value={text}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          ADD
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddItem;
