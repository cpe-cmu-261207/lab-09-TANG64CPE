import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div
      className="d-flex justify-content-center gap-5 fs-4"
      style={{
        padding: "30px",
      }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/experience">
        <a>Experience</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/lab-07">
        <a>Lab-07</a>
      </Link>
    </div>
  );
}
