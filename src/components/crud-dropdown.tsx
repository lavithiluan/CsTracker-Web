import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { ChevronDown, Pencil, Trash2 } from "lucide-react"

export default function CrudDropDown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Pencil />
                    Editar Jogador
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Trash2 />
                    Apagar Jogador
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      
    )
}
 