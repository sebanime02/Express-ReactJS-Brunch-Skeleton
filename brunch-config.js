exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/,
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};
exports.server =
{
  port: 3000,
  path: 'app.js',
  run: true
}
exports.plugins = {
  babel: {presets: ['latest', 'react']}
};
