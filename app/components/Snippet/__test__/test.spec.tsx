import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Snippet } from "../Snippet";

describe("Snippet", () => {
    it("render", () => {
        render(<Snippet data-testid="snippet">Default</Snippet>)
        expect(screen.getByTestId("snippet")).not.toBeNull()
    })

    it("have children <code> tag", () => {
        render(<Snippet data-testid="snippet">Copy Text</Snippet>)
        expect(screen.getByTestId("snippet").getElementsByTagName("code")).not.toBeNull()
    })

    it("have snippet", () => {
        render(<Snippet data-testid="snippet">Copy Text</Snippet>)
        expect(screen.getByText("Copy Text")).not.toBeNull()
    })
    it("have copy button", () => {
        render(<Snippet data-testid="snippet">Copy Text</Snippet>)
        expect(screen.getByRole("copy-button")).not.toBeNull()
    })
    
    it("click copy button", async () => {
        render(<Snippet data-testid="snippet">Copy Text</Snippet>)
        const copyButton = screen.getByRole("copy-button")
        fireEvent.click(copyButton)
        const copiedText = await window.navigator.clipboard.readText()
        expect(copiedText).toEqual("Copy Text")
    })
})