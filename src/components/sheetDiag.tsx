'use client'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SheetForm from "./sheetForm";
import { Plus } from "lucide-react";

export default function SheetDiag() {
  return (
    <Sheet>
      <SheetTrigger className="display flex items-center gap-2"> <Plus /> Adicionar Jogadores </SheetTrigger>
      <SheetContent>
        <SheetTitle className="text-center mt-5"> Adicionar Jogadores </SheetTitle>
        <SheetHeader>
          <SheetForm />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
