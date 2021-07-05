import React, { Component } from "react";

class Search extends Component {
  constructor(props){
    super(props)
    this.state = {
        keyword: ''
    }
}
  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    })
  }
  onSearch = () => {
    this.props.onSearch(this.state.keyword)
  }
  render() {
    var {keyword} = this.state
    return (
      <div class="input-group">
        <input type="text" 
              name="keyword"
              value={keyword}
              onChange={this.onChange}
              class="form-control" placeholder="Nhập từ khóa..." />
        <span class="input-group-btn">
          <button class="btn btn-primary" type="button"
                  onClick = {this.onSearch}>
            <span class="fa fa-search mr-5"></span>Tìm
          </button>
        </span>
      </div>
    );
  }
}

export default Search;
