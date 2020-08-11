import React, { memo } from 'react'

import SQTopBanner from './c-cpns/top-banner'
import SQHotRecommend from './c-cpns/hot-recommend'
import SQNewAlbum from './c-cpns/new-album'
import SQRecommendRanking from './c-cpns/recommend-ranking'
import SQUserLogin from './c-cpns/user-login'
import SQSettleSinger from './c-cpns/settle-singer'
import SQHotAnchor from './c-cpns/hot-anchor'
import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

function SQRecommend(props) {
  return (
    <RecommendWrapper>
      <SQTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <SQHotRecommend />
          <SQNewAlbum />
          <SQRecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          <SQUserLogin />
          <SQSettleSinger />
          <SQHotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
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