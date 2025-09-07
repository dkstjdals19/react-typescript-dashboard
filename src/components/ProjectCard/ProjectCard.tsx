
interface IProject{
    id: number,
    title : string,
    description : string,
    imageURL : string,
    url : string
}


export default function ProejctCard({project} : {project:IProject}){

    return(
        <div className="">
            {project?.id}
        </div>
    )
}