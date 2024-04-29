'use client';

import { Button, Label, TextInput } from 'flowbite-react';

export default function Component() {
    return (
        <div className="absolute inset-0 flex items-center justify-center">
            <form className="flex max-w-md min-w-80 flex-col gap-4">
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
