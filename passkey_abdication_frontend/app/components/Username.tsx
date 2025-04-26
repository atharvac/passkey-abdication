"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from 'next/navigation';

const Username = () => {
    const [username, setUsername] = useState<string>();
    const router = useRouter();
    const onClickNext = () => {
        let username2 = "";
        if (username){
            username2 = username;
        }
        localStorage.setItem("username", username2);
    }

    const onKeyPressHandler = (e: { key: string; }) => {
        if (e.key === 'Enter') {
            onClickNext();
            router.push("/credential");
        }
    }

    return (
        <div className="flex flex-col w-full">
            <div className="relative w-[30rem] h-[3.5rem] mt-30 ml-7 font-[family-name:var(--font-google)]">
                <input type="text" id="default_outlined"
                value={username || ''}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDownCapture={onKeyPressHandler}
                autoFocus className="block px-2.5 pb-3.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-sm border-1 border-gray-900 appearance-none focus:border-2 focus:outline-none focus:ring-0 focus:border-google-btn-primary-l peer" placeholder=" " />
                <label htmlFor="default_outlined" className="absolute text-base text-gray-900 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-google-btn-primary-l peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email or phone</label>
            </div>
            <div className="ml-7 mt-4 w-full text-sm text-google-btn-primary-l font-bold">
              <a className="hover:bg-google-link-l rounded-2xl px-1" href="">Forgot Email?</a> 
            </div>
            <div className="ml-7 mt-10 w-10/12 text-sm text-google-btn-primary-l font-light">
              <span className="text-gray-900">Not your computer? Use a Private Window to sign in. </span><span className="font-medium hover:cursor-pointer hover:underline">Learn more about using Guest mode</span>
            </div> 
            <div className="ml-10 mt-10 w-10/12 text-sm flex justify-end text-google-btn-primary-l font-medium">
              <div className="px-10">
                <button className="hover:bg-google-link-l rounded-3xl px-3 py-2.5 cursor-pointer">Create account</button>
              </div>
              <div>
                <Link href="/credential" onClick={onClickNext}>
                    <button type="submit" className="text-white bg-google-btn-primary-l cursor-pointer py-2.5 px-6 rounded-3xl hover:bg-google-btn-secondary-l hover:shadow-black">Next</button>
                </Link>
              </div>
            </div> 
        </div>
    )
}
export default Username;