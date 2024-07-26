import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "../Progress";

describe("Progress bar", ()=> {

    it("render", () => {
        render(<Progress data-testid="test" min={10} max={110} value={20}
            status="warning"
        />)
        expect(screen.getAllByTestId("test")).not.toBeNull()
    })
    it("should have 20% progress bar", () =>{

        render(<Progress data-testid="test" min={10} max={110} value={20}
            status="warning"
        />)
        expect(screen.queryByRole("status-bar")?.style.width).toBe("20%")
    })    
})