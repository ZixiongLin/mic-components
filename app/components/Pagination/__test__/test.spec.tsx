import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Pagination } from "../Pagination";
import { Button } from "../../Button";
import { Link } from "../../Link";

describe("Pagination", () => {
    it("render", () => {
        render(<Pagination data-testid="pagination"
            prevHref="#"
            nextHref="#"
        >
            <Link href="#" variant="ghost">1</Link>
            <Link href="#" variant="ghost">2</Link>
            <Link href="#" variant="ghost">3</Link>
            <Link href="#" variant="ghost">4</Link>
        </Pagination>)
        expect(screen.getByTestId("pagination")).not.toBeNull()
    })
    it("has prev and next links", () => {
        render(<Pagination data-testid="pagination"
            prevHref="#"
            nextHref="#"
        >
            <Link href="#" variant="ghost">1</Link>
            <Link href="#" variant="ghost">2</Link>
            <Link href="#" variant="ghost">3</Link>
            <Link href="#" variant="ghost">4</Link>
        </Pagination>)
        expect(screen.getByTestId("pagination").childNodes.length).toEqual(6)
    })

})