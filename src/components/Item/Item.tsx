import React from "react";
import { useDispatch } from "react-redux";
import { toggleItem, deleteItem, editItem } from "../../store/todoReducer.tsx";

import { Input, Button, Space } from "antd";
import { EditTwoTone, DeleteTwoTone, CheckOutlined } from "@ant-design/icons";

interface IItemProps {
  id: string;
  text: string;
  isDone?: boolean;
}
const Item = ({ id, text, isDone }: IItemProps): JSX.Element => {
  const [isEdit, setIsEdit] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>(text);
  const dispatch = useDispatch();
  const toggleEdit = (): void => setIsEdit(!isEdit);
  const editHandler = (): void => {
    toggleEdit();
  };

  return (
    <Space id={id} className="item" style={{ display: "flex" }}>
      <input
        onChange={() => dispatch(toggleItem({ id: id }))}
        type="checkbox"
        checked={isDone}
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
            editHandler();
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
