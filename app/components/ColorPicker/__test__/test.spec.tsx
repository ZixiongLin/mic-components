import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ColorPicker } from "../ColorPicker";

describe("Color Picker", () => {
    it("render", () => {
        render(<ColorPicker data-testid="color-picker" id="color-picker">
            Color Picker
        </ColorPicker>)
        expect(screen.getByTestId("color-picker")).not.toBeNull()
        expect(screen.getByLabelText("Color Picker")).not.toBeNull()
    })
})