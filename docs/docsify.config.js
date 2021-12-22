window.$docsify = {
  loadSidebar: true,
  name: '',
  repo: '',
  themeable: {
    readyTransition: true, // default
    responsiveTables: true  // default
  },
  // 完整配置参数
  search: {
    maxAge: 86400000, // 过期时间，单位毫秒，默认一天
    paths: 'auto', // [] or 'auto'
    placeholder: '搜索',
    noData: '找不到结果',
    // 搜索标题的最大层级, 1 - 6
    depth: 3,
    hideOtherSidebarContent: false, // 是否隐藏其他侧边栏内容
    // 避免搜索索引冲突
    // 同一域下的多个网站之间
    // namespace: 'website-1',
    // 使用不同的索引作为路径前缀（namespaces）
    // 注意：仅适用于 paths: 'auto' 模式
    //
    // 初始化索引时，我们从侧边栏查找第一个路径
    // 如果它与列表中的前缀匹配，我们将切换到相应的索引
    // pathNamespaces: [],
    // 您可以提供一个正则表达式来匹配前缀。在这种情况下，
    // 匹配到的字符串将被用来识别索引
    // pathNamespaces: /^(\/(zh-cn|ru-ru))?(\/(v1|v2))?/
  }
}
