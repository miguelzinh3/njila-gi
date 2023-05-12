export interface IProjectIdentification {
    id: string
}

export interface IProjectFields {
    Title: string,
    Content: string
}

export interface IProjectAttributes {
    attributes: Partial<IProjectFields> & Pick<IProjectFields, 'Title'>
}

export interface IProject extends IProjectIdentification, IProjectAttributes{}
