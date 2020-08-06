import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { HOT_RECOMMEND_LIMIT } from '@/common/contants'

import SQThemeHeaderRCM from '@/components/theme-header-rcm'
import SQSongsCover from '@/components/songs-cover'
import { HotRecommendWrapper } from './style'
import { getHotRecommendAction } from '../../store/actionCreators'

export default memo(function SQHotRecomemnd() {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <SQThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '民谣', '摇滚', '电子']} />
      <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <SQSongsCover key={item.id} info={item} />
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})