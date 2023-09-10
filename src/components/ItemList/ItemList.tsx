import React from "react";
import { useSelector } from "react-redux";
import { Col, Divider, Row } from "antd";
import Item from "../Item/Item.tsx";
import { RootState } from "../../store/store.tsx";

const ItemList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  return (
    <div className="item-list" style={{ margin: "0 auto" }}>
      <Divider orientation="left">ToDo:</Divider>
      {todos.map((el) => (
            <Item key={el.id} {...el} />


      ))}
    </div>
  );
};

export default ItemList;
