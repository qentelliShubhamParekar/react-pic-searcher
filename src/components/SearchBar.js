import React from "react";

class SearchBar extends React.Component {
  // onInputChange(event) {
  //     console.log(event.target.value)
  // }
  state = {
    term: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div className="ui icon input">
              {/* <input type="text" placeholder="Search..." onChange={this.onInputChange} /> */}
              <input
                type="text"
                placeholder="Search..."
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
