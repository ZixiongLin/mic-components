import { describe, expect, it } from "vitest";
import { Check } from "../Check";
import { render, screen } from "@testing-library/react";

describe("Check Component", () => {
    render(<Check data-testid="test" id="test">label</Check>)
    screen.debug()
    it("is rendered", () => {
        expect(screen.getByTestId("test")).not.toBeNull()
    })
    it("it has same label", () => {
        expect(screen.getByText("label")).not.toBeNull()
    })
})