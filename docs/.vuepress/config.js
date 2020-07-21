module.exports = {
	base: '/',
	title: '灵丹药',
	description: '灵丹药的个人博客',
	head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
	plugins: ['@vuepress/back-to-top', '@vuepress/nprogress'],
	themeConfig: {
		search: false,
		nav: [
			{ text: '首页', link: '/' },
			{
				text: 'Git',
				items: [{ text: 'Git入门及常用命令', link: '/Pages/Git/GitStartedAndUsedCommands.md' }]
			},
			{
				text: 'Mac',
				items: [
					{ text: '阻止iCloud同步指定文件夹', link: '/Pages/Mac/iCloudNosync.md' },
					{ text: '更新Flutter环境变量', link: '/Pages/Mac/UpdateFlutterEnvironmentVariable.md' }
				]
			},
			{ text: 'GitHub', link: 'https://github.com/ispanacea' }
		]
	}
}
