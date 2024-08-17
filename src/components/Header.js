import React from 'react';
import Image from "next/image";

import Logo from "/public/img/mall_logo.png";
import Gnb from "@/components/Gnb";
import Link from "next/link";

function Header(props) {
    return (
        <header className='border-b border-gray-200'>
            <div className='container max-w-screen-xl m-auto'>
                <div className='flex pt-2'>
                    <Link href="/">
                        <Image className='w-32' src={Logo} alt='로고' />
                    </Link>
                    <div className='flex items-end grow justify-between text-xs text-gray-600 ml-12'>
                        <div>
                            <button className='border-2 border-gray-100 rounded-md px-2 py-1.5' title='로그인'>로그인</button>
                        </div>
                        <div>
                            <button className='border-2 border-gray-100 rounded-l-md px-2 py-1.5' title='예금'>예금</button>
                            <button className='border-2 border-gray-100 px-2 py-1.5' title='카드'>카드</button>
                            <button className='border-2 border-gray-100 px-2 py-1.5' title='펀드'>펀드</button>
                            <button className='border-2 border-r border-gray-100 rounded-r-md px-2 py-1.5' title='보험'>보험</button>
                            <button className='on border-gray-100 rounded-md ml-2 px-2 py-1.5 bg-amber-400 text-black font-semibold' title='금융상품몰'>금융상품몰</button>
                            <button className='border-2 border-gray-100 rounded-md ml-2 px-2 py-1.5' title='고객센터'>고객센터</button>
                        </div>
                    </div>
                </div>
                <Gnb />
            </div>
        </header>
    );
}

export default Header;