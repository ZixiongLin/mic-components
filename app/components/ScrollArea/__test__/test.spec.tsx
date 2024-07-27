import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, it } from "vitest";
import { ScrollArea } from "../ScrollArea";

describe( "Scroll area", () => {
    it("render component", () => {
        render(<ScrollArea
            className="w-11"
        >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non eveniet distinctio quia, dolore maxime molestiae deleniti exercitationem vitae quasi harum id? Explicabo delectus distinctio nobis officia repellat sequi dolorem excepturi.

        </ScrollArea>)
    })
})