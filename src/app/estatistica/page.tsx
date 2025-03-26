import NavBar from "@/components/nav-bar";

export default function EstatisticaPage() {
    return (
        <>
        <NavBar active="estatistica" />

        <main className="flex justify-center">
            <div className ="bg-slate-900 p-6 m-20 rounded min-w-1/3">
                <h2>Estatistica</h2>
            </div>
        </main>
        </>
    )
}