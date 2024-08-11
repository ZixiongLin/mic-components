import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Select } from "../Select";
import { SelectOption } from "../SelectOption";

describe("Select", () => {
    it("render", () => {
        render(<Select name="test" id="test" data-testid="test"></Select>)
        expect(screen.getByTestId("test")).not.toBeNull()
    })

    it("render with select-options", () => {
        render(
            <Select  name="test" id="test" data-testid="test">
                <SelectOption value="1">1</SelectOption>
                <SelectOption value="2">2</SelectOption>
            </Select>
        )
        expect(screen.getByTestId("test").childNodes.length).toEqual(2)
    })
    it("label", () => {
        render(
            <Select  name="test" id="test" data-testid="test"
                label="label"
            >
                <SelectOption value="1">1</SelectOption>
                <SelectOption value="2">2</SelectOption>
            </Select>
        )
        expect(screen.getByText("label")).not.toBeNull()
        expect(screen.getByTestId("test").childNodes.length).toEqual(3)
    })
})