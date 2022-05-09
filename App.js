import logo from './logo.svg';
import './App.scss';
import React from 'react'
import data from './data.json';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Nav from './modules/nav/nav'

function App() {
  const [datas, setDatas] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((datas) => setDatas(datas.message));
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Nav/>
        <Routes>
        <Route path="/" />
        <Route path="/om" element={<About/>}/>
        <Route path="/kontakt" element={<Contact/>}/>
        <Route path="/produkter" element={<Products/>}/>
      </Routes>
     
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!datas ? "Loading..." : datas}</p>
        </header>

<div className="header">
             <h2>Her er 3 artikler hentet fra min API:</h2> 
</div>
        <section className="articles">
          {
            data && data.map(annes => {
              return(
                
                <article key={annes.id}>
                  <h2>{annes.attributes.title}</h2>
                <p>{annes.attributes.body}</p>
                <p>{`Denne artikel er skrevet d. ${annes.attributes.created}`}</p>  
                </article>
               
              )
            })
          }
        </section>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
