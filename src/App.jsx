import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Login from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedLayout from "./layouts/ProtectedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>
        </Route>
        <Route path="/auth/login" element={<Login />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
