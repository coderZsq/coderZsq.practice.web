import React, { memo } from 'react'

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'

export default memo(function SQPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>SQPlayerInfo</h2>
          <h2>SQSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>SQSimiPlayList</h2>
          <h2>SQSimiSong</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
