import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Button from "./Button.tsx";


describe('Button', () => {
    test('handle click on button', () => {
        const handleClick = jest.fn();
        const { getByRole } = render(
            <Button
                onClick={handleClick}
                size={'m'}
                variant={'primary'}
                type={'button'}
                loading={false}
                disabled={false}
            >label</Button>
        )

        fireEvent.click(getByRole('button'));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
