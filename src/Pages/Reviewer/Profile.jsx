import React from 'react'
import SideBar from '../../Components/SideBar'
import Manage from "./../../assets/img/icons/satyam_sidebar/manage.svg";
import Journals from "./../../assets/img/icons/satyam_sidebar/journals.svg";
import Users from "./../../assets/img/icons/satyam_sidebar/users.svg";
import dummyUser from "./../../assets/img/dummy-user.png";
import { FaLinkedin } from 'react-icons/fa6';
import { useState } from 'react';

const Profile = () => {
    const [val,setVal] = useState(false)
    const [data, setData] = useState({org:"Avc", about:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, excepturi. Tempore atque animi, commodi fugit totam itaque asperiores! Non maiores esse autem minus fugit aperiam! Similique atque nulla provident in? Sint commodi neque mollitia sed tempora architecto voluptatibus inventore doloremque."})
    console.log(data);
    // setData(jsonString)

    function updation() {
        setVal(prev => !prev);
    }

    const links = [
        {
          icon: Manage,
          link: "manage",
          name: "Manage Website",
        },
        {
          icon: Journals,
          link: "jorunals",
          name: "Uploaded Journals",
        },
        {
          icon: Users,
          link: "users",
          name: "Manage Users",
        },
      ]
  return (
    <div className="flex">
        <SideBar className="w-[30%]" links={links} />
        <div className='m-12 border w-full'>
            <img className='h-40 w-full rounded-lg object-cover' src="https://images.pexels.com/photos/937782/pexels-photo-937782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className='flex -mt-8 mx-4'>
            <img src={dummyUser} className='bg-white border-black border rounded-full w-40 h-40 mr-12' alt="" />
            <div className='mt-8'>
                <div className='flex items-center align-middle justify-between'>
                    <div className='flex gap-12 items-center align-middle'>
                        <span className='text-4xl'>Name</span>
                        <span className=''><FaLinkedin color='blue'/></span>
                    </div>
                <button onClick={updation} className='bg-red-500 text-white rounded-lg px-4 py-1 my-2'>{val===false?"Update":"Save"}</button>
                </div>
                <input type="text" value={data.org} disabled={val ? false : true}   className={val ? 'bg-gray-200 rounded-md px-1 text-sm text-gray-600 outline-none' : 'text-sm'}  onChange={(e) => setData({ ...data, org: e.target.value })} />
                <p className='mt-4 font-medium'>About</p>

                <textarea cols="110" rows="5" value={data.about} disabled={val ? false : true}   className={val ? 'bg-gray-200 rounded-md px-1 text-sm text-gray-600 outline-none' : ' text-justify text-sm'}  onChange={(e) => setData({ ...data, about: e.target.value })}/>

                <p className='mt-4 font-medium my-1'>Field of Interest</p>
                <span class="bg-green-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-1  my-1 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Technology</span>
                <span class="bg-green-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-1  my-1 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Cricket</span>
                <span class="bg-green-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-1  my-1 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Machine Learning</span>
                <span class="bg-green-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-1  my-1 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Blogging</span>
                <span class="bg-green-200 text-blue-800 text-xs font-medium me-2 px-2.5 py-1  my-1 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">Portal</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profile