import "rsuite/dist/styles/rsuite-default.css";
import { Button } from "rsuite";
import { useBoolean } from "ahooks";
import Disclaimers from "./components/disclaimers";
import Calculater from "./components/calculater";
import Introduce from "./components/introduce";
import Footer from "./components/footer";
export default function App() {
  //是否第一次进入
  const [isFresh, freshActions] = useBoolean(true);

  return (
    <div className="App flex flex-col h-screen justify-center bg-blue-400 p-20 px-80">
      <div className="rounded-lg ring-8		 h-4/5 w-full bg-white p-10">
        <div className="text-center font-sans text-4xl font-extrabold	tracking-wider	">
          {" "}
          {"民 航 领 航 计 算 器"}{" "}
        </div>

        <Calculater></Calculater>

        <Introduce></Introduce>

        <Footer clickDisc={freshActions.setTrue}></Footer>
      </div>
      <Disclaimers
        isShow={isFresh}
        confirm={freshActions.setFalse}
      ></Disclaimers>
    </div>
  );
}
