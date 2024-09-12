import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { describe, expect, it } from "vitest";
import { Tooltip } from "../Tooltip";
import { Button } from "../../Button";

describe('Tooltip', () => {
    it('render', () => {
        render(
            <Tooltip id='tooltip' 
                aria-labelledby='notification-label' 
                label='label'
                data-testid='tooltip'
            >
                <Button>
                    button with Tooltip
                </Button>
            </Tooltip>
        )
        expect(screen.getByTestId('tooltip')).not.toBeNull()
    })
    it('label should be hidden when start', () => {
        render(
            <Tooltip id='tooltip' 
                aria-labelledby='notification-label' 
                label='label'
                data-testid='tooltip'
            >
                <Button>
                    button with Tooltip
                </Button>
            </Tooltip>
        )
        expect(screen.getByTestId('tooltip').className).includes('hidden')
    })
    
})

describe('hover actions Tooltip', () => {
    it('label should be visible when is hover', async () => {
        render(
            <Tooltip id='tooltip' 
                aria-labelledby='notification-label' 
                label='label'
                data-testid='tooltip'
            >
                <Button>
                    button with Tooltip
                </Button>
            </Tooltip>
        )
        const button = screen.getByText("button with Tooltip");
        fireEvent.mouseOver(button);
        await waitFor( () => {screen.getByTestId('tooltip')})
        expect(screen.getByTestId('tooltip').className).includes('inline')
    })


    it('label should be hidden when leave hover', async () => {
        render(
            <Tooltip id='tooltip' 
                aria-labelledby='notification-label' 
                label='label'
                data-testid='tooltip'
            >
                <Button>
                    button with Tooltip
                </Button>
            </Tooltip>
        )

        fireEvent.mouseOut(screen.getByTestId('tooltip'));
        await waitFor(() => 
            expect(screen.getByTestId('tooltip').className).include('hidden')
        );
        fireEvent.mouseEnter(screen.getByTestId('tooltip'));

    })
})