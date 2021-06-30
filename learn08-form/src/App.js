import React, {Component} from 'react';
import './App.css';

// jsx su ly giao dien 
class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			txtName: '',
			txtPassword: '',
			textDecs:'',
			sltGender: 1,
			radLang: 'en',
			chxkStatus: false
		}
		this.onHandleChange = this.onHandleChange.bind(this)
		this.onHandleSubmit = this.onHandleSubmit.bind(this)
	}
	onHandleChange(event){
		var target = event.target;
		var name = target.name;
		var value = target.type === 'checkbox' ? target.checked : target.value;
		this.setState({
			[name] : value
		})
	}
	onHandleSubmit(event){
		event.preventDefault();
		console.log(this.state)	
	}
	render() {
		return(
			<div className="container mt-30">
				<div className="row">
					<div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
						<div className="panel panel-primary">
							  <div className="panel-heading">
									<h3 className="panel-title">Form</h3>
							  </div>
							  <div className="panel-body">
									<form onSubmit={ this.onHandleSubmit}>
										<div className="form-group">
											<label for="">Username: </label>
											<input 
												type="text" 
												className="form-control" id="" 
												name="txtName"
												onChange= {this.onHandleChange} />
										</div>
										<div className="form-group">
											<label for="">Password: </label>
											<input 
												type="password" 
												className="form-control" id="" 
												name="txtPassword"
												onChange= {this.onHandleChange} />
										</div>
										<div className="form-group">
											<label for="">Mo ta: </label>
											<textarea 
												name="textDecs" cols="30" rows="10"
												className="form-control"
												onChange= {this.onHandleChange}>
											</textarea>
										</div>
										<div className="form-group">
											<label for="">Gioi tinh: </label>
											<select 
												name="sltGender" 
												class="form-control" 
												value={this.state.sltGender}
												onChange= {this.onHandleChange}
												>
												<option value={0}>Nu</option>
												<option value={1}>Nam</option>
											</select>
											<br />
											<hr />
											<label for="">Ngon ngu: </label>
											<div className="radio">
												<label for="">
													<input 
														type="radio" 
														name="radLang"
														onChange= {this.onHandleChange} 
														value="en"
														checked={this.state.radLang ===  "en"}
														/>Tieng Anh
												</label><br />
												<label for="">
													<input 
														type="radio" 
														name="radLang"
														onChange= {this.onHandleChange} 
														checked = {this.state.radLang ===  "vi"}
														value="vi"
														/>Tieng Viet
												</label>
											</div>
											<div className="checkbox">
												<label for="">
														<input 
															type="checkbox" 
															name="chxkStatus"
															onChange= {this.onHandleChange} 
															checked = {this.state.chxkStatus ===  true}
															value={true}
															/>Trang Thai
													</label>
											</div>
											
										</div>
										<button type="submit" className="btn btn-primary">Submit</button>&nbsp;
										<button type="reset" className="btn btn-default">Xoa Trang</button>
									</form>
									
							  </div>
						</div>
					</div>
				</div>
			</div>
		)
	}	

}

export default App;
