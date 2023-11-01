import React from "react";
import { AiFillSetting, AiFillRead } from "react-icons/ai";

const SourceRight = () => {
  return (
    <div className="w-1/4 flex flex-col gap-5 pl-4">
      <div className="border-b pb-4 border-secondtext">
        <div className="flex items-center justify-between">
          <div className="text-primaryText font-semibold">About</div>
          <AiFillSetting />
        </div>
        <div className="text-secondtext italic">
          No description, website, or topics provided.
        </div>
        <div>
          <div className="text-secondtext flex gap-3 items-center">
            <AiFillRead /> Readme
          </div>
          <div className="text-secondtext flex gap-3 items-center">
            <AiFillRead /> Activity
          </div>
          <div className="text-secondtext flex gap-3 items-center">
            <AiFillRead /> 0 start
          </div>
          <div className="text-secondtext flex gap-3 items-center">
            <AiFillRead /> 1 watching
          </div>
          <div className="text-secondtext flex gap-3 items-center">
            <AiFillRead /> 0 forks
          </div>
        </div>
      </div>

      <div className="border-b pb-4 border-secondtext">
        <div className="text-primaryText font-semibold">Realeases</div>
        <div className="text-sm text-secondtext">No releases published</div>
        <a href="/" className="text-[#2f81f7] text-sm">
          Create a new release
        </a>
      </div>

      <div className="border-b pb-4 border-secondtext">
        <div className="text-primaryText font-semibold">Package</div>
        <div className="text-sm text-secondtext">No Package published</div>
        <a href="/" className="text-[#2f81f7] text-sm">
          Create a new Package
        </a>
      </div>

      <div className="border-b pb-4 border-secondtext">
        <div className="text-primaryText font-semibold">Language</div>
        <div className="w-full bg-secondtext h-1 flex my-2 rounded-full">
          <div className="bg-orange w-1/4 h-2 rounded-l-full"></div>
          <div className="bg-[#f1e05a] w-2/4 h-2"></div>
          <div className="bg-[#563d7c] w-1/4 h-2 rounded-r-full"></div>
        </div>
        <div></div>
      </div>

      <div className="border-b pb-4 border-secondtext">
        <div className="text-primaryText font-semibold">Realeases</div>
        <div className="text-sm text-secondtext">No releases published</div>
        <a href="/" className="text-[#2f81f7] text-sm">
          Create a new release
        </a>
      </div>
      <div className="border-b pb-4 border-secondtext">
        <div className="text-primaryText font-semibold">Realeases</div>
        <div className="text-sm text-secondtext">No releases published</div>
        <a href="/" className="text-[#2f81f7] text-sm">
          Create a new release
        </a>
      </div>
      <div className="border-b pb-4 border-secondtext">
        <div className="text-primaryText font-semibold">Realeases</div>
        <div className="text-sm text-secondtext">No releases published</div>
        <a href="/" className="text-[#2f81f7] text-sm">
          Create a new release
        </a>
      </div>
      <div className="border-b pb-4 border-secondtext">
        <div className="text-primaryText font-semibold">Realeases</div>
        <div className="text-sm text-secondtext">No releases published</div>
        <a href="/" className="text-[#2f81f7] text-sm">
          Create a new release
        </a>
      </div>
    </div>
  );
};

export default SourceRight;
