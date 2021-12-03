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








//     const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
//     const [token] = useRequestPost(`${BASE_URL}/mylena-savala-banu/login`)

//     const fazerLogin = (event) => {
//         event.preventDefault();
//         console.log(form);  
//         token.map((item=>{
//          return (
//              alert("Login com sucesso",item)

//          )   
//         }))
 
//     cleanFields();
//       };

  
//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={fazerLogin}>
//         <input
//           name="email"
//           value={form.email}
//           onChange={onChange}
//           placeholder={"E-mail"}
//           required
//           type="email"
//         />
//         <input
//           type="password"
//           name="password"
//           value={form.password}
//           onChange={onChange}
//           placeholder={"Senha"}
//           required
//           pattern={"^.{3,}"}
//           title={"Sua senha deve ter no mínimo 3 caracteres"}
//         />

//         <button to="/AdminHome">Fazer Login</button>
//       </form>
//     </div>
//   );


// };




