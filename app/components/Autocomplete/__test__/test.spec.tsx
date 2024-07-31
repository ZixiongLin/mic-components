import { describe, expect, it } from "vitest";
import { Autocomplete } from "../Autocomplete";
import { fireEvent, render, screen, } from "@testing-library/react";

describe("Autocomplete", () => {
    const props = {
        "data-testid":"autocomplete",
        label:"label",
        id:"autocomplete",
        listName:"example",
        options: ["spain", "china", "usa", "canary island"]
    }
    it("render", () => {
        render(<Autocomplete {...props}
        ></Autocomplete>)
        expect(screen.getByTestId("autocomplete")).not.toBeNull()
    })

    it("has label and input", () => {
        render(<Autocomplete {...props}
        ></Autocomplete>)

        const component = screen.getByTestId("autocomplete");
        const datalist = component.querySelector("datalist")!;
        expect(component.querySelector("label")).not.toBeNull()
        expect(component.querySelector("input")).not.toBeNull()
        expect(datalist.children.length).toEqual(4)

    })

    it("input with value should show correct options", () => {
        render(<Autocomplete {...props}
        ></Autocomplete>)

        const component = screen.getByTestId("autocomplete");
        const input = component.querySelector("input")!
        fireEvent.change(input, {target: {value:"spa"}})
        expect(input.value).toEqual("spa")
        fireEvent.select(input,{target: {value:"china"}})
        expect(input.value).toEqual("china")
        // fireEvent.select(datalist, {target: {value:"usa"}})
    })
})