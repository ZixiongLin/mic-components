import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Textarea } from "../Textarea";

describe("textarea" , () =>{
    render(<Textarea id="textarea" data-testid="textarea">Label</Textarea>)
    it("render", () => {
        expect(screen.getByTestId("textarea")).not.toBeNull();
    })

    it("have label", () => {
        expect(screen.getAllByLabelText("Label")).not.toBeNull()
    })
})