"use client"
import { useState } from "react";
import { AutocompleteProps } from "./AutocompleteProps"

export const Autocomplete = ({
    id,
    label,
    listName,
    options,
    ...props
}:AutocompleteProps) => {

    const [text, useText] = useState("");
    return <div {...props} className="flex gap-2 items-center">
        <label htmlFor={id} className="font-bold text-sm cursor-pointer">{label}</label>
        <input type="text" id={id}
            className="px-4 py-2 border rounded-md"
            placeholder="search one"
            autoComplete="off"
            list={listName}
        />
        <datalist id={listName} title="data-list">
            {options.filter(opt => opt.includes(text))
                .map((opt,index) => {
                    return <option value={opt} key={index}
                        className="cursor-pointer hover:bg-primary-200"
                    >{opt}</option>
                })
            }
        </datalist>
    </div>
}