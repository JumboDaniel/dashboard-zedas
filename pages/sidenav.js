import Image from "next/image";
import React from "react";

const Sidenav = () => {
  return (
    <div className="w-[230px] bg-white mt-8">
      <div className="flex gap-4 justify-evenly ml-3">
        <svg
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-1 cursor-pointer"
        >
          <path
            d="M6 1L1 6L6 11"
            stroke="#03293D"
            stroke-opacity="0.5"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/FCMB_Logo.png" alt="FCMB" className="h-5 w-5"/>
       
        <p>FCMB: Mobile</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.8">
            <path
              d="M12 12.5C12 12.2239 11.7761 12 11.5 12C11.2239 12 11 12.2239 11 12.5C11 12.7761 11.2239 13 11.5 13C11.7761 13 12 12.7761 12 12.5Z"
              stroke="#03293D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 12.5C8 12.2239 7.77614 12 7.5 12C7.22386 12 7 12.2239 7 12.5C7 12.7761 7.22386 13 7.5 13C7.77614 13 8 12.7761 8 12.5Z"
              stroke="#03293D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 12.5C16 12.2239 15.7761 12 15.5 12C15.2239 12 15 12.2239 15 12.5C15 12.7761 15.2239 13 15.5 13C15.7761 13 16 12.7761 16 12.5Z"
              stroke="#03293D"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div>
      <div className="pl-5 flex flex-col gap-3 mt-5">
        <p className="text-sm font-semibold text-[#03293D80]">Workflows</p>
        <div className="bg-[#03293D0D] w-[125px] rounded-[8px] h-[44px] flex justify-around gap-2 p-2">
          Product dev
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-3"
          >
            <path
              d="M1.5 1.5L6.5 6.5L11.5 1.5"
              stroke="#03293D"
              stroke-opacity="0.5"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div>
        <div className="flex justify-between w-[171px] p-3">
          <p className="text-[#23B3E8]">Overview</p>
          <svg
            width="13"
            height="9"
            viewBox="0 0 13 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-3"
          >
            <path
              d="M0.742365 2.3565C0.0553655 1.362 0.761866 -5.14542e-07 1.96637 -4.61891e-07L11.0399 -6.52759e-08C12.2444 -1.26255e-08 12.9509 1.362 12.2639 2.3565L8.33836 8.0325C8.13342 8.32982 7.85931 8.5729 7.53962 8.74082C7.21993 8.90874 6.86423 8.99647 6.50312 8.99647C6.14201 8.99647 5.7863 8.90874 5.46661 8.74082C5.14692 8.5729 4.87281 8.32982 4.66787 8.0325L0.742365 2.3565Z"
              fill="#03293D"
              fill-opacity="0.25"
            />
          </svg>
        </div>
        <div className="p-4 ml-4 border-l-2 border-[#03293D1A] flex flex-col gap-3 text-[#03293D80] font-medium">
          <p className="text-[#23B3E8]">Project stats</p>
          <p>Planning</p>
          <p>Teamwork</p>
          <p>Team health</p>
          <p>Investment</p>
        </div>
        <div className="p-3 flex flex-col gap-3 text-[#03293D80] font-medium">
          <p>Action centre</p>
          <p>Apps</p>
          <p>Tasks</p>
          <p>Code review</p>
          <p>Planning</p>
          <p>Notes</p>
          <p>QA review</p>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
