import React, { Component } from 'react';
import './game.css';

//Renders a single square button
class Square extends Component {
  render() {
    return (
      <button className="square"
        onClick={() => this.props.onClick()}
      >
        {this.props.value}
      </button>
    );
  } 
}
 
// Renders 9 square components  
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }


  renderSquare(i) { //[pass as prop called value to the square]
    // this value is passed from the parent board to the child square
    return <Square value={this.state.squares[i]} onClick={() =>this.handleClick(i)} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

//Renders the board with place holders
class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
export default Game;

// ========================================

