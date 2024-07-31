import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Slider } from "../Slider";

describe('Slider', ()=>{
    it('render', ()=>{
        render(<Slider data-testid="slider"/>)
        expect(screen.getByTestId("slider")).not.toBeNull()
    })
    it('default props', ()=>{
        render(<Slider data-testid="slider"/>)
        expect(screen.getByTestId("slider").getAttribute("min")).toEqual("0")
        expect(screen.getByTestId("slider").getAttribute("max")).toEqual("100")
    })

    it('custom min max values', ()=>{
        render(<Slider data-testid="slider" min={5} max={10}/>)
        expect(screen.getByTestId("slider").getAttribute("min")).toEqual("5")
        expect(screen.getByTestId("slider").getAttribute("max")).toEqual("10")
    })
})