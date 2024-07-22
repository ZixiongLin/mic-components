import { cleanup, render, screen } from '@testing-library/react';
import {Badge} from '@/app/components/Badge';
import {describe, it, expect, afterEach} from 'vitest';

describe('Badge', () => {
    afterEach(() => {
        cleanup();
    });
    it('renders a badge with default variant', () => {
        render(<Badge>Badge</Badge>);
        expect(screen.getByText('Badge').classList).toContain('bg-success-100');
    });

    it('renders a badge with success variant', () => {
        render(<Badge variant="success">Badge</Badge>);
        expect(screen.getByText('Badge').classList).toContain('bg-success-100');
    });

    it('renders a badge with removed variant', () => {
        render(<Badge variant="removed">Badge</Badge>);
        expect(screen.getByText('Badge').classList).toContain('bg-error-100');
    });

    it('renders a badge with progress variant', () => {
        render(<Badge variant="progress">Badge</Badge>);
        expect(screen.getByText('Badge').classList).toContain('bg-primary-100');
    });

    it('renders a badge with moved variant', () => {
        render(<Badge variant="moved">Badge</Badge>);
        expect(screen.getByText('Badge').classList).toContain('bg-warning-100');
    });

    it('renders a badge with beta variant', () => {
        render(<Badge variant="beta">Badge</Badge>);
        expect(screen.getByText('Badge').classList).toContain('bg-secondary-100');
    });

    it('renders a badge with trial variant', () => {
        render(<Badge variant="trial">Badge</Badge>);
        expect(screen.getByText('Badge').classList).toContain('bg-neutrals-100');
    });
});
