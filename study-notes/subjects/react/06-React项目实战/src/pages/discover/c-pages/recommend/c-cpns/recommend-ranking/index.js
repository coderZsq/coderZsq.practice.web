import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'

import SQThemeHeaderRCM from '@/components/theme-header-rcm'
import SQTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'

export default memo(function SQRecommendRanking() {
  // redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(['recommend', 'upRanking']),
    newRanking: state.getIn(['recommend', 'newRanking']),
    originRanking: state.getIn(['recommend', 'originRanking'])
  }), shallowEqual)
  const dispatch = useDispatch()

  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <SQThemeHeaderRCM title="榜单" />
      <div className="tops">
        <SQTopRanking info={upRanking} />
        <SQTopRanking info={newRanking} />
        <SQTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
