import { LIST_PROJECTS } from "@/common/graphql/queries";
import { IProject } from "@/common/types/ProjectInterfaces";
import { GetStaticProps, NextPage } from "next";
import client from "@/common/graphql/client";
import ProjectsCardList from "@/modules/ProjectsCardList";

interface Props {
    projects: IProject[]
}


const Projects: NextPage<Props> = ({projects}) => {
    return (
        <ProjectsCardList projects={projects}/>
    )
}

export const getStaticProps: GetStaticProps<Props> = async () => {

    const { data } = await client.query({query: LIST_PROJECTS})
    const projects: IProject[] = data.projects.data;

    return {
        props: {
            projects
        }
    }
}

export default Projects;
