import CategoryItem from "@/components/category-item";
import NavBar from "@/components/nav-bar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function EstatisticaPage() {
    return (
        <>
        <NavBar active="estatistica" />
        <main className="flex justify-center">
            <div className ="bg-gray-800 p-6 m-20 rounded min-w-1/3">
                <div className="flex justify-between">
                    <h2 className="text-lg font-semibold">Jogadores</h2>
                    <Button>
                        <Plus />
                        Adicionar Novo Jogador
                    </Button>
                </div>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem /> 
            </div>
        </main>
        </>
    )
}