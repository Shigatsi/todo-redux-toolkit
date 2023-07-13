import { useDispatch } from "react-redux";
import { toggleItem, deleteItem } from "../../store/todoReaducer";
import React from "react";

import { Input, Button, Space } from "antd";
import { EditTwoTone, DeleteTwoTone, CheckOutlined } from "@ant-design/icons";
import { editItem } from "../../store/todoReaducer";

const Item = ({ id, text, done }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [value, setValue] = React.useState(text);
  const dispatch = useDispatch();
  const togleEdit = () => setIsEdit(!isEdit);
  const editHandler = () => {
    togleEdit();
  };

  return (
    <Space id={id} className="item" style={{ display: "flex" }}>
      <input
        onChange={() => dispatch(toggleItem({ id: id }))}
        type="checkbox"
        checked={done}
      />
      {isEdit ? (
        <Input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          value={text !== "" ? value : text}
          onPressEnter={() => dispatch(editItem({ id, text: value }))}
        />
      ) : (
        <p>{text}</p>
      )}

      {isEdit ? (
        <Button
          shape="circle"
          onClick={() => {
            dispatch(editItem({ id, text: value }));
            // dispatch(deleteItem(id));
            editHandler();
            console.log(id);
          }}
        >
          <CheckOutlined />
        </Button>
      ) : (
        <Button shape="circle" onClick={() => editHandler()}>
          <EditTwoTone />
        </Button>
      )}

      <Button shape="circle" onClick={() => dispatch(deleteItem(id))}>
        <DeleteTwoTone />
      </Button>
    </Space>
  );
};

export default Item;
