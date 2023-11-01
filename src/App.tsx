import { Suspense } from "react";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UserList />
      </Suspense>
    </div>
  );
}

export default App;
