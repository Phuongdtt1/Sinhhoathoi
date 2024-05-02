import { Spinner } from 'flowbite-react';

export default function Loading() {
    return (
        <div className="absolute inset-0 flex justify-center items-center">
            <Spinner
                aria-label="Extra large spinner example"
                size="xl"
            />
        </div>
    );
}