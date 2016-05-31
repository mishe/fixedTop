# pc端固定位置组件

主要用于左右2栏或3栏布局的帖子正文或列表页的展示，但一边的内容可能会很长，而另一边内容又很少，出于页面的美观，甚至是一些体现的优化，需要把其中的一部分内容在页面滚动超过一定位置时，固定的展示在一个位置上。

这个组件支持多块内容的固定展示，也支持，自定义的固定位置的提前量，另外这里没有绑定window.scroll  事件，而是采用了循环检测的方式，采用16ms的间隔；

## 使用范例
### 方式1：固定位置
```javascript
$('.fixedTop1').fixedTop();
```

### 方式2：固定位置,并设置zindex
```javascript
$('.fixedTop1').fixedTop({
    z-index:111
});
```

### 方式3：固定位置,设置zindex,设置距离上边界的距离
```javascript
$('.fixedTop1').fixedTop({
    top: 55,
    z-index:111
});
```

### 方式4：固定位置,设置zindex,设置距离上边界的距离，并设置页底距离
```javascript
$('.fixedTop1').fixedTop({
    top: 55,
    z-index:111，
    bottom:180
});
```
