"use client";

export const TripsFiltersButtons = ({
  setStatus,
  status,
  setSearchTerm,
}: {
  setStatus: (status: "all" | "todo" | "done") => void;
  status: "all" | "todo" | "done";
  setSearchTerm: (searchTerm: string) => void;
}) => {
  const handleOnClick = (status: "all" | "todo" | "done") => {
    setStatus(status);
    setSearchTerm("");
  };

  return (
    <div className="flex justify-center" role="trips-filters-buttons">
      <button
        className={`rounded-l-full border border-[#D8D8D8] px-4 py-2 hover:bg-[#F3F3F3] ${
          status === "all" ? "bg-black text-white hover:text-black" : ""
        }`}
        onClick={() => handleOnClick("all")}
        role="show-all-trips-button"
      >
        All
      </button>
      <button
        className={`border-y border-[#D8D8D8] px-4 py-2 hover:bg-[#F3F3F3] ${
          status === "todo" ? "bg-black text-white hover:text-black" : ""
        }`}
        onClick={() => handleOnClick("todo")}
        role="show-todo-trips-button"
      >
        Upcoming
      </button>
      <button
        className={`rounded-r-full border border-[#D8D8D8] px-4 py-2 hover:bg-[#F3F3F3] ${
          status === "done" ? "bg-black text-white hover:text-black" : ""
        }`}
        onClick={() => handleOnClick("done")}
        role="show-done-trips-button"
      >
        Completed
      </button>
    </div>
  );
};
