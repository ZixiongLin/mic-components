import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Avatar } from "../Avatar";

describe("Avatar", () => {
    it("render", () => {
        render(<Avatar data-testid="avatar" src="https://zlinyan.es/_astro/me.C7wE-_Fh_1HxhPl.webp"/>);
        expect(screen.getByTestId("avatar")).not.toBeNull();
    })
})