function Background() {
  return (
    <>
      <div className="w-full h-screen fixed z-[2]">
        <div className="absolute top-[5%] w-full py-10 font-semibold text-zinc-600 flex justify-center text-xl">
          Documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] tracking-tighter leading-none text-[13vw] font-semibold text-zinc-900">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
