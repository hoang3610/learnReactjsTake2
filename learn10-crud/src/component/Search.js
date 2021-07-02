import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Nhập từ khóa..." />
        <span class="input-group-btn">
          <button class="btn btn-primary" type="button">
            <span class="fa fa-search mr-5"></span>Tìm
          </button>
        </span>
      </div>
    );
  }
}

export default Search;
