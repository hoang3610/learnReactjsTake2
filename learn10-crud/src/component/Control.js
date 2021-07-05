import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {
  render() {
    return (
      <div class="row mt-15">
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        {/* Search */}
          <Search onSearch={this.props.onSearch} />
        </div>
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        {/* Sort */}
          <Sort onSort={this.props.onSort}/>
        </div>
      </div>
    );
  }
}

export default Control;
