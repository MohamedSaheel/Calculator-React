import React, { useState } from 'react'
import './App.css'

const Calc = () => {
    const [txt, setTxt] = useState('')
    const [res , setRes] = useState('')

    let inputVal=(e)=>{
        let btnTxt = e.target.innerText
        setTxt(txt+btnTxt)
        autoAns(btnTxt)
    }

    let autoAns = (btnTxt)=>{
        let val = txt + btnTxt
        // setTxt(val)
        try{
            const resAns = eval(val)
            if(val.length > 1){
                setRes(resAns)
            }  
        }
        catch(err){
            setRes(val)
        }
       
    }

    let clearAll=()=>{
        setTxt('')
    }

    let clearVal=()=>{
        setTxt(txt.slice(0,-1))
        setRes('')
    }

    let totalVal=()=>{
        let ans = eval(txt)
        setTxt(ans)
        setRes('')
    }
    return (
    <div>
    <div className="calculator">
        <div className="calcbox">
            <div className="input">
                <input type="text" value={txt}/>
                <div className="ans">{res}</div>
            </div>
            <div className="buttonbox">
                <button className='symbol' onClick={clearAll}>AC</button>
                <button className='symbol' onClick={clearVal}>C</button>
                <button className='symbol' onClick={inputVal}>%</button>
                <button className='symbol' onClick={inputVal}>/</button>
                <button onClick={inputVal}>9</button>
                <button onClick={inputVal}>8</button>
                <button onClick={inputVal}>7</button>
                <button className='symbol' onClick={inputVal}>+</button>
                <button onClick={inputVal}>6</button>
                <button onClick={inputVal}>5</button>
                <button onClick={inputVal}>4</button>
                <button className='symbol' onClick={inputVal}>-</button>
                <button onClick={inputVal}>3</button>
                <button onClick={inputVal}>2</button>
                <button onClick={inputVal}>1</button>
                <button className='symbol' onClick={inputVal}>*</button>
                <button onClick={inputVal}>00</button>
                <button onClick={inputVal}>0</button>
                <button onClick={inputVal}>.</button>
                <button className='symbol' onClick={totalVal}>=</button>
            </div>
        </div>
    </div>
</div>
 )
}

export default Calc;