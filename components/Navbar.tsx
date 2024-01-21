"use client";
import Link from "next/link";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { status, data: session } = useSession();

  return (
    <div className="flex justify-between pb-4 border-b mb-4">
      <div className="">
        <Link href={"/"}>
          {" "}
          <h1 className=" text-dark text-4xl font-bold tracking-tighter">
            Tech News
          </h1>{" "}
        </Link>
        <p className="text-sm">
          Exploring Tomorrow&apos;s Innovations <br /> One Byte at a Time
        </p>
      </div>
      {status === "authenticated" ? (
        <>
          <div className="hidden">
            <button onClick={() => signOut()} className="btn">
              Sign Out{" "}
            </button>
          </div>
          <div className="">
            <Link href={"/create-post"}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                <span>Create new</span>
              </span>
            </Link>
            <Image
              className="rounded-full"
              src={session?.user?.image || ""}
              width={36}
              height={36}
              alt="Profile Image"
            />
          </div>
        </>
      ) : (
        <div className="flex items-center ">
          <Link className="btn" href={"/sign-in"}>
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
}
