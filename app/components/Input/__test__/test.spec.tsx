import { render,screen } from "@testing-library/react";
import { Input } from "../Input";
import {describe, it, expect, afterEach} from 'vitest';

describe('Input',  () =>{
    it("renders the input element", () => {
        render(<Input id="test" data-testid="test"/>)
        expect(screen.getByTestId("test")).not.toBeNull();
    })
})