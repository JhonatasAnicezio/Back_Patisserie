module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Zé Admin',
        role: 'admin',
        email: 'ze@admin.com',
        phone: '(16)992632194',
        password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
          // senha: secret_admin
      },
      {
        name: 'Regerinho User',
        role: 'user',
        email: 'rogerinho@user.com',
        phone: '(16)999977777',
        password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO', 
          // senha: secret_user
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};