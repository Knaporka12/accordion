import Header from "./Header";
import Main from "./Main";
import { ContextProvider } from "./context/DataContext";


function App() {

  return (

    <div className="App">

      <ContextProvider>

        <Header></Header>
        <Main></Main>

      </ContextProvider>

    </div>

  );
  
}

export default App;
