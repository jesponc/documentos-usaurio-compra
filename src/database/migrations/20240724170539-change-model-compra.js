'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('compra', 'status', {
      type: Sequelize.ENUM,
      values: ['activo', 'inactivo'],
      defaultValue: 'activo',
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('compra', 'status', {
      type: DataTypes.ENUM,
      values: ['activo', 'inactivo'],
      allowNull: false,
      validate: {
        isIn: {
            args: [['activo', 'inactivo']],
        }
      }
    })
  }
};
