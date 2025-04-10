import React from "react"

export default function UserProfile({ styles, username, role }) {
  return (
    <div className={`${styles.container} items-center`}>
      <button className={`${styles.btn}`}>
        <img src="/images/header/profile.png" alt="user profile icon" />
      </button>
      <div>
        <h3 className={`${styles.h3}`}>{username}</h3>
        <h6 className="text-xs leading-[6px]">{role}</h6>
      </div>
    </div>
  )
}
