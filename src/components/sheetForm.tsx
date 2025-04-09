'use client'

import { createJogador } from "@/actions/jogadores-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SheetForm() {
  return (
    <form action={createJogador}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right"> Nickname </Label>
          <Input id="username" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="time" className="text-right"> Time </Label>
          <Input id="time" className="col-span-3" />
          <Label htmlFor="time" className="text-right"> Idade </Label>
          <Input id="idade" className="col-span-3" />
        </div>
        <Button type="submit"> Adicionar </Button> 
         
      </div>
    </form>
  );
}
