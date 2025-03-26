interface NavBarProps {
    active: "dashboard" | "estatistica";
}


export default function Navbar(props: NavBarProps) {
    const { active } = props;
    const classActive = "border-b-2 border-pink-700"
    return(
        <nav className="flex justify-between items-center p-6 bg-slate-900">
            <h1 className="text-2xl font-bold">CsTracker</h1>
            <ul className="flex gap-50">
                <li className={active === "dashboard" ? classActive:""}><a href="/dashboard">Dashboard</a></li>
                <li className={active === "estatistica" ? classActive:""}><a href="/estatistica">Estatistica</a></li>
            </ul>
            <img className="size-12 rounded-full" src="https://avatars.githubusercontent.com/u/85400194?v=4" alt="" />
        </nav>
    )
}

