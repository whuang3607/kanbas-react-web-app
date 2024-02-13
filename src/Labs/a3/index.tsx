import JavaScript from "./JavaScript";
import PathParameters from "./routing/PathParameters";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoList from "./todos/TodoList";

function Assignment3() {
    return (
        <div className="container">
            <h1>Assignment 3</h1>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <JavaScript/>
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <Add a={3} b={4} />
            <TodoList/>
        </div>
    );
  }
  export default Assignment3;

// "container" is a Bootstrap class. The library was imported in src/index.tsx
// and the classes are available to all components without needing to import
// it again. You can also create additional CSS files and import them in
// TSX files that need specific styling.
