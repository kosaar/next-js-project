import React from 'react';
import { IoMdSearch } from 'react-icons/io';

const Header = () => {
  return (
    <header className="flex justify-center items-center p-4 shadow-md w-full">
      <div className="flex items-center border hover:flex-1 max-w-96 rounded-full px-4 py-2">
        <input
          type="search"
          placeholder="Rechercher un document"
          className="outline-none pl-2 pr-4 py-2 flex-grow"
        />
        <IoMdSearch className="text-xl" />
      </div>
    </header>
  );
};

export default Header;
