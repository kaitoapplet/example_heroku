function show1() {
//id = dom1のものを取得 -> pタグ
    var result = document.getElementById('dom1');
//現在時刻を取得
    var nowDate = new Date();
//取ってきたpタグの文字を変換
    result.innerText = nowDate.toLocaleString();
}

function show2_p() {
//複数個あるので配列として取得
    var results = document.getElementsByTagName('p');
//一つずつ操作する
    for (var i = 0; i < results.length; i++ ) {
//スーパーを先頭につける
        results[i].innerText = "スーパー" + results[i].innerText;
    }
}

function show2_div() {

    var results = document.getElementsByTagName('div');
    for (var i = 0; i < results.length; i++ ) {

        results[i].innerText = "スーパー" + results[i].innerText;
    }
}

function show3() {
    var results = document.getElementsByName("dom");
    console.log('3つ目だよ');
}

function show4() {
    var results = document.getElementsByClassName('foo');
    for (var i = 0; i < results.length; i++) {
        console.log(results[i].innerText)
        }
}