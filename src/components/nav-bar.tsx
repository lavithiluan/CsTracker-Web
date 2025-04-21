interface NavBarProps {
    active: "Dashboard" | "Jogadores";
}


export default function Navbar(props: NavBarProps) {
    const { active } = props;
    const classActive = "border-b-2 border-purple-800"
    return(
        <nav className="flex justify-between items-center p-6 bg-gray-800">
            <h1 className="text-2xl font-bold">CsStats</h1>
            <ul className="flex gap-50">
                <li className={active === "Dashboard" ? classActive:""}><a href="/Dashboard">Dashboard</a></li>
                <li className={active === "Jogadores" ? classActive:""}><a href="/Jogadores">Jogadores</a></li>
            </ul>
            <img className="size-12 rounded-full" src="https://avatars.githubusercontent.com/u/85400194?v=4" alt="" />
        </nav>
    )
}

