angular.module('portainer.agent')
.factory('Browse', ['$resource', 'API_ENDPOINT_ENDPOINTS', 'EndpointProvider', function BrowseFactory($resource, API_ENDPOINT_ENDPOINTS, EndpointProvider) {
  'use strict';
  return $resource(API_ENDPOINT_ENDPOINTS + '/:endpointId/docker/browse/:action', {
    endpointId: EndpointProvider.endpointID
  },
  {
    ls: {
      method: 'GET', isArray: true, params: { action: 'ls' }
    },
    get: {
      method: 'GET', params: { action: 'get' },
      transformResponse: browseGetResponse
    },
    delete: {
      method: 'DELETE', params: { action: 'delete' }
    },
    rename: {
      method: 'PUT', params: { action: 'rename' }
    }
  });
}]);
