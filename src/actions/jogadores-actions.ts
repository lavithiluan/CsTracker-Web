'use server'

import { redirect } from "next/navigation";

export async function createJogadores(formData: FormData) {
    const data = {
        nickname: formData.get("nickname"),
        sexo: formData.get("sexo"),
        dataNascimento: formData.get("dataNascimento"),
        time: formData.get("time"),
        estatisticas: [
          {
            kills: Number(formData.get("kills")),
            deaths: Number(formData.get("deaths")),
            assists: Number(formData.get("assists")),
            headshots: Number(formData.get("headshots")),
            accuracy: Number(formData.get("accuracy"))
          }
        ]
      }
      
      console.log("Enviando para API:", JSON.stringify(data, null, 2));

    await fetch("http://localhost:8080/players/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    redirect("/jogadores")
}