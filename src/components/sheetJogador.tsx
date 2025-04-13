"use client";

import { createJogadores } from "@/actions/jogadores-actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { SelectDemo } from "./SelectDemo";

export default function SheetJogador() {
  return (
    <form action={createJogadores} className="grid gap-4 py-4 mt-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="nickname" className="text-right">
          Nickname
        </Label>
        <Input id="nickname" name="nickname" className="col-span-3" />
      </div>

      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="time" className="text-right">
          Time
        </Label>
        <Input id="time" name="time" className="col-span-3" />
      </div>

      <div className="grid grid-cols-4 gap-4 items-center">
        <Label htmlFor="dataNascimento" className="text-right">
          Data de Nascimento
        </Label>
        <Input type="date" name="dataNascimento" required className="col-span-3"/>
      </div>

      <div className="grid grid-cols-4 gap-4 items-center">
        <Label htmlFor="sexo" className="text-right">
          Sexo
        </Label>
        <SelectDemo />
      </div>

      <div className="grid grid-cols-4 gap-4 items-center">
        <Label htmlFor="kills" className="text-right">
          Eliminacoes
        </Label>
        <Input name="kills" type="number" className="col-span-3" />
      </div>

      <div className="grid grid-cols-4 gap-4 items-center">
        <Label htmlFor="deaths" className="text-right">
          Mortes
        </Label>
        <Input name="deaths" type="number" className="col-span-3" />
      </div>

      <div className="grid grid-cols-4 gap-4 items-center">
        <Label htmlFor="assists" className="text-right">
          Assistencias
        </Label>
        <Input name="assists" type="number" className="col-span-3" />
      </div>

      <div className="grid grid-cols-4 gap-4 items-center">
        <Label htmlFor="headshots" className="text-right">
          Tira na cabeca
        </Label>
        <Input name="headshots" type="number" className="col-span-3" />
      </div>

      <div className="grid grid-cols-4 gap-4 items-center">
        <Label htmlFor="accuracy" className="text-right">
          Precisao
        </Label>
        <Input
          name="accuracy"
          type="number"
          step="0.1"
          className="col-span-3"
        />
      </div>

      <Button type="submit" className="mt-85">
        Adicionar Jogador
      </Button>
    </form>
  );
}
