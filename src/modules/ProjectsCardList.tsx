import { IProject } from "@/common/types/ProjectInterfaces";
import { NextPage } from "next";
import ProjectsTitle from "@/elements/ProjectsTitle";

interface Props {
    projects: IProject[]
}

const ProjectsCardList: NextPage<Props> = ({projects}) => {
    return (
        <div>
            {projects.map((project, i) => {
                return (
                    <div key={i}>
                        <ProjectsTitle 
                            title={project.attributes.Title} 
                            isClickable={true} 
                            projectId={project.id}
                        />
                    </div>
                );
            })}
        </div>
    )
}

export default ProjectsCardList;
