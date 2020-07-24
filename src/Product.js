import React, {Component} from 'react';



class Product extends React.Component{

    render() {
      return ( 
        <div>
           <p> -------------------- </p>
           <p> Name {this.props.info.name} </p>
           <p> Proteins {this.props.info.proteins} </p>
           <p> Fat {this.props.info.fat} </p>
           <p> Carbo {this.props.info.carbo} </p>
        </div>
        );
    }
  }

export default Product;
