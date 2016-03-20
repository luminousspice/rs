---
slug: "anki-shortcuts"
date: "2016-01-09T11:20:37+00:00"
lastmod: "2016-01-09T23:37:36+00:00"
title: "Anki ショートカットキー"
categories: ["Anki"]
tags: ["Anki","ショートカット"]
anki: ["AwesomeTTS","ノートを追加","ブラウザ","学習セッション"]
excerpt: "Anki のショートカットキーをソースコードから直接作成しました。単語帳一覧、カードブラウザー、ノートエディタなど主なユーザーインターフェイスについて、簡単に役割を説明しながらそこで呼び出せるショートカットをまとめました。AwesomeTTS のショートカットも取り上げます。"
---
<section id="preamble">
<p>Anki のショートカットキーをソースコードから直接作成しました。単語帳一覧、カードブラウザー、ノートエディタなど主なユーザーインターフェイスについて、簡単に役割を説明しながらそこで呼び出せるショートカットをまとめました。AwesomeTTS のショートカットも取り上げます。</p>
<p>このショートカット集は、Anki の正式なドキュメントの翻訳ではありません。
筆者が独自に Anki 2.0.33 のソースコードより主なユーザーインターフェイスについてショートカットキーをまとめたものです。このため、文書化されていない機能も含んでおり、将来のバージョンで機能しなくなる場合もあります。また、広く使われているテキスト読み上げ用アドオン AwesomeTTS のショートカットについても一部取り上げました。
ショートカットキーの表記は、OS X の基準に従っています。他のプラットフォームで利用する場合は適宜読み替えください。また、動作確認は Mac 版でのみで行っております。</p>
<p>なお、動画再生ウィンドウのショートカットについては、<a href="/mplayer-shortcut-for-anki-video/">Anki の動画再生に使えるショートカットキー</a>をご覧下さい。</p>
</section>
<section id="メインウィンドウ">
  <div class="page-header">
    <h2>メインウィンドウ</h2>
  </div>
<p>メインウィンドウは、Anki を起動すると最初に表示するウィンドウです。最初は、単語帳一覧を表示し、単語帳を選択すると単語帳概要を表示、学習セッションを開始すると学習画面を表示し、カードを順次表示するというように、同一の画面上でモードを遷移しながら学習に関する内容を表示する画面です。</p>
<p>ウィンドウ上のモードは変化しますが、ショートカットで呼び出せる機能自体は共通して使えるものが大半です。</p>
<div class="imageblock">
<div class="content">
<img src="/images/study-options-decklist.png" alt="単語帳一覧">
</div>
<div class="title">図 1. 単語帳一覧</div>
</div>
<table class="table table-striped" width="" cellspacing="0" cellpadding="4" frame="hsides" rules="rows">
<caption class="title">表 1. メインウィンドウ共通</caption>
<colgroup>
<col class="span1">
<col class="span1">
</colgroup>
<thead>
<tr>
<th>操作内容</th>
<th> キー</th>
</tr>
</thead>
<tbody>
<tr>
<td>統計情報を表示</td>
<td>Shift+S</td>
</tr>
<tr>
<td>AnkiWeb と同期</td>
<td>Y</td>
</tr>
<tr>
<td>単語帳一覧</td>
<td>D</td>
</tr>
<tr>
<td>ノートを追加</td>
<td>A</td>
</tr>
<tr>
<td>ブラウザー</td>
<td>B</td>
</tr>
<tr>
<td>環境設定</td>
<td>Command+,</td>
</tr>
<tr>
<td>Anki を隠す</td>
<td>Command+H</td>
</tr>
<tr>
<td>他のアプリを隠す</td>
<td>Command+Option+H</td>
</tr>
<tr>
<td>最小化 (Mac のみ)</td>
<td>Command+M</td>
</tr>
<tr>
<td>終了</td>
<td>Command+Q</td>
</tr>
<tr>
<td>読み込み</td>
<td>Command+I</td>
</tr>
<tr>
<td>書き出し</td>
<td>Command+E</td>
</tr>
<tr>
<td>元に戻す</td>
<td>Command+Z</td>
</tr>
<tr>
<td>プロファイル変更</td>
<td>Command+Shift+P</td>
</tr>
<tr>
<td>単語帳の学習を開始</td>
<td>/</td>
</tr>
<tr>
<td>フィルター単語帳の作成</td>
<td>F</td>
</tr>
<tr>
<td>ノートタイプの管理</td>
<td>Command+Shift+N</td>
</tr>
<tr>
<td>オンラインマニュアル</td>
<td>F1</td>
</tr>
<tr>
<td>AwesomeTTS 設定 (AwesomeTTS インストール時)</td>
<td>Command+T</td>
</tr>
</tbody>
</table>
<div class="imageblock">
<div class="content">
<img src="/images/anki2013_1.png" alt="単語帳概要">
</div>
<div class="title">図 2. 単語帳概要</div>
</div>
<table class="table table-striped" width="" cellspacing="0" cellpadding="4" frame="hsides" rules="rows">
<caption class="title">表 2. 単語帳概要限定</caption>
<colgroup>
<col class="span1">
<col class="span1">
</colgroup>
<thead>
<tr>
<th>操作内容</th>
<th>キー</th>
</tr>
</thead>
<tbody>
<tr>
<td>オプション</td>
<td>O</td>
</tr>
<tr>
<td>カスタム学習</td>
<td>C</td>
</tr>
<tr>
<td>フィルター単語帳を作成</td>
<td>F</td>
</tr>
<tr>
<td>フィルター単語帳を再構築</td>
<td>R</td>
</tr>
<tr>
<td>フィルター単語帳を空にする</td>
<td>E</td>
</tr>
<tr>
<td>延期を解除</td>
<td>U</td>
</tr>
</tbody>
</table>
<div class="imageblock">
<div class="content">
<img src="/images/cloze2.png" alt="学習画面">
</div>
<div class="title">図 3. 学習画面</div>
</div>
<table class="table table-striped" width="" cellspacing="0" cellpadding="4" frame="hsides" rules="rows">
<caption class="title">表 3. 学習画面限定</caption>
<colgroup>
<col class="span1">
<col class="span1">
</colgroup>
<thead>
<tr>
<th>操作内容</th>
<th>キー</th>
</tr>
</thead>
<tbody>
<tr>
<td>編集</td>
<td>E</td>
</tr>
<tr>
<td>解答を表示</td>
<td>SPACE</td>
</tr>
<tr>
<td>ノートをマーク</td>
<td>*</td>
</tr>
<tr>
<td>カードを延期</td>
<td>-</td>
</tr>
<tr>
<td>ノートを延期</td>
<td>=</td>
</tr>
<tr>
<td>カードを保留</td>
<td>@</td>
</tr>
<tr>
<td>ノートを保留</td>
<td>!</td>
</tr>
<tr>
<td>ノートを削除</td>
<td>delete</td>
</tr>
<tr>
<td>オプション</td>
<td>O</td>
</tr>
<tr>
<td>音声を再生</td>
<td>R</td>
</tr>
<tr>
<td>自分の声を録音</td>
<td>Shift+V</td>
</tr>
<tr>
<td>自分の声を再生</td>
<td>V</td>
</tr>
<tr>
<td>表面を TTS で再生 (AwesomeTTS インストール時)</td>
<td>F3</td>
</tr>
</tbody>
</table>
</section>
<section id="ノート編集">
  <div class="page-header">
    <h2>ノート編集</h2>
  </div>
<p>ノートを編集するには三つの方法があります。ノートを新規追加する、学習画面で表示中カードのノートを編集する、ブラウザーで選択したカードのノートを編集するになります。呼び出し方や終了の仕方は、それぞれ異なりますが、ノートの編集に関する機能は共通です。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_12.png" alt="新規追加">
</div>
<div class="title">図 4. 新規追加</div>
</div>
<table class="table table-striped" width="" cellspacing="0" cellpadding="4" frame="hsides" rules="rows">
<caption class="title">表 4. ノートエディタ共通</caption>
<colgroup>
<col class="span1">
<col class="span1">
</colgroup>
<thead>
<tr>
<th>操作内容</th>
<th>キー</th>
</tr>
</thead>
<tbody>
<tr>
<td>カードを設定</td>
<td>Command+L</td>
</tr>
<tr>
<td>太字</td>
<td>Command+B</td>
</tr>
<tr>
<td>斜字</td>
<td>Command+I</td>
</tr>
<tr>
<td>下線</td>
<td>Command+U</td>
</tr>
<tr>
<td>上付き文字</td>
<td>Command+Shift+=</td>
</tr>
<tr>
<td>下付き文字</td>
<td>Command+=</td>
</tr>
<tr>
<td>書式設定を外す</td>
<td>Command+R</td>
</tr>
<tr>
<td>文字色</td>
<td>F7</td>
</tr>
<tr>
<td>色を変更</td>
<td>F8</td>
</tr>
<tr>
<td>穴埋め</td>
<td>Command+Shift+C</td>
</tr>
<tr>
<td>直前と同じ設定の穴埋め</td>
<td>Command+Option+Shift+C</td>
</tr>
<tr>
<td>メディアを追加</td>
<td>F3</td>
</tr>
<tr>
<td>録音</td>
<td>F5</td>
</tr>
<tr>
<td>LaTeX</td>
<td>Command+T T</td>
</tr>
<tr>
<td>LaTeX インライン書式</td>
<td>Command+T E</td>
</tr>
<tr>
<td>LaTeX ディスプレイ書式</td>
<td>Command+T M</td>
</tr>
<tr>
<td>HTML を編集</td>
<td>Command+Shift+X</td>
</tr>
</tbody>
</table>
<table class="table table-striped" width="" cellspacing="0" cellpadding="4" frame="hsides" rules="rows">
<caption class="title">表 5. 新規追加ウィンドウ限定</caption>
<colgroup>
<col class="span1">
<col class="span1">
</colgroup>
<thead>
<tr>
<th>操作内容</th>
<th>キー</th>
</tr>
</thead>
<tbody>
<tr>
<td>ノートタイプを変更</td>
<td>Command+N</td>
</tr>
<tr>
<td>追加先単語帳を変更</td>
<td>Command+D</td>
</tr>
<tr>
<td>追加</td>
<td>Command+Return</td>
</tr>
<tr>
<td>追加履歴を表示</td>
<td>Command+Shift+H (Mac 以外 Ctrl+H)</td>
</tr>
</tbody>
</table>
<table class="table table-striped" width="" cellspacing="0" cellpadding="4" frame="hsides" rules="rows">
<caption class="title">表 6. 編集ウィンドウ限定</caption>
<colgroup>
<col class="span1">
<col class="span1">
</colgroup>
<thead>
<tr>
<th>操作内容</th>
<th>キー</th>
</tr>
</thead>
<tbody>
<tr>
<td>閉じる</td>
<td>Command+Return</td>
</tr>
</tbody>
</table>
</section>
<section id="カードブラウザー">
  <div class="page-header">
    <h2>カードブラウザー</h2>
  </div>
<p>カードブラウザーはメインウィンドウから呼び出す、カードのさまざまな属性を一括管理する画面です。カードを一つ選択すると、ウィンドウ右下にノートエディタを表示します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/cardtype_2.png" alt="カードブラウザー">
</div>
<div class="title">図 5. カードブラウザー</div>
</div>
<table class="table table-striped" width="" cellspacing="0" cellpadding="4" frame="hsides" rules="rows">
<caption class="title">表 7. カードブラウザー</caption>
<colgroup>
<col class="span1">
<col class="span1">
</colgroup>
<thead>
<tr>
<th>操作内容</th>
<th>キー</th>
</tr>
</thead>
<tbody>
<tr>
<td>検索へフォーカスを移動</td>
<td>Command+F</td>
</tr>
<tr>
<td>フィルターへフォーカスを移動</td>
<td>Command+Shift+R</td>
</tr>
<tr>
<td>カード一覧へフォーカスを移動</td>
<td>Command+Shift+L</td>
</tr>
<tr>
<td>ノートへカーソルを移動</td>
<td>Command+Shift+F</td>
</tr>
<tr>
<td>全てを選択</td>
<td>Command+A</td>
</tr>
<tr>
<td>次のカード</td>
<td>Command+N</td>
</tr>
<tr>
<td>前のカード</td>
<td>Command+P</td>
</tr>
<tr>
<td>先頭まで選択</td>
<td>fn+Shift+← (Mac 以外 Shift+Home)</td>
</tr>
<tr>
<td>画面先頭まで選択</td>
<td>fn+Shift+↑ (Mac 以外 Shift+PgUp)</td>
</tr>
<tr>
<td>画面末尾まで選択</td>
<td>fn+Shift+↓ (Mac 以外 Shift+PgDn)</td>
</tr>
<tr>
<td>末尾まで選択</td>
<td>fn+Shift+→ (Mac 以外 Shift+End)</td>
</tr>
<tr>
<td>同じノートのカードを選択</td>
<td>Command+Shift+A</td>
</tr>
<tr>
<td>情報を表示</td>
<td>Command+Shift+I</td>
</tr>
<tr>
<td>マーク</td>
<td>Command+K</td>
</tr>
<tr>
<td>単語帳を変更</td>
<td>Command+D</td>
</tr>
<tr>
<td>タグを追加</td>
<td>Command+Shift+T</td>
</tr>
<tr>
<td>タグを削除</td>
<td>Command+Option+T</td>
</tr>
<tr>
<td>カードを削除</td>
<td>delete</td>
</tr>
<tr>
<td>プレビューを表示</td>
<td>Command+Shift+P</td>
</tr>
<tr>
<td>検索と置換</td>
<td>Command+Option+F</td>
</tr>
<tr>
<td>ノートタイプの変更</td>
<td>Command+Shift+M</td>
</tr>
<tr>
<td>元に戻す</td>
<td>Command+Z</td>
</tr>
<tr>
<td>閉じる</td>
<td>Command+W</td>
</tr>
<tr>
<td>オンラインマニュアル</td>
<td>F1</td>
</tr>
<tr>
<td>TTS 音声の追加 (AwesomeTTS インストール時)</td>
<td>Command+T</td>
</tr>
</tbody>
</table>
</section>
<section id="プレビュー">
  <div class="page-header">
    <h2>プレビュー</h2>
  </div>
<p>プレビューとは、ブラウザで選択したカードを学習画面での表示イメージをプレビューする機能です。</p>
<div class="imageblock">
<div class="content">
<img src="/images/shared-decks-preview.png" alt="プレビュー">
</div>
<div class="title">図 6. プレビュー</div>
</div>
<table class="table table-striped" width="" cellspacing="0" cellpadding="4" frame="hsides" rules="rows">
<caption class="title">表 8. プレビュー</caption>
<colgroup>
<col class="span1">
<col class="span1">
</colgroup>
<thead>
<tr>
<th>操作内容</th>
<th>キー</th>
</tr>
</thead>
<tbody>
<tr>
<td>音声を再生</td>
<td>R</td>
</tr>
<tr>
<td>次のカード</td>
<td>→</td>
</tr>
<tr>
<td>前のカード</td>
<td>←</td>
</tr>
</tbody>
</table>
</section>
<section id="動画再生">
  <div class="page-header">
    <h2>動画再生</h2>
  </div>
<div class="imageblock">
<div class="content">
<img src="/images/mplayer-shortcut.png" alt="動画再生ウィンドウ">
</div>
<div class="title">図 7. 動画再生ウィンドウ</div>
</div>
<p>動画再生ウィンドウのショートカットについては、<a href="/mplayer-shortcut-for-anki-video/">Anki の動画再生に使えるショートカットキー</a>をご覧下さい。</p>
</section>


