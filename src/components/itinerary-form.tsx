export const ItineraryForm = ({ itineraryDaysFormLength }: { itineraryDaysFormLength: number }) => {
  return (
    <div className="mb-4">
      <div className="grid grid-cols-6 bg-[#F3F3F3] rounded-2xl p-4 gap-4">
        <select name="day" id="day" className="col-span-2 rounded-2xl p-2 text-black h-fit">
          Day
          {Array.from({ length: itineraryDaysFormLength }, (_, i) => i + 1).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="col-span-4 grid grid-cols-2 gap-2">
          <input type="text" placeholder="Location" className="rounded-2xl w-full col-span-4 p-2 text-black" />
          <textarea placeholder="Description" className="rounded-2xl w-full col-span-4 p-2 text-black h-52" />
        </div>
      </div>
    </div>
  );
};
