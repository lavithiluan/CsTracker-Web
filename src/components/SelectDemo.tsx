import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select name="sexo" required>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione seu Sexo" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sexo</SelectLabel>
          <SelectItem id="sexo" value="M">Masculino</SelectItem>
          <SelectItem id="sexo" value="F">Feminino</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
