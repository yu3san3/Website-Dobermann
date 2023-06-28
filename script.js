// ヘッダーのボタンを取得
const headerButtons = document.querySelectorAll(".header-menu a");

// ボタンにクリックイベントを設定
for (let button of headerButtons) {
  button.addEventListener("click", function (event) {
    // デフォルトの動作をキャンセル
    event.preventDefault();
    // ボタンのhref属性から対象の要素のidを取得
    const targetId = button.getAttribute("href").slice(1);
    // 対象の要素を取得
    const targetElement = document.getElementById(targetId);
    // 対象の要素までスクロールする
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
}