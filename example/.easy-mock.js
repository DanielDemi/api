module.exports = {
  output: "api", // 产出到项目下的 api 目录，不用手动创建
  host: "http://10.33.31.96:8899",
  template: "../", 
  projects: [
    {
      id: "5a71648792dd612bd4b83077", // 例：58fef6ac5e43ae5dbea5eb53
      name: "visitor" // 该项目下的 API 生成之后会被放到 api/demo 目录下
    }
  ]
}