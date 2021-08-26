import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  title: '新建用户',
  formItems: [
    { field: 'name', type: 'input', label: '用户名', placeHolder: '请输入用户名' },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeHolder: '请输入真实姓名',
      rules: [{ required: true }]
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeHolder: '请输入密码',
      isHidden: false
    },
    { field: 'cellphone', type: 'input', label: '电话号码', placeHolder: '请输入电话号码' },
    { field: 'roleId', type: 'select', label: '选择角色', placeHolder: '请选择角色', options: [] },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeHolder: '请选择部门',
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: { padding: 0 }
}
