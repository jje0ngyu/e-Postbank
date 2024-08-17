import React from 'react';
import Link from "next/link";

function Gnb(props) {
    return (
        <ul className='gnb flex pt-7 text-center'>
            <li className='text-lg font-medium w-36 h-12'>MY상품</li>
            <li className='text-lg font-medium w-36 h-12'>가입진행중</li>
            <li>
                <Link href="/deposits" className='text-lg font-medium w-36 h-12'>예금상품</Link></li>
            <li className='text-lg font-medium w-36 h-12'>보험상품</li>
            <li className='text-lg font-medium w-36 h-12'>카드상품</li>
            <li className='text-lg font-medium w-36 h-12'>펀드상품</li>
            <li className='text-lg font-medium w-36 h-12'>상품찾기</li>
        </ul>
    );
}

export default Gnb;