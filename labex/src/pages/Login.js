import {login} from "../services";
import { useHistory } from 'react-router';
import { useState } from "react";

export const Login = ()=>{

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
}

const onChangePassword = (e) => {
    setPassword(e.target.value);
}


const onClickLogin = async () => {
  const response = await login({
      email,
      password
  });
  if(response.token) {
      localStorage.setItem("token", response.token);
      history.push("/AdminHome");
  } else {
      alert(response.error.data.message);
  }
}

return (
  <>
      <h1>Login Page</h1>
      <p>E-mail</p>
      <input value={email} onChange={onChangeEmail}/>
      <p>Senha</p>
      <input type="password" value={password} onChange={onChangePassword}/>
      <button onClick={onClickLogin}>Login</button>
  </>
)
}
