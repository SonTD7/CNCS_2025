"use client"
import React from 'react';
import Image from 'next/image'
import ImageErr from '@/components/error/image-err';
import LogoErr from '@/components/error/logo-err';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {

    return (
        <div className='z-50 top-0 bottom-0 right-0 left-0 fixed'>
            <div className="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
                <div className="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                    <div className="w-full md:w-1/2">
                        <div className="mb-10 lg:mb-20">
                            <LogoErr />
                        </div>
                        <div className="mb-10 md:mb-20 text-gray-600 font-light">
                            <h1 className="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">Có gì đó sai sai</h1>
                            <h2>Bạn đọc thông tin lỗi này: </h2>
                            <p>{error.message}</p>
                        </div>
                        <div className="mb-20 md:mb-0">
                            <button onClick={() => window.history.back()} className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600"><i className="mdi mdi-arrow-left mr-2"></i>Quay lại nào</button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 text-center">
                        <ImageErr />
                        <a href="https://www.freepik.com/vectors/business" target="_blank" className="text-xs text-gray-300">A Wordspaces</a>
                    </div>
                </div>
                <div className="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
                <div className="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
            </div>
            <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a beer" href="/" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <Image className="object-cover object-center w-full h-full rounded-full" width={1024} height={768} src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" alt='bg' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
