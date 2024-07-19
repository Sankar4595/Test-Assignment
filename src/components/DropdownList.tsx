import React, { useEffect, useState } from "react";
import "../styles/listItem.css";

interface DropdownItem {
  id: number;
  label: string;
  checked: boolean;
}

const DropdownList: React.FC = () => {
  const [items, setItems] = useState<DropdownItem[]>([
    { id: 1, label: "Page 1", checked: false },
    { id: 2, label: "Page 2", checked: false },
    { id: 3, label: "Page 3", checked: false },
    { id: 4, label: "Page 4", checked: false },
  ]);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    const allChecked = items.every((item) => item.checked);
    setCheckAll(allChecked);
  }, [items]);

  const handleCheck = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    setCheckAll(false);
  };

  const handleAllCheck = () => {
    setCheckAll(!checkAll);
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        checked: !checkAll,
      }))
    );
  };

  const handleDone = () => {
    const selectedItems = items.filter((item) => item.checked);
    console.log("Selected items:", selectedItems);
  };

  return (
    <div className="dropdown-list">
      <div className="checkbox-item">
        <label>All Pages</label>
        <input
          type="checkbox"
          id="checkbox"
          checked={checkAll}
          onChange={() => handleAllCheck()}
        />
      </div>
      <div className="divider">
        <hr />
      </div>
      <div className="checkbox-container">
        {items.map((item) => (
          <div key={item.id} className="checkbox-item">
            <label htmlFor={`checkbox-${item.id}`}>{item.label}</label>
            <input
              type="checkbox"
              id={`checkbox-${item.id}`}
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
          </div>
        ))}
      </div>
      <div className="divider">
        <hr />
      </div>
      <div className="btn-div">
        <button onClick={handleDone} className="done-button">
          Done
        </button>
      </div>
    </div>
  );
};

export default DropdownList;
