import { IForm } from '@/base-ui/form'

export const searchFormConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '类别名称',
      placeHolder: '请输入类别名称',
      rules: []
    },
    {
      field: 'createAt',
      type: 'datepicker',
      label: '创建时间',
      rules: [],
      otherOption: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '100px',
  itemStyle: { padding: '10px 40px' },
  colLayout: { span: 8 }
}
