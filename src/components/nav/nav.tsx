export const Nav = ({
  setIsCreateTripModalOpen,
}: {
  setIsCreateTripModalOpen: (isCreateTripModalOpen: boolean) => void;
}) => {
  return (
    <nav
      className="bg-black flex justify-between items-center p-4 rounded-3xl text-white mt-10 mx-10"
      role="navigation"
    >
      <div className="rounded-full bg-white p-2 flex items-center justify-between w">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="24" fill="white" />
          <path
            d="M35.2892 23.8926C35.2892 16.7223 31.2094 12 24.5979 12C17.9863 12 14.2861 16.1619 13.5607 21.9611H13.2445C11.788 21.9611 10.6032 20.7755 10.6032 19.3198H7C7 22.7625 9.80176 25.5635 13.2445 25.5635H13.5192C14.1429 31.5607 18.3143 35.9997 24.5979 35.9997C31.1679 36.0435 34.1293 31.9215 34.6873 28.5288H30.6514C29.749 30.8477 27.474 32.1789 24.5548 32.1789C21.4643 32.1367 18.3722 29.8178 18.1139 25.4805H35.2023C35.2884 24.9225 35.2884 24.3645 35.2884 23.8926M18.2 21.9603C18.758 18.354 20.8194 15.8638 24.554 15.8638C28.2887 15.8638 30.264 18.268 30.6929 21.9603H18.1992H18.2Z"
            fill="#121212"
          />
        </svg>
      </div>
      <button
        className="bg-white rounded-full p-2 text-black"
        onClick={() => setIsCreateTripModalOpen(true)}
        role="create-trip-button"
      >
        Create new trip
      </button>
    </nav>
  );
};
