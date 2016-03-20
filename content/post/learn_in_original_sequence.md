---
slug: "learn_in_original_sequence"
date: "2013-07-08T00:00:15+00:00"
lastmod: "2013-07-08T00:08:56+00:00"
title: "Ankiのノートを追加順に学習する方法"
categories: ["Anki"]
tags: ["Anki"]
anki: ["フィルター単語帳","追加順に学習"]
excerpt: "ノートの順番に意味があり、毎回最初から順番に学習したい場合があります。例えば、詩や文章の暗誦などに使う場合です。Ankiの既定の機能は、ノート毎の解答履歴によって、復習間隔や順序を設定します。この機能を外して、学習する方法を紹介します。"
---
<section id="順番に意味があるノートを学習する">
  <div class="page-header">
    <h2>順番に意味があるノートを学習する</h2>
  </div>
<div class="paragraph"><p>ノートの順番に意味があり、毎回最初から順番に学習したい場合があります。例えば、詩や文章の暗誦などに使う場合です。
Ankiの既定の機能は、ノート毎の解答履歴によって、復習間隔や順序を設定します。
この機能を外して、学習する方法を紹介します。</p></div>
<div class="paragraph"><p>例として、単語帳 <code>default</code> に100枚のカードがあり、毎日先頭から順番に20枚ずつ5日に分けて学習したいとします。</p></div>
<div class="paragraph"><p>まず、20枚ずつタグを付けます。たとえば 1-20 まではsession1、21−40 までは、session2 と設定し、最後の session5 は　81−100　のカードに割り当てます。</p></div>
<div class="paragraph"><p>タグの割り当て方は、Ankiに読み込む前にテキストファイルの状態で表計算ソフトによって設定する方法 (参考 <a href="/how-to-import/">Ankiにデータをまとめて取り込む</a>) と既に読み込み済みのカードをブラウザーから選んで設定する方法 (参考: <a href="/browser-overview/">Ankiのブラウザーの使い方とデータ検索</a>) の2種類があります。</p></div>
</section>
<section id="フィルター単語帳の設定">
  <div class="page-header">
    <h2>フィルター単語帳の設定</h2>
  </div>
<div class="paragraph"><p>次に20枚ずつに分割したsession毎に、ノートの追加順にカードを表示するフィルター単語帳を作ります。
メニューバーから[ツール]&gt;[フィルター単語帳]を選択して(またはショートカット F)、フィルター単語帳設定画面を開きます。</p></div>
<div class="paragraph"><p>設定項目は次の通りです。</p></div>
<div class="ulist"><div class="title">フィルター単語帳の設定例</div><ul>
<li>
<p>
検索欄には、<code>"deck:&lt;単語帳名&gt;" "tag:&lt;タグで指定するsession名&gt;"</code> を入力します。
</p>
</li>
<li>
<p>
最大枚数は、20枚を指定。
</p>
</li>
<li>
<p>
出題方法は、[追加した順番]を指定します。
</p>
</li>
<li>
<p>
項目[この単語帳の解答に基づいてカードをスケジュールし直す] のチェックを外す。
</p>
</li>
<li>
<p>
項目[カスタム学習ステップ]をチェックし、20枚のカードを学習するのに掛かる時間より十分余裕のある時間を分単位で入力します。例えば10。
</p>
</li>
</ul></div>
<div class="imageblock">
<div class="content">
<img src="/images/learn_in_original_squence_1.png" alt="フィルター単語帳の設定">
</div>
<div class="title">図 1. フィルター単語帳の設定</div>
</div>
<div class="paragraph"><p>[作成ボタン]を押すと、フィルター単語帳の作成が完了します。
単語帳一覧に戻り、[カスタム学習セッション]という名前で保存しているフィルター単語帳の名前を変更します。例えば、タグ[session1]のフィルター単語帳には <code>session1</code> という名前をつけます。</p></div>
<div class="paragraph"><p>これを session1 から　session5 まで全てのタグに対して、フィルター単語帳を作成します。</p></div>
<div class="paragraph"><p>なお、フィルター単語帳の詳しい設定方法については、<a href="/how-to-customize-learning/">フィルター単語帳でAnki学習をカスタマイズしよう</a>をご覧ください。</p></div>
</section>
<section id="フィルター単語帳の使い方">
  <div class="page-header">
    <h2>フィルター単語帳の使い方</h2>
  </div>
<div class="paragraph"><p>毎日順番に　session1 から　session5 の中から一つづつフィルター単語帳を選択して学習すると、100枚のカードを追加した順番に20枚ずつ学習できます。</p></div>
<div class="paragraph"><p>フィルター単語帳の使い方は次の通りです。</p></div>
<div class="olist arabic"><ol class="arabic">
<li>
<p>
毎日順番にフィルター単語帳を選択して開きます。
</p>
</li>
<li>
<p>
画面下の[再構築]ボタンを押して初期化します。
</p>
</li>
<li>
<p>
[学習する]ボタンを押して学習をはじめます。
</p>
</li>
</ol></div>
<div class="paragraph"><p>解答を表示した後に、この問題の難易度を選択するボタンが次のように表示されます。</p></div>
<div class="imageblock">
<div class="content">
<img src="/images/learn_in_original_squence_2.png" alt="解答表示後のボタン">
</div>
<div class="title">図 2. 解答表示後のボタン</div>
</div>
<div class="ulist"><ul>
<li>
<p>
毎回再学習をせずに終了するなら、常に(終了)ボタンを押します。
</p>
</li>
<li>
<p>
間違えたカードだけ、連続表示の後に学習し直したいなら[&lt;10分]ボタンを押します。
</p>
</li>
</ul></div>
<div class="paragraph"><p>その日、もう一度最初から20枚のカードを表示し直したいなら、フィルター単語帳の先頭に戻り、[再構築]ボタンを押します。
するとカードは初期化されます。</p></div>
</section>


