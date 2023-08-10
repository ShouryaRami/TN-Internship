/* eslint-disable eqeqeq */
import React from "react";
import './login.css'

function Login( ){
    const [name,setName]=React.useState()
    const [pass,setPassword]=React.useState()
    const[page,setPage]=React.useState(1)
    const [ans,setAns]=React.useState({})
    const handleOnChange =(e)=> {
        setName(e.target.value);
    }
    console.log(name)
    const handleOnClick = ()=> {
        setPage(page+1)}

    const handleOnChange2 =(f)=> {
        setPassword(f.target.value);
    }
    console.log(pass)
    const handleOnClick3=()=>{
        setPage(page+1)
        localStorage.setItem('username',name)
        localStorage.setItem('Password',pass)
    }
    
    const handleOnClick4=()=>{
        localStorage.getItem('username',name)
        localStorage.getItem('Password',pass)
    }
    const handleOptionChange=(e)=>{
        //console.log(e.target.name,e.target.value)
        const{name,value}=e.target
        setAns({
            ...ans,
            [name]:value
        })
    }
    const calculateScore=()=>
        {
            let score=0;
            question.forEach((fld)=>
            {
                if(ans[fld.id]==fld.correctAnswer)
                {score++}
            })
            return score
        }
    

    console.log(ans)
    let question = [
        {
            id:1,
            question: "What is reactJS",
            options: ["Server Side Framework", "user interface framework", "both a and b", "none"],
            correctAnswer: "user interface framework",
        },
        {
            id:2,
            question: "In which language is React.js written",
            options: ["Python", "JavaScript", "Java", "Php"],
            correctAnswer: "JavaScript",
        },
        {
            id:3,
            question: "Identify the one which is used to pass data to components from outside",
            options: ["Render with arguments", "setState", "PropTypes", "props"],
            correctAnswer: "props",
        },
        {
            id:4,
            question: "Which of the following is used in React.js to increase performance?",
            options: ["Virtual DOM", "Original DOM", "Both A and B", "None of the above"],
            correctAnswer: "Virtual DOM",
        },
        {
            id:5,
            question: "Identify the command used to create a react app.",
            options: ["npm install create-react-app", "npm install -g create-react-app", "install -g create-react-app", "None of the above"],
            correctAnswer: "npm install -g create-react-app",
        },
        {
            id:6,
            question: "Which of the following port is the default where webpack-dev-server runs?",
            options: ["3000", "3306", "3030", "8080"],
            correctAnswer: "8080",
        },
        {
            id:7,
            question: "How many elements can a valid react component return?",
            options: ["1", "2", "3", "4"],
            correctAnswer: "1",
        },
        {
            id:8,
            question: "A state in React.js is also known as?",
            options: ["The internal storage of the component", "External storage of the component", "Permanent Storage", "All of the above"],
            correctAnswer: "The internal storage of the component",
        },
        {
            id:9,
            question: "What is ReactJS mainly used for building?",
            options: ["Database", "Connectivity", "User Interface", "Design Platform"],
            correctAnswer: "1",
        },
        {
            id:10,
            question: "How many elements can a valid react component return?",
            options: ["Props", "Elements", "Components", "None of the above"],
            correctAnswer: "Components",
        },

    ]
    
    return (
        <div>
    {page==1 && (<div>
        <h1> Student Login Form </h1>
        <div>
            <form>
        <div className="container">   
            <label>Username : </label>   
            <input onChange={(e)=>(handleOnChange(e))} type="text" placeholder="Enter Username" name="username" required/> 

            <label>Password : </label>   
            <input onChange={(f)=>(handleOnChange2(f))} type="password" placeholder="Enter Password" name="password" required/>
            
            <button onClick={()=>(handleOnClick3())} type="submit">Login</button> 
            <button onClick={()=>(handleOnClick4())} type="submit">Get</button> 
        </div>
        </form>
        </div>
    </div>)}

    {page==2 && (
        <div>
            <h2>
                Quiz App
            </h2>
            <hr/>
            {question.map((fld)=>(
                <>
                <h2>
                    {fld.question}
                </h2>
                {fld.options.map((opt)=>
                (
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name={fld.id} value={opt}
                        onClick={(e)=>{handleOptionChange(e)}}/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            {opt}
                        </label>
                    </div>))}
                </>))}
            <button onClick={()=>(handleOnClick())} >Submit</button>
        </div>
    )}

    {page==3 && (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Report Card</h2>
                    <p>Your Score is {calculateScore()} </p>
                </div>
            </div>
        </div>
    )}
    </div>
    )
}

export default Login;