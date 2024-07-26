import { afterEach, describe, expect, it } from "vitest";
import { Check } from "../Check";
import { cleanup, render, screen } from "@testing-library/react";

describe("Check Component", () => {
    afterEach(() =>cleanup())
    it("is rendered", () => {
        render(<Check data-testid="test" id="test">label</Check>)
        expect(screen.getByTestId("test")).not.toBeNull()
    })
    it("it has same label", () => {
        render(<Check data-testid="test" id="test">label</Check>)
        expect(screen.getByText("label")).not.toBeNull()
    })
})