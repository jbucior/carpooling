module.exports = function ($resource, BASE_URL) {
  return $resource(BASE_URL+"/rides/:id", { id: '@_id' }, {
    update: {
      method: 'PUT' // this method issues a PUT request
    }
  }, {
    stripTrailingSlashes: false
  });
};