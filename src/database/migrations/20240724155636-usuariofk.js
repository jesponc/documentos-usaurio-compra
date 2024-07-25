'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addConstraint('archivo', {
      type: "foreign key",
      fields: ["idUsuario"],
      references: {
        table: 'usuario',
        field: 'id'
      },
      name: "archivoUsuarioFK"
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('archivo', 'archivoUsuarioFK')
  }
};
