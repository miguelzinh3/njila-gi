import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import { IProject, IProjectIdentification } from "@/common/types/ProjectInterfaces";
import { LIST_ID, SINGLE_PROJECT } from "@/common/graphql/queries";
import client from "@/common/graphql/client";

interface Props {
    project: IProject
}

const SingleProject: NextPage<Props> = ({project}) => {
    console.log(project)
    return (
        <div>
            <p>{project.id}</p>
            <p>{project.attributes.Title}</p>
            <p>{project.attributes.Content}</p>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const {data} = await client.query({query: LIST_ID })
    const ids: IProjectIdentification[] = data.projects.data;

    const paths = ids.map(id => {
        return {params: {...id}}
    })

    return {
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps<Props> = async ({params}) => {
    const {data} = await client.query({query: SINGLE_PROJECT, variables: {projectId: params!.id}})
    const project: IProject = data.projects.data[0];

    return {
        props: {
            project
        }
    }
}

export default SingleProject;