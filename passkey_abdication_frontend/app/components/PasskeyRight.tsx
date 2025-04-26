"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { startRegistration } from "@simplewebauthn/browser";
import { generateRegistrationOptions } from "@simplewebauthn/server";


const PasskeyRight = () => {
    const [username, setUsername] = useState<string>("");
    const router = useRouter();

    useEffect(() => {
        const storedValue = localStorage.getItem('username');
        if (storedValue) {
          setUsername(storedValue);
        }
    }, []); 
      
    const onClickNext = () => {
        // startRegistration();
    generateRegistrationOptions({
        rpID: "localhost",
        rpName: "google.abdication.com",
        userName: username,
        // Don't prompt users for additional information about the authenticator
        // (Recommended for smoother UX)
        attestationType: 'none',
        // Prevent users from re-registering existing authenticators
        // See "Guiding use of authenticators via authenticatorSelection" below
        authenticatorSelection: {
            // Defaults
            residentKey: 'preferred',
            userVerification: 'preferred',
            // Optional
            authenticatorAttachment: 'platform',
        },
    }).then(res => {
        startRegistration({optionsJSON: res, useAutoRegister: true}).then(res => {
            router.push("/");
        });
    });
}

    const onKeyPressHandler = (e: { key: string; }) => {
        if (e.key === 'Enter') {
            onClickNext();
            router.push("/credential");
        }
    }

    return (
        <div className="flex flex-col w-full">
            <div className="relative justify-center items-center w-[30rem] h-[7rem] mt-15 ml-7 font-[family-name:var(--font-google)]">
                <div className="w-full justify-center items-center">
                    <img className="h-[7rem]" src="https://ssl.gstatic.com/accounts/marc/passkey_enrollment.svg" aria-hidden="true" alt="" data-atf="true" data-iml="16619"/>
                </div>
            </div>
            <div className="ml-7 mt-4 text-sm text-gray-900 font-light w-11/12">
              <span className="">With passkeys, your device will simply ask you for your Windows PIN or biometric and let Google know it's really you signing in</span> 
            </div>
            <div className="ml-7 mt-10 w-10/12 text-sm text-google-btn-primary-l font-light">
              <span className="text-gray-900">Only create a passkey if this is your device. </span><span className="font-medium hover:cursor-pointer hover:underline">Learn more</span>
            </div> 
            <div className="ml-10 mt-10 w-10/12 text-sm flex justify-end text-google-btn-primary-l font-medium">
              <div className="px-10">
                <button className="rounded-3xl px-3 py-2.5"></button>
              </div>
              <div>
                {/* <Link href="/" onClick={onClickNext}> */}
                    <button type="submit" onClick={onClickNext} className="text-white bg-google-btn-primary-l cursor-pointer py-2.5 px-6 rounded-3xl hover:bg-google-btn-secondary-l hover:shadow-black">Continue</button>
                {/* </Link> */}
              </div>
            </div> 
        </div>
    )
}
export default PasskeyRight;