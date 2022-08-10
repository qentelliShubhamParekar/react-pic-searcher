import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = (term) => {
    unsplash
      .get(`/search/photos`, {
        params: { query: term },
      })
      .then((response) => {
        this.setState({
          images: response.data.results,
        });
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={(e) => this.onSearchSubmit(e)} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
