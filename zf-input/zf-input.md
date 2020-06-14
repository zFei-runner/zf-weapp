##### 文本输入框：

	* 可以选择输入手机号码或者验证码（其余功能需要根据场景自己开发），同时对输入的内容进行校验
	* 可以自定义校验失败的文案提示以及样式的修改
	* 在失去焦点以及当前类型的最大长度的时候会开启校验，校验不通过鬼进行文案提示手动删除文本框中的内容的时候，当长度为0时，默认关闭该校验

```js
<zf-input
	label="" // 标题 ---- 如果不传，默认不展示
	type="text" // 输入的文本的类型，默认为text ,可选择的类型为： text(文本输入键盘) number(数字输入键盘) idcard(身份证输入键盘) digit(带小数点的数字键盘)
	checkType="" // 正则校验的类型, 默认为手机号码 手机号码校验mobile 验证码yzm
	placehold="" // placeholder
	placeholderStyle="" // placeholder的自定义样式
	inputStyle="" // input框的自定义样式
	errMsg="" // 报错信息，做正则校验，错误时的提示语
	errMsgStyle="" // 报错信息样式设置
	bindinput="oninput" // 文本输入事件，该事件只会在正则校验通过后才会返回输入的值
>
	<view class="slot"><view> // 插槽，position:absolute绝对定位来控制插槽的位置
</zf-input>
```

