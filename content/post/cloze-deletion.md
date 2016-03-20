---
slug: "cloze-deletion"
date: "2013-06-18T00:00:00+00:00"
lastmod: "2014-10-03T00:02:22+00:00"
title: "Ankiにおける空欄補充問題の作り方"
categories: ["Anki"]
tags: ["Anki"]
anki: ["穴埋め","解答キー入力"]
excerpt: "Anki上で空欄補充問題(穴埋め問題, Cloze Deletion)を作る方法を説明します。空欄にヒントを加える方法、複数の空欄を設定する方法、解答キー入力機能を使った応用例を紹介します。"
---
<section id="preamble">
<p>Anki上で空欄補充問題(穴埋め問題, Cloze Deletion)を作る方法を説明します。空欄にヒントを加える方法、複数の空欄を設定する方法、解答キー入力機能を使った応用例を紹介します。</p>
</section>
<section id="ノートタイプの設定">
  <div class="page-header">
    <h2>ノートタイプの設定</h2>
  </div>
<p>まず基本的な、空欄補充(穴埋め)問題を作ってみましょう。
穴埋め問題を作るには、ノートタイプを[穴埋め(cloze)]に設定する必要があります。追加ウィンドウの左上のボタンを押して設定します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_4_3.png" alt="ノートタイプを穴埋めに設定">
</div>
<div class="title">図 1. ノートタイプを穴埋めに設定</div>
</div>
</section>
<section id="一番単純な例">
  <div class="page-header">
    <h2>一番単純な例</h2>
  </div>
<p>かんたんな例として次の引用文から"many"を問う空欄補充問題を作ってみましょう。</p>
<blockquote>
<p>If you want to have good ideas you must have many ideas.</p>
<small><a target="_new" href="http://en.wikiquote.org/wiki/Linus_Pauling">Linus Pauling</a></small>
</blockquote>
<p>設定の仕方は、追加ウィンドウで、"many"を選択し、[&#8230;]ボタンを押します。
すると"many"は、<code>{{c1::many}}</code> に変わります。</p>
<div class="imageblock">
<div class="content">
<img src="/images/cloze1.png" alt="追加ウィンドウ">
</div>
<div class="title">図 2. 追加ウィンドウ</div>
</div>
<p>この部分は自分でタイプしても構いません。</p>
<pre>If you want to have good ideas you must have {{c1::many}} ideas.</pre>
<p>このカードを実際に表示すると <code>{{c1::many}}</code> が[&#8230;]に置き換わります。</p>
<div class="imageblock">
<div class="content">
<img src="/images/cloze2.png" alt="空欄補充問題の表示例">
</div>
<div class="title">図 3. 空欄補充問題の表示例</div>
</div>
</section>
<section id="ヒントを加える">
  <div class="page-header">
    <h2>ヒントを加える</h2>
  </div>
<p></p>
<p>穴埋めの設定は単語毎に設定する必要はありません。</p>
<p><strong>manyの先頭の"m"は表示する例</strong></p>
<pre>If you want to have good ideas you must have m{{c1::any}} ideas.</pre>
<p>カードには次のように表示します。</p>
<p><strong>mだけを残して空欄表示する</strong></p>
<pre>If you want to have good ideas you must have m[...] ideas.</pre>
<p>[&#8230;]の内容をヒントに置き換えることもできます。</p>
<p><strong>空欄表示[&#8230;]を[how much]に置き換えた例</strong></p>
<pre>If you want to have good ideas you must have {{c1::many::how much}} ideas.</pre>
<p>カード面の空欄表示の中にヒント[how much]が表示されます。</p>
<p><strong>空欄内にヒントを表示</strong></p>
<pre>If you want to have good ideas you must have [how much] ideas.</pre>
</section>
<section id="複数の空欄を設定する">
  <div class="page-header">
    <h2>複数の空欄を設定する</h2>
  </div>
<p></p>
<p>一つの文に複数の空欄を設定することもできます。先ほどの文に"good"を空欄に設定を追加してみましょう。</p>
<pre>If you want to have {{c2::good::quality}} ideas you must have {{c1::many::how much}} ideas.</pre>
<p>この場合、一つのカードに空欄が2つできるのではなく、空欄を一つ含むカードが2枚できます。</p>
<p><strong>"many"を問うカード</strong></p>
<pre>If you want to have good ideas you must have [how much] ideas.</pre>
<p><strong>"good"を問うカード</strong></p>
<pre>If you want to have [quality] ideas you must have many ideas.</pre>
<p><strong>注意</strong>
複数の空欄を設定する時、入れ子にすることはできません。</p>
</section>
<section id="キー入力機能を追加する">
  <div class="page-header">
    <h2>キー入力機能を追加する</h2>
  </div>
<p></p>
<p>解答をキー入力する問題も作成できます。
この場合は、カードテンプレートの編集が必要になります。</p>
<p>穴埋め問題の下に、解答を入力するフィールドを設定できます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/anki209_3.png" alt="キー入力内容と正解の比較">
</div>
<div class="title">図 4. 表面の解答キー入力画面</div>
</div>
<p>穴埋め問題の解答をテキストフィールドにキー入力し、[解答を表示]ボタンを押します。
間違っている場合は正解と比較結果を表示します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/anki209_4.png" alt="入力内容と正解の比較">
</div>
<div class="title">図 5. 裏面のキー入力した解答と正解の比較</div>
</div>
<p>具体的な設定例は、<a href="/type_answer/">Anki解答キー入力機能の使い方</a>で説明しています。</p>
<p>穴埋め問題の詳しい説明は、ユーザーマニュアル<a target="_new" href="http://wikiwiki.jp/rage2050/?ClozeDeletion">穴埋め問題</a>をご覧ください。</p>
</section>

