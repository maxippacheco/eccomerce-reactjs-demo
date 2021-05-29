import React from "react";
import { Link } from "react-router-dom";

export const CardListItem = ({ assets, media, price}) => {
  return (

    <div className="min-h80 min-w-screen bg-gray-100 flex items-center justify-center mt-10">
      <div className='hover:shadow-lg'>
        <div className="flex flex-col max-w-md bg-white px-8 py-6 rounded-xl space-y-5 items-center border-t-black">
          {/* <h3 className="font-bold text-gray-900 text-2xl">{name}</h3> */}
          <img className="w-52 rounded-md h-52" src={media.source} alt="motivation" />
          <Link className='text-center hover:text-blue-300' to={`/view/${assets[0].id}`}>
              See More
          </Link>
          <span className="px-24 py-4 text-black text-lg focus:border-transparent">{price.formatted_with_symbol}</span>
        </div>
      </div>
  </div>
  );
};
