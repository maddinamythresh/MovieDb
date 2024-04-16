import { useEffect, useState } from "react";

import Display from "./Display";
import {topRated} from "../util/trending";
export default function TopRated() {
  const [val, setVal] = useState([]);
  useEffect(() => {
    topRated().then((data) => {

      setVal(data);
    });
  }, []);
  console.log(val);
  return (
    <div style={{marginLeft:"20px"}}>
      <h1>TopRated Movies</h1>
      <div className="high">
        {val.map((dat) => (
          <div>{<Display data={dat} />}</div>
        ))}
      </div>
    </div>
  );
}
