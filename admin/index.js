const AdminBro = require('admin-bro');
const {
  property,
  posts,
  favorites,
  visitDate,
  users,
  images,
  comments
} = require('../models');

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
  assets: {
    styles: ['/css/admin.css']
  },
  rootPath: '/admin',
  loginPath: '/admin/login',
  resources: [{
    resource: users,
    options: {
      parent: sidebarGroups.user,
      listProperties: ['name', 'email', 'phone']
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
  }],
  dashboard: {
    component: AdminBro.bundle('./components/dashboard.jsx')
  },
  branding: {
    companyName: 'My House-App',
    softwareBrothers: false,
    logo: 'https://raw.githubusercontent.com/lavalbuena357/central/main/client/src/images/newLogos/logoHorizontal.png',
    favicon: 'https://raw.githubusercontent.com/lavalbuena357/central/main/client/src/images/newLogos/logoCirculo.png',
  }
});
module.exports = adminBro;
