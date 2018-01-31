import instance from './instance'

/** 删除报警主机 */
function hostDeleteIasHost (opts) {
  return instance({
    method: 'post',
    url: '/scpms/host/deleteIasHost',
    opts: opts
  })
}

/** 获取单个报警主机详情信息 */
function hostFetchSingle (opts) {
  return instance({
    method: 'get',
    url: '/scpms/host/fetchSingle',
    opts: opts
  })
}

/** 移动报警主机 */
function hostMoveIasHost (opts) {
  return instance({
    method: 'post',
    url: '/scpms/host/moveIasHost',
    opts: opts
  })
}

/** 分页获取报警主机 */
function hostFetchPageQuery (opts) {
  return instance({
    method: 'post',
    url: '/scpms/host/fetchPageQuery',
    opts: opts
  })
}

/** 校验IP是否重复 */
function hostCheckIpRepeat (opts) {
  return instance({
    method: 'post',
    url: '/scpms/host/checkIpRepeat',
    opts: opts
  })
}

/** 校验数据重复性 */
function hostCheckDataRepeat (opts) {
  return instance({
    method: 'post',
    url: '/scpms/host/checkDataRepeat',
    opts: opts
  })
}

/** 获取Dac所有的网域信息列表 */
function hostFetchDasNetZone (opts) {
  return instance({
    method: 'get',
    url: '/scpms/host/fetchDasNetZone',
    opts: opts
  })
}

/** 请求公钥 */
function hostGetPublicKey (opts) {
  return instance({
    method: 'get',
    url: '/scpms/host/getPublicKey',
    opts: opts
  })
}

/** 获取驱动信息 */
function hostFetchDriverList (opts) {
  return instance({
    method: 'get',
    url: '/scpms/host/fetchDriverList',
    opts: opts
  })
}

/** 添加报警主机 */
function hostAddIasHostList (opts) {
  return instance({
    method: 'post',
    url: '/scpms/host/addIasHostList',
    opts: opts
  })
}

/** 返回当前节点的父节点path组成的path */
function regionFetchResPathName (opts) {
  return instance({
    method: 'get',
    url: '/scpms/region/fetchResPathName',
    opts: opts
  })
}

/** 获取应用树 */
function regionFetchApplicationRegionTree (opts) {
  return instance({
    method: 'get',
    url: '/scpms/region/fetchApplicationRegionTree',
    opts: opts
  })
}

/** 获取用户有权限的区域树 */
function regionFetchRegionTreeNodeList (opts) {
  return instance({
    method: 'get',
    url: '/scpms/region/fetchRegionTreeNodeList',
    opts: opts
  })
}

export {
  hostDeleteIasHost,
  hostFetchSingle,
  hostMoveIasHost,
  hostFetchPageQuery,
  hostCheckIpRepeat,
  hostCheckDataRepeat,
  hostFetchDasNetZone,
  hostGetPublicKey,
  hostFetchDriverList,
  hostAddIasHostList,
  regionFetchResPathName,
  regionFetchApplicationRegionTree,
  regionFetchRegionTreeNodeList
}
