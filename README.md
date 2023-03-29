# EventSource Demo

通过3中请求方式学习 服务器端推送技术——Server-Sent Events (SSE)

* EventSource 方法
* fetch 方法
* fetch 与 EventSource结合

## ⚙ 项目启动

* 依赖下载 `yarn` 
* 开发运行 `yarn start`

## SSE 介绍

SSE 是一种 HTML5 技术，它允许服务器向客户端发送事件，从而实现服务器端推送。相对于 WebSockets 或长轮询技术，SSE 提供了更简单的方式来实现服务器端推送，并且支持更广泛的客户端和服务器端。

在 SSE 中，客户端通过向服务器端发送一个 HTTP 请求，请求某个资源，并且指定响应的类型是"text/event-stream"。服务器端在响应请求时，将数据格式化为事件流的形式，并通过 HTTP 响应发送回客户端。客户端通过事件流中的数据，可以实现实时地更新 UI 等操作。