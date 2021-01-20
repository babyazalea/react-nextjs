import React from "react";
import Link from "next/link";

const errorPage = () => (
  <div>
    <h1>you're in to wrong</h1>
    <p>
      try to
      <Link href="/">
        <a>going back</a>
      </Link>
    </p>
  </div>
);

export default errorPage;
