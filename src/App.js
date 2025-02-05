import Header from "./Components/Header"
import Detail from "./Components/Detail"
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";

import TopRated from "./Components/topRated";
import {BrowserRouter,Routes,Route } from "react-router-dom";
import Search from "./Components/Search";
function App() {
  

  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Header />
            <Popular/>
            <Trending/>
          </>} >
          </Route>
          <Route path="/movies/:id" element={<>
            <Header />
            <Detail/>
          </>} >
          </Route>
          <Route path="/popular" element={<>
            <Header />
            <Popular/>
          </>} >
          </Route>
          <Route path="/trending" element={<>
            <Header />
            <Trending/>
          </>} >
          </Route>
          <Route path="/top-rated" element={<>
            <Header />
            <TopRated/>
          </>} >
          </Route>
          <Route path="/search" element={<>
            <Header />
            <Search />
          </>} >
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div >
    
  );
}

export default App;
