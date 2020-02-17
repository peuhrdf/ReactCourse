import React, { Component } from 'react';
import './App.css';
import Municipio from './Municipio/Municipio';

class App extends Component {

    render(){
      return(

        <div>
        <hr/>
            <h2 className="ml-3 ">Lista de cervejas, clique para exibir os detalhes</h2>
            <hr/>
            <Municipio codIbge="2403251"></Municipio>

        </div>

        
      )
    }
      
  
}

export default App;


