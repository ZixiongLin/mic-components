import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "../Progress";

describe("Progress bar", ()=> {
    render(<Progress data-testid="test" min={10} max={110} value={20}
        status="warning"
    />)
    it("render", () => {
        expect(screen.getAllByTestId("test")).not.toBeNull()
    })
    it("should have 20% progress bar", () =>{
        expect(screen.queryByRole("status-bar")?.style.width).toBe("20%")
    })

    
})