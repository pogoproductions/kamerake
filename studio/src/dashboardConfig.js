export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eefef238ae8d0dcaee3c450',
                  title: 'Sanity Studio',
                  name: 'kamerake-studio',
                  apiId: '374ac90b-2713-48d4-b7e2-3000a44115fa'
                },
                {
                  buildHookId: '5eefef232e59e434dbcffeb3',
                  title: 'Blog Website',
                  name: 'kamerake',
                  apiId: '31c4284e-d970-44ee-9e0a-16aace8187ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pogoproductions/kamerake',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://kamerake.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
