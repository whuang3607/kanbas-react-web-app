import './App.css';
import Labs from "./Labs"; // imports ./Labs/index.tsx
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";

function App() {
  return (
    <div>
      <Labs/>
      <Kanbas/>
      <HelloWorld/>
    </div>
    //put the whole thing in div b/c can only return 1 object
  );
}

export default App;
