import React, {Component} from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import SizeSetting from './component/SizeSetting';
import Reset from './component/Reset';
import Result from './component/Result';

class App extends Component {
  constructor(props){
	super(props)
	this.state = {
		color: 'red',
		fontSize: 12 
	}
	this.onSetColor = this.onSetColor.bind(this)
	this.onChangeSize = this.onChangeSize.bind(this)
	this.onReset = this.onReset.bind(this)
  }
  onSetColor(params){
	  this.setState({
		  color: params
	  })
  }
  onChangeSize(value){
	this.setState({
		fontSize: ((this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize)
	})
 }
 onReset(value){
	if(value){
		return this.setState({
			color: 'red',
			fontSize: 12 
		})
	}
 }
  render(){
	  return (
		  <div>
			<div class="container mt-50">
				
				<div class="row">
					
					<div class="row">
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<ColorPicker color={this.state.color} onReceiColor={this.onSetColor} />
						</div>
						<div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
							<SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}/>
							<Reset onReset={ this.onReset}/>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<Result color={this.state.color } fontSize={this.state.fontSize} />				
						</div>
					</div>
				</div>
			</div>
		  </div>
	  )
  }
}

export default App;
