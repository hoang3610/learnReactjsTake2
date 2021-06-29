import React, {Component} from 'react';

class Reset extends Component {
	onResetDefault = () => {
		this.props.onReset(true)
	}
	render(){
		return (
			<div>
                <button type="button" class="btn btn-primary" onClick={this.onResetDefault}>Reset</button>
            </div>
		)
	}
}

export default Reset;
