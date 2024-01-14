import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="">
        <Link href={"/"}>
          {" "}
          <h1>Tech News</h1>{" "}
        </Link>
        <p>
          Exploring Tomorrow&apos;s Innovations <br /> One Byte at a Time
        </p>
      </div>
      <div className="">
        <Link className="btn" href={"/sign-in"}>
          Sign In
        </Link>
      </div>
    </div>
  );
}
