import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { GlobalStyle } from "./themes/GlobalStyles";
import { Footer } from "./components/Footer";


const App = () => {  
  return (  
    <>
     <BrowserRouter>
      <GlobalStyle />
        <Header />
        <Router />
        <Footer/>
     </BrowserRouter>    
    </>
  );     
};     
export default App;


