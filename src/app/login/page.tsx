'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Label, TextInput } from 'flowbite-react';

export default function Component() {
    const [name, setName] = useState('');
    const [unit, setUnit] = useState('');
    const router = useRouter();

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        router.push(`/quiz?name=${name}&unit=${unit}`);
    };

    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <form
                className="flex max-w-md min-w-80 flex-col gap-4"
                onSubmit={handleSubmit}
            >
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="name"
                            value="Họ và tên"
                            className="text-xl"
                        />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        placeholder="Ví dụ: Nguyễn Văn A"
                        sizing="lg"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="unit"
                            className="text-xl"
                            value="Đơn vị"
                        />
                    </div>
                    <TextInput
                        id="unit"
                        type="text"
                        placeholder="Ví dụ: Bộ đội biên phòng tỉnh Nghệ An"
                        sizing="lg"
                        required
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                    />
                </div>
                <Button
                    type="submit"
                    size="lg"
                >Vào Thi</Button>
            </form>
        </div>
    );
}
