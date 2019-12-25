import { Avatar, Divider } from 'antd'
import '../public/style/components/author.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="https://coderzsq.github.io/assets/images/avatar.jpg" />
        <div className="author-introduction">
          北冥有鱼，其名为鲲（kūn）。鲲之大，不知其几千里也；化而为鸟，其名为鹏。鹏之背，不知其几千里也；怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。
          <Divider>社交账号</Divider>
          <Avatar size={28} icon="github" className="account" />
          <Avatar size={28} icon="qq" className="account" />
          <Avatar size={28} icon="wechat" className="account" />
        </div>
      </div>
    </div>
  )
}

export default Author