import tasks from "../tasks.js"
import {Link} from "react-router"

export default function TaskList(){
    return <>
    <h1 className = "LHeader">TASK LIST</h1>
    <ul className = "LUl">
        {tasks.map((t) => (
             <li key = {t.id} className = "LLi">
                <h2 className = "LName">{t.Name}</h2>
                <p className = "LDetail">{t.Details}</p>
                <Link to = {"/details/"+String(t.id)} className = "LLink">View Details</Link>
            </li>
            ))}
    </ul>
    </>
}