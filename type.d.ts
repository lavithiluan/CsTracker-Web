interface Jogador {
    id: number,
    nickname: string,
    time: string,
    sexo: "M" | "F";
    dataNascimento: string,
    kills: number,
    deaths: number,
    assists: number,
    headshots: number,
    accuracy: number,
}