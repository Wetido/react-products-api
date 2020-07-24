import React, {Component} from 'react';
import Product from "./Product"
import ProductTemplate from "./ProductTemplate"


class App extends React.Component{


  state = {

    data : [],
  }

  componentDidMount(){

    fetch('http://localhost:8090/products')
    .then(response => response.json())
    .then(data => this.setState({data})
      );
    }

  createProduct(){


    }


    render() {
      return ( 
        <div>
           {this.state.data.map(product => <Product info={product}/>)}

           <ProductTemplate/>
        </div>

       
        );
    }
  }

export default App;
