'use server'

import { redirect } from "next/navigation"

export async function createJogador(formData : FormData) {
    const data = {
        nickname: formData.get('nickname'),
        team: formData.get('team'),
        idade: formData.get('idade'),
    }

    await fetch('http://localhost:8080/players', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    redirect('/jogadores')
     
}