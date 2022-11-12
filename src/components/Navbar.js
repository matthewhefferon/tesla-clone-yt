import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="flex justify-between items-center font-bold px-12 p-4 text-sm ">
        <div>
          <a href="https://tesla.com">
            <img
              className="h-3"
              src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
              alt="Tesla logo"
            />
          </a>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/models">Model S</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/model3">Model 3</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modelx">Model X</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modely">Model Y</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarroof">Solar Roof</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarpanels">Solar Panels</a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:inline">
          <ul className="flex justify-center hover:cursor-pointer">
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://shop.tesla.com">Shop</a>
            </li>
            <li className="py-1 px-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/teslaaccount">Account</a>
            </li>
            <li
              onClick={handleNav}
              className="py-1 px-3 hover:rounded hover:bg-black/5"
            >
              Menu
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <button onClick={handleNav} className="inline-flex items-center rounded-md py-2 px-4 p-2 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">
            Menu
          </button>
        </div>

        <div
          className={
            nav
              ? "bg-white absolute right-0 top-0 w-80 h-full z-10"
              : "fixed right-[-100%]"
          }
        >
          <div className="flex justify-end pr-8 pt-8">
            <TfiClose onClick={handleNav} className="rounded p-1 hover:bg-black/5" size={28} />
          </div>
          <ul className="pt-8 px-6">
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/models">Model S</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/model3">Model 3</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modelx">Model X</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/modely">Model Y</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarroof">Solar Roof</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://tesla.com/solarpanels">Solar Panels</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/inventory/new/m3">
                Existing Inventory
              </a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/inventory/used/m3">
                Used Inventory
              </a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/tradein">Trade-In</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/drive">Test Drive</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/insurance">Insurance</a>
            </li>
            <li className="py-3 pl-3 hover:rounded hover:bg-black/5">
              <a href="https://www.tesla.com/powerwall">Powerwall</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
