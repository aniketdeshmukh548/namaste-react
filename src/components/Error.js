import { useRouteError } from "react-router-dom";
import { ERROR_URL } from "../utils/constants";
const Error=()=>{
    const err=useRouteError();
    console.log(err)
    return(
        <div className="error-container">
            <img src={ERROR_URL} alt="" />
            <h2>{err.error.message}</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    )
}

export default Error;