'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Plus } from "lucide-react";
import SheetJogador from "./sheetJogador";

export default function SheetDiag() {
  return (
    <Sheet>
      <SheetTrigger className="display flex items-center gap-2"> <Plus /> Adicionar Jogadores </SheetTrigger>
      <SheetContent>
        <SheetTitle className="text-center mt-5"> Adicionar Jogadores </SheetTitle>
        <SheetHeader>
          <SheetJogador />
        </SheetHeader>
      </SheetContent>
    </Sheet>
    
  );
}
