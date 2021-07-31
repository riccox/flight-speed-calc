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
    <div className="App flex flex-col h-full w-screen justify-center items-center bg-blue-400 py-10">
      <div className="flex-col justify-between items-center rounded-lg ring-8 w-5/6 bg-white p-10">
        <div className="flex justify-center">
          <div className=" text-gray-100 max-w-max rounded-xl px-4 py-2 font-sans text-2xl font-extrabold bg-blue-400">
            {"民 航 领 航 计 算 器"}
          </div>
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
