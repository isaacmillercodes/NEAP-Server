
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
  .then(function () {
    return Promise.all([
      // Inserts seed entries
      knex('coffee').insert({
        name: 'Breakfast Blend',
        roaster: 'Folgiers',
        origin: 'Colombia',
        roast: 'Dark',
        caffeine: 5,
        price: 7.99,
        quantity: 10
      }),
      knex('coffee').insert({
        name: 'French Roast',
        roaster: 'Starbucks',
        origin: 'Brazil',
        roast: 'French',
        caffeine: 8,
        price: 6.99,
        quantity: 4
      }),
      knex('coffee').insert({
        name: 'Morning Mix',
        roaster: 'Cool Coffee Co.',
        origin: 'Ethiopia',
        roast: 'Light',
        caffeine: 6,
        price: 5.99,
        quantity: 12
      }),
      knex('coffee').insert({
        name: 'Rough Start',
        roaster: '7-11',
        origin: 'Costa Rica',
        roast: 'Dark',
        caffeine: 15,
        price: 3.99,
        quantity: 8
      }),
      knex('coffee').insert({
        name: 'Surf\'s Up',
        roaster: 'Coffee Paradise',
        origin: 'Hawaii',
        roast: 'Light',
        caffeine: 3,
        price: 9.99,
        quantity: 2
      })

    ]);
  });
};
