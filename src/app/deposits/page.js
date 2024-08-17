import React from 'react';
import Image from "next/image";

// img
import Clip from "/public/img/img_clip.png";
import ProductResult from "/public/img/bg_product_result.png";
import Calc from "/public/img/ico_ins_calc.png";

function Page(props) {
    return (
        <>
            <section className='promotions py-24 bg-orange-100'>
                <div className='max-w-screen-xl m-auto flex justify-between'>
                    <div>
                        <p className='title text-5xl font-semibold pb-12'>우체국다드림통장(베이직)</p>
                        <p className='text-2xl text-gray-500'>우체국포인트를 제공하는 우체국 대표 수시입출식 통장, 조건 없는 베이직</p>
                        <p className='text-2xl text-gray-500'>패키지</p>
                        <button className='my-8 text-gray-800 border border-gray-800 px-5 py-1.5 rounded-md'>자세히 보기
                        </button>
                    </div>
                    <div className='relative'>
                        <Image className='absolute right-4 top-[-11px]' src={Clip} alt="클립"/>
                        <div className='bg-amber-400 rounded-bl-[4rem] rounded-tl-lg rounded-r-md pl-1 pr-3 pt-3 pb-1 shadow-2xl'>
                            <div className='absolute w-96 px-6 py-4'>
                                <div className='flex gap-2 items-center pt-4'>
                                    <Image src={Calc} alt="계산기" />
                                    <p className="font-semibold text-2xl">만기 금액 미리 계산</p>
                                </div>
                                <div className="flex flex-col gap-2 text-lg py-6">
                                    <div>
                                        <input className="border border-gray-300 rounded-md text-base px-2 py-2" type="text" placeholder="잔고유지금액" />
                                        <strong> 원</strong>
                                    </div>
                                    <div>
                                        <input className="border border-gray-300 rounded-md text-base px-2 py-2" type="text" placeholder="유지기간" />
                                        <strong> 개월</strong>
                                    </div>
                                    <div>
                                        <select className="border border-gray-300 rounded-md text-base w-32 px-2 py-2">
                                            <option value="">일반</option>
                                            <option value="">세금우대</option>
                                            <option value="">비과세</option>
                                        </select>
                                    </div>
                                    <div className="flex justify-end">
                                        <button className="rounded-md bg-amber-400 text-gray-900 text-base mt-4 mr-4 px-4 py-2" title="결과보기">결과보기</button>
                                    </div>
                                </div>
                            </div>
                            <Image src={ProductResult} alt="만기금 배경" />
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
}

export default Page;