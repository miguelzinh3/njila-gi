import { NextPage } from "next";

interface Props {
    title: string
    isClickable: boolean
    projectId?: string
}

const ProjectsTitle: NextPage<Props> = ({title, isClickable, projectId}) => {
    if(isClickable && projectId) {
        return (
            <a href={`/projects/${projectId}`}>{title}</a>   
        )
    } else {
        return (
            <p>{title}</p>
        )
    }
}

export default ProjectsTitle;
