import { render } from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Home from "./Views/Home";
import PageNotFound from "./Views/PageNotFound";

const rootElement = document.getElementById("root");
render (
<BrowserRouter> 
 <Routes>
   <Route path = "/" element={<App />} />
   <Route path = "home" element={<Home />} />
   <Route path = "*" element = {<PageNotFound />  }/>
 </Routes>
</BrowserRouter>, 
rootElement
);