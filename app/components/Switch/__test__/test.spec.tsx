import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Switch } from "../Switch";

describe("Switch", () => {
    it("render", () => {
        render(<Switch data-testid="switch"/>)
        expect(screen.getByTestId("switch")).not.toBeNull()
    })

    describe("labels", () => {
        it("left label", () => {
            render(<Switch data-testid="switch"
                leftLabel="Left"
            />)
            expect(screen.getByText("Left")).not.toBeNull()
        })
        it("right label", () => {
            render(<Switch data-testid="switch"
                rightLabel="Right"
            />)
            expect(screen.getByText("Right")).not.toBeNull()
        })
    })
})