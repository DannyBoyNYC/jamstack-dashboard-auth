exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = '/dashboard/*';
    actions.createPage(page);
  }
};

// createPage({
//   path: `/my-sweet-new-page/`,
//   component: path.resolve(`./src/templates/dashboard.js`),
//   // The context is passed as props to the component as well
//   // as into the component's GraphQL query.
//   context: {
//     id: `123456`,
//   },
// });
