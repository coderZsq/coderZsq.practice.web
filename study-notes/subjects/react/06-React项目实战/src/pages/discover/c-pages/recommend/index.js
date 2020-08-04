import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function SQRecommend(props) {
  // 组件和redux关联: 获取数据和进行操作
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual)
  const dispatch = useDispatch()

  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      <h2>SQRecommend: {topBanners.length}</h2>
    </div>
  )
}

export default memo(SQRecommend)

// function SQRecommend(props) {
//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return (
//     <div>
//       <h2>SQRecommend: {topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(SQRecommend))