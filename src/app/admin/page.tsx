'use client'
import { useRouter } from 'next/navigation';
import {Router} from "next/router";

const Dangnhap = ()=> {
    const router = useRouter()
    const handleBtn = ()=> {
        router.push ('/');
    }
    return (
        <div>
            <div>
                <button onClick={()=> handleBtn()}>Back</button>
            </div>

           Đăng nhập
        </div>
    )
}
export default Dangnhap;