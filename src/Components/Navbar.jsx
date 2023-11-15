import React from "react";
import {ShoppingCartIcon} from "@heroicons/react/24/outline"
import Search from "./Search";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector((state)=> state.cart.productsNumber );

  return (
    <header className="min-w-[1000px]">
      <div className="flex bg-amazonclone text-white h-[60px]  ">
        {/* Left side */}
        <div className="flex items-center m-4 ">
          <Link to={"/"}>
          <img
            className="h-[36px] w-[100px] m-2 "
            src={"../images/amazon.png"}
            alt="amazon logo"
          />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver To</div>
            <div className="text-sm xl:text-base font-bold ">India</div>
          </div>
        </div>
        {/* middle */}
        <div className="flex grow relative items-center">
            <Search/> 
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm"> Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold ">Account & Lists</div>
          </div>

          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold ">& Orders</div>
          </div>
          {/* icon Cart */}
          <Link to={"/checkout"}>
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]" />
            <div className="relative">
                <div className="absolute right-[9px] font-bold text-orange-500 m-2 ">
                  {cart}
                </div>
            </div>
            <div className="text-xs mt-7 xl:text-sm font-bold ">
                Cart
            </div>
          </div>
          </Link>
        </div>
      </div>

      <div className="flex bg-amazonclone-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6 ">
        <div>Todya's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default Navbar;
