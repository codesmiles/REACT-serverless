import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";

// REACT PROPS
class Statement extends React.Component {
  render() {
    return (
      <div>
        {/* this prop works on the ground that the a value will be give when referenced later  with the word attribute  */}
        <h1>Hope this {this.props.word} works</h1>
      </div>
    );
  }
}

class Play extends React.Component {
  render() {
    return (
      <h2>Call yourself beautiful wanna get {this.props.song.word1} oo</h2>
    );
  }
}

class Component2 extends React.Component {
  render() {
    const probs = `People say I'm not gonna change`;
    const obj = { word1: "emotional", word2: `dont be shy` };
    return (
      <div>
        <h2>Dont ask why, dont be shy la la la</h2>
        <Statement word="ta ta ta" />
        <Statement word={probs} />
        <Play song={obj} />
      </div>
    );
  }
}

const rElement = document.getElementById("root");
// ReactDOM.render(<Statement word="$stuff"/>,rElement)
// ReactDOM.render(<Component2/>,rElement)

// REACT STATE
class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: `Nwogu Michael Daberechi`,
      nickname: `codesmiles`,
      occupation: [
        `student \t`,
        `clinic assistant\t`,
        `Piano enthusiast and tutor\t`,
        `software developer\t`
      ],
      languages: {
        Fluent: `english`,
        conversational: `\tYoruba`,
        Understand: `\tIgbo`
      },
      age: 23
    };
  }

  render() {
    // let others = this.state.occupation.pop();
    return (
      <div>
        <h1>ABOUT ME</h1>
        <p>
          My name is {this.state.name}, mostyly known {this.state.nickname} .{" "}
          <br />I am {this.state.age} years of age and I am currently{" "}
          {this.state.occupation} but currently majorly a{" "}
          {this.state.occupation[0]} here's a list of languages i can speak{" "}
          {this.state.languages.Fluent +
            this.state.languages.Understand +
            this.state.languages.conversational}
        </p>
      </div>
    );
  }
}

// const rElement = document.getElementById("root");
// ReactDOM.render(<Person />, rElement);

class Mysolution extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  myChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <form action="POST">
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input type="text" />
        <button>Submit</button>
      </form>
    );
  }
}
ReactDOM.render(<Mysolution />, rElement);
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
//   rootElement
// );
