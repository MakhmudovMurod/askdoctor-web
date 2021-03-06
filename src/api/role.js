import request from '@/utils/request'

export function index(query, includePermissions = false) {
  if (includePermissions) {
    query.include = 'Permissions'
  }
  return request({
    url: '/roles',
    method: 'get',
    params: query
  })
}

export function show(id, includePermissions = false) {
  const query = {}
  if (includePermissions) {
    query.include = 'Permissions'
  }
  return request({
    url: '/roles/' + id,
    method: 'get',
    params: query
  })
}

export function store(role) {
  return request({
    url: 'roles?include=Permissions',
    method: 'post',
    data: role
  })
}

export function update(role) {
  return request({
    url: 'roles/' + role.id,
    method: 'patch',
    data: role
  })
}

export function destroy(role_id) {
  return request({
    url: '/roles/' + role_id,
    method: 'delete'
  })
}

export function bulk(type, list) {
  const dataJSON = JSON.parse(JSON.stringify(list))
  return request({
    url: '/roles/bulk?type=' + type,
    method: 'post',
    data: dataJSON
  })
}
