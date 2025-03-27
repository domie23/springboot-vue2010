const base = {
    get() {
        return {
            url : "http://localhost:8080/yizhanshijiazhuangfuwu/",
            name: "yizhanshijiazhuangfuwu",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yizhanshijiazhuangfuwu/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "一站式家装服务管理系统"
        } 
    }
}
export default base
