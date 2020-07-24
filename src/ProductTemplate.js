import React, {Component} from 'react';



class ProductTemplate extends React.Component{

    constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {

      event.preventDefault();

      let values = {

        name: event.target.name.value,
        fat: event.target.fat.value,
        proteins: event.target.proteins.value,
        carbo: event.target.carbo.value,
      }

      fetch('http://localhost:8090/product', {
        method: 'POST',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(values),
      });

      window.location.reload(false);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Nazwa produktu</label>
          <input id="name" name="name" type="text" />
  
          <label htmlFor="fat">Tluszcze</label>
          <input id="fat" name="fat" type="text" />
  
          <label htmlFor="proteins">Białka</label>
          <input id="proteins" name="proteins" type="text" />

          <label htmlFor="carbo">Weglowodany</label>
          <input id="carbo" name="carbo" type="text" />
  
          <button>Send data!</button>
        </form>
      );
    }
  }

export default ProductTemplate;
