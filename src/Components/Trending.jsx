import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Display from "./Display";
import trending from "../util/trending";
export default function Trending({}) {
  const [val, setVal] = useState([]);
  useEffect(() => {
    trending().then((data) => {
      setVal(data);
    });
  }, []);
  console.log(val);
  return (
    <div style={{ marginLeft: "20px" }}>
      <Link to="/trending">
        <h1>Trending Movies</h1>
      </Link>
      <div className="high">
        {val.map((dat) => (
          <div>{<Display data={dat} />}</div>
        ))}
      </div>
      
    </div>
  );
}
