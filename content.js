
// 要素生成
var getStyledDom = (text) => {
  var dom = document.createElement("div")
  dom.textContent = text
  dom.attributeStyleMap.set('position', 'absolute')
  dom.attributeStyleMap.set('left', '17px')
  dom.attributeStyleMap.set('top', '30px')
  dom.attributeStyleMap.set('color', 'black')
  dom.attributeStyleMap.set('font-size', '20px')
  dom.classList.add('approval-counter')

  return dom
}

// github が pjaxを使っているため、 ページングで拡張が再コールされない。
// なので、 setInterval + querySelector('.approval-counter')存在チェックをしている
setInterval(() => {
  // review approval が含まれる要素を取得
  var selectedDom = document.querySelectorAll('[aria-label*="review approval"]');
  var approvalList = Array.from(selectedDom,  dom => dom)

  approvalList.forEach(d => {
    const parentNode = d.parentElement.parentElement.parentElement

    if (parentNode.querySelector('.approval-counter')) {
      return
    }

    const label = d.getAttribute("aria-label")
    const approveCount = parseInt(label, 10)
    const dom = getStyledDom(approveCount)
    parentNode.appendChild(dom)
  })
}, 500)
