import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./themes/GlobalStyles";
import { Game } from "./pages/Game/Game";


const App = () => {  
  return (  
    <>
     <BrowserRouter>
      <GlobalStyle />
        <Header />
        <Router />
     </BrowserRouter>

     
    </>
  );     
};     
export default App;


