export default [
	{
		en:'Effects let you specify side effects that are caused by rendering itself, rather than by a particular event.',
		zh:'Effects允许您指定由渲染本身，而不是由特定事件引起的副作用。'
	},
	{
		en: 'Refs are an escape hatch that should be used sparingly. Manually manipulating another component’s DOM nodes makes your code even more fragile.',
		zh: 'Refs 是一个应急方案，应该谨慎使用。手动操作 另一个 组件的 DOM 节点会使你的代码更加脆弱。'
	},
	{
		en: 'This example shows how you can use this approach to scroll to an arbitrary node in a long list:',
		zh: '此示例展示了如何使用此方法滚动到长列表中的任意节点：此示例展示了如何使用此方法滚动到长列表中的任意节点：',
	},
	{
		en: 'Now all of the context and reducer wiring is in TasksContext.js. This keeps the components clean and uncluttered, focused on what they display rather than where they get the data:',
		zh: '现在所有的context和reducer连接都在TasksContext.js中。这使组件保持干净整洁，专注于它们显示的内容，而不是它们从哪里获得数据:',
	},
	{
		en: 'Context lets you write components that “adapt to their surroundings” and display themselves differently depending on where (or, in other words, in which context) they are being rendered.',
		zh: '上下文允许您编写“适应其周围环境”的组件，并根据呈现它们的位置(或者换句话说，在哪个上下文中)以不同的方式显示它们。',
	},
	{
		en: 'Here is all the state setting logic migrated to a reducer function:',
		zh: '这里是迁移到reducer函数的所有状态设置逻辑:',
	},
	{
		en: 'To lift state up, you must locate the closest common parent component of both of the child components that you want to coordinate:',
		zh: '要提升状态，你必须找到你想要协调的两个子组件中最近的公共父组件:',
	},
	{
		en: 'Structuring state well can make a difference between a component that is pleasant to modify and debug, and one that is a constant source of bugs.',
		zh: '构建良好的 state 可以让组件变得易于修改和调试，而不会经常出错。',
	},
	{
		en: 'But there is one other factor at play here',
		zh: '但这里还有一个因素在起作用',
	},
	{
		en: 'When developing in “Strict Mode”,React calls each component’s function twice, which can help surface mistakes caused by impure functions.',
		zh: '在“严格模式”下开发时，React 会调用每个组件的函数两次，这有助于发现由于不纯函数造成的错误。',
	},
	{
		en: 'The array returned by useState always has exactly two items.',
		zh: 'useState 返回的数组永远有两个元素。',
	},
	{
		en: 'Local variables don’t persist between renders. When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.',
		zh: '局部变量在渲染之间不会持久存在。当React第二次渲染这个组件时，它从头开始渲染它——它不考虑对局部变量的任何更改。',
	},
	{
		en: 'If your components get messy with too much nested conditional markup, consider extracting child components to clean things up.',
		zh: '如果您的组件因过多的嵌套条件标记而变得混乱，请考虑提取子组件来清理内容。',
	},
	{
		en: 'JavaScript has a compact syntax for writing a conditional expression — the conditional operator or “ternary operator”.',
		zh: 'JavaScript 具有用于编写条件表达式的紧凑语法——条件运算符或“三元运算符”。',
	},
	{
		en: 'While this duplication isn’t harmful, it could make your code harder to maintain',
		zh: '虽然这种重复并不会造成伤害，但它可能会使您的代码更难维护',
	},
	{
		en: 'If double curly braces after person= confuse you, recall they’re merely an object inside the JSX curlies.',
		zh: '如果 person= 之后的双大括号让您感到困惑，请记住它们只是 JSX 花括号内的一个对象。',
	},
];