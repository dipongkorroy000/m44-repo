import { Suspense } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import NavbarM from "./component/NavbarM";
import PaidCard from "./component/paidCard/PaidCard";
import ResultsChart from "./component/paidCard/ResultsChart";
import axios from "axios";
import MarksChart from "./component/markData/MarksChart";

{/* Axios learning */}
const marksDataPromise = axios.get("marksData.json");
// const cartPromise = fetch("paidCard.json").then((res) => res.json());

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <NavbarM></NavbarM>
      {/* <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <PaidCard cartPromise={cartPromise}></PaidCard>
      </Suspense> */}

      {/* <ResultsChart></ResultsChart> */}

      {/* Axios learning */}
      <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>
        <MarksChart marksDataPromise = {marksDataPromise}></MarksChart>
      </Suspense>
    </>
  );
}

export default App;
