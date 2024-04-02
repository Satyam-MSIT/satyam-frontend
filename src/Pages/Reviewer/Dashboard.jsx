import React,{useState,useEffect} from 'react'
import { FaDownload } from "react-icons/fa";
import PieChart from '../Satyam/Landing/PieChart';
import BarChart from './BarChart';
import list from './list';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const [proposal, setProposal] = useState({});
  const { id } = useParams();
  console.log(list.find(item => item.id.toString() === id));

  useEffect(() => {
    const selectedProposal = list.find(item => item.id.toString() === id);
    if (selectedProposal) {
      setProposal(selectedProposal);
    }
  }, [id]);
  const content = [
    {
      title: "Views",
      count: 100,
    },
    {
      title: "Likes",
      count: 23
    },
    {
      title: "Comments",
      count: 2
    },
    {
      title: "Status",
      result:"Accepted"
    },
  ]
  return (
    <div className='flex flex-col m-4 md:my-8 md:mx-16'>
        <div className='justify-between flex items-center align-middle'><h1 className='md:text-2xl font-medium mx-16'>Stats for</h1><span><FaDownload/></span></div>
        {proposal && (
          <>
            <h1 className='md:text-4xl font-bold mx-16 my-4'>{proposal.title}</h1>
            <h1 className='md:text-2xl font-bold mx-16'>By: {proposal.submittedBy}</h1>
          </>
        )}
        <div className='flex mt-4'>
          {content.map(cont => (
            <div className='w-[20%] rounded-xl mx-auto border p-4 my-2 bg-slate-300' key={cont.id}>
              <div className='flex justify-between align-middle items-center'>
                <p className='text-lg  mx-auto'>{cont.title}</p>
              </div>
              <h1 className='text-4xl font-bold text-center'>{cont.count ? cont.count : proposal.status}</h1>

            </div>
          ))}
        </div>
        <div className='flex justify-between items-center my-8 align-middle'>
          <div className='w-[110rem]'><BarChart/></div>
          <div><PieChart/></div>
        </div>
    </div>
  )
}

export default Dashboard