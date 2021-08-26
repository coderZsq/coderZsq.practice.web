import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallbackFn = (item?: any) => void

export const usePageModal = (newHandleCallback?: CallbackFn, editHandleCallback?: CallbackFn) => {
  const modalInfo = ref({})
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const handleNewData = () => {
    modalInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newHandleCallback && newHandleCallback()
  }

  const handleEditData = (item: any) => {
    modalInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editHandleCallback && editHandleCallback(item)
  }

  return [modalInfo, pageModalRef, handleNewData, handleEditData]
}
