import React, { useState } from 'react'
import "./Home.css"

const obj = [
    "Wapas Laut Aaya Hai Hawaon Ka Rukh Modne Wala, Dil Me Fir Utar Raha Hai Dil Todne Wale.",
    "लड़~झगड़ कर ही सही,तुमसे उलझे रहना भी तो इश़्क है।",
    "अपना ख्याल रखा करो मेरे लिए, बेशक़ सांसे तुम्हारी चलती है लेकिन तुम में जान तो हमारी बस्ती है।",
    "क़ाफी अच्छा लगता है जब भी तू‍ हँसती है, क्योंकि तेरे एक smile में मेरी जान बसती है।",
    "थाम लूँ तेरा हाथ और तुझे इस दुनिया से दूर ले जाऊँ, जहाँ तुझे देखने वाला मेरे सिवा कोई और ना हो।",
    "सामने बैठे रहो दिल को करार आएगा जितना देखेंगे तुम्हें उतना ही प्यार आएगा",
    "ख़्वाहिश ए ज़िंदगी बस इतनी सी है कि, साथ तुम्हारा हो और ज़िंदगी कभी ख़त्म ना हो।",
    "मेरी जिंदगी में खुशियां तेरे बहाने से हैं, आधी तुझे सताने से हैं आधी तुझे मनाने से हैं।",
    "बड़ी बड़ी दुनिया छोटे छोटे रास्ते, बस हम जी रहे हैं सिर्फ़ तेरे वास्ते।",
    "मुझे तो दुआओं में आना है, सपनों में तो हर कोई आ जाता है…",
]

export default function Home() {
    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [score, setScore] = useState(0)
    const [flag, setFlag] = useState(false)
    const [shayri, setShayri] = useState("")

    const inputN1 = (e) => { setName1(e.target.value.toUpperCase().trim()) }
    const inputN2 = (e) => { setName2(e.target.value.toUpperCase().trim()) }

    const submitHandle = async () => {
        if (name1 === '' && name2 === '') {
            alert("Please enter your and your partner name.")
        }
        else if ((name1 === "JAY" && name2 === "ANJALI") || ((name1 === "ANJALI" && name2 === "JAY"))) {
           await setScore(100);
           setFlag(true);
           setShayri(obj[(Math.floor(Math.random() * 10))])
        }
        else if ((name1 === "HARSH" && name2 === "ANJALI") || ((name1 === "ANJALI" && name2 === "HARSH"))) {
           await setScore(10);
           setFlag(true);
        }
        else {
            await setScore(Math.floor(Math.random() * 100))
            setFlag(true);
            setShayri(obj[(Math.floor(Math.random() * 10))])
        }
        setName1("")
        setName2("")
    }

    const backHandle = ()=>{
        setFlag(false)
    }
    return (
        <div className="container wrap">
            {flag?
            <div className="card p-4">
            <div className="card-body">
              <h2 style={{color:"green"}}>This is your love ❤ score {score}%</h2>
              <p>And This beautiful shayri for your partner 😊</p>
              <hr/>
              <p><q>{shayri}</q></p>
              <a className="btn btn-danger" onClick={backHandle}>Back To Home</a>
            </div>
          </div>:
            <div className="card my-2 w-75 p-2">
                <div className="card-body">
                    <h2 className="card-title">AJ LOVE CALCULATOR ❤</h2>
                    <h6 className='text-muted' style={{fontSize:"12px"}}>Calculate your love ❤</h6>
                    <div className="mb-3">
                        <label htmlFor="name1" className="form-label">Enter your first name.</label>
                        <input type="text" className="form-control" id="name1" placeholder='Enter your first name' onChange={(e) => inputN1(e)} value={name1} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name1" className="form-label">Enter your partner first name.</label>
                        <input type="text" className="form-control" id="name1" placeholder='Enter your partner first name' onChange={(e) => inputN2(e)} value={name2} />
                    </div>
                    <a className="btn btn-success" style={{background:"green",borderColor:"green"}} onClick={submitHandle}>Submit</a>
                </div>
            </div>
}
        </div>
    )
}
