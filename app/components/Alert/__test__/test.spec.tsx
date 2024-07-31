import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Alert } from "../Alert";

describe("Alert", () => {

    it("render", () => {
        render(<Alert data-testid="alert"
            title="Hey see this title"
            subtitle="this is a basic subtitle for alert component"
        />)
    
        expect(screen.queryByTestId("alert")).not.toBeNull()
    })

    it("have title and subtitle", () => {
        render(<Alert data-testid="alert"
            title="Hey see this title"
            subtitle="this is a basic subtitle for alert component"
        />)    
        const DOMTest = screen.queryByTestId("alert")
        expect(DOMTest?.getElementsByTagName('h1')).not.toBeNull()
        expect(DOMTest?.getElementsByTagName('p')).not.toBeNull()
    })

    it("have title and subtitle", () => {
        render(<Alert data-testid="alert"
            title="Hey see this title"
            subtitle="this is a basic subtitle for alert component"
            variant="error"
        />)    
        const DOMTest = screen.queryByTestId("alert")
        expect(DOMTest?.classList.contains("bg-error-200")).toBeTruthy()
    })
})