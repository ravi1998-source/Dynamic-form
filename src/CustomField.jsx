import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


function Customfield() {
  const [inputList, setInputList] = useState([
    {
      optionalField: ""
    }
  ]);   

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { optionalField: "" }]);
  };

  return (
    <div>
      {inputList.map((x, i) => {
        return (
          <div>
            <input
              name="optionalField"
              placeholder="Custom Field"
              onChange={(e) => handleInputChange(e, i)}
              value={x.optionalField}
              key={i}
              index={i}
            />
            {inputList.length - 1 === i && (
              <AddIcon onClick={handleAddClick}></AddIcon>
            )}
            {inputList.list !== 1 && (
              <RemoveIcon onClick={() => handleRemoveClick(i)}></RemoveIcon>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Customfield;
