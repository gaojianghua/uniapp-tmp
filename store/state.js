export default {
	/**
	 * 系统相关数据
	**/
	phoneHeight: uni.getStorageSync('phoneHeight') || {},	//手机屏幕高度
	statusHeight: uni.getStorageSync('statusHeight') || 0, //系统状态栏高度
	miniProgramCapsule: uni.getStorageSync('miniProgramCapsule') || {}, //小程序胶囊信息
	navbarHeight: uni.getStorageSync('navbarHeight') || 44, //自定义顶部导航栏高度
	// #ifdef APP-PLUS
	tabbarHeight: 0,	// APP端底部导航栏高度
	// #endif
	// #ifndef APP-PLUS
	tabbarHeight: 50,	// 除了APP的其他端底部导航栏高度
	// #endif
	lang: uni.getStorageSync('lang') || 'en',	//国际化多语言
	/**
	 * 自定义 tabbar 数据
	**/
	tabbar: [{
			pagePath: 'pages/tabbar/home/index',
			iconPath: '/static/img/tabbar/home.png',
			selectedIconPath: '/static/img/tabbar/home-active.png',
			text: 'page.首页'
		},
		{
			pagePath: 'pages/tabbar/kind/index',
			iconPath: '/static/img/tabbar/kind.png',
			selectedIconPath: '/static/img/tabbar/kind-active.png',
			text: 'page.分类'
		},
		{
			pagePath: 'pages/tabbar/media/index',
			iconPath: '/static/img/tabbar/media.png',
			selectedIconPath: '/static/img/tabbar/media-active.png',
			text: 'page.娱乐'
		},
		{
			pagePath: 'pages/tabbar/cart/index',
			iconPath: '/static/img/tabbar/cart.png',
			selectedIconPath: '/static/img/tabbar/cart-active.png',
			text: 'page.购物车'
		},
		{
			pagePath: 'pages/tabbar/mine/index',
			iconPath: '/static/img/tabbar/mine.png',
			selectedIconPath: '/static/img/tabbar/mine-active.png',
			text: 'page.我的'
		}
	],
	/**
	 * 实际业务相关数据
	**/
	token: uni.getStorageSync('token') || '',	// 登录凭证
	userinfo: uni.getStorageSync('userinfo') || {},		// 用户信息
	sysConfig: uni.getStorageSync('config') || {},		// 业务系统配置
	liveCity: uni.getStorageSync('liveCity') || '武汉',		// 所在城市
}
