import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import list from './list';

const List = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
    console.log(list);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                setPosts(list);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
        return (
            <div className='flex flex-col m-4 md:my-8 md:mx-16'>
                {loading ? (<h1 className='md:text-4xl font-bold mx-16 my-8'>Loading...</h1>) : (<h1 className='md:text-4xl font-bold my-4'>Journals recieved</h1>)}
                        <table className='text-xs md:text-base'>
                        <tr className='border'>
                            <th className='border px-2 md:px-4 md:py-2 '>S.No.</th>
                            <th className='border px-2 md:px-4 md:py-2 '>Title</th>
                            <th className='border px-2 md:px-4 md:py-2 '>Submitted At</th>
                            <th className='border px-2 md:px-4 md:py-2 '>Submitted By</th>
                            <th className='border px-2 md:px-4 md:py-2 '>Status</th>
                        </tr>
                        {currentPosts.map((data, index) => (
                            <tr className='border hover:bg-slate-200'>
                                <td className='border text-center'>{data.id}.</td>
                                <Link to={`/reviewer/dashboard/${data.id}`}><td className='border py-1 w-[40rem] px-2'>{data.title}</td></Link>
                                <td className='border text-center'>{data.submittedAt}</td>
                                <td className='border text-center'>{data.submittedBy}</td>
                                <td className='border text-center'>{data.status}</td>
                            </tr>
                        ))}
                        </table>
                <div className='mt-8 mx-auto'>
                    {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
                        <button className='mx-2 border-2 rounded-full px-2 py-1' key={index} onClick={() => paginate(index + 1)}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        );
}

export default List;
