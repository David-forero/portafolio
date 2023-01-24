import sanityClient from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url';

const config = {
    dataset: 'production',
    projectId: 'ywpfvxod',
    apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning
    useCdn: false,
    token: 'skdvwyvoGev5pfo5OGwtCKfrPzfi8zn2GEyzwS0lggxYi6YsQk3B5ftnonfRTmw9PQy0jAvcgfZ7G59sSkotKXrXJ3uOML4NRx0E97Gvyk69WKeFge4UV6gZuVHAtXxKBmBYuZsdVdZhbiLWf3GmLtm7NWMZ9kNArkHK9Z0EGSB4ugRlzWLw',
}
export default sanityClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source)