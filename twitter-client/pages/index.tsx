import Image from "next/image";
import { Inter } from "next/font/google";
import { FaXTwitter } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoBookmarkSharp } from "react-icons/io5";
import { Icons } from "next/dist/lib/metadata/types/metadata-types";


const inter = Inter({subsets: ['latin'] });

interface TwitterSideMenu{
  title: string,
  icon: React.ReactNode
}

const sideMenu: TwitterSideMenu[] = [
  {
    title: "Home",
    icon: <FaHome />
  },
  {
    title: "Explore",
    icon: <FaHashtag />
  },
  {
    title: "Notification",
    icon: <FaBell />
  },
  {
    title: "Bookmarks",
    icon: <IoBookmarkSharp />
  },
  {
    title: "Messages",
    icon: <FaEnvelope />
  },
  {
    title: "Profile",
    icon: <FaUser />
  }
] 


export default function Home() {
  return (
    <div className={inter.className}>
      <div className="grid grid-cols-12 h-screen w-screen px-56">
        <div className="col-span-3 pt-3">
          <FaXTwitter className="text-5xl hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all"/> 
        
          <div className="mt-4 text-2xl font-bold pr-5">
            <ul>
              {sideMenu.map((item) => (
                <li className="flex justify-start items-center gap-4 hover:bg-gray-600 rounded-lg px-3 py-4 w-fit cursor-pointer" 
                  key={item.title}>
                  <span> {item.icon} </span>
                  <span> {item.title} </span>
                </li>
              ))}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] p-4 font-semibold rounded-full w-full">Tweet</button>
            </div>

          </div>
        
        </div> 
        

        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray"></div>
        <div className="col-span-3"></div>
      </div>
    </div>
  );
}
