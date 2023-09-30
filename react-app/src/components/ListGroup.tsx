import { Fragment, MouseEvent, useState } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  //items = [];
  /*
  const getMessage = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };
  {getMessage()}//put in replacement of {items.length === 0 && <p>No item found</p>}

  */
  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  //Hook - tell react that this component contains data that will change overtime
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useState;
  return (
    //a component cannot return more than on element, there each element must be wrapped by a single tag
    <Fragment>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log("You clicked " + items[index]);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
