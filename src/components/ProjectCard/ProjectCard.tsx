import { LinkIcon } from "lucide-react";
import { useState } from "react"

interface IProject{
    id: number,
    title : string,
    description : string,
    imageURL : string,
    url : string
}


export default function ProejctCard({project} : {project:IProject})
{
    const [isHovered, setIsHovered] = useState(false);

    // 새창을 url 경로로 띄워주기
    function handleCardClick(){
        window.open(project?.url, '_blank')
    }
    return(
        <div onClick={handleCardClick} onMouseEnter={()=>{setIsHovered(true)}} onMouseLeave={()=>{setIsHovered(false)}} className="bg-gray-700 text-white cursor-pointer relative rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 group">
            <div className="overflow-hidden h-48">
                <img src={project.imageURL} alt={project.title} className="w-full h-full object-cover"/>
            </div>
            <div className="p-5">
                <h3 className="text-xl font-bold text-indigo-300 mb-2 ">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
            </div>
            
            {/* 마우스 올렸을때만 위쪽으로 버튼 나오게 */}
            {
                isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 bg-black" style={{backgroundColor: 'rgba(15,23,42,0.7'}}>
                        <div className="flex items-center space-x-2 bg-indigo-500 py-2 px-4 rounded-full shadow-lg">
                            <LinkIcon size={20}/>
                            <span className="font-semibold">사이트 이동</span>
                        </div>
                    </div>
                )
            }
            

        </div>
    )
}