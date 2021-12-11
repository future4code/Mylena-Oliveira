import { Router } from "./routes/Router";
import GlobalState from "./context";

const App = () =>  {

  return (
    <GlobalState>
        <Router />    
    </GlobalState>
  );
}

export default App;

