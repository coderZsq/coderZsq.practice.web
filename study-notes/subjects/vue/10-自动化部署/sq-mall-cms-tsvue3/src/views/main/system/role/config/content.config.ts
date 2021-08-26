export const contentTableConfig = {
  title: '角色列表',
  newBtnTitle: '新建角色',
  propList: [
    { prop: 'name', label: '角色名称', minWidth: '120' },
    { prop: 'intro', label: '角色权限', minWidth: '120' },
    { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'create' },
    { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'update' },
    { label: '操作', minWidth: '120', slotName: 'handler' }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
