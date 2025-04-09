import { redirect } from "next/navigation"

const API_URL = 'http://localhost:8080/players'

export async  function getCategories() {
    const response = await fetch(API_URL)
    return await response.json()
}

export async function createCategory(inicialState: any, formData: FormData) {
    const data = {
        name: formData.get('name'),
        idade: formData.get('idade'),
        team: formData.get('team')
    }

    const options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch(API_URL, options)

    redirect('/estatistica')
}


