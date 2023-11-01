import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsGithub, BsThreeDots } from "react-icons/bs";
import { listControl } from "./listControl";

const Header = () => {
    const [tabActive, setTabActive] = useState(0)
    const classActive = (index) => `${tabActive === index ? 'border-b-2 border-orange' : '' }  flex items-center gap-1 py-3 px-1`

  return (
    <div className="p-4 pb-0 bg-bgHeader text-primaryText flex flex-col">
      <div className="flex gap-2 items-center">
        <div className="border border-secondtext w-8 h-8 flex justify-center items-center">
          <FaBars />
        </div>
        <div>
        <BsGithub />
      </div>
      <div>BichTram / interview</div>
      </div>

      <div className="flex pt-3 items-center justify-between">
        <div className="flex items-center gap-6">
            {listControl.map((item, index) => <div className={classActive(index)}>
                <item.icon className="text-secondtext text-xl"/>
                {item.title}
            </div>)}
        </div>
        <div><BsThreeDots className="text-xl"/></div>
      </div>
    </div>
  );
};

export default Header;
