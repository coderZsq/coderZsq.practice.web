import { ref, SetupContext } from 'vue'

interface UseMenuIconProps {
  emit: SetupContext<['foldChange']>['emit']
}

export default function useMenuIcon({ emit }: UseMenuIconProps) {
  const isFold = ref(false)
  const handleFoldClick = () => {
    isFold.value = !isFold.value
    emit('foldChange', isFold.value)
  }

  return [isFold, handleFoldClick]
}
