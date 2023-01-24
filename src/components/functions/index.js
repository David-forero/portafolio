import sanityClient from "../../sanity";

export const fetchPageInfo = async () => {
    const query = `
    *[_type == "pageInfo"][0]
    `;
    return await sanityClient.fetch(query);
}

export const fetchSkills = async () => { 
    const query = `
    *[_type == "skill"]
    `;
    return await sanityClient.fetch(query);
 }

 export const fetchExperiences = async () => { 
    const query = `
    *[_type == "experience"]{
        ...,
        technologies[]->
      }
    `;
    return await sanityClient.fetch(query);
 }

 export const fetchProjects = async () => { 
    const query = `
    *[_type == "project"]{
        ...,
        technologies[]->
      }
    `;
    return await sanityClient.fetch(query);
 }

 export const fetchSocials = async () => {
  const query = `
  *[_type == "social"]
  `;
  return await sanityClient.fetch(query);
}