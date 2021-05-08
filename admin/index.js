const AdminBro = require('admin-bro');
const { property, posts, favorites, visitDate, users, images, comments } = require('../models');

const sidebarGroups = {
  user: {
    name: 'Users Management',
    icon: 'User',
  },
  company: {
    name: 'My House Management',
    icon: 'Product'
  }
};

const adminBro = new AdminBro({
  rootPath: '/admin',
  loginPath: '/admin/login',
  resources: [{
    resource: users,
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
    resource: visitDate,
    options: {
      parent: sidebarGroups.company,
    }
  }, {
    resource: images,
    options: {
      parent: sidebarGroups.company,
    }
  }, {
    resource: comments,
    options: {
      parent: sidebarGroups.company,
    }
  }
],
dashboard: {
  component: AdminBro.bundle('./dashboard.jsx')
},
  branding: {
   companyName: 'My House-App',
   softwareBrothers: false,
   logo: 'https://i.postimg.cc/SQWSdLR3/logo-Title.png',
   favicon: 'https://i.postimg.cc/Y9NCxR0h/circulo.png'
  }
});
//prueba
module.exports = adminBro;
