import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[80px] bg-[#052231] flex flex-col justify-between items-center gap-y-24  h-[100vh]">
      <div className="flex flex-col justify-center items-center gap-10 p-8">
        <div className="flex flex-col gap-4 justify-center items-center ">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="white" fill-opacity="0.25" />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="32"
              height="32"
              rx="10"
              fill="white"
              fill-opacity="0.05"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center ">
          <svg
            width="17"
            height="19"
            viewBox="0 0 17 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 17.6667V9.33333H11V17.6667M1 6.83333L8.5 1L16 6.83333V16C16 16.442 15.8244 16.866 15.5118 17.1785C15.1993 17.4911 14.7754 17.6667 14.3333 17.6667H2.66667C2.22464 17.6667 1.80072 17.4911 1.48816 17.1785C1.17559 16.866 1 16.442 1 16V6.83333Z"
              stroke="#CDD3D6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3334 10H13.3334L11.6667 12.5H8.33335L6.66669 10H1.66669"
              stroke="#CDD3D6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.54169 4.25834L1.66669 10V15C1.66669 15.442 1.84228 15.866 2.15484 16.1785C2.4674 16.4911 2.89133 16.6667 3.33335 16.6667H16.6667C17.1087 16.6667 17.5326 16.4911 17.8452 16.1785C18.1578 15.866 18.3334 15.442 18.3334 15V10L15.4584 4.25834C15.3204 3.98067 15.1077 3.74699 14.8442 3.58358C14.5806 3.42017 14.2768 3.33351 13.9667 3.33334H6.03335C5.72328 3.33351 5.41941 3.42017 5.15589 3.58358C4.89237 3.74699 4.67967 3.98067 4.54169 4.25834V4.25834Z"
              stroke="#CDD3D6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="32" rx="10" fill="#23B3E8" />
            <path
              d="M20.2778 18.2222C19.1425 18.2222 18.2222 19.1425 18.2222 20.2778C18.2222 21.413 19.1425 22.3333 20.2778 22.3333C21.413 22.3333 22.3333 21.413 22.3333 20.2778C22.3333 19.1425 21.413 18.2222 20.2778 18.2222ZM20.2778 18.2222V13.4259C20.2778 13.0625 20.1334 12.7139 19.8764 12.4569C19.6194 12.1999 19.2709 12.0556 18.9074 12.0556H16.8519M12.0556 14.1111C13.1908 14.1111 14.1111 13.1908 14.1111 12.0556C14.1111 10.9203 13.1908 10 12.0556 10C10.9203 10 10 10.9203 10 12.0556C10 13.1908 10.9203 14.1111 12.0556 14.1111ZM12.0556 14.1111V22.3333"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.2593 13.6667V12.2593C12.2593 11.5127 11.9627 10.7968 11.4348 10.2689C10.9069 9.74101 10.191 9.44444 9.44444 9.44444H3.81481C3.06828 9.44444 2.35232 9.74101 1.82444 10.2689C1.29656 10.7968 1 11.5127 1 12.2593V13.6667M16.4815 13.6667V12.2593C16.481 11.6356 16.2734 11.0297 15.8913 10.5368C15.5092 10.0439 14.9742 9.69184 14.3704 9.53593M11.5556 1.09148C12.161 1.24651 12.6977 1.59864 13.0809 2.09237C13.4642 2.58609 13.6722 3.19332 13.6722 3.81833C13.6722 4.44334 13.4642 5.05057 13.0809 5.5443C12.6977 6.03802 12.161 6.39016 11.5556 6.54518M9.44445 3.81481C9.44445 5.36939 8.18421 6.62963 6.62963 6.62963C5.07505 6.62963 3.81481 5.36939 3.81481 3.81481C3.81481 2.26024 5.07505 1 6.62963 1C8.18421 1 9.44445 2.26024 9.44445 3.81481Z"
              stroke="white"
              stroke-opacity="0.8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.2453 2.96V1.48018L4.27321 1.47982V2.95965L14.2453 2.96ZM14.2454 8.87892L14.2452 5.17995L4.27311 5.17958L4.27338 8.87855L14.2454 8.87892ZM14.2453 0.000362697C15.0323 0.000362697 15.6699 0.661815 15.6699 1.48019L15.67 8.87892C15.67 9.69733 15.0326 10.3587 14.2454 10.3587L4.27338 10.3584C3.48627 10.3584 2.84877 9.69696 2.84877 8.87855L2.85573 1.47982C2.85573 0.661452 3.48609 0 4.27321 0L14.2453 0.000362697ZM1.4246 11.8397H12.1091V13.3195L1.42477 13.3191C0.637667 13.3191 0.00017093 12.6576 0.00017093 11.8393L0 3.70064H1.4246V11.8397Z"
              fill="white"
              fill-opacity="0.8"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center pt-7 pb-7 border-t-2 border-b-2 border-[#F9F9F9]">
          <div className="p-4 bg-blue-700 text-white flex justify-center items-center rounded-full w-[24px] h-[24px]">
            <p className="text-sm">PN</p>
          </div>
          <div className="p-4 bg-slate-600 text-white flex justify-center items-center rounded-full w-[24px] h-[24px]">
            <p className="text-sm">PN</p>
          </div>
          <div className="p-4 bg-orange-400 text-white flex justify-center items-center rounded-full w-[24px] h-[24px]">
            <p className="text-sm">PN</p>
          </div>
          <div className="p-4 bg-red-700 text-white flex justify-center items-center rounded-full w-[24px] h-[24px]">
            <p className="text-sm">PN</p>
          </div>
        </div>
      </div>
      <div>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect opacity="0.2" width="40" height="40" rx="20" fill="#F9F9F9" />
        </svg>
      </div>
    </div>
  );
};

export default Sidebar;
