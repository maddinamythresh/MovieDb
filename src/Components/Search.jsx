import { useEffect,useState } from "react";
import Display from "./Display";
import {useParams} from "react-router-dom"
import {search} from '../util/trending'
import { useSearchParams } from 'react-router-dom';

export default function Search(){
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
    const [val, setVal] = useState([]);
    const {q}=useParams();
    console.log(query)
  useEffect(() => {
    search(query).then((data) => {
      setVal(data);
    });
  }, [query]);
  console.log(val);
  return (<div style={{marginLeft:"20px"}}>
  
  <div className="high">
    {val.map((dat) => (
      <div>{<Display data={dat} />}</div>
    ))}
  </div>
</div>
   )
}