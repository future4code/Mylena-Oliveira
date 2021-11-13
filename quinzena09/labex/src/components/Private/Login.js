import React from 'react';
import { BASE_URL } from "../constants/base_url";
import useRequestPost from "../Reutilizavel/useRequestPost";
import useForm from "./hooks/useForm";



export const Login = ()=>{
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" });
    const [token] = useRequestPost(`${BASE_URL}/mylena-savala-banu/login`)

    const fazerLogin = (event) => {
        event.preventDefault();
        console.log(form);  
        token.map((item=>{
         return (
             alert("Login com sucesso",item)

         )   
        }))
 
    cleanFields();
      };

  
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={fazerLogin}>
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder={"E-mail"}
          required
          type="email"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          placeholder={"Senha"}
          required
          pattern={"^.{3,}"}
          title={"Sua senha deve ter no mínimo 3 caracteres"}
        />

        <button to="/AdminHome">Fazer Login</button>
      </form>
    </div>
  );


};







