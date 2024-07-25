'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('compra', {
      type: "foreign key",
      fields: ["idUsuario"],
      references: {
        table: 'usuario',
        field: 'id'
      },
      name: "compraUsuarioFK"
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('compra', 'compraUsuarioFK')
  }
};
