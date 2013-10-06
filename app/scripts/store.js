Noselus.Adapter = DS.RESTAdapter.extend();

Noselus.Store = DS.Store.extend({
  revision: 12,
  adapter: Noselus.Adapter.create({
    url: 'https://noselus-test.herokuapp.com'
  })
});
