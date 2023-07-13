import { useDispatch } from "react-redux";
import { createItem } from "../../store/todoReaducer";
import React from "react";
import { Input, Button, Form } from "antd";

const AddItem = () => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length) {
      dispatch(createItem({ text: text }));
    }
    setText("");
  };

  return (
    <Form style={{ display: "flex", width: "100%" }} className="add-item">
      <Form.Item
        layout="inline"
        onChange={(e) => setText(e.target.value)}
        placeholder="add new item..."
        type="text"
        value={text}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          onClick={(e) => submitHandler(e)}
        >
          ADD
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddItem;
