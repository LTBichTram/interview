import React from "react";
import {
  AiFillPushpin,
  AiFillEye,
  AiFillCaretDown,
  AiFillTag,
  AiOutlineFolder,
  AiFillFolder,
  AiOutlineBars,
} from "react-icons/ai";
import { FaCodeBranch, FaPen } from "react-icons/fa";
import { BsCode } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import SourceLeft from "./SourceLeft";
import SourceRight from "./SourceRight";

const DetailSource = () => {
  return (
    <div className="text-primaryText">ƒ
      <div className="flex justify-between mx-8 py-4 border-b border-secondtext">
        <div className="flex gap-2 items-center">
          <div className="h-8 w-8 rounded-full">
            <img
              alt=""
              src="https://avatars.githubusercontent.com/u/85999616?s=48&v=4"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="text-2xl font-semibold">interview</div>
          <div className="border rounded-full text-secondtext px-2 flex items-center text-xs font-medium">
            Public
          </div>
        </div>
        <div className="flex items-center gap-2 justify-end">
          <button className="py-1 px-3 flex items-center gap-1 border rounded-md border-secondtext bg-[#21262d96] text-sm">
            <AiFillPushpin className="text-secondtext" />
            Pin
          </button>
          <button
            className="py-1 px-3 flex items-center gap-1 border rounded-md border-secondtext bg-[#21262d96] text-sm"
            disabled
          >
            <AiFillEye className="text-secondtext" />
            Unwatch
            <AiFillCaretDown className="text-secondtext" />
          </button>
          <button className="py-1 px-3 flex items-center gap-1 border rounded-md border-secondtext bg-[#21262d96] text-sm">
            <AiFillPushpin className="text-secondtext" />
            Pin
          </button>
          <button className="py-1 px-3 flex items-center gap-1 border rounded-md border-secondtext bg-[#21262d96] text-sm">
            <AiFillPushpin className="text-secondtext" />
            Pin
          </button>
        </div>
      </div>

      <div className="mx-8 py-4 flex items-center justify-start">
        <SourceLeft/>
        <SourceRight/>
      </div>
    </div>
  );
};

export default DetailSource;
