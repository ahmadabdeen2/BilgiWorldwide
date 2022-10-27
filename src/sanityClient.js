import sanityClient from '@sanity/client'


export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-02-01',
    token: process.env.REACT_APP_SANITY_TOKEN,
})

