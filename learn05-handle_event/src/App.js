import React, {Component} from 'react';
import './App.css';
import Product from './component/Product';

// jsx su ly giao dien 
class App extends Component {
  render() {
    var products = [
		{
			id: "1",
			name: "iphone 11 pro",
			price: 1500000, 
			image:"https://assets.swappie.com/iPhone-11-Pro-midnight-green-back.png",
			status: true
		},
		{
			id: "2",
			name: "iphone 12 pro",
			price: 2000000, 
			image:"https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-512gb-144921-094924.jpg",
			status: true
		},
		{
			id: "3",
			name: "oppo F1s",
			price: 1500000, 
			image:"https://chamsocdidong.com/wp-content/uploads/2018/10/sua-loi-phan-mem-oppo-f1s-a59-ava.png",
			status: false
		},

	];
	let elements = products.map((product, index) => {
		let result = '';
		if(product.status){
			result =  <Product 
						key={product.id}
						name={product.name}
						price={product.price}
						image={product.image}
					/>
		}
		return result;
	})
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">Handle Event</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Trang chu</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>	
          </ul>
        </nav>
        <div>
          <div className="container">
            <div className="row">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                 {elements}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				 <button type="button" class="btn btn-default">
					Click me!
				 </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
