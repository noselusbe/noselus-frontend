Noselus.ApplicationAdapter = DS.RESTAdapter.extend({
  host: AppConfig.apiAdapterUrl
});


Noselus.FavoriteSerializer = DS.LSSerializer.extend();
Noselus.FavoriteAdapter = DS.LSAdapter.extend({
  namespace: 'noselus-favorites'
});