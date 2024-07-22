import React from 'react';
import { render, screen } from '@testing-library/react';
import {Separator} from '@/app/components/Separator';
import { describe, expect, it } from 'vitest';

describe('Separator Component', () => {
  it('renders the separator element', () => {
    render(<Separator />);
    expect(screen.getByRole('separator')).not.toBeNull();
  });
});
