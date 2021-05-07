const AdminBro = require('admin-bro');
const { country, property, posts, favorites } = require('../models');
//---------------------------------------
// const { userResource, companyResource } = require('./resources');
// const adminBro = new AdminBro({
//   rootPath: '/admin',
//   loginPath: '/admin/login',
//   resources: [{
//     resource: country,
//     options: {
//       ...UserResource,
//       parent: sidebarGroups.user,
//     }
//    }, {
//     resource: country,
//     options: {
//       ...CompanyResource,
//       parent: sidebarGroups.country,
//     }
//   }],
//   branding: {
//     companyName: 'AdminBro Tutorial',
//     softwareBrothers: false,
//   }
// });
//---------------------------------------
const sidebarGroups = {
  user: {
    name: 'User Management',
    icon: 'User',
  },
  company: {
    name: 'Company Management',
    icon: 'Product'
  }
};

const adminBro = new AdminBro({
  rootPath: '/admin',
  loginPath: '/admin/login',
  resources: [{
    resource: property,
    options: {
      parent: sidebarGroups.user,
    }
  }, {
    resource: property,
    options: {
      parent: sidebarGroups.company,
    }
  }, {
    resource: posts,
    options: {
      parent: sidebarGroups.company,
    }
  }, {
    resource: favorites,
    options: {
      parent: sidebarGroups.company,
    }
  }, {
    resource: posts,
    options: {
      parent: sidebarGroups.company,
    }
  }
],
  branding: {
   companyName: 'My House-App',
   softwareBrothers: false,
  }
});
module.exports = adminBro;
