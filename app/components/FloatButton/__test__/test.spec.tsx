import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FloatButton } from "..";

describe("Float Button", () => {
    it("render", () => {
        render(<FloatButton data-testid="float-button">
            b
        </FloatButton>)
        expect(screen.getByTestId("float-button")).not.toBeNull()
    })
    it("has children", () => {
        render(<FloatButton data-testid="float-button">
            b
        </FloatButton>)
        expect(screen.getByText("b")).not.toBeNull()
    })

    
})