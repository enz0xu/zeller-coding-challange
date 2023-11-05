import { Suspense } from "react";
import "./App.css";
import UserListSection from "./components/UserListSection";

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UserListSection />
      </Suspense>
    </div>
  );
}

export default App;
