import React from 'react'
import {
    AiFillCaretDown,
    AiFillTag,
    AiOutlineFolder,
    AiFillFolder,
    AiOutlineBars,
  } from "react-icons/ai";
  import { FaCodeBranch, FaPen } from "react-icons/fa";
  import { BsCode } from "react-icons/bs";
  import { BiTime } from "react-icons/bi";

const SourceLeft = () => {
  return (
    <div className="w-3/4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <button className="py-1 px-3 flex items-center gap-1 border rounded-md border-secondtext bg-[#21262d96] text-sm">
              <FaCodeBranch className="text-secondtext" />
              main
              <AiFillCaretDown className="text-secondtext" />
            </button>
            <div className="flex items-center gap-2 justify-end">
              <button className="py-1 px-3 flex items-center gap-1 border rounded-md border-secondtext bg-[#21262d96] text-sm">
                Go to file
              </button>
              <button
                className="py-1 px-3 flex items-center gap-1 border rounded-md border-secondtext bg-[#21262d96] text-sm"
                disabled
              >
                Add file
                <AiFillCaretDown className="text-secondtext" />
              </button>
              <button className="py-1 px-3 flex items-center gap-1 border rounded-md border-secondtext bg-[#21262d96] text-sm text-primaryText bg-[#238636]">
                <BsCode />
                Code
                <AiFillCaretDown />
              </button>
            </div>
          </div>
          <div className="flex">
            <button className="py-1 px-3 flex items-center gap-1 text-secondtext text-sm">
              <FaCodeBranch className="text-primaryText" />
              Branches
            </button>
            <button className="py-1 px-3 flex items-center gap-1 text-secondtext text-sm">
              <AiFillTag className="text-primaryText" />
              Tags
            </button>
          </div>
          <div className="border border-secondtext rounded-md">
            <div className="p-4 flex justify-between items-center">
              <div className="flex gap-1 items-center">
                <div className="h-8 w-8 rounded-full">
                  <img
                    alt=""
                    src="https://avatars.githubusercontent.com/u/85999616?s=48&v=4"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="font-bold ml-2">BichTram</div>
                <div>first commit</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm text-secondtext">4 hours ago</div>
                <div className="flex items-center gap-1">
                  <BiTime className="text-xl" />2
                </div>
              </div>
            </div>

            <div className="flex px-4 py-4 items-center">
              <div className="" style={{ width: "10%" }}>
                <AiFillFolder className="text-xl text-secondtext" />
              </div>
              <div style={{ width: "20%" }}>public</div>
              <div
                className="text-ellipsis whitespace-nowrap overflow-hidden pr-1 text-secondtext"
                style={{ width: "50%" }}
              >
                Initialize project using creact react app
              </div>
              <div className="text-secondtext" style={{ width: "20%" }}>
                4 hours ago
              </div>
            </div>
            <div className="flex px-4 py-4 items-center">
              <div className="" style={{ width: "10%" }}>
                <AiFillFolder className="text-xl text-secondtext" />
              </div>
              <div style={{ width: "20%" }}>public</div>
              <div
                className="text-ellipsis whitespace-nowrap overflow-hidden pr-1 text-secondtext"
                style={{ width: "50%" }}
              >
                Initialize project using creact react app
              </div>
              <div className="text-secondtext" style={{ width: "20%" }}>
                4 hours ago
              </div>
            </div>
            <div className="flex px-4 py-4 items-center">
              <div className="" style={{ width: "10%" }}>
                <AiOutlineFolder className="text-xl text-secondtext" />
              </div>
              <div style={{ width: "20%" }}>public</div>
              <div
                className="text-ellipsis whitespace-nowrap overflow-hidden pr-1 text-secondtext"
                style={{ width: "50%" }}
              >
                Initialize project using creact react app
              </div>
              <div className="text-secondtext" style={{ width: "20%" }}>
                4 hours ago
              </div>
            </div>
            <div className="flex px-4 py-4 items-center">
              <div className="" style={{ width: "10%" }}>
                <AiOutlineFolder className="text-xl text-secondtext" />
              </div>
              <div style={{ width: "20%" }}>public</div>
              <div
                className="text-ellipsis whitespace-nowrap overflow-hidden pr-1 text-secondtext"
                style={{ width: "50%" }}
              >
                Initialize project using creact react app
              </div>
              <div className="text-secondtext" style={{ width: "20%" }}>
                4 hours ago
              </div>
            </div>
          </div>

          <div className="border border-secondtext rounded-md flex justify-between items-center flex-col">
            <div className="p-4 flex items-center justify-between w-full">
              <div className="flex justify-between items-center gap-2">
                <AiOutlineBars className="text-secondtext" />
                <div className="font-bold">README.md</div>
              </div>
              <div>
                <FaPen className="text-secondtext" />
              </div>
            </div>

            <div className="px-8 py-4">
                <div className="text-4xl font-semibold pb-3 border-b border-secondtext">Getting Started with Create React App</div>
                <div className="py-3">
                This project was bootstrapped with 
                <a  href="https://github.com/facebook/create-react-app">Create React App.</a>
                </div>
                n the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.


            </div>
          </div>
        </div>
  )
}

export default SourceLeft