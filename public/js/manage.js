function rotateCard() {
  var cardLeft = document.querySelector(".card-left");
  var rightContent = document.getElementById("checkContent");

  // 添加旋转动画的类
  cardLeft.classList.add("rotate-card");

  // 延迟一半时间后替换内容
  setTimeout(function () {
    // 替换内容
    var temp = cardLeft.innerHTML;
    cardLeft.innerHTML = rightContent.innerHTML;
    rightContent.innerHTML = temp;
  }, 10);

  // 延迟完成后移除旋转动画的类
  setTimeout(function () {
    cardLeft.classList.remove("rotate-card");
    // 在事件完成后将.card-left向左偏转5度
    cardLeft.style.transform = "rotate(0deg)";
  }, 250);
}