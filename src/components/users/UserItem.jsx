import React from "react";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="shadow-md bg-white border-b-4 rounded-xl border-black px-2 py-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <div>
          <div className="rounded-full w-16 h-16">
            <img src={avatar_url} alt="Profile-Pic" className="rounded-full" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-lg">{login}</h2>
          <Link
            className="text-sm bg-[#045ac4] px-2 py-1 rounded-md text-white mt-1"
            to={`/${login}`}
          >
            Visit GitFolio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
