import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import {Pill} from '@/app/components/Pill';
import { afterEach, describe, expect, it } from 'vitest';

describe('Pill', () => {
    it('renders Pill with default variant', () => {
        render(<Pill value={0}/>);
        expect(screen.getByText('0')).not.toBeNull();
    });
    
    it('renders Pill with success variant', () => {
        render(<Pill variant="success" value={0}/>);
        expect(screen.getByText(0).classList).toContain('bg-success-100');
    });

    it('renders Pill with removed variant', () => {
        render( <Pill variant="removed" value={10}/>);
        expect(screen.getByText(10).classList).toContain('bg-error-100');
    });

    it('renders Pill with trial variant', () => {
        render(<Pill variant="trial" value={5}/>);
        expect(screen.getByText(5).classList).toContain('bg-neutrals-100');
    });

    it('renders Pill with progress variant', () => {
        render(<Pill variant="progress" value={15}/>);
        expect(screen.getByText(15).classList).toContain('bg-primary-100');
    });
    
    it('renders Pill with moved variant', () => {
        render(<Pill variant="moved" value={20}/>);
        expect(screen.getByText(20).classList).toContain('bg-warning-100');
    });

    it('renders Pill with beta variant', () => {
        render( <Pill variant="beta" value={2}/>);
        expect(screen.getByText(2).classList).toContain('bg-secondary-100');
    });
});
