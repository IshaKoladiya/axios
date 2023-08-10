import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [err, seterr] = useState('');
  // const [Res, setRes] = useState('');

  const em = (e) => {
    setemail(e.target.value );
  };
  const pass = (e) => {
    setpassword( e.target.value);
  };

  const button = async () => {
    console.log(email,password)


    // method 1

    axios.post('https://reqres.in/api/login', {email: email, password:password})
    .then( result =>{
      console.log(result.data);
        // alert("success")
        // setRes(result.data);
    })
    .catch(error => {
      console.log(error.message);
      // alert("envelid data")
      seterr(error.message);
    })


  }

  return (
    
    <div className="container">
      <div className="row my-5 py-5">
        {err !== "" && <h2>{err}</h2> }
        <div className="col-8">
          <div className="my-5">Email : <input type="email" value={email} onChange={em} /></div>
          <div className="my-5"> Password : <input name="password" value={password} onChange={pass} /></div>
          <button onClick={button}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
