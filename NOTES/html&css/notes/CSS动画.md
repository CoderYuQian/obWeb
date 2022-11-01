
# CSS属性 - transform
**CSS transform属性允许你旋转，缩放，倾斜或平移给定元素。**(Transform是形变的意思，transformer就是变形金刚)

**常见的函数transform function有：**
- 平移：translate(x, y)
- 缩放：scale(x, y)
- 旋转：rotate(deg)
- 倾斜：skew(deg, deg)
通过上面的几个函数，我们可以改变某个元素的形变

## 位移 - translate
**平移：translate(x, y)**
**值个数:**
- 一个值时，设置x轴上的位移
- 二个值时，设置x轴和y轴上的位移
**值类型：**
- 数字：100px
- 百分比：参照元素本身（ refer to the size of bounding box ）

```css

    .container .box {
      width: 200px;
      height: 100px;
      background-color: orange;
  
      /* 百分比: 你的百分比是相对于谁? */
      /* 不同地方的百分比相对参照物是不一样 */

      /* traslate的百分比是相对于自身的 */
      /* 如果设置的x位移: 那么参考的是自身的宽度 */
      /* 如果设置的y位移: 那么参考的是自身的高度 */
      transform: translate(100%, 100%);

      /* transform: translate(x, y); */
      /* transform: translateX();
      transform: translateY(); */
    }
```

## 缩放 - scale
**缩放：scale(x, y)**
**值个数:**
- 一个值时，设置x轴上的缩放
- 二个值时，设置x轴和y轴上的缩放
**值类型：**
- 数字：
  - 1：保持不变
  - 2：放大一倍
  - 0.5：缩小一半
- 百分比：不支持百分比

## transform-origin
**transform-origin：变形的原点**
**一个值：** 设置x轴的原点
**两个值：** 设置x轴和y轴的原点
必须是\<length\>，\<percentage\>，或 left, center, right, top, bottom关键字中的一个
- left, center, right, top, bottom关键字
- length：从左上角开始计算
- 百分比：参考元素本身大小

## 旋转 - rotat
**旋转：rotate(deg)**
**值个数:** 一个值时，表示旋转的角度
**值类型：**
- deg：旋转的角度
- 正数为顺时针
- 负数为逆时针
**注意：旋转的原点受transform-origin的影响**

## 倾斜 - skew
**旋转：skew(x, y)**
**值个数:**
- 一个值时，表示x轴上的倾斜
- 二个值时，表示x轴和y轴上的倾斜
**值类型：**
- deg：旋转的角度
- 正数为顺时针
- 负数为逆时针
**注意：旋转的原点受transform-origin的影响**



# 过渡动画 - transition

**transition CSS 属性是 transition-property，transition-duration，transition-timing-function 和 transition-delay 的 一个简写属性。**
- transition-property：指定应用过渡属性的名称
  - 可以写all表示所有可动画的属性
  - 属性是否支持动画查看文档
- transition-duration：指定过渡动画所需的时间
  - 单位可以是秒（s）或毫秒（ms）
- transition-timing-function：指定动画的变化曲线
  - https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function
- transition-delay：指定过渡动画执行之前的等待时间

# 关键帧动画
**之前我们学习了transition来进行过渡动画，但是过渡动画只能控制首尾两个值：**
- 从关键帧动画的角度相当于只是定义了两帧的状态：第一帧和最后一帧。
- 如果我们希望可以有更多状态的变化，可以直接使用关键帧动画。
**关键帧动画使用@keyframes来定义多个变化状态，并且使用animation-name来声明匹配：**
1. 使用 @keyframes创建一个规则
2. @keyframes中使用百分比定义各个阶段的样式
3. 通过animation将动画添加到属性上
**另外，也可以使用from和to关键字：**
- from相当于0%
- to相当于100%

# animation属性
**CSS animation 属性是 animation-name，animation-duration, animation-timing-function，animation-delay，animation-iteration-count，animation-direction，animation-fill-mode 和 animation-play-state 属性的一个简写属性形式。**
- animation-name：指定执行哪一个关键帧动画
- animation-duration：指定动画的持续时
- animation-timing-function：指定动画的变化曲线
- animation-delay：指定延迟执行的时间
- animation-iteration-count：指定动画执行的次数，执行infinite表示无限动画
- animation-direction：指定方向，常用值normal和reverse
- animation-fill-mode：执行动画最后保留哪一个值
  - none：回到没有执行动画的位置
  - forwards：动画最后一帧的位置
  - backwards：动画第一帧的位
- animation-play-state：指定动画运行或者暂停（在JavaScript中使用，用于暂停动画）

