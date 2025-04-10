'use server'

import { redirect } from "next/navigation";

export async function createJogadores(formData: FormData) {
    const data = {
        nickname: formData.get("nickname"),
        sexo: formData.get("sexo"),
        dataNascimento: formData.get("dataNascimento"), // tipo "2004-12-13"
        time: formData.get("time")
    }

    await fetch("http://localhost:8080/jogadores/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    redirect("/jogadores")
}