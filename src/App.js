import Button from "./Components/Button";
import ButtonBox from "./Components/ButtonBox";
import CalcComponunts from "./Components/CalcComponunts";
import Screen from "./Components/Screen";
import CalcProvider from "./contest/CalcContest";
const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="]
];
function App() {
  return (
    <div>
      <CalcProvider>
      <CalcComponunts>
        <Screen />
        <ButtonBox>
            {btnValues.flat().map((btn,i)=>(
              <Button value={btn} key={i}></Button>
            ))}

        </ButtonBox>
      </CalcComponunts>
      </CalcProvider>

    </div>
  );
}

export default App;
