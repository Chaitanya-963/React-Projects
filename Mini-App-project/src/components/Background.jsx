// import React from "react";

function Background() {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <nav className="w-full absolute top-[5%] py-10 flex justify-center text-zinc-500 font-semibold text-xl">
          Documents.
        </nav>

        <h1 className="text-[13vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] absolute leading-none tracking-tight font-semibold text-zinc-500">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
