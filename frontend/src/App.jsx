import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";

function App() {

  const path = window.location.pathname;

  if (path === "/dashboard") {
    return <Dashboard />;
  }

  return <Auth />;
}

export default App;