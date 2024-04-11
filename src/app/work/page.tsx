import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-full">
      <Image
        src="https://images.unsplash.com/photo-1631942771581-961f187e8afc?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        height={1275}
        width={1920}
        alt="img"
      />
    </div>
  );
};

export default Page;
