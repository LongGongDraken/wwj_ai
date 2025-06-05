# react 业务
friends 数据
APP
挂载点
页面的显示
- 原生JS
 DOM 编程
 底层API 不够高效
 聚焦于业务
 前端切图崽（html，css + 一点js） -> 前端开发工程师 （微博，美团） JS框架(Vue/React)
 -> node 全栈开发 (node + 数据库) -> react native （ios，android）Android + ios APP
 -> AIGC AI应用 -> 全干工程师
 Web 应用(www.baidu.com) 移动应用(Android IOS)
 Node (server)  AI 统领一切 JS AI全干工程师

## **项目**的创建
- npm 是什么？ node package manager 包管理器
    -node 包管理器 安装react  package APP开发能力
- npm init vite 初始化项目(init)
按vite 模板初始化项目(init vite)
vite vue/react 项目模板和**工程**化
- 选择一些配置
    选择框架（react）
    选择语言（js）
    项目模板， 基于它开始开发
- npm i 安装依赖
    node_modules 包所在
- npm run dev 启动项目
3000 端口启动应用

# 5 W
- what Web App
- how npm init vite 初始化项目并vite的项目模板
- 安装依赖
- 启动应用 http 5173  react 技术栈 Web App
远离JS API编程， 面向于业务

## TODOS 任务列表
    -数据 ['脱单','学习','健身']
    数据在页面上渲染 react 提供点啥 支持这个业务

## react 初体验
- react 组件是完成开发任务的最小单元
- 组件组合html css js 
- 组件就是一个函数
- 返回html 
- 函数体里面return 之前可以申明数据和业务逻辑
- {} js 表达式  不用写DOM API

## 响应式数据
- 数据会发生改变的，数据状态 state
- [todos，setTodos] = useState（初始值） 函数 使用一个数据状态，返回一个数组     声明数据 响应式数据
数组第一项 数据项
数组第二项 修改数据项的方法