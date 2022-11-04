# 项目准备
1. 安装node环境
2. 使用vue-cli3创建项目
3. 安装ePub阅读器引擎
   - 安装epubjs报错can not resolve；需要强制安装
4. 准备字体图标、web字体
5. viewport配置和rem设置
6. 样式重置
   - 配置sass
     下载node-sass: https://blog.csdn.net/A_Axiaobai/article/details/123886628
     vue全局引入scss文件： https://blog.51cto.com/u_11666747/5334083
7. 搭建静态资源服务器（使用nginx）
   使用nginx： https://www.jb51.net/article/197921.htm
   ```
   搭建一个简单的服务
       server {
        listen 8085;
        server_name resouce;
        root   /Users/Justin/Desktop/resouce;
        autoindex on;
        location / {
            add_header Access-Control-Allow-Origin *;
        }
        add_header Cache-Control "no-cache, must-revalidate";
    }
   ```