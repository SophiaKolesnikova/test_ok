import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button.tsx';
import './styles.module.css';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            type: 'string',
            options: ['primary', 'default'],
            control: {
                type: 'radio',
            },
        },
        size: {
            type: 'string',
            options: ['small', 'medium', 'large'],
            control: {
                type: 'radio',
            },
        },
        type: {
            type: 'string',
            options: ['button', 'submit'],
            control: {
                type: 'radio',
            },
        },
        children: {
            name: 'label' || 'counter',
            type: 'string' || 'number',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Click me',
        variant: 'primary',
        size: 'large',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Click me',
        variant: 'default',
        size: 'small',
    },
};
