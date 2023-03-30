import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 ">
  <div className="flex-1 px-5 ">
    <a className="font-semibold text-xl">Knowledge Cafe</a>
  </div>
  <div className="flex-none gap-2">
        <div className="w-10 rounded-full">
          <img className='rounded-full' src="https://picsum.photos/200" />
    </div>
  </div>
</div>
    );
};

export default Navbar;