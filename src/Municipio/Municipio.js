import React, { Component } from 'react';
const urlApiBeer = () =>'https://api.punkapi.com/v2/beers/random'
class Municipio extends Component{
    state = {}

    componentDidMount(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(d => d.json())
        .then(d => {
            this.setState(
                {beers: d
            });
            console.log(this.state.beers );
            
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
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
                                    officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                                    wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                    Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                    excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
                                    you probably haven't heard of them accusamus labore sustainable VHS.
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