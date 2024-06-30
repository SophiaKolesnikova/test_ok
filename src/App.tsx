import React, {useState} from 'react'
import Button from "./components/Button/Button.tsx";
import Counter from "./components/Counter/Counter.tsx";
import Label from "./components/Label/Label.tsx";

function App() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const handleLoader = (count) => {
        if (count === 0)
            setIsLoading(!isLoading)
    };

    return (
        <>
            <div>
                <Button size={'m'} variant={'primary'} loading={isLoading} type={'button'} disabled={false}
                        onClick={() => {
                            handleLoader(count);
                            setCount((count) => count + 1)
                        }}>
                    <Label label={'Что сделать'}/>
                    {count ? (
                        <Counter size={'xl'} variant={'primary'}>
                            {count}
                        </Counter>
                    ) : null}
                </Button>
            </div>
        </>
    );
}

export default App
