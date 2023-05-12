import { gql } from "@apollo/client"

export const LIST_PROJECTS = gql(`query {
  projects {
    data {
      id
      attributes {
        Title
        Content
      }
    }
  }
  }`)
  
  export const SINGLE_PROJECT = gql(`query ($projectId: ID) {
    projects(filters: {id: {eq: $projectId}}) {
      data {
        id
        attributes {
          Title
          Content
        }
      }
    }
  }`)
  
  export const LIST_ID = gql(`query {
    projects {
      data {
        id
      }
    }
  }`)
