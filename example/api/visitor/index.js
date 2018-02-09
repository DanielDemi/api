import instance from './instance'
import { convertRESTAPI } from '../util'

/** 获取图片验证码 */
function getImageCode (opts) {
  return instance({
    method: 'post',
    url: '/visitor/commonService/ui/v1/getImageCode',
    opts: opts
  })
}

/** 内部人员预约详情 */
function ordersDetail (opts) {
  return instance({
    method: 'get',
    url: '/visitor/innerService/ui/v1/orders/detail',
    opts: opts
  })
}

/** 查找门禁点下读卡器树  doorId = "12324" */
function readerTree (opts) {
  return instance({
    method: 'get',
    url: '/visitor/commonService/ui/v1/reader/tree',
    opts: opts
  })
}

/** 查找各个区域树选择点 */
function pointFind (opts) {
  return instance({
    method: 'get',
    url: '/visitor/commonService/ui/v1/point/find',
    opts: opts
  })
}

/** 获取各区域权限组织树 */
function areaTree (opts) {
  return instance({
    method: 'get',
    url: '/visitor/commonService/ui/v1/area/tree',
    opts: opts
  })
}

/** 获取人员部门组织树 */
function deptTree (opts) {
  return instance({
    method: 'get',
    url: '/visitor/commonService/ui/v1/dept/tree',
    opts: opts
  })
}

/** 访客异常记录移动名单分组 */
function groupRelsMove (opts) {
  return instance({
    method: 'post',
    url: '/visitor/groupService/ui/v1/groupRels/move',
    opts: opts
  })
}

/** 访客名单人员信息修改 */
function groupRelsUpdate (opts) {
  return instance({
    method: 'post',
    url: '/visitor/groupService/ui/v1/groupRels/update',
    opts: opts
  })
}

/** 签离点删除 */
function signOffPointsDelete (opts) {
  return instance({
    method: 'post',
    url: '/visitor/signOffService/ui/v1/signOffPoints/delete',
    opts: opts
  })
}

/** 来访事由更新 */
function purposesUpdate (opts) {
  return instance({
    method: 'post',
    url: '/visitor/purposeService/ui/v1/purposes/update',
    opts: opts
  })
}

/** 签离点信息查询 */
function signOffPointFind (opts) {
  return instance({
    method: 'get',
    url: '/visitor/signOffService/ui/v1/signOffPoint/find',
    opts: opts
  })
}

/** 签离点信息查询 */
function signOffPoints (opts) {
  return instance({
    method: 'get',
    url: '/visitor/signOffService/ui/v1/signOffPoints',
    opts: opts
  })
}

/** 签离点新增 */
function signOffPointsAdd (opts) {
  return instance({
    method: 'post',
    url: '/visitor/signOffService/ui/v1/signOffPoints/add',
    opts: opts
  })
}

/** 来访事由新增 */
function purposesAdd (opts) {
  return instance({
    method: 'post',
    url: '/visitor/purposeService/ui/v1/purposes/add',
    opts: opts
  })
}

/** 来访事由删除 */
function purposesDelete (opts) {
  return instance({
    method: 'post',
    url: '/visitor/purposeService/ui/v1/purposes/delete',
    opts: opts
  })
}

/** 来访事由查询 */
function purposes (opts) {
  return instance({
    method: 'get',
    url: '/visitor/purposeService/ui/v1/purposes',
    opts: opts
  })
}

/** 展示权限组详情 */
function privilegeGroupItems (opts) {
  return instance({
    method: 'get',
    url: '/visitor/privilegeService/ui/v1/privilegeGroup/items',
    opts: opts
  })
}

/** 获取权限组分页展示信息 */
function privilegeGroupPage (opts) {
  return instance({
    method: 'get',
    url: '/visitor/privilegeService/ui/v1/privilegeGroup/page',
    opts: opts
  })
}

/** 保存访客组信息 */
function privilegeGroupSave (opts) {
  return instance({
    method: 'post',
    url: '/visitor/privilegeService/ui/v1/privilegeGroup/save',
    opts: opts
  })
}

/** 更新访客权限组基础信息 */
function privilegeGroupUpdateInfo (opts) {
  return instance({
    method: 'post',
    url: '/visitor/privilegeService/ui/v1/privilegeGroup/updateInfo',
    opts: opts
  })
}

/** 根据ID获得访客组信息 */
function privilegeGroupDetail (opts) {
  return instance({
    method: 'get',
    url: '/visitor/privilegeService/ui/v1/privilegeGroup/detail',
    opts: opts
  })
}

/** 依类别分页展示权限组中的权限项 */
function privilegeGroupItemPage (opts) {
  return instance({
    method: 'post',
    url: '/visitor/privilegeService/ui/v1/privilegeGroup/itemPage',
    opts: opts
  })
}

/** 删除权限组中的权限项 */
function privilegeGroupDeleteItems (opts) {
  return instance({
    method: 'post',
    url: '/visitor/privilegeService/ui/v1/privilegeGroup/deleteItems',
    opts: opts
  })
}

/** 增加权限组和权限项间关联 */
function privilegeGroupAddItems (opts) {
  return instance({
    method: 'post',
    url: '/visitor/privilegeService/ui/v1/privilegeGroup/addItems',
    opts: opts
  })
}

/** 修改权限组默认启用状态 */
function privilegeGroupChangeDefault (opts) {
  return instance({
    method: 'post',
    url: '/visitor/privilegeService/ui/v1/privilegeGroup/changeDefault',
    opts: opts
  })
}

/** 根据ID删除访客权限组 */
function privilegeGroupDelete (opts) {
  return instance({
    method: 'post',
    url: '/visitor/privilegeService/ui/v1/privilegeGroup/delete',
    opts: opts
  })
}

/** 获得所有已选择的权限项，不分页展示，支持按名称搜索 */
function privilegeItemSelectedItems (opts) {
  return instance({
    method: 'get',
    url: '/visitor/privilegeItemService/ui/v1/privilegeItem/selectedItems',
    opts: opts
  })
}

/** 保存已选择的权限项，可能会有新增，也可能有删除，也有不变的 */
function privilegeItemSaveSelectItems (opts) {
  return instance({
    method: 'post',
    url: '/visitor/privilegeItemService/ui/v1/privilegeItem/saveSelectItems',
    opts: opts
  })
}

/** 分页展示已选为访客权限的权限项，查询条件为type和每页行数、页数 */
function privilegeItemItemPage (opts) {
  return instance({
    method: 'get',
    url: '/visitor/privilegeItemService/ui/v1/privilegeItem/itemPage',
    opts: opts
  })
}

/** 添加门口机和停车场时需要的区域信息展示 */
function privilegeItemRegion (opts) {
  return instance({
    method: 'get',
    url: '/visitor/privilegeItemService/ui/v1/privilegeItem/region',
    opts: opts
  })
}

/** 模糊搜索被访人 */
function personFuzzySearch (opts) {
  return instance({
    method: 'get',
    url: '/visitor/personService/ui/v1/person/fuzzySearch',
    opts: opts
  })
}

/** 获得待选择的权限项，需过滤已选择的，支持按名称搜索,停车场及门口机需传入区域ID */
function privilegeItemAlternativeItem (opts) {
  return instance({
    method: 'get',
    url: '/visitor/privilegeItemService/ui/v1/privilegeItem/alternativeItem',
    opts: opts
  })
}

/** 删除访客权限项 */
function privilegeItemDeleteItems (opts) {
  return instance({
    method: 'post',
    url: '/visitor/privilegeItemService/ui/v1/privilegeItem/deleteItems',
    opts: opts
  })
}

/** 分页查询访客预约信息 */
function orderPage (opts) {
  return instance({
    method: 'get',
    url: '/visitor/orderService/ui/v1/order/page',
    opts: opts
  })
}

/** 平台用户拒绝预约 */
function orderReturn (opts) {
  return instance({
    method: 'post',
    url: '/visitor/orderService/ui/v1/order/return',
    opts: opts
  })
}

/** 保存修改后的访客信息 */
function orderUpdate (opts) {
  return instance({
    method: 'post',
    url: '/visitor/orderService/ui/v1/order/update',
    opts: opts
  })
}

/** 下载访客预约模板 */
function orderImportTemplate (opts) {
  return instance({
    method: 'get',
    url: '/visitor/orderService/ui/v1/order/importTemplate',
    opts: opts
  })
}

/** 根据预约单批次号获取预约单详情 */
function orderDetail (opts) {
  return instance({
    method: 'get',
    url: '/visitor/orderService/ui/v1/order/detail',
    opts: opts
  })
}

/** 导入校验后的结果 */
function orderImport (opts) {
  return instance({
    method: 'post',
    url: '/visitor/orderService/ui/v1/order/import',
    opts: opts
  })
}

/** 下载校验结果 */
function orderCheckResult (opts) {
  return instance({
    method: 'get',
    url: '/visitor/orderService/ui/v1/order/checkResult',
    opts: opts
  })
}

/** 获得导入预约文件的校验进度 */
function orderCheckProgress (opts) {
  return instance({
    method: 'get',
    url: '/visitor/orderService/ui/v1/order/checkProgress',
    opts: opts
  })
}

/** 导入访客文件进行校验，返回UUID，之后根据UUID获得校验进度及结果 */
function orderCheckImport (opts) {
  return instance({
    method: 'post',
    url: '/visitor/orderService/ui/v1/order/checkImport',
    opts: opts
  })
}

/** 平台用户同意预约 */
function orderApprove (opts) {
  return instance({
    method: 'post',
    url: '/visitor/orderService/ui/v1/order/approve',
    opts: opts
  })
}

/** 根据访客单批次取消预约 */
function orderCancel (opts) {
  return instance({
    method: 'post',
    url: '/visitor/orderService/ui/v1/order/cancel',
    opts: opts
  })
}

/** 内部人员注册发送短信 */
function registerSendSms (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/registerSendSms',
    opts: opts
  })
}

/** 内部人员更新密码 */
function updatePwd (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/updatePwd',
    opts: opts
  })
}

/** 保存访客预约信息 */
function orderAdd (opts) {
  return instance({
    method: 'post',
    url: '/visitor/orderService/ui/v1/order/add',
    opts: opts
  })
}

/** 内部人员预约退回 */
function ordersReturn (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/orders/return',
    opts: opts
  })
}

/** 内部人员预约更新 */
function ordersUpdate (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/orders/update',
    opts: opts
  })
}

/** 内部人员注册确认 */
function registerConfirm (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/registerConfirm',
    opts: opts
  })
}

/** 内部人员预约审批 */
function ordersApprove (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/orders/approve',
    opts: opts
  })
}

/** 内部人员预约取消 */
function ordersCancel (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/orders/cancel',
    opts: opts
  })
}

/** 内部人员预约 */
function ordersAdd (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/orders/add',
    opts: opts
  })
}

/** 内部人员登陆 */
function login (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/login',
    opts: opts
  })
}

/** 内部人员注销 */
function logout (opts) {
  return instance({
    method: 'get',
    url: '/visitor/innerService/ui/v1/logout',
    opts: opts
  })
}

/** 内部人员忘记密码发送短信 */
function forgetPwdSendSms (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/forgetPwdSendSms',
    opts: opts
  })
}

/** 内部人员个人主页 */
function home (opts) {
  return instance({
    method: 'get',
    url: '/visitor/innerService/ui/v1/home',
    opts: opts
  })
}

/** 内部人员忘记密码确认 */
function forgetPwdConfirm (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/forgetPwdConfirm',
    opts: opts
  })
}

/** 下载导入分组名单模板 */
function templeDownload (opts) {
  return instance({
    method: 'get',
    url: '/visitor/groupService/ui/v1/temple/download',
    opts: opts
  })
}

/** 内部人员忘记密码校验验证码 */
function forgetPwdCheckCode (opts) {
  return instance({
    method: 'post',
    url: '/visitor/innerService/ui/v1/forgetPwdCheckCode',
    opts: opts
  })
}

/** 访客名单组新增 */
function groupsAdd (opts) {
  return instance({
    method: 'post',
    url: '/visitor/groupService/ui/v1/groups/add',
    opts: opts
  })
}

/** 访客名单组删除 */
function groupsDelete (opts) {
  return instance({
    method: 'post',
    url: '/visitor/groupService/ui/v1/groups/delete',
    opts: opts
  })
}

/** 访客名单组更新 */
function groupsUpdate (opts) {
  return instance({
    method: 'post',
    url: '/visitor/groupService/ui/v1/groups/update',
    opts: opts
  })
}

/** 查询访客名单组 */
function groups (opts) {
  return instance({
    method: 'get',
    url: '/visitor/groupService/ui/v1/groups',
    opts: opts
  })
}

/** 访客名单组关联删除 */
function groupRelsDelete (opts) {
  return instance({
    method: 'post',
    url: '/visitor/groupService/ui/v1/groupRels/delete',
    opts: opts
  })
}

/** 访客名单组关联查询 */
function groupRels (opts) {
  return instance({
    method: 'get',
    url: '/visitor/groupService/ui/v1/groupRels',
    opts: opts
  })
}

/** 访客名单组关联新增 */
function groupRelsAdd (opts) {
  return instance({
    method: 'post',
    url: '/visitor/groupService/ui/v1/groupRels/add',
    opts: opts
  })
}

/** 导出分组名单 */
function groupRelExport (opts) {
  return instance({
    method: 'get',
    url: '/visitor/groupService/ui/v1/groupRel/export',
    opts: opts
  })
}

/** 导入访客分组名单 */
function groupRelImport (opts) {
  return instance({
    method: 'post',
    url: '/visitor/groupService/ui/v1/groupRel/import',
    opts: opts
  })
}

/** 修改短信内容配置 */
function smsConfigsUpdate (opts) {
  return instance({
    method: 'post',
    url: '/visitor/configService/ui/v1/smsConfigs/update',
    opts: opts
  })
}

/** 访客事件（访客足迹记录） */
function events (opts) {
  return instance({
    method: 'post',
    url: '/visitor/eventService/ui/v1/events',
    opts: opts
  })
}

/** 获取短信内容配置 */
function smsConfigs (opts) {
  return instance({
    method: 'get',
    url: '/visitor/configService/ui/v1/smsConfigs',
    opts: opts
  })
}

/** 短信内容配置还原 */
function smsConfigsReset (opts) {
  return instance({
    method: 'post',
    url: '/visitor/configService/ui/v1/smsConfigs/reset',
    opts: opts
  })
}

/** 场景参数更新 */
function sceneConfigUpdate (opts) {
  return instance({
    method: 'post',
    url: '/visitor/configService/ui/v1/sceneConfig/update',
    opts: opts
  })
}

/** 场景参数还原 */
function sceneConfigReset (opts) {
  return instance({
    method: 'get',
    url: '/visitor/configService/ui/v1/sceneConfig/reset',
    opts: opts
  })
}

/** 获取访客记录保存时长 */
function recordTimeConfig (opts) {
  return instance({
    method: 'get',
    url: '/visitor/configService/ui/v1/recordTimeConfig',
    opts: opts
  })
}

/** 更新访客记录保存时长 */
function recordTimeConfigUpdate (opts) {
  return instance({
    method: 'post',
    url: '/visitor/configService/ui/v1/recordTimeConfig/update',
    opts: opts
  })
}

/** 获取场景参数 */
function sceneConfig (opts) {
  return instance({
    method: 'get',
    url: '/visitor/configService/ui/v1/sceneConfig',
    opts: opts
  })
}

/** 获取访客预约单内容参数 */
function orderTableConfig (opts) {
  return instance({
    method: 'get',
    url: '/visitor/configService/ui/v1/orderTableConfig',
    opts: opts
  })
}

/** 修改访客预约单内容还原 */
function orderTableConfigReset (opts) {
  return instance({
    method: 'get',
    url: '/visitor/configService/ui/v1/orderTableConfig/reset',
    opts: opts
  })
}

/** 修改访客预约单内容参数 */
function orderTableConfigUpdate (opts) {
  return instance({
    method: 'post',
    url: '/visitor/configService/ui/v1/orderTableConfig/update',
    opts: opts
  })
}

/** 获取访客页面所有下拉框 */
function getSelect (opts) {
  return instance({
    method: 'get',
    url: '/visitor/commonService/ui/v1/getSelect',
    opts: opts
  })
}

/** 背景图片恢复默认 */
function backPicReset (opts) {
  return instance({
    method: 'get',
    url: '/visitor/configService/ui/v1/backPic/reset',
    opts: opts
  })
}

/** 背景图片变更 */
function backPicUpdate (opts) {
  return instance({
    method: 'post',
    url: '/visitor/configService/ui/v1/backPic/update',
    opts: opts
  })
}

/** 获取访客权限下载记录分页展示信息 */
function authResultPage (opts) {
  return instance({
    method: 'get',
    url: '/visitor/authResultService/ui/v1/authResult/page',
    opts: opts
  })
}

/** 页面获取加密公钥 */
function getPublicKey (opts) {
  return instance({
    method: 'post',
    url: '/visitor/commonService/ui/v1/getPublicKey',
    opts: opts
  })
}

/** 重新下发权限 */
function authResultDownload (opts) {
  return instance({
    method: 'post',
    url: '/visitor/authResultService/ui/v1/authResult/download',
    opts: opts
  })
}

export {
  getImageCode,
  ordersDetail,
  readerTree,
  pointFind,
  areaTree,
  deptTree,
  groupRelsMove,
  groupRelsUpdate,
  signOffPointsDelete,
  purposesUpdate,
  signOffPointFind,
  signOffPoints,
  signOffPointsAdd,
  purposesAdd,
  purposesDelete,
  purposes,
  privilegeGroupItems,
  privilegeGroupPage,
  privilegeGroupSave,
  privilegeGroupUpdateInfo,
  privilegeGroupDetail,
  privilegeGroupItemPage,
  privilegeGroupDeleteItems,
  privilegeGroupAddItems,
  privilegeGroupChangeDefault,
  privilegeGroupDelete,
  privilegeItemSelectedItems,
  privilegeItemSaveSelectItems,
  privilegeItemItemPage,
  privilegeItemRegion,
  personFuzzySearch,
  privilegeItemAlternativeItem,
  privilegeItemDeleteItems,
  orderPage,
  orderReturn,
  orderUpdate,
  orderImportTemplate,
  orderDetail,
  orderImport,
  orderCheckResult,
  orderCheckProgress,
  orderCheckImport,
  orderApprove,
  orderCancel,
  registerSendSms,
  updatePwd,
  orderAdd,
  ordersReturn,
  ordersUpdate,
  registerConfirm,
  ordersApprove,
  ordersCancel,
  ordersAdd,
  login,
  logout,
  forgetPwdSendSms,
  home,
  forgetPwdConfirm,
  templeDownload,
  forgetPwdCheckCode,
  groupsAdd,
  groupsDelete,
  groupsUpdate,
  groups,
  groupRelsDelete,
  groupRels,
  groupRelsAdd,
  groupRelExport,
  groupRelImport,
  smsConfigsUpdate,
  events,
  smsConfigs,
  smsConfigsReset,
  sceneConfigUpdate,
  sceneConfigReset,
  recordTimeConfig,
  recordTimeConfigUpdate,
  sceneConfig,
  orderTableConfig,
  orderTableConfigReset,
  orderTableConfigUpdate,
  getSelect,
  backPicReset,
  backPicUpdate,
  authResultPage,
  getPublicKey,
  authResultDownload
}
