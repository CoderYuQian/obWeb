# 1 认识HTML
**超文本标记语言** （英语：HyperText Markup Language，简称：HTML）是一种用于创建网页的标准标记语言。
**标记语言** （markup language）：
- 由无数个标记（标签、tag)组成；
- 是对某些内容进行特殊的标记，以供其他解释器识别处理；
- 比如使用\<h2\>\</h2\>标记的文本会被识别为“标题”进行加粗、文字放大显示；
- 由标签和内容组成的称为**元素**（element）
**超文本** （HyperText）：
- 表示不仅仅可以插入普通的文本（Text），还可以插入图片、音频、视频等内容；
- 还可以表示超链接（HyperLink），从一个网页跳转到另一个网页
# 2 认识元素
HTML本质上是由一系列的元素（Element）构成的；
**元素** （Element）：元素是网页的一部分；一个元素可以包含一个数据项，或是一块文本，或是一张照片，亦或是什么也不包含；
**HTML的元素** ： https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element
## 元素的组成
开始标签、内容、结束标签
## 元素的属性
**元素也可以拥有属性（Attribute）：** 属性包含元素的额外信息，这些信息不会出现在实际的内容中。
**一个属性必须包含如下内容：** 
1. 一个空格，在属性和元素名称之间。(如果已经有一个或多个属性，就与前一个属性之间有一个空格。)
2. 属性名称，后面跟着一个等于号。
3. 一个属性值，由一对引号“ ”引起来。

注意：HTML元素不区分大小写，但是推荐小写

# 3 完整的HTML结构
- 文档声明
- html元素
  - head元素
  - body元素
**文档声明：**`<!DOCTYPE html>`
HTML文档声明，告诉浏览器当前页面是HTML5页面；让浏览器用HTML5的标准去解析识别内容；必须放在HTML文档的最前面，不能省略，省略了会出现兼容性问题；
**html元素：**
 - \<html\> 元素表示一个 HTML文档的根（顶级元素），所以它也被称为根元素；所有其他元素必须是此元素的后代。
 - W3C标准建议为html元素增加一个lang属性，作用是：帮助语音合成工具确定要使用的发音;帮助翻译工具确定要使用的翻译规则；
 - 常用的规则：lang=“en”表示这个HTML文档的语言是英文；lang=“zh-CN”表示这个HTML文档的语言是中文；
**head元素：**
HTML head 元素 规定文档相关的配置信息（也称之为元数据），包括文档的标题，引用的文档样式和脚本等。
- 元数据（meta data），是描述数据的数据，可以理解成对整个页面的配置
- 常见的设置一般会至少包含如下2个设置
  - 网页的标题：title元素
  - 网页的编码：meta元素；可以用于设置网页的字符编码，让浏览器更精准地显示每一个文字，不设置或者设置错误会导致乱码；一般都使用utf-8编码，涵盖了世界上几乎所有的文字；
**body元素：**
body元素里面的内容将是你在浏览器窗口中看到的东西，也就是网页的具体内容和结构。

## meta元素
**meta元素用于定义元数据**
head中用于定义元数据；meta用于定义那些不能使用其他定元相关（meta-related）元素定义的任何元数据信息；
**meta 元素定义的元数据的类型包括以下几种：**
- 如果设置了 charset 属性，meta 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 http-equiv 属性，meta 元素则是编译指令。
- 如果设置了 name 属性，meta 元素提供的是文档级别（document-level）的元数据，应用于整个页面。
### meta元素的http-equiv属性
- 告知IE浏览器去模仿哪一个浏览器的行为；
- IE=edge，告知IE8区使用最高有效模式来模仿；
### meta元素的name属性
**name属性的值非常多，具体的内容可以查看文档：** https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta/name
**几个常用的：**
- robots：爬虫、协作搜寻器，或者 “机器人”，对此页面的处理行为，或者说，应当遵守的规则。
- author：文档作者的名字。
- Copyright：版权声明；
- description：一段简短而精确的、对页面内容的描述。一些浏览器，比如 Firefox 和 Opera，将其用作书签的默认描述。
- keywords：与页面内容相关的关键词，使用逗号分隔。某些搜索引擎会进行收录；

# 常见的HTML元素

## h元素
在一个页面中通常会有一些比较重要的文字作为标题，这个时候我们可以使用h元素。
**\<h1\>-\<h6\>标题 (Heading) 元素呈现了六个不同的级别的标题；**
注意：h元素通常和SEO优化有关系

## P元素
如果我们想表示一个段落，这个时候可以使用p元素。
**HTML\<p\>元素（或者说 HTML 段落元素）表示文本的一个段落。**
- p元素是paragraph单词的缩写，是段落、分段的意思；
- p元素多个段落之间会有一定的间距；

## img元素
我们可以使用img元素来告诉浏览器显示一张图片
**HTML \<img\>元素将一份图像嵌入文档。**
- img是image单词的所以，是图像、图像的意思；
- 事实上img是一个可替换元素（ replaced element ）；
**img有两个常见的属性：**
- src属性：source单词的缩写，表示源；是必须的，它包含了你想嵌入的图片的文件路径。
- alt属性：不是强制性的，有两个作用
  1. 当图片加载不成功（错误的地址或者图片资源不存在），那么会显示这段文本；
  2. 当图片加载不成功（错误的地址或者图片资源不存在），那么会显示这段文本；
### 图片的路径
**设置img的src时，需要给图片设置路径：**
- 网络图片：一个URL地址
- 本地图片：本地电脑上的图片，后续会和html一起部署到服务；
**本地图片的路径有两种方式：**
1. 绝对路径（几乎不用）：从电脑的根目录开始一直找到资源的路径；
2. 相对路径（常用）：相当于当前文件的一个路径；
   - .代表当前文件夹（1个.）可以省略
   - .. 代表上级文件夹（2个.）
注意：对于网页来说，不管什么操作系统（Windows、Mac、Linux），路径分隔符都是 /，而不是 \

## a元素
在网页中我们经常需要跳转到另外一个链接，这个时候我们使用a元素；
**HTML \<a\>元素（或称锚（anchor）元素）：定义超链接，用于打开新的URL；**

**a元素有两个常见的属性：**
- href(Hypertext Reference)：指定要打开的URL地址；也可以是一个本地地址；
- target：该属性指定在何处显示链接的资源。
  - \_self：默认值，在当前窗口打开URL；.
  - \_blank：在一个新的窗口中打开URL；
  - 其他不常用, 一般结合iframe使用；

### 锚点链接
锚点链接可以实现：跳转到网页中的具体位置
**锚点链接有两个重要步骤：**
- 在要跳到的元素上定义一个id属性；
- 定义a元素，并且a元素的href指向对应的id；

### 图片链接
img元素跟a元素一起使用，可以实现图片链接；
**实现思路：**
a元素中不存放文字，而是存放一个img元素；也就是img元素是a元素的内容；

### 其他URL地地址
a元素一定是用来跳转到新网页的么？
https://github.com/coderwhy/HYMiniMall/archive/master.zip （下载压缩包）
mailto:12345@qq.com （发送邮件）

## iframe元素
利用iframe元素可以实现：在一个HTML文档中嵌入其他HTML文档
**frameborder属性：** 用于规定是否显示边框（1：显示；0：不显示)
**a元素target的其他值:** (\_parent：在父窗口中打开URL；\_top：在顶层窗口中打开URL)

## div与span元素

### div元素、span元素的历史
在HTML中有两个特殊的元素div元素、span元素：
- div元素：division，分开、分配的意思；
- span元素：跨域、涵盖的意思；
这两个元素可以无所用、无所不用。
**产生的历史：** 网页的发展早期是没有css，这个时候我们必须通过语义化元素来告知浏览器一段文字如何显示；后来出现了css，结构和样式需要分离，这个时候html只需要负责结构即可；比如h1元素可以是一段普通的文本+CSS修饰样式；这个时候就出现了div、span来编写HTML结构所有的结构，样式都交给css来处理；
**所以，理论上来说：** 我们的页面可以没有div、span；我们的页面也可以全部都是div、span

### div元素、span元素的区别
div元素和span元素都是“纯粹的” 容器，也可以把他们理解成“盒子”，它们都是用来包裹内容的；
**div元素：**
多个div元素包裹的内容会在不同的行显示；一般作为其他元素的父容器，把其他元素包住，代表一个整体；用于把网页分割为多个独立的部分
**span元素：** 
多个span元素包裹的内容会在同一行显示；默认情况下，跟普通文本几乎没差别；用于区分特殊文本和普通文本，比如用来显示一些关键字

## 不常用元素
**strong元素**：内容加粗、强调；通常加粗会使用css样式来完成；开发中很偶尔会使用一下；
**i元素**：内容倾斜；通常斜体会使用css样式来完成；开发中偶尔会用它来做字体图标（因为看起来像是icon的缩写）；
**code元素**：用于显示代码；偶尔会使用用来显示等宽字体；
**br元素**：换行元素；开发中已经不使用；
更多元素详解，查看MDN文档： https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element

# HTML全局属性
我们发现某些属性只能设置在特定的元素中：比如img元素的src、a元素的href；
也有一些属性是所有HTML都可以设置和拥有的，这样的属性我们称之为 “**全局属性（Global Attributes）**”
全局属性有很多： https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes

**常见的全局属性如下：**
- id：定义唯一标识符（ID），该标识符在整个文档中必须是唯一的。其目的是在链接（使用片段标识符），脚本或样 式（使用 CSS）时标识元素。
- class：一个以空格分隔的元素的类名（classes ）列表，它允许 CSS 和 Javascript 通过类选择器或者DOM方法来选 择和访问特定的元素；
- style：给元素添加内联样式；
- title：包含表示与其所属元素相关信息的文本。 这些信息通常可以作为提示呈现给用户，但不是必须的。

# 其它元素

## link元素

^bd9635

link元素是外部资源链接元素，规范了文档与外部资源的关系;link元素通常是在head元素中;
最常用的链接是样式表（CSS）；此外也可以被用来创建站点图标（比如 “favicon” 图标）；
**link元素常见的属性：**
- href：此属性指定被链接资源的URL。 URL 可以是绝对的，也可以是相对的。
- rel：指定链接类型，常见的链接类型： https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types
  - icon：站点图标；
  - stylesheet：CSS样式；

# HTML高级元素
## 列表元素
### 列表的实现方式
**事实上现在很多的列表功能采用了不同的方案来实现:**
- 方案一: 使用div元素来实现(比如汽车之家, 知乎上的很多列表)
- 方案二: 使用列表元素, 使用元素语义化的方式实现;
**事实上现在很多的网站对于列表元素没有很强烈的偏好, 更加不拘一格, 按照自己的风格来布局:**
- 原因是列表元素默认的CSS样式, 让它用起来不是非常方便
- 比如列表元素往往有很多的限制, ul/ol中只能存放li, li再存放其他元素, 默认样式等;
- 虽然我们可以通过重置来解决, 但是我们更喜欢自由的div;
**HTML提供了3组常用的用来展示列表的元素：**
- 有序列表：ol、li
- 无序列表：ul、li
- 定义列表：dl、dt、dd
### 有序列表 – ol – li
**ol（ordered list）：** 有序列表，直接子元素只能是li
**li（list item）**：列表中的每一项
### 无序列表 – ul - li
**ul（unordered list）**：无序列表，直接子元素只能是li
**li（list item）**：列表中的每一项
### 定义列表 – dl – dt - dd
**dl（definition list）**：定义列表，直接子元素只能是dt、dd
**dt（definition term）**：term是项的意思, 列表中每一项的项目名
**dd（definition description）**：列表中每一项的具体描述，是对 dt 的描述、解释、补充；一个dt后面一般紧跟着1个或者多个dd

## 表格元素
### 表格常见的元素
- **table** ：表格
- **tr(table row)**：表格中的行
- **td(table data**：行中的单元格
另外表格有很多相关的属性可以设置表格的样式, 但是已经不推荐使用了
### 表格的一个非常重要的属性:
- border-collapse CSS 属性是用来决定表格的边框是分开的还是合并的。
- table { border-collapse: collapse; } 合并单元格的边框
### 表格的其他元素
- **thead**：表格的表头
- **tbody** ：表格的主体
- **tfoot**：表格的页脚
- **caption**：表格的标题
- **th** ：表格的表头单元格
### 单元格合并
在某些特殊的情况下, 每个单元格占据的大小可能并不是固定的；一个单元格可能会跨多行或者多列来使用。这个时候我们就要使用单元格合并来完成
**单元格合并分成两种情况:**
- 跨列合并: 使用colspan
  在最左边的单元格写上colspan属性, 并且省略掉合并的td;
- 跨行合并: 使用rowspan
  在最上面的单元格协商rowspan属性, 并且省略掉后面tr中的td;

## 表单元素
HTML表单元素是和用户交互的重要方式之一, 在很多网站都需要使用表单
### 常见的表单元素
- **form** ：表单, 一般情况下，其他表单相关元素都是它的后代元素
- **input** ：单行文本输入框、单选框、复选框、按钮等元素
- **textarea** ：多行文本框
- **select、option** ：下拉选择框
- **button** ：按钮
- **label** ：表单元素的标题
### input元素的使用
表单元素使用最多的是input元素
**input元素有如下常见的属性:**
- type：input的类型
  - text：文本输入框（明文输入）
  - password：文本输入框（密文输入）
  - radio：单选框
  - checkbox：复选框
  - button：按钮
  - reset：重置
  - submit：提交表单数据给服务器
  - file：文件上传
- readonly：只读
- checked：默认被选中（只有当type为radio或checkbox时可用）
- disabled：禁用
- autofocus：当页面加载时，自动聚焦
- name：名字（在提交数据给服务器时，可用于区分数据类型）
- value：取值
type类型的其他取值和input的其他属性, 查看文档: https://developer.mozilla.org/zhCN/docs/Web/HTML/Element/Input

#### input元素的扩展内容
**HTML5对input元素也进行了扩展，在之前我们已经学习过的其中几个属性也是HTML5的特性：**
- placeholder：输入框的占位文字
- multiple：多个值
- autofocus：最多输入的内容
**另外对于input的type值也有很多扩展：**
- date
- time
- number
- tel
- color
- email
- ......
查看MDN文档: https://developer.mozilla.org/zhCN/docs/Web/HTML/Element/Input


### 布尔属性（boolean attributes）
常见的布尔属性有disabled、checked、readonly、multiple、autofocus、selected
布尔属性可以没有属性值，写上属性名就代表使用这个属性：如果要给布尔属性设值，值就是属性名本身

### 表单按钮
**表单可以实现按钮效果:**
- 普通按钮（type=button）：使用value属性设置按钮文字
- 重置按钮（type=reset）：重置它所属form的所有表单元素（包括input、textarea、select）
- 提交按钮（type=submit）：提交它所属form的表单数据给服务器（包括input、textarea、select）
### input和label的关系
label元素一般跟input配合使用，用来表示input的标题
labe可以跟某个input绑定，点击label就可以激活对应的input变成选中

### radio的使用
我们可以将type类型设置为radio变成单选框：name值相同的radio才具备单选功能

### checkbox的使用
我们可以将type类型设置为checkbox变成多选框：属于同一种类型的checkbox，name值要保持一致

### textarea的使用
**textarea的常用属性：** cols：列数；rows：行数
**缩放的CSS设置：**
- 禁止缩放：resize: none
- 水平缩放：resize: horizontal;
- 垂直缩放：resize: vertical;
- 水平垂直缩放：resize: both;

### select和option的使用
**option是select的子元素，一个option代表一个选项**
**select常用属性：**
- multiple：可以多选
- size：显示多少项
**option常用属性：**
- selected：默认被选中

### form常见的属性
**form通常作为表单元素的父元素：**
- form可以将整个表单作为一个整体来进行操作;
- 比如对整个表单进行重置;
- 比如对整个表单的数据进行提交;
**form常见的属性如下：**
**action**：用于提交表单数据的请求URL
**method**：请求方法（get和post），默认是get
**target**：在什么地方打开URL（参考a元素的target）



# HTML5新增元素
## HTML5语义化元素
**在HMTL5之前，我们的网站分布层级通常包括哪些部分呢？**
header、nav、main、footer
**但是这样做有一个弊端：**
- 我们往往过多的使用div, 通过id或class来区分元素；
- 对于浏览器来说这些元素不够语义化；
- 对于搜索引擎来说, 不利于SEO的优化；
**HTML5新增了语义化的元素：**
- \<header\>：头部元素
- \<nav\>：导航元素
- \<section\>：定义文档某个区域的元素
- \<article\>：内容元素
- \<aside\>：侧边栏元素
- \<footer\>：尾部元素
## HTML5其他新增元素
Web端事实上一直希望可以更好的嵌入音频和视频, 特别是21世纪以来, 用户带宽的不断提高, 浏览器因为和视频变得非常容易,在HTML5之前是通过flash或者其他插件实现的, 但是会有很多问题;比如无法很好的支持HTML/CSS特性, 兼容性问题等等

**HTML5增加了对媒体类型的支持：**
- 音频：\<audio\>
- 视频:\<video\>

Video和Audio使用方式有两个：
- 一方面我们可以直接通过元素使用video和autio；
- 另一方面我们可以通过JavaScript的API对其进行控制；

### HTML5新增元素 - video
HTML \<video\>元素 用于在HTML或者XHTML文档中嵌入媒体播放器，用于支持文档内的视频播放。
**video常见的属性:**
| 常见属性 | 值的方式           | 属性作用                                                      |
| -------- | ------------------ | ------------------------------------------------------------- |
| src      | URL地址            | 视频播放的URL地址                                             |
| width    | pixels(像素)       | 设置video宽度                                                 |
| height   | pixels(像素)       | 设置video高度                                                 |
| controls | Boolean类型        | 是否显示控制栏,包括音量，跨帧，暂停/恢复播放。                |
| autoplay | Boolean类型        | 是否视频自动播放(某些浏览器需要添加muted, 比如Chrome)         |
| muted    | Boolean类型        | 是否静音播放                                                  |
| preload  | none/metadata/auto | 是否需要预加载视频. metadata表示预加载元数据(比如视频 时长等) |
|poster|URL地址|一海报帧的URL|

**video支持的视频格式** 每个视频都会有自己的格式, 浏览器的video并非支持所有的视频格式

**video的兼容性写法**
在\<video\>元素中间的内容，是针对浏览器不支持此元素时候的降级处理。
- 内容一：通过\<source\>元素指定更多视频格式的源;
- 内容二：通过p/div等元素指定在浏览器不支持video元素的情况, 显示的内容

### HTML5新增元素 - audio
HTML \<audio\>元素用于在文档中嵌入音频内容, 和video的用法非常类似
**常见属性:**
| 常见属性 | 值的方式    | 属性作用                                              |
| -------- | ----------- | ----------------------------------------------------- |
| src      | URL地址     | 音频播放的URL地址                                     |
| controls | Boolean类型 | 是否显示控制栏,包括音量，进度，暂停/恢复播放。        |
| autoplay | Boolean类型 | 是否视频自动播放(某些浏览器需要添加muted, 比如Chrome) |
| muted    | Boolean类型 | 是否静音播放                                          |
|preload|none/metadata/auto|是否需要预加载视频. metadata表示预加载元数据(比如视频 时长等)|

**audio支持的音频格式** 每个音频都会有自己的格式, 浏览器的audio并非支持所有的视频格式
具体的支持的格式可以通过下面的链接查看:  https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs

在\<audio\>元素中间的内容，是针对浏览器不支持此元素时候的降级处理。

## 新增全局属性 data-*
**在HTML5中, 新增一种全局属性的格式 data-\*, 用于自定义数据属性:**
data设置的属性可以在JavaScript的DOM操作中通过dataset轻松获取到；通常用于HTML和JavaScript数据之间的传递；