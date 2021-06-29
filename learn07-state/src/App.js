import React, {Component} from 'react';
import './App.css';

// jsx su ly giao dien 
class App extends Component {
  constructor(props){
	  super(props)
	  this.state = {
		  products : [
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
			}
		  ],
		  isActive: true
	  }
	  this.onSetState = this.onSetState.bind(this)
  }
  onSetState(){
	if(this.state.isActive === true){
		this.setState({
			isActive: false
		})
	}else {
		this.setState({
			isActive: true
		})
	}
  }
  render() {
	let elements = this.state.products.map((product, index) => {
		let result = '';
		if(this.state.isActive === true){
			result =  	<tr key= { index } >
							<td>{ index }</td>
							<td>{ product.name}</td>
							<td>{ product.price}</td>
						</tr>
		}
		return result;
	})
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <a className="navbar-brand" href="#">State</a>
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
				<table class="table table-hover">
					<thead className="table-bordered">
						<tr>
							<th>STT</th>
							<th>Ten san pham</th>
							<th>Gia tien</th>
						</tr>
					</thead>
					<tbody>
						{ elements }
					</tbody>
				</table>
				<button type="button" class="btn btn-warning" onClick= { this.onSetState} >
					Active: { this.state.isActive === true ? 'true' : 'false'}
				</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
