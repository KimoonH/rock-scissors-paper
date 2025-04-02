import './App.css';
import Box from "./component/Box";
import { useState } from "react";

// 1. 박스 2개 (타이틀, 사진, 결과값)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면, 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다(이기면 초록, 지면 빨강, 비기면 검은색)

const choice = {
  rock: {
    name: "Rock",
    img: "https://us.123rf.com/450wm/topvectors/topvectors1807/topvectors180700229/104023307-%EB%B9%9B%EA%B3%BC-%EA%B7%B8%EB%A6%BC%EC%9E%90%EA%B0%80%EC%9E%88%EB%8A%94-%EA%B1%B0%EB%8C%80%ED%95%9C-%EB%8F%8C%EC%9D%98-%EC%95%84%EC%9D%B4%EC%BD%98-%EC%82%B0-%EB%B0%94%EC%9C%84%EC%9D%98-%ED%81%B0-%ED%9A%8C%EC%83%89-%EC%A1%B0%EA%B0%81-%EC%A7%80%EB%8F%84-%EB%98%90%EB%8A%94-%EB%B9%84%EB%94%94%EC%98%A4-%EA%B2%8C%EC%9E%84%EC%9D%98-%ED%92%8D%EA%B2%BD-%EB%B0%B0%EA%B2%BD-%EB%A7%8C%EB%93%A4%EA%B8%B0%EB%A5%BC%EC%9C%84%ED%95%9C-%EC%9E%90%EC%97%B0-%EC%9A%94%EC%86%8C-%EB%A7%8C%ED%99%94-%EB%B2%A1%ED%84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8.jpg"
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/512/4975/4975327.png"
  },
  paper: {
    name: "Paper",
    img: "https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-colored-writing-paper-illustration-image_1432850.jpg"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const play = (userChoice) => {
    const user = choice[userChoice];
    const computer = randomChoice();

    setUserSelect(user);
    setComputerSelect(computer);

    const result = judgement(user, computer);
    setUserResult(result.user);
    setComputerResult(result.computer);

  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return { user: "tie", computer: "tie" };
    } else if (user.name === "Rock") {
      return computer.name === "Scissors"
        ? { user: "win", computer: "lose" }
        : { user: "lose", computer: "win" };
    } else if (user.name === "Scissors") {
      return computer.name === "Paper"
        ? { user: "win", computer: "lose" }
        : { user: "lose", computer: "win" };
    } else if (user.name === "Paper") {
      return computer.name === "Rock"
        ? { user: "win", computer: "lose" }
        : { user: "lose", computer: "win" };
    }
  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체 키값만 뽑아서 Array로 만들어준다.
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }


  return (
    <div>
      <div className="main">
        <Box title="YOU" item={userSelect} result={userResult} />

        <Box title="COMPUTER" item={computerSelect} result={userResult} />
      </div>

      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
