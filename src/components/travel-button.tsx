export const TravelButtons = () => {
  return (
    <div className="flex gap-10 justify-between mt-10">
      <button className="underline">See trip details</button>

      <div className="flex gap-10 underline">
        <button className="underline">Edit</button>
        <button className="text-[#C93957] underline">Delete</button>
      </div>
    </div>
  );
};
