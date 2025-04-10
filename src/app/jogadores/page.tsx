
import NavBar from "@/components/nav-bar";
import SheetDiag from "@/components/sheetDiag";
import { Button } from "@/components/ui/button";

export default async function JogadoresPage() {
  return (
    <>
      <NavBar active="Jogadores" />
      <main className="flex justify-center">
        <div className="bg-gray-800 p-6 m-20 rounded min-w-1/3">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Jogadores</h2>
            <Button>
              <SheetDiag />
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
