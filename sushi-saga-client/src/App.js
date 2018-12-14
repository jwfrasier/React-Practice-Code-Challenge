import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      allOurSushi: [],
      wallet: 100,
      eaten: false,
      displayIndex: 0
    };
  }

  nextFourSushi = () => {
    return this.state.allOurSushi.slice(
      this.state.displayIndex,
      this.state.displayIndex + 4
    );
  };

  componentDidMount = () => {
    fetch(API)
      .then(response => response.json())
      .then(sushi => this.setState({ allOurSushi: sushi }));
  };

  render() {
    // console.log(this.state.allOurSushi);
    return (
      <div className="app">
        <SushiContainer
          allFourSushi={this.state.allOurSushi.slice(0, 4)}
          nextFourSushi={this.nextFourSushi}
        />
        <Table
          allFourSushi={this.state.allOurSushi.slice(0, 4)}
          wallet={this.state.wallet}
        />
      </div>
    );
  }
}

export default App;
