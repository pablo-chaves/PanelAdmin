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
    component: AdminBro.bundle('./dashboard.jsx')
  },
  branding: {
    companyName: 'My House-App',
    softwareBrothers: false,
    logo: 'https://i.postimg.cc/QtJkD4hw/logoAzul.png',
    favicon: 'https://i.postimg.cc/Y9NCxR0h/circulo.png',
    theme: {
      colors: {
        // Primary
        primary100: '#0578AC',
        primary80: '#6483F8',
        primary60: '#879FFA',
        primary40: '#A9BAFA',
        primary20: '#CBD5FD',

        // accent
        accent: '#38CAF1',
        love: '#e6282b', // SoftwareBrothers logo color

        // grey
        grey100: '#1C1C38',
        grey80: '#454655',
        grey60: '#898A9A',
        grey40: '#C0C0CA',
        grey20: '#F6F7FB',
        white: '#fff',

        // Alerts
        errorDark: '#DE405D',
        error: '#FF4567',
        errorLight: '#FFA5B5',

        successDark: '#32A887',
        success: '#70C9B0',
        successLight: '#DBF0F1',

        infoDark: '#4268F6',
        info: '#879FFA',
        infoLight: '#CBD5FD',

        // Backgrounds
        filterBg: '#0F1A28',
        hoverBg: '#00CFFF',

        // global
        border: '#DDE1E5',

        // Elements
        inputBorder: '#C0C0CA',
        separator: '#C0C0CA',
        highlight: '#F6F7FB',
        filterInputBorder: 'rgba(255,255,255,0.15)',
        filterDisabled: 'rgba(83,91,142,0.05)',
        bg: '#F6F7FB',
      }
    }
  }
});
//prueba
module.exports = adminBro;
