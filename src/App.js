import React, { Component } from 'react';
import './App.css';
import Beer from './Beer/Beer';

class App extends Component {

    render(){
      return(
        <div>
        <hr/>
            <h2 className="ml-3 ">Lista de cervejas, clique para exibir os detalhes</h2>
            <hr/>
            <Beer />
        </div>
      )
    }
}

export default App;


