> https://github.com/MrXujiang/openCoder/blob/master/mockServer/readme.md

# mock 服务平台使用介绍

## 1.启动

```bash
npm run serve
# 或
yarn serve
```

## 2.使用

在 api 目录下定义 api 数据，api 下的目录路径和后端 api 请求保持一致，具体可参考 demo

## 3.路由地图

每次新建或者修改路由数据时会自动新建路由映射文件，可以用映射文件去测试请求，格式为 /api/xxx/xxx

## 4.Demo

<img src="./intro.jpg"/>

## 5.使用注意

> 前端使用时需保证在同一局域网下，如出现跨域，可参考 koa 解决跨域问题的 module，经测试改服务运行良好，如有疑问和建议，欢迎 fork，issue.
