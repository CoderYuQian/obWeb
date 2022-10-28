# CSS编写顺序的思路
1. 先确定盒子本身是如何布局
   - position: absolute
   - float: left/right
   - display: flex
2. 盒子的特性和可见性
   - display: block/inline-block/inline/none
   - visibility/opacity
3. 盒子模型
   - width/height
   - box-sizing
   - margin/border/padding/content
   - box-shadow/text-shadow
4. 内部的文本文字
   - font/text
5. background
   - background-image/size/position/color
6. 其他
   - transform/transition/overflow/white-space

# 认识CSS
CSS表示层叠样式表（Cascading Style Sheet，简称：CSS，又称为又称串样式列表、级联样式表、串接样式表、阶层式样式表） 是为网页添加样式的代码。
**CSS是编程语言吗？**
- MDN解释：CSS 也不是真正的编程语言，甚至不是标记语言。它是一门样式表语言；
- 维基百科解释：是一种计算机语言，但是不算是一种编程语言；
## CSS的历史
早期的网页都是通过HTML来编写的，但是我们希望HTML页面可以更加丰富:
这个时候就增加了很多具备特殊样式的元素：比如i、strong、del等等；后来也有不同的浏览器实现各自的样式语言，但是没有统一的规划；1994年，哈肯·维姆·莱和伯特·波斯合作设计CSS，在1996年的时候发布了CSS1；直到1997年初，W3C组织才专门成立了CSS的工作组，1998年5月发布了CSS2；在2006~2009非常流行 “DIV+CSS”布局的方式来替代所有的html标签；从CSS3开始，所有的CSS分成了不同的模块（modules），每一个“modules”都有于CSS2中额外增加的功能，以及向后 兼容。直到2011年6月7日，CSS 3 Color Module终于发布为W3C Recommendation。
**总结：** CSS的出现是为了美化HTML的，并且让结构（HTML）与样式（CSS）分离；
- 美化方式一：为HTML添加各种各样的样式，比如颜色、字体、大小、下划线等等；
- 美化方式二：对HTML进行布局，按照某种结构显示（CSS进行布局 – 浮动、flex、grid）；
## 如何编写CSS
声明（Declaration）一个单独的CSS规则，如 color: red; 用来指定添加的CSS样式。
- 属性名（Property name）：要添加的css规则的名称；
- 属性值（Property value）：要添加的css规则的值；
### CSS编写位置
1. 内联样式（inline style）
2. 内部样式表（internal style sheet）、文档样式表（document style sheet）、内嵌样式表（embed style sheet）
3. 外部样式表（external style sheet）

**内联样式（inline style）** ：
内联样式（inline style），也有人翻译成行内样式。内联样式表存在于HTML元素的style属性之中。CSS样式之间用分号;隔开，建议每条CSS样式后面都加上分号。（在原生的HTML编写过程中这种写法是不推荐的，在Vue的template中某些动态的样式是会使用内联样式的)
**内部样式表（internal style sheet）** :
将CSS放在HTML文件元素里的；在Vue的开发过程中，每个组件也会有一个style元素，和内部样式表非常的相似（原理并不相同）。
**外部样式表（external style sheet）** :
外部样式表（external style sheet） 是将css编写一个独立的文件中，并且通过\<link\>[[HTML#^bd9635 | link元素]]元素引入进来；
使用外部样式表主要分成两个步骤：第一步：将css样式在一个独立的css文件中编写（后缀名为.css）；第二步：通过元素引入进来；
### @import
可以在style元素或者CSS文件中使用@import导入其他的CSS文件
### CSS的注释
CSS代码也可以添加注释来方便阅读：/\* 注释内容 \*/



# CSS属性的官方文档
**CSS官方文档地址**: https://www.w3.org/TR/?tag=css
**CSS推荐文档地址：** [CSS 参考 - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#%E5%85%B3%E9%94%AE%E5%AD%97%E7%B4%A2%E5%BC%95)
由于浏览器版本、CSS版本等问题，查询某些CSS是否可用：可以到 https://caniuse.com/ 查询CSS属性的可用性

# 常见的CSS元素

## CSS属性-文本
### text-decoration(常用)
- text-decoration用于设置文字的装饰线(decoration是装饰/装饰品的意思)
- text-decoration有如下常见取值:
  - none：无任何装饰线(可以去除a元素默认的下划线)
  - underline：下划线
  - overline：上划线
  - line-through：中划线（删除线）
a元素有下划线的本质是被添加了text-decoration属性
### text-transform(一般)
- text-transform用于设置文字的大小写转换(Transform单词是使变形/变换(形变))
- text-transform有几个常见的值:
  - capitalize：(使…首字母大写, 资本化的意思)将每个单词的首字符变为大写
  - uppercase：(大写字母)将每个单词的所有字符变为大写
  - lowercase：(小写字母)将每个单词的所有字符变为小写
  - none：没有任何影响
实际开发中用JavaScript代码转化的更多.
### text-indent(一般)
text-indent用于设置第一行内容的缩进(text-indent: 2em; 刚好是缩进2个文字)
### text-align(重要)
- text-align: 直接翻译过来设置文本的对齐方式;
- MDN: 定义行内内容（例如文字、图片）如何相对它的块父元素对齐;（只针对行内级元素生效）
- 常用的值:
  - left：左对齐
  - right：右对齐
  - center：正中间显示
  - justify：两端对齐（对于最后一行无效，需要设置text-align-last）
### letter-spacing、word-spacing(一般)
letter-spacing、word-spacing分别用于设置字母、单词之间的间距(默认是0，可以设置为负数)

## CSS属性-字体
### font-size(重要)
- font-size决定文字的大小
- 常用的设置:
  1. 具体数值+单位(比如100px,也可以使用em单位(不推荐)：1em代表100%，2em代表200%，0.5em代表50%)
  2. 百分比(基于父元素的font-size计算，比如50%表示等于父元素font-size的一半)
### font-family (重要, 不过一般仅设置一次)
font-family用于设置文字的字体名称;可以设置1个或者多个字体名称;浏览器会选择列表中第一个该计算机上有安装的字体;或者是通过 @font-face 指定的可以直接下载的字体。
### font-weight(重要)
- font-weight用于设置文字的粗细（重量）
- 常见的取值:
  - 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 ：每一个数字表示一个重量
  - normal：等于400
  - bold：等于700
strong、b、h1~h6等标签的font-weight默认就是bold
### font-style(一般)
font-style用于设置文字的常规、斜体显示
- normal：常规显示
- italic(斜体)：用字体的斜体显示(通常会有专门的字体)
- oblique(倾斜)：文本倾斜显示(仅仅是让文字倾斜)
em、i、cite、address、var、dfn等元素的font-style默认就是italic
### font-variant(了解)
- font-variant可以影响小写字母的显示形式(variant是变形的意思)
- 可以设置的值如下
  - normal：常规显示
  - small-caps：将小写字母替换为缩小过的大写字母
### line-height(常用)
- line-height用于设置文本的行高(行高可以先简单理解为一行文字所占据的高度)
- 行高的严格定义是：两行文字基线（baseline）之间的间距
- 基线（baseline）：与小写字母x最底部对齐的线
- **注意区分height和line-height的区别:**
  - height：元素的整体高度
  - line-height：元素中每一行文字所占据的高度
- 应用实例：假设div中只有一行文字，如何让这行文字在div内部垂直居中(让line-height等同于height)
### font
- font是一个缩写属性
  - font 属性可以用来作为 font-style, font-variant, font-weight, font-size, line-height 和 font-family 属性的简写;
  - font-style font-variant font-weight font-size/line-height font-family
- 规则:
  - font-style、font-variant、font-weight可以随意调换顺序，也可以省略
  - line-height可以省略，如果不省略，必须跟在font-size后面
  - font-size、font-family不可以调换顺序，不可以省略

# 其他常用属性
## CSS属性 - overflow
**overflow用于控制内容溢出时的行为：**
- visible：溢出的内容照样可见
- hidden：溢出的内容直接裁剪
- scroll：溢出的内容被裁剪，但可以通过滚动机制查看（会一直显示滚动条区域，滚动条区域占用的空间属于width、height）
- auto：自动根据内容是否溢出来决定是否提供滚动机制
## CSS属性 - box-sizing
box-sizing用来设置盒子模型中宽高的行为
- **content-box** ：padding、border都布置在width、height外边
- **border-box** ：padding、border都布置在width、height里边
### box-sizing: content-box
- 元素的实际占用宽度 = border + padding + width
- 元素的实际占用高度 = border + padding + height
### box-sizing: border-box
- 元素的实际占用宽度 = width
- 元素的实际占用高度 = height

### IE盒子模型

## CSS属性 - white-space
**white-space用于设置空白处理和换行规则**
- normal：合并所有连续的空白，允许单词超屏时自动换行
- nowrap：合并所有连续的空白，不允许单词超屏时自动换行
- pre：阻止合并所有连续的空白，不允许单词超屏时自动换行
- pre-wrap：阻止合并所有连续的空白，允许单词超屏时自动换行
- pre-line：合并所有连续的空白（但保留换行），允许单词超屏时自动换行

## CSS属性 - text-overflow
**text-overflow通常用来设置文字溢出时的行为**
- clip：溢出的内容直接裁剪掉（字符可能会显示不完整）
- ellipsis：溢出那行的结尾处用省略号表示
**text-overflow生效的前提是overflow不为visible**
常见的是将white-space、text-overflow、overflow一起使用：
```css
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
```

# CSS常见选择器
**CSS选择器：** 按照一定的规则选出符合条件的元素，为之添加CSS样式
**选择器归类：**
- 通用选择器（universal selector）
- 元素选择器（type selectors）
- 类选择器（class selectors）
- id选择器（id selectors）
- 属性选择器（attribute selectors）
- 组合（combinators）
- 伪类（pseudo-classes）
- 伪元素（pseudo-elements）
## 通用选择器
所有的元素都会被选中；一般用来给所有元素作一些通用性的设置。
比如内边距、外边距;比如重置一些内容；效率比较低，尽量不要使用;
## 简单选择器
**简单选择器是开发中用的最多的选择器：**
- 元素选择器（type selectors）, 使用元素的名称;
- 类选择器（class selectors）, 使用 .类名 ;
- id选择器（id selectors）, 使用 \#id;
  - id注意事项：一个HTML文档里面的id值是唯一的，不能重复；id值如果由多个单词组成，单词之间可以用中划线-、下划线_连接，也可以使用驼峰标识；最好不要用标签名作为id值
  - 中划线又叫连字符（hyphen）
## 属性选择器
拥有某一个属性 \[att\]
属性等于某个值 \[att=val\]
例：
```css
[title] {
	color:red;
}

[title=box] {
	color:blue;
}
```
其他了解的：
- \[attr*=val\]: 属性值包含某一个值val;
- \[attr^=val\]: 属性值以val开头
- \[attr$=val\]: 属性值以val结尾
- \[attr|=val\]: 属性值等于val或者以val开头后面紧跟连接符-;
- \[attr~=val\]: 属性值包含val, 如果有其他值必须以空格和val分割;
## 后代选择器
**后代选择器一: 所有的后代(直接/间接的后代）** 选择器之间以空格分割
**后代选择器二: 直接子代选择器(必须是直接子代)** 选择器之间以 > 分割;
## 兄弟选择器
**兄弟选择器一:相邻兄弟选择器** 使用符号 + 连接
**兄弟选择器二: 普遍兄弟选择器 ~** 使用符号 ~ 连接
## 选择器组 – 交集选择器
**交集选择器: 需要同时符合两个选择器条件(两个选择器紧密连接)** 在开发中通常为了精准的选择某一个元素;
**并集选择器: 符合一个选择器条件即可(两个选择器以,号分割)** 在开发中通常为了给多个元素设置相同的样式;

## 伪类
### 认识伪类
Pseudo-classes: 翻译过来是伪类;伪类是选择器的一种，它用于选择处于特定状态的元素;
比如我们经常会实现的: 当手指放在一个元素上时, 显示另外一个颜色;
### 常见的伪类有
- **1.动态伪类（dynamic pseudo-classes）** 
  :link、:visited、:hover、:active、:focus
- **2.目标伪类（target pseudo-classes）**
  :target 
- **3.语言伪类（language pseudo-classes）** 
  :lang( )
- **4.元素状态伪类（UI element states pseudo-classes）**
  :enabled、:disabled、:checked 
- **5.结构伪类（structural pseudo-classes）**
  :nth-child( )、:nth-last-child( )、:nth-of-type( )、:nth-lastof-type( )
  :first-child、:last-child、:first-of-type、:last-of-type
  :root、:only-child、:only-of-type、:empty
- **6.否定伪类（negation pseudo-classes）**
  :not()
所有的伪类: https://developer.mozilla.org/zhCN/docs/Web/CSS/Pseudo-classe
#### 动态伪类
**使用举例:**
- a:link 未访问的链接
- a:visited 已访问的链接
- a:hover 鼠标挪动到链接上(重要)
- a:active 激活的链接（鼠标在链接上长按住未松开）
**使用注意：**
- :hover必须放在:link和:visited后面才能完全生效
- :active必须放在:hover后面才能完全生效
- 所以建议的编写顺序是 :link、:visited、:hover、:active
**除了a元素，:hover、:active也能用在其他元素上**

##### 动态伪类 - :focus
:focus指当前拥有输入焦点的元素（能接收键盘输入）（文本输入框一聚焦后，背景就会变红色）
因为链接a元素可以被键盘的Tab键选中聚焦，所以:focus也适用于a元素
**动态伪类编写顺序建议为：**
:link、:visited、:focus、:hover、:active
直接给a元素设置样式 color：red，相当于给a元素的所有动态伪类都设置了；相当于a:link、a:visited、a:hover、a:active、a:focus的color都是red

#### 结构伪类 :nth-child
- **:nth-child(1)**
  是父元素中的第1个子元素
- **:nth-child(2n)** 
  - n代表任意正整数和0
  - 是父元素中的第偶数个子元素（第2、4、6、8......个）
  - 跟:nth-child(even)同义
- **:nth-child(2n + 1)** 
  - n代表任意正整数和0
  - 是父元素中的第奇数个子元素（第1、3、5、7......个）
  - 跟:nth-child(odd)同义
- **nth-child(-n + 2)** 
  - 代表前2个子元素
#### 结构伪类  :nth-last-child( )
**:nth-last-child()的语法跟:nth-child()类似，不同点是:nth-last-child()从最后一个子元素开始往前计数**：
- :nth-last-child(1)，代表倒数第一个子元素
- :nth-last-child(-n + 2)，代表最后2个子元素
**:nth-of-type()用法跟:nth-child()类似**
- 不同点是:nth-of-type()计数时只计算同种类型的元素
**:nth-last-of-type()用法跟:nth-of-type()类似**
- 不同点是:nth-last-of-type()从最后一个这种类型的子元素开始往前计数
#### 结构伪类 - :nth-of-type( )、:nth-last-of-type( )
**其他常见的伪类(了解):**
- :first-child，等同于:nth-child(1)
- :last-child，等同于:nth-last-child(1)
- :first-of-type，等同于:nth-of-type(1)
- :last-of-type，等同于:nth-last-of-type(1)
- :only-child，是父元素中唯一的子元素
- :only-of-type，是父元素中唯一的这种类型的子元素
**下面的伪类偶尔会使用:**
- :root，根元素，就是HTML元素
- :empty代表里面完全空白的元素
#### 否定伪类（negation pseudo-class）
**:not()的格式是:not(x)**
- x是一个简单选择器
- 元素选择器、通用选择器、属性选择器、类选择器、id选择器、伪类（除否定伪类）
**:not(x)表示除x以外的元素**
 

### 伪元素
**常用的伪元素：**
- :first-line、::first-line
- :first-letter、::first-letter
- :before、::before
- :before、::before

为了区分伪元素和伪类，建议伪元素使用2个冒号，比如::first-line

#### 伪元素 - ::first-line - ::first-letter(了解)
- ::first-line可以针对首行文本设置属性
- ::first-letter可以针对首字母设置属性
#### 伪元素 - ::before和::after(常用）
::before和::after用来在一个元素的内容之前或之后插入其他内容（可以是文字、图片)
常通过 content 属性来为一个元素添加修饰性的内容。

# CSS继承
CSS的某些属性具有**继承性**(Inherited)：如果一个属性具备继承性, 那么在该元素上设置后, 它的后代元素都可以继承这个属性；当然, 如果后代元素自己有设置该属性, 那么优先使用后代元素自己的属性(不管继承过来的属性权重多高);
如何知道一个属性是否具有继承性呢?
常见的font-size/font-family/font-weight/line-height/color/text-align都具有继承性（多查看文档）
注意(了解): 继承过来的是计算值, 而不是设置值；

# CSS属性的层叠
CSS的翻译是层叠样式表, 什么是**层叠**呢?
对于一个元素来说, 相同一个属性我们可以通过不同的选择器给它进行多次设置;那么属性会被一层层覆盖上去;但是最终只有一个会生效;
**多个样式属性覆盖：**
- 判断一: 选择器的权重, 权重大的生效, 根据权重可以判断出优先级;
- 判断二: 先后顺序, 权重相同时, 后面设置的生效
## 选择器的权重
按照经验，为了方便比较CSS属性的优先级，可以给CSS属性所处的环境定义一个权值（权重）：
- !important：10000
- 内联样式：1000
- id选择器：100
- 类选择器、属性选择器、伪类：10
- 元素选择器、伪元素：1
- 通配符：0

# CSS属性的类型
## HTML元素的类型
**HTML定义元素类型的思路：**
- HTML元素有很多, 比如h元素/p元素/div元素/span元素/img元素/a元素等等;
- 当我们把这个元素放到页面上时, 这个元素到底占据页面中一行多大的空间呢?（为什么我们这里只说一行呢? 因为垂直方向的高度通常是内容决定的）
- 比如一个h1元素的标题, 我们必然是希望它独占一行的, 其他的内容不应该和我的标题放在一起;
- 比如一个p元素的段落, 必然也应该独占一行, 其他的内容不应该和我的段落放在一起;
- 而类似于img/span/a元素, 通常是对内容的某一个细节的特殊描述, 没有必要独占一行;
**为了区分哪些元素需要独占一行, 哪些元素不需要独占一行, HTML将元素区分(本质是通过CSS的)成了两类：**
- 块级元素（block-level elements）: 独占父元素的一行
- 行内级元素（inline-level elements）:多个行内级元素可以在父元素的同一行中显示
## 通过CSS修改元素类型
### CSS属性 - display
**CSS中有个display属性，能修改元素的显示类型，有4个常用值：**
- block：让元素显示为块级元素
- inline：让元素显示为行内级元素
- inline-block：让元素同时具备行内级、块级元素的特征
- none：隐藏元素
**display值的特性(非常重要)：**
- block元素：独占父元素的一行；可以随意设置宽高；高度默认由内容决定
- inline-block元素:跟其他行内级元素在同一行显示；可以随意设置宽高（对外来说，它是一个行内级元素，对内来说，它是一个块级元素）
- inline:跟其他行内级元素在同一行显示;不可以随意设置宽高;宽高都由内容决定;
## 编写HTML时的注意事项
## 块级元素、inline-block元素
- 一般情况下，可以包含其他任何元素（比如块级元素、行内级元素、inline-block元素）
- 特殊情况，p元素不能包含其他块级元素
## 行内级元素（比如a、span、strong等）
一般情况下，只能包含行内级元素

# 一些技巧
## 元素隐藏方法
**方法一: display设置为none：** 元素不显示出来, 并且也不占据位置, 不占据任何空间(和不存在一样);
**方法二: visibility设置为hidden：** 设置为hidden, 虽然元素不可见, 但是会占据元素应该占据的空间；默认为visible, 元素是可见的;
**方法三: rgba设置颜色, 将a的值设置为0：** rgba的a设置的是alpha值, 可以设置透明度, 不影响子元素;
**方法四: opacity设置透明度, 设置为0：** 设置整个元素的透明度, 会影响所有的子元素;
## CSS样式不生效技巧
为何有时候编写的CSS属性不好使，有可能是因为：
- 选择器的优先级太低
- 选择器没选中对应的元素
- CSS属性的使用形式不对
  - 元素不支持此CSS属性，比如span默认是不支持width和height的
  - 浏览器不支持此CSS属性，比如旧版本的浏览器不支持一些css module3的某些属性
  - 被同类型的CSS属性覆盖，比如font覆盖font-size
建议：充分利用浏览器的开发者工具进行调试（增加、修改样式）、查错

## 元素的水平居中方案
在一些需求中，需要元素在父元素中水平居中显示（父元素一般都是块级元素、inline-block）
- **行内级元素(包括inline-block元素)**
  水平居中：在父元素中设置text-align: center
- **块级元素**
  水平居中：margin: 0 auto

# CSS中的函数
**在前面我们有使用过很多个CSS函数:**
比如rgb/rgba/translate/rotate/scale等;CSS函数通常可以帮助我们更加灵活的来编写样式的值；
**几个非常好用的CSS函数:**
- var: 使用CSS定义的变量;
- calc: 计算CSS值, 通常用于计算元素的大小或位置;
- blur: 毛玻璃(高斯模糊)效果
- gradient：颜色渐变函数；
## CSS函数 - var
**CSS中可以自定义属性**
- 属性名需要以两个减号（--）开始;
- 属性值则可以是任何有效的CSS值;
    ```css
  div {
	  --why-color: red;
  }
  ```
我们可以通过var函数来使用
```css
span {
	color: var(--why-color)
}
```

**规则集定义的选择器, 是自定义属性的可见作用域(只在选择器内部有效)** 所以推荐将自定义属性定义在html中，也可以使用 :root 选择器

## CSS函数 -calc
**calc() 函数允许在声明 CSS 属性值时执行一些计算。**
计算支持加减乘除的运算；(+ 和 - 运算符的两边必须要有空白字符。)
通常用来设置一些元素的尺寸或者位置；

## CSS函数 - blur
**blur() 函数将高斯模糊应用于输出图片或者元素**
- blur(radius)
- radius, 模糊的半径, 用于定义高斯函数的偏差值, 偏差值越大, 图片越模糊;
**通常会和两个属性一起使用：**
- filter: 将模糊或颜色偏移等图形效果应用于元素;
- backdrop-filter: 为元素后面的区域添加模糊或者其他效果;

## CSS函数 – gradient
**\<gradient\>是一种\<image\>CSS数据类型的子类型，用于表现两种或多种颜色的过渡转变。**
- CSS的\<image\>数据类型描述的是2D图形；
- 比如background-image、list-style-image、border-image、content等；
- \<image\>常见的方式是通过url来引入一个图片资源；
- 它也可以通过CSS的 \<gradient\> 函数来设置颜色的渐变；
**\<gradient\>常见的函数实现有下面几种：**
- linear-gradient()：创建一个表示两种或多种颜色线性渐变的图片；
- radial-gradient()：创建了一个图像，该图像是由从原点发出的两种或者多种颜色之间的逐步过渡组成；
- repeating-linear-gradient()：创建一个由重复线性渐变组成的\<image\>；
- repeating-radial-gradient()：创建一个重复的原点触发渐变组成的\<image\>；
- 等等
#### linear-gradient的使用
linear-gradient：创建一个表示两种或多种颜色线性渐变的图片；
```css
background-image: linear-gradient(to right, blue, red 10%, purple 40%, orange);
```
radial-gradient：创建了一个图像，该图像是由从原点发出的两种或者多种颜色之间的逐步过渡组成；
```css
background-image: radial-gradient(at 0% 50%, red, yellow);
```

# 盒子模型
## 盒子模型(Box Model)
HTML中的每一个元素都可以看做是一个盒子，具备4个属性：
1. 内容（content）：元素的内容width/height
2. 内边距（padding）：元素和内容之间的间距
3. 边框（border）：元素自己的边框
4. 外边距（margin）：元素和其他元素之间的间距
## 盒子模型的四边
因为盒子有四边, 所以margin/padding/border都包括top/right/bottom/left四个边
## 内容 – 宽度和高度
设置内容是通过宽度和高度设置的：宽度设置: width；高度设置: height
注意: 对于行内级非替换元素来说, 设置宽高是无效的!
另外我们还可以设置如下属性:
- min-width：最小宽度，无论内容多少，宽度都大于或等于min-width
- max-width：最大宽度，无论内容多少，宽度都小于或等于max-width
- 移动端适配时, 可以设置最大宽度和最小宽度;
下面两个属性不常用:
- min-height：最小高度，无论内容多少，高度都大于或等于min-height
- max-height：最大高度，无论内容多少，高度都小于或等于max-height
## 内边距 - padding
padding属性用于设置盒子的内边距, 通常用于设置边框和内容之间的间距;
padding包括四个方向, 所以有如下的取值:
- padding-top：上内边距
- padding-right：右内边距
- padding-bottom：下内边距
- padding-left：左内边距
padding单独编写是一个缩写属性：
- padding-top、padding-right、padding-bottom、padding-left的简写属性
- padding缩写属性是从零点钟方向开始, 沿着顺时针转动的, 也就是上右下左
padding并非必须是四个值, 也可以有其他值：
| padding值的个数 | padding例子 | 代表的含义 |
| --------------- | ----------- | ---------- |
| 4               |padding: 10px 20px 30px 40px;|top: 10px, right: 20px, bottom: 30px, left: 40px;|
| 3               |padding: 10px 20px 30px;|缺少left, left使用right的值;|
| 2               |padding: 10px 20px;|缺少left, 使用right的值; 缺少bottom, 使用top的值;|
| 1                |padding: 10px;|top/right/bottom/left都使用10;|

## 边框 - borde
border用于设置盒子的边框
边框相对于content/padding/margin来说特殊一些:
- 边框具备宽度width;
- 边框具备样式style;
- 边框具备颜色color;
**设置边框的方式**：
- 边框宽度
  - border-top-width、border-right-width、border-bottom-width、border-left-width
  - border-width是上面4个属性的简写属性
- 边框颜色
  - border-top-color、border-right-color、border-bottom-color、border-left-color
  - border-color是上面4个属性的简写属性
- 边框样式
  - border-top-style、border-right-style、border-bottom-style、border-left-style
  - border-style是上面4个属性的简写属性
**边框的样式设置值:**
- groove：凹槽, 沟槽, 边框看上去好象是雕刻在画布之内
- ridge：山脊, 和grove相反，边框看上去好象是从画布中凸出来
- 等等
同时设置的方式：如果我们相对某一边同时设置 宽度 样式 颜色, 可以进行如下设置:
- border-top
- border-right
- border-bottom
- border-left
- border：统一设置4个方向的边框
注意：**边框颜色、宽度、样式的编写顺序任意**

### 圆角 – border-radius
border-radius用于设置盒子的圆角
border-radius常见的值:
- 数值: 通常用来设置小的圆角, 比如6px;
- 百分比: 通常用来设置一定的弧度或者圆形;
border-radius补充：
border-radius事实上是一个缩写属性：将这四个属性 border-top-left-radius、border-top-right-radius、border-bottom-right-radius，和 border-bottomleft-radius 简写为一个属性（开发中比较少见一个个圆角设置）。
如果一个元素是正方形, 设置border-radius大于或等于50%时，就会变成一个圆.

## 外边距 - margin
margin属性用于设置盒子的外边距, 通常用于元素和元素之间的间距；
margin包括四个方向, 所以有如下的取值：
- margin-top：上内边距
- margin-right：右内边距
- margin-bottom：下内边距
- margin-left：左内边距
margin单独编写是一个缩写属性：
- margin-top、margin-right、margin-bottom、margin-left的简写属性
- margin缩写属性是从零点钟方向开始, 沿着顺时针转动的, 也就是上右下左;

margin也并非必须是四个值, 也可以有其他值：
| margin值的个数 | margin例子                   | 代表的含义                                        |
| -------------- | ---------------------------- | ------------------------------------------------- |
| 4              | margin: 10px 20px 30px 40px; | top: 10px, right: 20px, bottom: 30px, left: 40px; |
| 3              | margin: 10px 20px 30px;      | 缺少left, left使用right的值;                      |
| 2              | margin: 10px 20px;           | 缺少left, 使用right的值; 缺少bottom, 使用top的值; |
| 1               |margin: 10px;|top/right/bottom/left都使用10;|

## 上下margin的传递
- **margin-top传递：** 如果块级元素的顶部线和父元素的顶部线重叠，那么这个块级元素的margin-top值会传递给父元素
- **margin-bottom传递：** 如果块级元素的底部线和父元素的底部线重写，并且父元素的高度是auto，那么这个块级元素的margin-bottom值会传递给父元素
- **如何防止出现传递问题？** 
  - 给父元素设置padding-top\padding-bottom
  - 给父元素设置border
  - 触发BFC: 设置overflow为auto
- **建议：**
  - margin一般是用来设置兄弟元素之间的间距
  - padding一般是用来设置父子元素之间的间距

## 上下margin的折叠
**垂直方向上相邻的2个margin（margin-top、margin-bottom）有可能会合并为1个margin，这种现象叫做collapse（折叠）**
**水平方向上的margin（margin-left、margin-right）永远不会collapse**
**折叠后最终值的计算规则：** 两个值进行比较，取较大的值
**如何防止margin collapse？** 只设置其中一个元素的margin

### 上下margin折叠的情况
1. 两个兄弟块级元素之间上下margin的折叠
2. 父子块级元素之间margin的折叠

## 外轮廓 - outline
outline表示元素的外轮廓：不占用空间；默认显示在border的外面
outline相关属性有：
- outline-width: 外轮廓的宽度
- outline-style：取值跟border的样式一样，比如solid、dotted等
- outline-color: 外轮廓的颜色
- outline：outline-width、outline-style、outline-color的简写属性，跟border用法类
应用实例：去除a元素、input元素的focus轮廓效

## 盒子阴影 – box-shadow
box-shadow属性可以设置一个或者多个阴影，每个阴影用\<shadow\>表示,多个阴影之间用逗号,隔开，从前到后叠加
**的常见格式如下：**
```css
none | <shadow>#    <shadow> = inset? && <length>{2,4} && <color>?
```
- 第1个\<length\>：offset-x, 水平方向的偏移，正数往右偏移
- 第2个\<length\>：offset-y, 垂直方向的偏移，正数往下偏移
- 第3个\<length\>：blur-radius, 模糊半径
- 第4个\<length\>：spread-radius, 延伸半径
- \<color\>：阴影的颜色，如果没有设置，就跟随color属性的颜色
- inset：外框阴影变成内框阴影
### 盒子阴影 – 在线查看
我们可以通过一个网站测试盒子的阴影: https://html-css-js.com/css/generator/box-shadow/

## 文字阴影 - text-shadow
- text-shadow用法类似于box-shadow，用于给文字添加阴影效果
- \<shadow\>的常见格式如下
  ```css
  none | <shadow-t>#    <shadow-t> = [<length>{2,3} && <color>?]
  ```
  相当于box-shadow, 它没有spread-radius的值;

我们可以通过一个网站测试文字的阴影： https://html-css-js.com/css/generator/box-shadow/

## 行内非替换元素的注意事项
- **以下属性对行内级非替换元素不起作用**
  width、height、margin-top、margin-bottom
- **以下属性对行内级非替换元素的效果比较特殊**
  padding-top、padding-bottom、上下方向的border

# CSS设置背景
## background-image
**background-image用于设置元素的背景图片：** 会盖在(不是覆盖)background-color的上面
**如果设置了多张图片：** 设置的第一张图片将显示在最上面，其他图片按顺序层叠在下面

**注意**：如果设置了背景图片后，元素没有具体的宽高，背景图片是不会显示出来的

## background-repeat
**background-repeat用于设置背景图片是否要平铺**
常见的设值有：
- repeat：平铺
- no-repeat：不平铺
- repeat-x：只在水平方向平铺
- repeat-y：只在垂直平方向平铺
## background-size
**background-size用于设置背景图片的大小**
- auto：默认值, 以背景图本身大小显示
- cover：缩放背景图，以完全覆盖铺满元素,可能背景图片部分看不见
- contain：缩放背景图，宽度或者高度铺满元素，但是图片保持宽高比
- \<percentage\>：百分比，相对于背景区（background positioning area）
- length：具体的大小，比如100px
## background-position
**background-position用于设置背景图片在水平、垂直方向上的具体位置**
- background-position用于设置背景图片在水平、垂直方向上的具体位置
- 水平方向还可以设值：left、center、right
- 垂直方向还可以设值：top、center、bottom
- 如果只设置了1个方向，另一个方向默认是center
## background-attachment
**background-attachment决定背景图像的位置是在视口内固定，或者随着包含它的区块滚动。**
**可以设置以下3个值：**
- scroll：此关键属性值表示背景相对于元素本身固定， 而不是随着它的内容滚动
- local：此关键属性值表示背景相对于元素的内容固定。如果一个元素拥有滚动机制，背景将会随着元素的内容滚动.
- fixed：此关键属性值表示背景相对于视口固定。即使一个元素拥有滚动机制，背景也不会随着元素的内容滚动。
## background
**background是一系列背景相关属性的简写属性**
background-size可以省略，如果不省略，/background-size必须紧跟在background-position的后面，其他属性也都可以省略，而且顺序任意

## background-image和img对比
**利用background-image和img都能够实现显示图片的需求，在开发中该如何选择？**

|                        | img      | background-image |
| ---------------------- | -------- | ---------------- |
| 性质                   | HTML元素 | CSS样式          |
| 图片是否占用空间       |     √     |×|
| 浏览器右键直接查看地址 |√|×|
| 支持CSS Sprite         |×|√|
|更有可能被搜索引擎收录|√（结合alt属性）|×|
**总结**：
- img，作为网页内容的重要组成部分，比如广告图片、LOGO图片、文章配图、产品图片
- background-image，可有可无。有，能让网页更加美观。无，也不影响用户获取完整的网页内容信息

# CSS元素定位

## 标准流（Normal Flow）
默认情况下，元素都是按照normal flow（标准流、常规流、正常流、文档流【document flow】）进行排布：
- 从左到右、从上到下按顺序摆放好
- 默认情况下，互相之间不存在层叠现象

## margin-padding位置调整
在标准流中，可以使用margin、padding对元素进行定位，其中margin还可以设置负数
**比较明显的缺点是：**
设置一个元素的margin或者padding，通常会影响到标准流中其他元素的定位效果；不便于实现元素层叠的效果

如果我们希望一个元素可以跳出标准量,单独的对某个元素进行定位呢?
我们可以通过position属性来进行设置

## 认识元素的定位
**定位允许您从正常的文档流布局中取出元素，并使它们具有不同的行为:**
例如放在另一个元素的上面;或者始终保持在浏览器视窗内的同一位置;

## 认识position属性
利用position可以对元素进行定位，常用取值有5个:
**默认值：**
static：默认值, 静态定位
**使用下面的值, 可以让元素变成 定位元素(positioned element)**
- relative：相对定位
- absolute：绝对定位
- fixed：固定定位
- sticky：粘性定位

## 静态定位 - static
**position属性的默认值;**元素按照normal flow布局;left 、right、top、bottom没有任何作用

## 相对定位 - relative
**元素按照normal flow布局；**可以通过left、right、top、bottom进行定位（定位参照对象是元素自己原来的位置）
left、right、top、bottom用来设置元素的具体位置
**相对定位的应用场景：**
在不影响其他元素位置的前提下，对当前元素位置进行微调

## 固定定位 - fixed
**元素脱离normal flow（脱离标准流、脱标）**
可以通过left、right、top、bottom进行定位
定位参照对象是视口（viewport）
当画布滚动时，固定不动

### 画布 和 视口
**视口（Viewport）**：文档的可视区域
**画布（Canvas）**：用于渲染文档的区域；文档内容超出视口范围，可以通过滚动查看
**宽高对比**：画布 >= 视口

## 绝对定位 - absolute
**元素脱离normal flow（脱离标准流、脱标）**
可以通过left、right、top、bottom进行定位（定位参照对象是最邻近的定位祖先元素；如果找不到这样的祖先元素，参照对象是视口）
**定位元素（positioned element）**：
position值不为static的元素；也就是position值为relative、absolute、fixed的元素

### 子绝父相
在绝大数情况下，子元素的绝对定位都是相对于父元素进行定位
**如果希望子元素相对于父元素进行定位，又不希望父元素脱标，常用解决方案是：**
- 父元素设置position: relative（让父元素成为定位元素，而且父元素不脱离标准流）
- 子元素设置position: absolute
- 简称为“子绝父相”

## 将position设置为absolute/fixed元素的特点(一)
- **可以随意设置宽高**
- **宽高默认由内容决定**
- **不再受标准流的约束**
  - 不再严格按照从上到下、从左到右排布
  - 不再严格区分块级(block)、行内级(inline)，行内块级(inline-block)的很多特性都会消失
- **不再给父元素汇报宽高数据**
- **脱标元素内部默认还是按照标准流布局**

## 将position设置为absolute/fixed元素的特点(二)
- **绝对定位元素（absolutely positioned element）**
  - position值为absolute或者fixed的元素
- **对于绝对定位元素来说**
  - 定位参照对象的宽度 = left + right + margin-left + margin-right + 绝对定位元素的实际占用宽度
  - 定位参照对象的高度 = top + bottom + margin-top + margin-bottom + 绝对定位元素的实际占用高度
- **如果希望绝对定位元素的宽高和定位参照对象一样，可以给绝对定位元素设置以下属性**
  left: 0、right: 0、top: 0、bottom: 0、margin:0
- **如果希望绝对定位元素在定位参照对象中居中显示，可以给绝对定位元素设置以下属性**
  - left: 0、right: 0、top: 0、bottom: 0、margin: auto
  - 另外，还得设置具体的宽高值（宽高小于定位参照对象的宽高）

## auto到底是什么?
- 800 = 200 + ml0 + mr0 + 0 + 0
- auto -> 交给浏览器你来处理
- width: auto;
  1. 行内非替换元素 -> width: 包裹内容
  2. 块级元素 ->width: 包含块的宽度
  3. 绝对定位元素 -> width: 包裹内


## 粘性定位 - sticky
**另外还有一个定位的值是position: sticky，比起其他定位值要新一些.**
- sticky是一个大家期待已久的属性;
- 可以看做是相对定位和固定(绝对)定位的结合体;
- 它允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点;
- 当达到这个阈值点时, 就会变成固定(绝对)定位;
- sticky是相对于最近的滚动祖先包含滚动视口的(the nearest ancestor scroll container’s scrollport )

## position值对比
|                     | 脱离标准流 | 定位元素 | 绝对定位元素 | 定位参照对象       |
| ------------------- | ---------- | -------- | ------------ | ------------------ |
| static – 静态定位   | ×          | ×        | ×            | ×                  |
| relative – 相对定位 | ×          | √        | ×            | 元素自己原来的位置 |
| absolute – 绝对定位 | √          | √        | √            |最邻近的定位祖先元素 （如果找不到这样的祖先元素，参照对象 是视口）|
|fixed – 固定定位|√|√|√|视口|

## CSS属性 - z-index
**z-index属性用来设置定位元素的层叠顺序（仅对定位元素有效）**：取值可以是正整数、负整数、0
**比较原则**：
- 如果是兄弟关系
  - z-index越大，层叠在越上面
  - z-index相等，写在后面的那个元素层叠在上面
- 如果不是兄弟关系
  - 各自从元素自己以及祖先元素中，找出最邻近的2个定位元素进行比较
  - 而且这2个定位元素必须有设置z-index的具体数值

# 元素浮动
## 认识浮动
**float 属性可以指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。**
- float 属性最初只用于在一段文本内浮动图像, 实现文字环绕的效果
- 但是早期的CSS标准中并没有提供好的左右布局方案, 因此在一段时间里面它成为网页多列布局的最常用工具;

**绝对定位、浮动都会让元素脱离标准流，以达到灵活布局的效果**

**可以通过float属性让元素产生浮动效果，float的常用取值**
- none：不浮动，默认值
- left：向左浮动
- right：向右浮动

## 浮动规则一
**元素一旦浮动后, 脱离标准流**
- 朝着向左或向右方向移动，直到自己的边界紧贴着包含块（一般是父元素）或者其他浮动元素的边界为止
- 定位元素会层叠在浮动元素上面

## 浮动规则二
**如果元素是向左（右）浮动，浮动元素的左（右）边界不能超出包含块的左（右）边界**

## 浮动规则三
**浮动元素之间不能层叠**
- 如果一个元素浮动，另一个浮动元素已经在那个位置了，后浮动的元素将紧贴着前一个浮动元素（左浮找左浮，右浮找右浮）
- 如果水平方向剩余的空间不够显示浮动元素，浮动元素将向下移动，直到有充足的空间为止

## 浮动规则四
**浮动元素不能与行内级内容层叠，行内级内容将会被浮动元素推出**
比如行内级元素、inline-block元素、块级元素的文字内容

## 浮动规则五
**行内级元素、inline-block元素浮动后，其顶部将与所在行的顶部对齐**


## 浮动的问题 – 高度塌陷
**由于浮动元素脱离了标准流，变成了脱标元素，所以不再向父元素汇报高度**；父元素计算总高度时，就不会计算浮动子元素的高度，导致了高度坍塌的问题
解决父元素高度坍塌问题的过程，一般叫做清浮动（清理浮动、清除浮动）
**清浮动的目的是：** 让父元素计算总高度的时候，把浮动子元素的高度算进去
**使用clear属性**清除浮动

### CSS属性 - clear
**clear属性是做什么的呢?**
clear 属性可以指定一个元素是否必须移动(清除浮动后)到在它之前的浮动元素下面
**clear的常用取值**
- left：要求元素的顶部低于之前生成的所有左浮动元素的底部
- right：要求元素的顶部低于之前生成的所有右浮动元素的底部
- both：要求元素的顶部低于之前生成的所有浮动元素的底部
- none：默认值，无特殊要求

### 清除浮动的方法
**方法一: 给父元素设置固定高度** 
- 扩展性不好（不推荐）
**方法二: 在父元素最后增加一个空的块级子元素，并且让它设置clear: both**
- 会增加很多无意义的空标签，维护麻烦
- 违反了结构与样式分离的原则（不推荐）
**方法三: 给父元素添加一个伪元素**
- 推荐
- 编写好后可以轻松实现清除浮动;

#### 伪元素清除浮动
给父元素增加::after伪元素：纯CSS样式解决，结构与样式分离（推荐）
```css
.clear-fix::after {
content:"";
display:block;
clear:both;

visibility:hidden;/*浏览器兼容性*/
height:0;/*浏览器兼容性*/
}

.clear-fix {
*zoom:1;/*IE6/7兼容性*/
}
```

## 布局方案总结
| 定位方案                         | 应用总结 |
| -------------------------------- | -------- |
| normal flow（标准流）            | 垂直布局 |
| absolute positioning（绝对定位） | 层叠布局 |
| float（浮动）                    | 水平布局 |

# CSS Flex布局
## 认识flexbox
**Flexbox翻译为弹性盒子:**
- 弹性盒子是一种用于按行或按列布局元素的一维布局方法 ;
- 元素可以膨胀以填充额外的空间, 收缩以适应更小的空间;
- 通常我们使用Flexbox来进行布局的方案称之为flex布局(flex layout);
**flex布局是目前web开发中使用最多的布局方案：**
- flex 布局（Flexible 布局，弹性布局）;
- 目前特别在移动端可以说已经完全普及
- 在PC端也几乎已经完全普及和使用, 只有非常少数的网站依然在用浮动来布局;
**为什么需要flex布局呢?**
长久以来，CSS 布局中唯一可靠且跨浏览器兼容的布局工具只有 floats 和 positioning。但是这两种方法本身存在很大的局限性, 并且他们用于布局实在是无奈之举;

## 原先的布局存在的痛点
**原来的布局存在哪些痛点呢? 举例说明:**
- 比如在父内容里面垂直居中一个块内容。
- 比如使容器的所有子项等分可用宽度/高度，而不管有多少宽度/高度可用。
- 比如使多列布局中的所有列采用相同的高度，即使它们包含的内容量不同。

## flex布局的出现
**所以长久以来, 大家非常期待一种真正可以用于对元素布局的方案: 于是flex布局出现了**
- Nature and nature's laws lay hid in night; God said "Let Newton be" and all was light.
- 自然与自然的法则在黑夜隐藏，于是上帝说，让牛顿出现吧！于是世界就明亮了起来
**flexbox在使用时, 我们最担心的是它的兼容性问题**
我们可以在caniuse上查询到具体的兼容性

## flex布局的重要概念
**两个重要的概念：**
- 开启了 flex 布局的元素叫 flex containe
- flex container 里面的直接子元素叫做 flex item
**当flex container中的子元素变成了flex item时, 具备一下特点:**
- flex item的布局将受flex container属性的设置来进行控制和布局;
- flex item不再严格区分块级元素和行内级元素;
- flex item默认情况下是包裹内容的, 但是可以设置宽度和高度;
**设置 display 属性为 flex 或者 inline-flex 可以成为 flex container**
- flex： flex container 以 block-level 形式存在
- inline-flex： flex container 以 inline-level 形式存在
## flex相关的属性
**应用在 flex container 上的 CSS 属性**
- flex-flow
- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content
**应用在 flex items 上的 CSS 属性**
- flex-grow
- flex-basis
- flex-shrink
- order
- align-self
- flex

## flex-direction
**flex items 默认都是沿着 main axis（主轴）从 main start 开始往 main end 方向排布**
- flex-direction 决定了 main axis 的方向，有 4 个取值
- row（默认值）、row-reverse、column、column-reverse

## flex-wrap
**flex-wrap 决定了 flex container 是单行还是多行**
- nowrap（默认）：单行
- wrap：多行
- wrap-reverse：多行（对比 wrap，cross start 与 cross end 相反）

## flex-flow
**flex-flow 属性是 flex-direction 和 flex-wrap 的简写。**
顺序任何, 并且都可以省略;

## justify-content
**justify-content 决定了 flex items 在 main axis 上的对齐方式**
- flex-start（默认值）：与 main start 对齐
- flex-end：与 main end 对齐
- center：居中对齐
- space-between：
  - flex items 之间的距离相等
  - 与 main start、main end两端对齐
- space-around：
  - flex items 之间的距离相等
  - flex items 与 main start、main end 之间的距离是 flex items 之间距离的一半
- space-evenly：
  - flex items 之间的距离相等
  - flex items 与 main start、main end 之间的距离 等于 flex items 之间的距离

## align-item
**align-items 决定了 flex items 在 cross axis 上的对齐方式**
- normal：在弹性布局中，效果和stretch一样
- stretch：当 flex items 在 cross axis 方向的 size 为 auto 时，会 自动拉伸至填充 flex container
- flex-start：与 cross start 对齐
- flex-end：与 cross end 对齐
- center：居中对齐
- baseline：与基准线对齐

## align-content
**align-content 决定了多行 flex items 在 cross axis 上的对齐方式，用法与 justify-content 类似**
- stretch（默认值）：与 align-items 的 stretch 类似
- flex-start：与 cross start 对齐
- flex-end：与 cross end 对齐
- center：居中对齐
- space-between：
  - flex items 之间的距离相等
  - 与 cross start、cross end两端对齐
- space-around：
  - flex items 之间的距离相等
  - flex items 与 cross start、cross end 之间的距离是 flex items 之间距离的一半
- space-evenly：
  - flex items 之间的距离相等
  - flex items 与 cross start、cross end 之间的距离 等于 flex items 之间的距离

## flex-item属性 - order
**order 决定了 flex items 的排布顺序**
- 可以设置任意整数（正整数、负整数、0），值越小就越排在前面
- 默认值是 0

## flex-item属性 - flex items
**flex items 可以通过 align-self 覆盖 flex container 设置的 align-items**
- auto（默认值）：遵从 flex container 的 align-items 设置
- stretch、flex-start、flex-end、center、baseline，效果跟 align-items 一致

## flex-item属性 - flex-grow
**flex-grow 决定了 flex items 如何扩展(拉伸/成长)**
- 可以设置任意非负数字（正小数、正整数、0），默认值是 0
- 当 flex container 在 main axis 方向上有剩余 size 时，flex-grow 属性才会有效
如果所有 flex items 的 flex-grow 总和 sum 超过 1，每个 flex item 扩展的 size
flex container 的剩余 size * flex-grow / sum

**flex items 扩展后的最终 size 不能超过 max-width\max-height**

## flex-item属性 - flex-shrink
**flex-shrink 决定了 flex items 如何收缩(缩小)**
- 可以设置任意非负数字（正小数、正整数、0），默认值是 1
- 当 flex items 在 main axis 方向上超过了 flex container 的 size，flex-shrink 属性才会有效
**如果所有 flex items 的 flex-shrink 总和超过 1，每个 flex item 收缩的 size为**
flex items 超出 flex container 的 size * 收缩比例 / 所有 flex items 的收缩比例之和

**flex items 收缩后的最终 size 不能小于 min-width\min-height**

## flex-item属性 - flex-basis
**flex-basis 用来设置 flex items 在 main axis 方向上的 base size**
auto（默认值）、具体的宽度数值（100px）

**决定 flex items 最终 base size 的因素，从优先级高到低**
- max-width\max-height\min-width\min-height
- flex-basis
- width\height
- 内容本身的 size

## flex-item属性 - flex属性
**flex 是 flex-grow || flex-shrink || flex-basis 的简写,flex 属性可以指定1个，2个或3个值。**

**单值语法: 值必须为以下其中之一:**
- 一个无单位数(): 它会被当作\<flex-grow\>的值。
- 一个有效的宽度(width)值: 它会被当作\<flex-basis\>的值。
- 关键字none，auto或initial.

**双值语法: 第一个值必须为一个无单位数，并且它会被当作\<flex-grow\> 的值。**
- 第二个值必须为以下之一：
  - 一个无单位数：它会被当作\<flex-shrink\>的值。
  - 一个有效的宽度值: 它会被当作\<flex-basis\>的值。

**三值语法:**
- 第一个值必须为一个无单位数，并且它会被当作\<flex-grow\>的值。
- 第二个值必须为一个无单位数，并且它会被当作\<flex-shrink\>的值。
- 第三个值必须为一个有效的宽度值， 并且它会被当作\<flex-basis\> 的值。

# 
