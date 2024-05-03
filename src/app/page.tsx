'use client';

import {Button, Label, TextInput} from 'flowbite-react';
import {useRouter} from 'next/navigation';
import {useAtom} from 'jotai';
import {isLoggedInAtom, nameAtom, unitAtom} from '@/app/atoms';

export default function Home() {
    const [name, setName] = useAtom(nameAtom);
    const [unit, setUnit] = useAtom(unitAtom);
    const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
    const router = useRouter();

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        router.push('/guide');
        setIsLoggedIn(true);
    };

    return (
        <div
            className="absolute inset-0 flex items-center justify-center"
        >
            <div
                className="absolute z-[-1] opacity-50 inset-0 bg-no-repeat bg-cover bg-center"
                style={{backgroundImage: 'url(\'/images/Backropnenwhite.png\')'}}
            />
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
                        disabled={isLoggedIn}
                        value={name ?? ''}
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
                        disabled={isLoggedIn}
                        value={unit ?? ''}
                        onChange={(e) => setUnit(e.target.value)}
                    />
                </div>
                {!isLoggedIn && (
                    <Button
                        type="submit"
                        size="lg"
                    >Đăng nhập</Button>
                )}
            </form>
        </div>
    );
}