import React, { useState } from 'react'
import "./Home.css"

export default function Home() {
    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [score, setScore] = useState(0)
    const [flag, setFlag] = useState(false)

    const inputN1 = (e) => { setName1(e.target.value.toUpperCase()) }
    const inputN2 = (e) => { setName2(e.target.value.toUpperCase()) }

    const submitHandle = async () => {
        if (name1 === '' && name2 === '') {
            alert("Please enter your and your partner name.")
        }
        else if ((name1 === "JAY" && name2 === "ANJALI") || ((name1 === "ANJALI" && name2 === "JAY"))) {
           await setScore(100);
           setFlag(true);
            console.log(score);
        }
        else if ((name1 === "HARSH" && name2 === "ANJALI") || ((name1 === "ANJALI" && name2 === "HARSH"))) {
           await setScore(10);
           setFlag(true);
            console.log(score);
        }
        else {
            await setScore(Math.floor(Math.random() * 100) + 1)
            setFlag(true);
        }
        setName1("")
        setName2("")
    }
    return (
        <div className="container wrap">
            {flag?
            <div class="card p-4">
            <div class="card-body">
              <h2 className='text-success'>This is your love ❤ score {score}</h2>
            </div>
          </div>:
            <div className="card my-2 w-75 p-2">
                <div className="card-body">
                    <h5 className="card-title">Calculate your love ❤</h5>
                    <div className="mb-3">
                        <label htmlFor="name1" className="form-label">Enter your name.</label>
                        <input type="text" className="form-control" id="name1" placeholder='Enter your name' onChange={(e) => inputN1(e)} value={name1} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name1" className="form-label">Enter your partner name.</label>
                        <input type="text" className="form-control" id="name1" placeholder='Enter your partner name' onChange={(e) => inputN2(e)} value={name2} />
                    </div>
                    <a className="btn btn-danger" onClick={submitHandle}>Submit</a>
                </div>
            </div>
}
        </div>
    )
}
