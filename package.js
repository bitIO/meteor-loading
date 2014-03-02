Package.describe({
  summary: 'Loading overlay + spinner'
});

Package.on_use(function (api) {
  api.use( ['jquery', 'templating'], 'client' );

  api.add_files([
    'client/lib/spin.js',
    'client/loading.html', 'client/loading.css', 'client/loading.js'
  ], 'client');

  if(api.export) {
    api.export('LoadingOverlay', 'client');
  }

});

Package.on_test(function (api) {
  //@TODO
});