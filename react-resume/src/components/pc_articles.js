import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './pc_articles.css';
import PCColumn from './pc_column';

@CSSModules(styles)
export default class PCArticles extends Component {

    constructor() {
        super();
        this.state = {
            items: [
                {
                    name: "SQTemplate Column",
                    articles: [
                        {
                            name: "Hybird 搭建零耦合架构从MVC开始",
                            href: "http://www.jianshu.com/p/5a03995a6ce1"
                        }, {
                            name: "Hybird 搭建后端Koa.js并过度到MVVM",
                            href: "http://www.jianshu.com/p/846b9f181cb7"
                        }, {
                            name: "Hybird 搭建前端Vue.js并升级至MVP",
                            href: "http://www.jianshu.com/p/8d4a84e3ddaa"
                        }, {
                            name: "Hybird 搭建路由Router实现组件化",
                            href: "http://www.jianshu.com/p/36314d0c0032"
                        }, {
                            name: "Hybird 搭建客户端实时降级架构",
                            href: "http://www.jianshu.com/p/7054a694cfeb"
                        }, {
                            name: "iOS 执行.py脚本生成解耦架构",
                            href: "http://www.jianshu.com/p/47d565bf200e"
                        }, {
                            name: "iOS 执行.py脚本生成UI层结构",
                            href: "http://www.jianshu.com/p/d15379908582"
                        }, {
                            name: "iOS 移动端面向文档开发",
                            href: "http://www.jianshu.com/p/b35d06cf189a"
                        }, {
                            name: "iOS 移动端生成工具开发",
                            href: "http://www.jianshu.com/p/cb36b36f90dd"
                        }
                    ]
                }, {
                    name: "SQExtension Column",
                    articles: [
                        {
                            name: "iOS 做好开工前的准备",
                            href: "http://www.jianshu.com/p/a3e1b54c73d6"
                        }, {
                            name: "iOS 集成Reveal UI调试利器",
                            href: "http://www.jianshu.com/p/861c9c916b2a"
                        }, {
                            name: "UI/UX 产品原型 从Axure开始",
                            href: "http://www.jianshu.com/p/440bdc425c02"
                        }, {
                            name: "UI/UX 使用Ps 进行视觉设计",
                            href: "http://www.jianshu.com/p/56eb4917f956"
                        }, {
                            name: "iOS 投机流实现 无限轮播图",
                            href: "http://www.jianshu.com/p/e42db267d5f1"
                        }, {
                            name: "iOS 会跳舞的TabbarController",
                            href: "http://www.jianshu.com/p/c1a0cd2a348f"
                        }, {
                            name: "iOS 超Easy实现 渐变导航栏",
                            href: "http://www.jianshu.com/p/bba27212de69"
                        }, {
                            name: "iOS 狂霸酷炫拽之Button动效",
                            href: "http://www.jianshu.com/p/6106f5a08ec3"
                        }, {
                            name: "iOS 5行代码搞定全屏Pop转场",
                            href: "http://www.jianshu.com/p/992cb9f01eb3"
                        }
                    ]
                }, {
                    name: "Web Column",
                    articles: [
                        {
                            name: "Web 是时候用前端写个简历了!",
                            href: "http://www.jianshu.com/p/d1497da0f9ab"
                        }, {
                            name: "Web 前端项目要从基本布局开始",
                            href: "http://www.jianshu.com/p/5c4788c0389d"
                        }, {
                            name: "Web 简历一定要设计的美美的",
                            href: "http://www.jianshu.com/p/b3389f66f539"
                        }, {
                            name: "Web 前端使用Vue代替JQuery",
                            href: "http://www.jianshu.com/p/85d95723edfb"
                        }, {
                            name: "Web Vue项目速转.htm静态网页",
                            href: "http://www.jianshu.com/p/f1fd09628b43"
                        }, {
                            name: "Web 使用gulp构建前端项目",
                            href: "http://www.jianshu.com/p/ff54340f05a3"
                        }, {
                            name: "Web 使用webpack构建前端项目",
                            href: "http://www.jianshu.com/p/ab873869b3dd"
                        }, {
                            name: "Web 将项目快速迁移至React",
                            href: "http://www.jianshu.com/p/1803bfac1527"
                        }, {
                            name: "Web PC项目快速适配移动端",
                            href: "http://www.jianshu.com/p/404ddf018a84"
                        }
                    ]
                }, {
                    name: "iOS Column",
                    articles: [
                        {
                            name: "iOS 核心动画的应用及内存泄漏",
                            href: "http://www.jianshu.com/p/733a006a3da1"
                        }, {
                            name: "[SceneKit] 不会 Unity3D 的另一种选择",
                            href: "http://www.jianshu.com/p/f54eb416f8f1"
                        }, {
                            name: "[CoreData] SQL写烦了? 试试亲儿子!",
                            href: "http://www.jianshu.com/p/859b4d29e7c0"
                        }, {
                            name: "[SpriteKit] 瓦片地图什么的还挺好玩儿",
                            href: "http://www.jianshu.com/p/da0f9c0cdcff"
                        }, {
                            name: "[SpriteKit] 通过检测掩码进行物理识别",
                            href: "http://www.jianshu.com/p/5b4e09037337"
                        }, {
                            name: "[SpriteKit] 系统框架中Cocos2d-x的怨念",
                            href: "http://www.jianshu.com/p/09bb44d46080"
                        }, {
                            name: "[Animations] 快速上手 iOS10 属性动画",
                            href: "http://www.jianshu.com/p/0e24330302f5"
                        }, {
                            name: "[Animations] 自定义转场现已加入豪华午餐",
                            href: "http://www.jianshu.com/p/732e4c9b410a"
                        }, {
                            name: "[Animations] 核心动画什么的要研究透!",
                            href: "http://www.jianshu.com/p/2802dedb587d"
                        }, {
                            name: "[Animations] 你真的会用View的动画吗?",
                            href: "http://www.jianshu.com/p/85877d2ddcb8"
                        }, {
                            name: "[RxSwift] 函数式组合运算符实操",
                            href: "http://www.jianshu.com/p/71c815f1d4de"
                        }, {
                            name: "[RxSwift] 函数式映射运算符实操",
                            href: "http://www.jianshu.com/p/6b80a0db56bd"
                        }, {
                            name: "[RxSwift] 函数式过滤运算符实操",
                            href: "http://www.jianshu.com/p/04349d324a6f"
                        }, {
                            name: "[RxSwift] 大神们都在看的响应式",
                            href: "http://www.jianshu.com/p/79010cca3b9c"
                        }, {
                            name: "Hybird 说说与Web交互的那些事儿",
                            href: "http://www.jianshu.com/p/555786f35357"
                        }
                    ]
                }
            ]
        }
    }

    render() {

        const columns = this.state.items.map((item, index) => (
            <PCColumn name={item.name} articles={item.articles} key={index}/>
        ))

        return (
            <div>
              <div styleName="subtitle">
                <h1>Articles</h1>
              </div>
              <div styleName="articles">
                <div styleName="articles-block">
                  {columns}
                </div>
              </div>
            </div>
        )
    }
}
