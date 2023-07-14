import { useContext } from "react"
import { AppContext } from "../context/AppContext"



const Remaining=()=>{
    const {expenses , budget} = useContext(AppContext)

    const totalExpenses = expenses.reduce((total,item)=>{
        return( total = total + item.cost )
    },0)

    const budgetAlert = totalExpenses > budget ? "alert-danger" : "alert-success"

    return(
        <div className={`alert ${budgetAlert}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    )
}

export default Remaining;