import React from 'react';
import logo from './logo.svg';
import Header from './core/Header/Header.compoent';
import HeaderCarasol from './core/Header/HeaderCaraousal.component';
import Footer from './core/Footer/Footer.component';
import BuilderComponent from './core/Modules/CreateBuilderComponent/builder.component';
import './App.css';

function App() {
  return (
    <div className="App">
<Header></Header>
<HeaderCarasol></HeaderCarasol>

    <BuilderComponent></BuilderComponent>
    <Footer></Footer>
    </div>
  );
}

export default App;
