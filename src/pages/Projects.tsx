import ProjectCard from "../components/ProjectCard/ProjectCard.tsx"

// 내가 띄울 정보를 정리(아이디, 제목, 간단설명, 이미지경로, 사이트 주소)
const portfolioData = {
    name : "안성민",
    bio : "안녕하세요 저는 웹 개발 수업을 듣고있습니다.",
    profileImage:"https://raw.githubusercontent.com/dkstjdals19/images/main/profile.png",
    projects:[
        {
            id:1,
            title:"nextjs-typescript-board",
            description:"타입스크립트로 만든 글쓰기 프로젝트",
            imageURL:"https://raw.githubusercontent.com/dkstjdals19/images/main/nextjs-typescript-board.png",
            url:"https://nextjs-typescript-board-1.vercel.app/",
        },
        {
            id:2,
            title:"react-app",
            description:"도커 / AWS 배포해보기 프로젝트",
            imageURL:"https://raw.githubusercontent.com/dkstjdals19/images/main/docker.png",
            url:"react-app-ruby-seven.vercel.app",
        },
        {
            id:3,
            title:"nextjs-type-store",
            description:"typescript-dashboard의 백엔드",
            imageURL:"https://raw.githubusercontent.com/dkstjdals19/images/main/project.png",
            url:"nextjs-type-store-proj.vercel.app",
        },
        {
            id:4,
            title:"react-typescript-dashboard",
            description:"typescript-dashboard",
            imageURL:"https://raw.githubusercontent.com/dkstjdals19/images/main/project2.png",
            url:"react-typescript-dashboard-three.vercel.app",
        },
    ]


}

export default function Projects()
{
    return(
        <div className="min-h-screen text-white bg-gray-800 p-4 ">
            <div className="mx-auto max-w-4xl py-8">
                {/* 자기 소개 */}
                <section className="flex md:flex-row flex-col items-center bg-gray-700 p-8 md:p-12 rounded-3xl shadow-lg hover:scale-105 transform transition-transform duration-300">
                    <div className="w-35 h-45 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 md:mb-0 md:mr-10 ring-4 ring-indigo-500">
                        <img src={portfolioData.profileImage} alt="프로필" className="w-full h-full object-cover shadow-2xl"/>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl font-extrabold text-indigo-400 mb-3">{portfolioData.name}</h1>
                        <p className="text-lg text-gray-300">{portfolioData.bio}</p>
                    </div>
                </section>

                {/* 프로젝트 카드들 */}
                <section className="mt-12">
                    <h2 className="text-3xl  font-bold text-center text-indigo-400 mb-8">프로젝트</h2>
                    <div className="grid grid-colos-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {
                            portfolioData.projects.map((project)=>(
                                <ProjectCard key={project.id} project={project}></ProjectCard>

                            ))
                        }
                    </div>
                </section>
            </div>
        </div>
    )
    
}