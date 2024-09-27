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
      id: 'home',
      // name用于状态页面和回调消息
      name: '我的主页',
      // method应该是有效的HTTP方法
      method: 'GET',
      // target是有效的URL
      target: 'https://okr.pub',
      // [可选] tooltip只用于状态页面显示工具提示
      tooltip: '这是我的主页',
      // [可选] statusPageLink只用于状态页面上的可点击链接
      statusPageLink: 'https://okr.pub',
      // [可选] expectedCodes是一个可接受的HTTP响应码数组，如果未指定，默认为2xx
      expectedCodes: [],
      // [可选] 超时（以毫秒为单位），如果未指定，默认为10000
      timeout: 10000,
      // [可选] 需要发送的头部
      headers: {
        'User-Agent': '',
        Authorization: '',
      },
      // [可选] 需要发送的主体
      body: '',
      // [可选] 如果指定，响应必须包含该关键词才能被视为正常。
      responseKeyword: 'success',
      // [可选] 如果指定，检查将在你指定的区域运行，
      // 在设置此值之前，请参考文档 https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup
      checkLocationWorkerRoute: '',
    },
    // 示例TCP监控
    {
      id: '1111_tcp_monitor',
      name: '1111DNSTCP',
      // method对于tcp监控应该为TCP_PING
      method: 'TCP_PING',
      // target对于tcp监控应该为主机:端口
      target: '1.1.1.1:53',
      tooltip: '1111DNS可用性监控',
      statusPageLink: 'https://1.1.1.1',
      timeout: 5000,
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
    gracePeriod: 5,
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
