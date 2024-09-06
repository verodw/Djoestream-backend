'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        comment_id: 1,
        video_id: 1,
        user_id: 1,
        content: 'Great video! Really enjoyed it.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comment_id: 2,
        video_id:1,
        user_id: 1,
        content: 'I found this video very informative, thank you',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
