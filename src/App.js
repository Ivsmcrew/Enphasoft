import AppRouter from "./components/AppRouter/AppRouter";
import AuthProvider from "./components/Provider/AuthProvider";
import TokenProvider from "./components/Provider/TokenProvider";
import "./styles/App.css"

function App() {
  return (
    <TokenProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </TokenProvider>
  );
}

export default App;
