// import fs from 'fs'
// import path from 'path'
// // import { createClient } from 'contentful'

// import * as contentful from 'contentful';
// import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

// // const SPACE = process.env.CONTENTFUL_SPACE
// // const TOKEN = process.env.CONTENTFUL_TOKEN
// const SPACE = 'p0ly3e00wdqi'
// const TOKEN = 'dSZFjT0gp0qiC1fazUy-RLYw_TgR2XdhCHGdGGnTW-0'

// const client = contentful.createClient({
//   space: SPACE,
//   accessToken: TOKEN
// })


// const types = [
//   'about',
//   'brandingExample'
// ]


// export const getcontent = async () => {
//   console.log('> Starting import...')
//   for (const type of types) {
//     console.log('> Getting content for', type)
//     const entries = await client.getEntries({
//       content_type: type,
//       locale: '*'
//     }).catch((error) => {
//       console.error(error);
//     });

//     if (entries.total === 1) {
//       const { fields } = entries.items[0]
//       fs.writeFileSync(
//         path.join(__dirname, '..', 'data', `${type}.json`),
//         JSON.stringify(fields)
//       )
//       console.log('> Content gotten and written for', type)

//     } else  if (entries.total > 1) {
//       for (const i in entries.items) {
//         const project = entries.items[i];
//         const projectSlug = project.fields.slug.en;
//         const { fields } = project;
//         fs.writeFileSync(
//           path.join(__dirname, '..', 'data', `${type}-${projectSlug}.json`),
//           JSON.stringify(fields)
//         )
//         console.log('> Content gotten and written for', i, type)
//       }
//     }
//   }
//   return true
// }

// if (process.argv[2] === 'install') {
//   getcontent()
// }

