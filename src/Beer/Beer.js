import React, { Component } from 'react';
class Municipio extends Component{
    state = {}

    componentDidMount(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(d => d.json())
        .then(d => {
            this.setState(
                {beers: d
            });            
        })
    }

    render(){
        if(!this.state.beers) return <p>Aguarde...</p>
        return (
            <div className="row card-columns mt-1"> 
            
                {this.state.beers.map((beer) =>
                
                    <div className="col-md-3">
                        <div class="card card p-3">
                            <h5 class="card-header">
                                <a data-toggle="collapse" href={"#collapse"+beer.id} aria-expanded="false" aria-controls="collapse-example" id="heading-example" className="d-block">
                                    <i class="fa fa-chevron-down pull-right"></i>
                                    {beer.name}
                                </a>
                            </h5>
                            <div id={"collapse" + beer.id} className="collapse" aria-labelledby="heading-example">
                                <div class="card-body">
                                    <p>Descrição: {beer.description}</p>
                                    <img src={beer.image_url}></img>
                                </div>
                            </div>
                        </div>
                    </div>
  
                    
                )}
            

           
        </div>

           
        )
    }
}

export default Municipio