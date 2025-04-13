import { Suspense } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import NavbarM from "./component/NavbarM";
import PaidCard from "./component/paidCard/PaidCard";

const cartPromise = fetch("paidCard.json").then((res) => res.json());

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <NavbarM></NavbarM>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <PaidCard cartPromise={cartPromise}></PaidCard>
      </Suspense>
    </>
  );
}

export default App;
