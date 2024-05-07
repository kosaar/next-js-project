import React from 'react';
import { IoMdAdd, IoMdSearch, IoIosNotificationsOutline, IoMdPerson } from 'react-icons/io';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow">
      <button className="flex items-center text-white bg-blue-700 hover:bg-blue-800 font-medium py-2 px-4 rounded-full">
        <IoMdAdd className="mr-2" />Ajouter un élément
      </button>
      <div className="flex gap-4 items-center ml-auto">
        <input
          type="search"
          placeholder="Rechercher un document.."
          className="flex-grow px-4 py-2 border rounded-full w-96 focus:outline-none"
        />
        <button className="text-blue-700 hover:text-blue-800">
          <IoMdSearch />
        </button>
        <button className="text-blue-700 hover:text-blue-800">
          <IoIosNotificationsOutline />
        </button>
        <button className="text-blue-700 hover:text-blue-800">
          <IoMdPerson />
        </button>
      </div>
    </header>
  );
};

export default Header;
