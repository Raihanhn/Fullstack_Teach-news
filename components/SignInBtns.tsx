import Image from "next/image";
import React from "react";
import github from "../public/github-logo.svg";

export default function SignInBtns() {
  return (
    <>
      <h1 className="text-center mt-8 ">Sign in</h1>
      <div className="">
        <button>
          <span>
            <Image src={github} width={30} height={30} alt="GitHub Logo" />
          </span>
          Sign In with GitHub
        </button>
      </div>
    </>
  );
}
