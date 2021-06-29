import React, {Component} from 'react';

class Result extends Component {
    setStyle(){
        return {
            color: this.props.color,
            borderColor: this.props.color,
            fontSize: this.props.fontSize
        }
    }
	render(){
		return (
			<div>
                <p>Color: {this.props.color} - Front-size: {this.props.fontSize}px</p>
                <div id="content" 
                    style={this.setStyle()}
                    >
                    Noi dung setting
                </div>
            </div>
		)
	}
}

export default Result;
