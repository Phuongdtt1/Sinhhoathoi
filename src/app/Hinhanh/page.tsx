'use client'
import { useRouter } from 'next/navigation';
import {Router} from "next/router";

const Hinhanh = ()=> {
    const router = useRouter()
    const handleBtn = ()=> {
        router.push ('/');
    }
    return (
        <div>
            <div>
                <button onClick={()=> handleBtn()}>Back</button>
            </div>

            Hình ảnh Biên cương
        </div>
    )
}
    export default Hinhanh;