import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import FormsList from "./pages/FormsList";
import FormBuilder from "./pages/FormBuilder";

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<FormsList />} />
          <Route path="/builder/:id" element={<FormBuilder />} />
        </Routes>
      </div>
    </div>
  );
}
