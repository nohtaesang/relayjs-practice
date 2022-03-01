import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Game } from "./pages/Game";
import { Admin } from "./pages/Admin";
import { Pane } from "evergreen-ui";

function App(props: any) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <BrowserRouter>
        <Pane width="100vw" height="100vh" display="flex">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/users/:id" element={<Game />} />
          </Routes>
        </Pane>
      </BrowserRouter>
    </RelayEnvironmentProvider>
  );
}

export default App;
