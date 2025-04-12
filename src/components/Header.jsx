import React from "react"
import Search from "./header/Search"
import UserProfile from "./header/UserProfile"
import logo from "/assets/images/header/proptely-logo.png"
import settings from "/assets/images/header/settings.png"
import notification from "/assets/images/header/notification.png"
import downArrow from "/assets/images/header/down-arrow.png"
import logout from "/assets/images/header/logout.png"

export default function Navbar() {
  const username = "Alex Jonhson"
  const role = "Admin"

  const [showHeaderMobileMenu, setShowHeaderMobileMenu] = React.useState(false)

  function toggleHeaderMobileMenu() {
    setShowHeaderMobileMenu((state) => !state)
  }

  return (
    <header className="flex justify-between md:justify-evenly items-center px-8 bg-blue-450">
      {/* logo */}
      <div>
        <img src={logo} alt="Proptely Logo" />
      </div>

      {/* search */}
      <Search styles="hidden md:flex w-1/3 ms-auto" />

      <section className="flex w-1/2 justify-end">
        <div className="flex items-center justify-end border-x-0 md:border-x-[0.1px] md:border-[#282B2E] h-8 w-[30%] pe-[4%]">
          {/* settings */}
          <button aria-label="settings menu" className="hidden md:block">
            <img className="min-w-[18px]" src={settings} alt="settings icon" />
          </button>
          {/* notification */}
          <button aria-label="notification menu" className="ms-5">
            <img
              className="min-w-5 md:min-w-[18px]"
              src={notification}
              alt="notification icon"
            />
          </button>
        </div>

        {/* user profile */}
        <UserProfile
          styles={{
            container: "hidden md:flex  ps-[8%] pe-2",
            btn: "pe-5",
            h3: "font-semibold",
          }}
          username={username}
          role={role}
        />

        {/* mobile menu btn */}
        <div className="flex mx-2 md:hidden relative">
          <button
            aria-label="mobile header menu"
            className="w-5"
            onClick={toggleHeaderMobileMenu}
          >
            <img src={downArrow} alt="header menu" />
          </button>
        </div>
      </section>

      {/* Mobile menu dropdown */}
      <section
        className={`absolute  ${
          showHeaderMobileMenu ? "top-16" : "-top-48"
        } right-0 bg-[#B5DEF2] w-44 rounded-md p-3 transition-[top] duration-700 ease-slide md:hidden`}
      >
        {/* user profile */}
        <UserProfile
          styles={{
            container: "flex",
            btn: "pe-2",
            h3: "font-medium text-[15px]",
          }}
          username={username}
          role={role}
        />

        {/* search bar */}
        <Search styles="flex mt-4" />

        {/* settings */}
        <button
          aria-label="settings menu"
          className="flex items-center gap-3 mt-4"
        >
          <img className="min-w-4" src={settings} alt="settings icon" />
          <span className="text-xs">Settings</span>
        </button>

        {/* Logout */}
        <hr className="mt-2 mb-2" />
        <button aria-label="logout" className="flex items-center gap-3 mt-4">
          <img className="w-5" src={logout} alt="Logout icon" />
          <span className="text-xs">Logout</span>
        </button>
      </section>
    </header>
  )
}
