function showToast(icon, title, duration) {
    if (icon === 'loading') {
        wx.showToast({
            title: title,
            icon: 'loading',
            duration: duration ? duration : 2000,
        })
    } else if (icon === 'success') {
        wx.showToast({
            title: title,
            icon: 'success',
            duration: duration ? duration : 2000,
        })
    } else if (icon === 'warn') {
        wx.showToast({
            title: title,
            duration: duration ? duration : 2000,
            image: '../../img/global/loading_fail.png'
        })
    }
}

function showNormalToast(text) {
    if (wx.showLoading) {
        wx.showLoading({
            title: text ? text : '加载中...',
            mask: true
        })
    } else {
        wx.showToast({
            title: text,
            icon: 'loading',
            duration: 2000,
        })
    }
}

function hiddenToast() {
    wx.hideToast();
    if (wx.hideLoading) {
        wx.hideLoading();
    }
}

module.exports = {
    show: showToast,
    showNormalToast: showNormalToast,
    hidden: hiddenToast
};