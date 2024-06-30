import type { Meta, StoryObj } from '@storybook/react';
import Counter from './Counter.tsx';
import './styles.module.css';

const meta: Meta<typeof Counter> = {
    title: 'Counter',
    component: Counter,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            type: 'string',
            options: ['primary', 'secondary'],
            control: {
                type: 'radio',
            },
        },
        size: {
            type: 'string',
            options: ['xs', 's', 'm', 'l', 'xl'],
            control: {
                type: 'radio',
            },
        },
        children: {
            name: 'count',
            type: 'number',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Primary: Story = {
    args: {
        children: '1',
        variant: 'primary',
        size: 'xl',
    },
};

export const Secondary: Story = {
    args: {
        children: '3',
        variant: 'secondary',
        size: 'l',
    },
};

export const Small: Story = {
    args: {
        variant: 'primary',
        size: 's',
    },
};
