import "./App.css";
// Import Component Hello
import Hello from "./Components/Hello";

function App() {
    return (
        <div>
        <h2>This is Create React App</h2>
        {
            /** 
             * memanggil component hello
             * mengirim props name
            */
           <Hello name="Rifqi"/>
        }
        </div>
    )
}

export default App;