'use client'
import { useRouter } from 'next/navigation';
const Tracnghiem = ()=> {
    const router = useRouter()
    const handleBtn = ()=> {
        router.push ('/');
    }
    return (
        <div>
            <div>
                <button onClick={()=>handleBtn()}>Back</button>
            </div>
            Tìm hiểu sinh hoạt hội
        </div>
    )
}

export default Tracnghiem;