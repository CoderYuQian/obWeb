# Vim文本编辑器

## 正常模式

### iloOaA进入插入模式

- i  在当前光标位置进入插入模式
- l  移动到当前光标所在行首，进入到插入模式
- a  在当前光标位置之后进入插入模式
- A  移动到当前光标所在行尾，进入到插入模式
- o  在当前光标下一行进入插入模式
- O  在当前光标上一行进入插入模式

### 其它常用命令

- vV ctrl+v进入可视模式

	- hjkl  上下左右

		- u  撤销命令

- esc  回到正常模式

	- ctrl+r  重做命令

		- X  删除单个字符

- yy  y$ 复制

	- G定位指定的行

		- ^$ 定位到行的开头和结尾

- p  粘贴

	- ：  进入命令模式

		- r  替换单个字符

- dd d$剪切

## 命令模式

### w 写入文件

- w 文件名 另存文件

	- q  退出

### q! 不保存退出

- !cmd  执行命令

	- /  查找命令

### s/old/new/  替换命令

- set nu 设置命令

## 插入模式

## 可视模式

### v 字符可视化模式

- v  行可视化模式

	- ctrl+v  块可视化模式

*XMind: ZEN - Trial Version*