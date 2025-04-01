import { SquareUser } from "lucide-react";
import CrudDropDown from "./crud-dropdown";

export default function CategoryItem() {
    return (
        <div className="flex  justify-between mt-2">
            <div className="flex gap-2">
                <SquareUser />
                <span>Player</span>
            </div>
            <div>
                <CrudDropDown />
            </div>
        </div>
    )
}