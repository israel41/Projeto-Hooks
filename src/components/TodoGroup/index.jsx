import { SubHeading } from "../SubHeading";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";



export function TodoGroup({ Heading, items }) {
  return (
    <>
      <SubHeading>{Heading}</SubHeading>

      <ToDoList>
        {items.map(function (t) {
            return (
              <ToDoItem
                key={t.id}
                item={t}
                
              />
            );
          })}
      </ToDoList>
    </>
  );
}

export default TodoGroup;
