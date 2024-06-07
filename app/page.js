"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [nome, alteraNome] = useState("");

  function enviaForm(e){
    e.preventDefault();

    if (nome == "rhuan"){
      alert("correto!")
    }
    else{
      alert("este nome não existe")
    }
  }

  return (
    <div>
      <h1>Publicação</h1>
      <p>vários bagulho</p>

      <p style={{background:"yellow"}}>Nova Versão!!!!!!!!!!!</p>

      <Link href={"teste"}>texto</Link>

      <form onSubmit={(e)=> enviaForm(e)}>

        <label>
          digite seu nome
          <input onChange={(e)=> alteraNome(e.target.value)}/>
        </label>

        <button>Enviar</button>
      </form>
    </div>
  );
}
