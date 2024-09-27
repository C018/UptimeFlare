const pageConfig = {
  // 你的状态页面标题
  title: "M.'s Status Page",
  // 在状态页面头部显示的链接，可以将highlight设置为true
  links: [
    { link: 'https://okr.pub', label: '首页' },
    { link: 'https://blog.okr.pub', label: '博客' },
    { link: 'mailto:me@okr.pub', label: '给我发邮件', highlight: true },
  ],
}

const workerConfig = {
  // 除非状态发生变化，否则每隔3分钟写入KV
  kvWriteCooldownMinutes: 3,
  // 通过取消注释下面的行为状态页面和API启用HTTP基本认证，格式为<用户名>:<密码>
  // passwordProtection: 'username:password',
  // 在此定义你的所有监控
  monitors: [
    // 示例HTTP监控
    {
      // id应该是唯一的，如果id保持不变将保留历史记录
      id: 'yxc',
      // name用于状态页面和回调消息
      name: '云小宠',
      // method应该是有效的HTTP方法
      method: 'GET',
      // target是有效的URL
      target: 'https://pet.fsan-cloud.com/',
      // [可选] tooltip只用于状态页面显示工具提示
      tooltip: '云小宠-芸芸相伴，宠你所宠',
      // [可选] statusPageLink只用于状态页面上的可点击链接
      statusPageLink: 'https://pet.fsan-cloud.com/',
      // [可选] expectedCodes是一个可接受的HTTP响应码数组，如果未指定，默认为2xx
      expectedCodes: [200],
	  checkLocationWorkerRoute: 'https://cfget.okr.pub/'
    },
    // 示例TCP监控
    {
      id: 'yxc-server',
      name: '云小宠服务器',
      // method对于tcp监控应该为TCP_PING
      method: 'TCP_PING',
      // target对于tcp监控应该为主机:端口
      target: '47.108.77.41:80',
      tooltip: '云小宠服务器可用性监控',
	  checkLocationWorkerRoute: 'https://cfget.okr.pub/'
    },
    // 示例HTTP监控
    {
      // id应该是唯一的，如果id保持不变将保留历史记录
      id: 'qz',
      // name用于状态页面和回调消息
      name: '轻找',
      // method应该是有效的HTTP方法
      method: 'GET',
      // target是有效的URL
      target: 'https://qz.fsan-cloud.com/',
      // [可选] tooltip只用于状态页面显示工具提示
      tooltip: '轻找-专业防丢，找物平台',
      // [可选] statusPageLink只用于状态页面上的可点击链接
      statusPageLink: 'https://qz.fsan-cloud.com/',
      // [可选] expectedCodes是一个可接受的HTTP响应码数组，如果未指定，默认为2xx
      expectedCodes: [200],
	  checkLocationWorkerRoute: 'https://cfget.okr.pub/'
    },
    // 示例HTTP监控
    {
      // id应该是唯一的，如果id保持不变将保留历史记录
      id: 'friend',
      // name用于状态页面和回调消息
      name: '哮友录',
      // method应该是有效的HTTP方法
      method: 'GET',
      // target是有效的URL
      target: 'https://friend.fsan-cloud.com/',
      // [可选] tooltip只用于状态页面显示工具提示
      tooltip: '哮友录',
      // [可选] statusPageLink只用于状态页面上的可点击链接
      statusPageLink: 'https://friend.fsan-cloud.com/',
      // [可选] expectedCodes是一个可接受的HTTP响应码数组，如果未指定，默认为2xx
      expectedCodes: [200],
	  checkLocationWorkerRoute: 'https://cfget.okr.pub/'
    },
    // 示例TCP监控
    {
      id: 'qz-friend-server',
      name: '轻找哮友录服务器',
      // method对于tcp监控应该为TCP_PING
      method: 'TCP_PING',
      // target对于tcp监控应该为主机:端口
      target: '47.108.51.220:80',
      tooltip: '轻找哮友录服务器可用性监控',
	  checkLocationWorkerRoute: 'https://cfget.okr.pub/'
    },
    // 示例HTTP监控
    {
      // id应该是唯一的，如果id保持不变将保留历史记录
      id: 'yczq',
      // name用于状态页面和回调消息
      name: '匀城智犬',
      // method应该是有效的HTTP方法
      method: 'GET',
      // target是有效的URL
      target: 'https://yczq.dygayczq.com/',
      // [可选] tooltip只用于状态页面显示工具提示
      tooltip: '匀城智犬-城市犬只智能管理服务平台',
      // [可选] statusPageLink只用于状态页面上的可点击链接
      statusPageLink: 'https://yczq.dygayczq.com/',
      // [可选] expectedCodes是一个可接受的HTTP响应码数组，如果未指定，默认为2xx
      expectedCodes: [200],
	  checkLocationWorkerRoute: 'https://cfget.okr.pub/'
    },
    // 示例TCP监控
    {
      id: 'yczq-server',
      name: '匀城智犬服务器',
      // method对于tcp监控应该为TCP_PING
      method: 'TCP_PING',
      // target对于tcp监控应该为主机:端口
      target: '101.37.76.72:80',
      tooltip: '匀城智犬服务器可用性监控',
	  checkLocationWorkerRoute: 'https://cfget.okr.pub/'
    },
  ],
  notification: {
    // [可选] apprise API服务器URL
    // 如果未指定，将不会发送通知
    appriseApiServer: "https://apprise.okr.pub/notify",
    // [可选] apprise的接收者URL，参考 https://github.com/caronc/apprise
    // 如果未指定，将不会发送通知
    recipientUrl: "barks://bark.okr.pub/poKYfVguXHJDMVPJoJcmgU",
    // [可选] 通知消息中使用的时区，默认为 "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [可选] 发送通知前的宽限期（以分钟为单位）
    // 仅在监控在初始故障后连续N次检查中处于故障时发送通知
    // 如果未指定，通知将立即发送
    gracePeriod: 3,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 当任何监控状态发生变化时将调用此回调
      // 在此写入任何TypeScript代码

      // 此回调不会遵循宽限期设置，状态变化时将立即调用
      // 如果你想实现宽限期，你需要手动处理
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 如果任何监控发生持续事件，此回调将每分钟调用一次
      // 在此写入任何TypeScript代码
    },
  },
}

// 别忘了这一点，否则编译会失败。
export { pageConfig, workerConfig }
