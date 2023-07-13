import { useSelector } from "react-redux";
import { Divider } from "antd";

import Item from "../Item/Item";

const ItemList = () => {
  const { todos } = useSelector((state) => state.todo);
  return (
    <div className="item-list">
      <Divider orientation="left">ToDo:</Divider>
      {todos.map((el) => (
        <Item key={el.id} {...el} />
      ))}
    </div>
  );
};

export default ItemList;
