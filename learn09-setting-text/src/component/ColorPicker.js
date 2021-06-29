import React, {Component} from 'react';

class ColorPicker extends Component {
	constructor(props){
		super(props)
		this.state = {
			colors: ["green", "red", "yellow", "blue"]
		}
	}
	showColor(color){
		return {
			backgroundColor : color
		}
	}
	setActiveColor(color){
		this.props.onReceiColor(color)
	}
	render(){
		var elementColors = this.state.colors.map((color,index) => {
			return <span 
					key={index} 
					style={this.showColor(color)}
					className={this.props.color === color ? 'active' : ''}
					onClick = { () => this.setActiveColor(color)}
					>
					</span>
		})
		return (
			<div>
			<div class="panel panel-primary">
				  <div class="panel-heading">
						<h3 class="panel-title">ColorPicker</h3>
				  </div>
				  <div class="panel-body">
						{ elementColors }
						<hr />						
				  </div>
			</div>
			</div>
		)
	}
}

export default ColorPicker;
