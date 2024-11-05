export const Skeleton = () => {
  return Array(10)
    .fill(0)
    .map((_, idx) => (
      <div
        className="grid grid-cols-2 justify-between border border-[#D8D8D8] rounded-2xl gap-10 mx-32 mb-10 w-[80vw] animate-pulse"
        key={idx}
      >
        <div className="rounded-l-2xl bg-slate-400 h-full w-full"></div>
        <div className="px-10 py-10 animate-pulse">
          <div className="h-10 bg-slate-400 rounded"></div>
          <div className="space-y-3 mt-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-400 rounded col-span-2"></div>
              <div className="h-2 bg-slate-400 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-400 rounded"></div>
          </div>
        </div>
      </div>
    ));
};
