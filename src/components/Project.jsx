import React, { useContext } from 'react'
import { MyContext } from '../context/ContextProvider'
import { FaGithub } from 'react-icons/fa'

export default function Project({ project }) {
    const { theme } = useContext(MyContext)
    return (
        <>

            <div className={`relative border-2 mb-5 border-${theme}-600 md:h-72 flex md:flex-row flex-col`}>

                {/* Project Image BG */}
                <div style={{
                    background: `url(${project.img}) center/cover`
                }} className="md:w-2/5 h-56 md:h-full">
                </div>

                {/* Info */}
                <div className={`info font-[Roboto] md:w-3/5 mx-auto relative z-40 bg-${theme}-600 text-white font-semibold md:text-4xl text-2xl items-start justify-between flex flex-col px-4 md:py-7 py-4 space-y-3`}>

                    <div className='text-start md:space-y-3 space-y-1'>
                        <span className=''>{project.title}</span>
                        <div className='font-light text-sm md:text-lg '>{project.desc}</div>
                    </div>

                    <div className="text-start w-full flex flex-row  justify-between items-center ">
                        <a target='_' className={`text-lg text-center md:w-36 block w-full border hover:bg-slate-200 border-slate-50 text-${theme}-700 md:rounded-md rounded-sm bg-white md:px-4 px-2 md:py-2 py-1`} href={project.link}>View</a>

                        <a target='_' href={project.github}>
                            <div className="git cursor-pointer text-gray-200 hover:text-white">
                                <FaGithub />
                            </div>
                        </a>


                    </div>

                </div>

            </div>

        </>
    )
}
