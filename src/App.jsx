import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/action/action";
function App() {
   const count = useSelector((state) => state.counter);
   const dispatch = useDispatch();
   console.log(count);
   return (
      <>
         {/* <div>Redux : {count.count}</div>
         <button
            onClick={() => {
               dispatch(increment());
            }}
         >
            increment
         </button> */}
         <h1>this is react project.....</h1>
      </>
   );
}

export default App;
