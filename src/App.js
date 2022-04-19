import TodoInput from "./components/TodoInput";
import Filter from "./components/filter/Filter";

function App() {
    return (
        <div className="container max-w-xs pt-5">
            <TodoInput />
            <Filter />
        </div>
    );
}
export default App;
