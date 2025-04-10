'use client'

import { createJogadores } from "@/actions/jogadores-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function SheetForm() {
  return (
    <form action={createJogadores} className="grid gap-4 py-4 mt-4">
      <div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="nickname" className="text-right"> Nickname </Label>
          <Input id="nickname" name="nickname" required className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="time" className="text-right"> Time </Label>
          <Input id="time" name="time" required className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 gap-4 items-center">        
          <Label htmlFor="dataNascimento" className="text-right"> Idade </Label>
          <Input type="date" name="dataNascimento" required className="col-span-3"/>
        </div>
        <div className="grid grid-cols-4 gap-4 items-center">
          <Label htmlFor="sexo" className="text-right"> Sexo </Label>
          <select name="sexo" required className="col-span-3 border rounded-md p-1">
            <option value="">Selecione</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
          </select>
          
        </div>
        <Button type="submit"> Adicionar </Button> 
      </div>
    </form>
  );
}


