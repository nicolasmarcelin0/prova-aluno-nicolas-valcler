/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = async function(knex) {
  await knex('TB_PRODUTO').insert([{codigo: 1111, descricao: 'ALFACE', valor: 3.40}]);
  await knex('TB_PRODUTO')
  .where('descricao', '=', 'SUCRILHOS')
  .update({
    valor: 6.5
  })
};

