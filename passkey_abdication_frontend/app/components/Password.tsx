"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Password = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [inputType, setInputType] = useState<string>("password"); 
    const router = useRouter();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const onClickNext = () => {
        localStorage.setItem("password", password);
    }

    useEffect(() => {
      const storedValue = localStorage.getItem('username');
      if (storedValue) {
        setUsername(storedValue);
      }
    }, []); 

    const onShowPassword = () => {
        setShowPassword(!showPassword);
        if (!showPassword) {
            setInputType("text");
        } else {
            setInputType("password");
        }
    }

    const onKeyPressHandler = (e: { key: string; }) => {
        if (e.key === 'Enter') {
            onClickNext();
            router.push("/passkeyenrollment");
        }
    }

    return (
        <div className="flex flex-col w-full font-[family-name:var(--font-google)]">
            <div className="relative w-[30rem] h-[3.5rem] mt-30 ml-7 font-[family-name:var(--font-google)]">
                <input type={inputType}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDownCapture={onKeyPressHandler}
                    id="default_outlined" autoFocus className="block px-2.5 pb-3.5 pt-4 w-full text-base text-gray-900 bg-transparent rounded-sm border-1 border-gray-900 appearance-none focus:border-2 focus:outline-none focus:ring-0 focus:border-google-btn-primary-l peer" placeholder=" " />
                <label htmlFor="default_outlined" className="absolute text-base text-gray-900 duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-google-btn-primary-l peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-5 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter your password</label>
            </div>
            <div className="ml-7 mt-4 w-full text-sm text-google-btn-primary-l font-bold">
            <div className="space-y-4 flex flex-col">
                <div className="inline-flex items-center">
                    <label className="flex items-center cursor-pointer relative" htmlFor="default-checkbox">
                    <input type="checkbox" checked={showPassword} onChange={onShowPassword} onKeyDown={onKeyPressHandler} className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-xs shadow-sm  border-2 border-gray-900 checked:bg-google-btn-primary-l checked:border-google-btn-primary-l" id="default-checkbox" />
                    <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <svg fill="none" width="18px" height="18px" strokeWidth="2" color="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </span>
                    </label>
                    <label className="cursor-pointer ml-4 text-gray-800 text-[14px] font-medium antialiased" htmlFor="default-checkbox">Show Password</label>
                </div>
                </div>
            </div>

            <div className="ml-10 mt-30 w-10/12 text-sm flex justify-end text-google-btn-primary-l font-medium">
              <div className="px-10">
                <button className="hover:bg-google-link-l rounded-3xl px-3 py-2.5 cursor-pointer">Try another way</button>
              </div>
              <div>
                <Link href="/passkeyenrollment">
                    <button className="text-white bg-google-btn-primary-l cursor-pointer py-2.5 px-6 rounded-3xl hover:bg-google-btn-secondary-l hover:shadow-black">Next</button>
                </Link>
              </div>
            </div> 
        </div>
    )
}
export default Password;