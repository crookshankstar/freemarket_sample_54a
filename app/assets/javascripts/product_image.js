// プレビュー(引数 = inputタグのid)
function preview_file(id){
  function buildImg(index, url){
    var html =
    `<li class="upload--container--upload--item" id="upload">
      <div class="upload--container--upload--item--figure">
        <img data-index="${index}" alt="商品画像" src="${url}" width="116" height="116">
      </div>
      <div class="upload--container--upload--item--button">
        <div class="upload--container--upload--item--button--edit">
          編集
        </div>
        <div class="upload--container--upload--item--button--delete">
            削除
        </div>
      </div>
    </li>`;
    return html;
  }

	// 対象要素を取得
	var target_element = document.getElementById(id);

	// 結果コードを格納する変数
	var result_code = '';

  // アップした画像の数だけ処理
  lastIndex = $('.image:last').data('index');
	for (var i = 0; i < (target_element.files.length); i++){
		// 画像のURLを取得
    var img_url = window.URL.createObjectURL(target_element.files[i]);
    // コードを更新
    result_code += buildImg((i+lastIndex+1), img_url);
  }

  // プレビューを出力
  $('#upload*').remove(); //保存前のプレビュー画像は一旦削除
  $('#preview_result ul').append(result_code);
}

//削除
$(function(){
  $(document).on("click", ".upload--container--upload--item--button--delete",function(){
    $(this).parent().parent().hide();
  });
})