import { useEffect, useState } from "react";

import Display from "./Display";
import {popular} from "../util/trending";
export default function Popular() {
  const [val, setVal] = useState([]);
  useEffect(() => {
    popular().then((data) => {
      setVal(data);
    });
  }, []);
  console.log(val);
  return (
    <div style={{marginLeft:"20px"}}>
      <h1>Popular Movies</h1>
      <div className="high">
        {val.map((dat) => (
          <div>{<Display data={dat} />}</div>
        ))}
      </div>
    </div>
  );
}
