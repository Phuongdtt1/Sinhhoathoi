'use client'
import {useRouter} from 'next/navigation';

const Image = () => {
    const router = useRouter();
    const handleBtn = () => {
        router.push('/');
    };
    return (
        <div>
            <div>
                <button onClick={handleBtn}>Home Page</button>
            </div>
            <div>Hình ảnh Biên cương</div>
        </div>
    );
};
export default Image;
