import NavBar from "@/components/nav-bar";

export default function DashboardPage() {
    return (
        <>
        <NavBar active="Dashboard" />
        <main className="flex justify-center">
            <div className="bg-gray-800 p-6 m-20 rounded min-w-1/3">
                <h2>Dashboard</h2>
             </div>
        </main>
        </>
    )
}