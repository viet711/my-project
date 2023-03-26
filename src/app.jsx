
// import Avavtar from "./components/avatar"

import { useState  } from "react"
import Square from "./components/Square"
import Board from "./components/Board"

const App = () => {
    // // const [counter, setCounter] = useState(10)
    // var date = new Date 
    // var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    // const [settime, setCounter] = useState(date.getSeconds())


    
    // function increase() {        
    //     setCounter(setCounter +1)
    // }
    // console.log(setCounter);
    // return <div className="h-[100vh] flex flex-col justify-center items-center">
    //     <h1>{time}</h1>
    //     <button onClick={increase} className="border hover:bg-pink-500">Tăng dần</button>
    // </div>
    return <div
    className="h-[100vh] flex flex-col justify-center items-center">
    <Board>
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
    </Board>
</div>
}

export default App
