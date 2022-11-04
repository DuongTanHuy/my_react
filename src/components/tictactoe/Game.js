import React, { useReducer } from "react";
import calculateWinner from "./FindWinner";
import Board from "./Board";
import "./GameStyle.css";
import { useEffect } from "react";

const Game = (props) => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(props.isActive);

  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: props.isActive,
  // });

  const initialState = {
    board: Array(9).fill(null) /* state nay khong the chinh sua (immutable) */,
    xIsNext: props.isActive,
  };

  // moi func nhu mot khoi doc lap truyen vao cai gi thi nhan cai do khong nhan duoc thong tin tu ben ngoai (nghi ki lai thi hoi sai)
  const gameReducer = (state, action) => {
    switch (action.type) {
      case "CLICK": {
        // lay state ban dau
        const { board, xIsNext } = state;
        const { index, winner } = action.payload;
        if (winner || board[index]) return state;

        // tao state moi
        const newState = JSON.parse(JSON.stringify(state)); // khong co setState, khi return thi tu gan initialState bang cai duoc return
        newState.board[index] = xIsNext ? "O" : "X";
        newState.xIsNext = !xIsNext;
        return newState;
      }
      case "RESET":
        const newState = JSON.parse(JSON.stringify(state)); // bo vao {} thi newState co the trung ten do tinh chat cua constant
        newState.board = Array(9).fill(null);
        newState.xIsNext = props.isActive;
        return newState;
      default:
        console.log("Error!");
        break;
    }
    return state;
  };

  /**
   * nen su duong useReducer khi:
   *  state la mot objects phuc tap
   *  cac state co lien quan voi nhau
   *  trong game nay thi nen dung useState (nhung neu dung useReducer thi no de hieu hon (cac functions duoc viet chung trong gameReducer))
   */
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const winner = calculateWinner(state.board);

  const handleOnClick = (index) => {
    // const boardCopy = [...board];
    // const boardCopy = state.board.concat();

    // console.log(board);
    // console.log(boardCopy);

    // if (boardCopy[index] || winner) return; -> boardCopy[index]: tuc la khi nhan vao roi thi khong nhan duoc nua

    dispatch({
      type: "CLICK",
      // index: index,
      payload: {
        // nen truyen vao nhung gi can ma chua co trong initialState
        index: index /*-> (= index,)*/,
        winner,
      },
    });

    // boardCopy[index] = state.xIsNext ? "O" : "X";

    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });

    // setBoard(boardCopy);
    // setXIsNext((xIsNext) => !xIsNext); // khac phuc loi stale state
  };

  const handleResetGame = () => {
    // setState({
    //   ...state,
    //   board: Array(9).fill(null),
    //   xIsNext: props.isActive,
    // });
    // setBoard(Array(9).fill(null));
    // setXIsNext(props.isActive);

    dispatch({
      type: "RESET",
    });
  };

  return (
    <div style={{ display: "inline-block", position: "relative" }}>
      <Board cells={state.board} onClick={handleOnClick}></Board>
      <div className={`game-winner ${winner ? "have" : ""}`}>
        Winner is {winner}
      </div>
      <button className="game-button" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
