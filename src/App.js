import "./App.css";
import { Button } from "react-bootstrap";
import { Entry } from "./pages/entry/Entry.page";
import { DefaultLayout } from "./layout/DefaultLayout";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>//Dashboard</DefaultLayout>
    </div>
  );
}

export default App;
