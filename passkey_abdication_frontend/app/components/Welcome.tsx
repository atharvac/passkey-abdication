"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Welcome = () => {

    const [username, setUsername] = useState<string>("");

    useEffect(() => {
      const storedValue = localStorage.getItem('username');
      if (storedValue) {
        setUsername(storedValue);
      }
    }, []); 
    return (
        <div className="flex flex-col w-full">
            <div className="ml-8 mt-9 w-full">
              <svg className="" xmlns="https://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 48" aria-hidden="true"><path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path><path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path><path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path><path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path></svg>
            </div>
            <div className="ml-8 w-1/2 justify-between leading-normal mt-7">
              <h1 className="text-4xl font-[400]">Welcome</h1>
            </div>
            <div className="ml-8 w-1/2 justify-between leading-normal mt-5">
                <Link href="/">
                <div className="flex flex-row text-gray-800 border-1 rounded-3xl h-7.5 cursor-pointer justify-center items-center hover:bg-gray-100">
                    <svg aria-hidden="true" className="ml-0 h-6 w-6 text-gray-700" fill="currentColor" focusable="false" width="48px" height="48px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.36 14.83c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6z"></path></svg>
                    <h1 className="text-[15px] font-medium ml-2">{username}</h1>
                    <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"></path></svg>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default Welcome;