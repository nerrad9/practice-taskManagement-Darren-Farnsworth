import tasks from "../tasks.js"
import {Link, useParams} from "react-router"


export default function TaskDetail(){
    const id = useParams()["id"]
    const t = tasks[Number(id)]
    return <>
        <Link to = "/" className = "DLink">Go Home</Link>
        <h1 className = "DName">{t.Name}</h1>
        <p className = "DDetail">{t.Details}</p>
    </>
}