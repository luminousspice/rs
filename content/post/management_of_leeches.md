---
slug: "management_of_leeches"
date: "2013-07-13T23:45:22+00:00"
lastmod: "2013-10-17T13:03:26+00:00"
title: "無駄なカード(Leech)になってもAnki学習を続ける方法"
weight: 10
categories: ["Anki"]
tags: ["Anki"]
anki: ["フィルター単語帳","保留","無駄なカード"]
excerpt: "無駄なカード(Leech)になってもAnki学習を続けるために、保留状態から戻す方法とフィルター単語帳で学習する方法を紹介します。"
---
<h2 id="無駄なカード_leech_とは" class="section">無駄なカード(Leech)とは</h2>
<div class="paragraph"><p>無駄なカード(Leech)とは、何度も記憶に失敗したカードのことです。既定では8回、復習で失敗すると無駄なカードになります。</p></div>
<div class="paragraph"><p>無駄なカードの詳細については、Anki日本語マニュアルの<a href="http://wikiwiki.jp/rage2050/?2.0%2FLeeches">無駄カード (Leeches)</a>をご覧ください。</p></div>
<div class="paragraph"><p>問題は、既定の設定では、8回以上失敗し無駄なカードになると自動的に保留されてしまうことです。
この仕組みを知らない方にとっては、繰り返し復習していたカードが、突然単語帳から消えて、行方不明になった感じるのではないかと思います。</p></div>
<div class="paragraph"><p>実際には、単語帳にはそのまま残って、タグ <code>Leech</code> が設定され保留状態になっています。このため、出題から除外されているのです。</p></div>
<div class="paragraph"><p>Ankiマニュアルでは、無駄なカードをそのままの形で学習し続けることは時間の浪費なので、次のように処理することを勧めています。</p></div>
<div class="ulist"><ul>
<li>
<p>
他の項目と記憶の干渉が置きている場合は片方の記憶が完全になるまで、もう一方を保留する。
</p>
</li>
<li>
<p>
記憶する価値があるのか検討して、無駄であれば削除する。
</p>
</li>
<li>
<p>
カードを編集して覚えやすくする。
</p>
</li>
</ul></div>
<h2 id="保留になった無駄なカードを戻すには" class="section">保留になった無駄なカードを戻すには</h2>
<div class="paragraph"><p>Ankiユーザーの皆さんの色々な事情から、無駄と判定されても学習し続けたい場合もあると思います。
次のような手順で通常の復習セッションにカードを戻すことができます。</p></div>
<div class="olist arabic"><div class="title">無駄なカードを保留から復帰する手順</div><ol class="arabic">
<li>
<p>
Ankiのブラウザーを開き、サイドバーから[無駄]項目をクリックしてください。タグ <code>Leech</code> が設定されているカード一覧が表示されます。
</p>
</li>
<li>
<p>
この中から保留を解除したいカードを選択して、ウィンドウ上部の[保留]ボタンを押します。
</p>
</li>
</ol></div>
<h2 id="無駄なカードの設定を変える" class="section">無駄なカードの設定を変える</h2>
<div class="paragraph"><p>毎回無駄なカードが発生するたびに、元に戻す作業を行うのは手間な作業です。
単語帳のオプション設定を編集すると、この処理を変更して、タグ <code>Leech</code> を設定するだけで、保留を行わないようにすることができます。</p></div>
<div class="olist arabic"><div class="title">無駄なカードの処理をタグを追加するだけに変更する手順</div><ol class="arabic">
<li>
<p>
Ankiのメインメニューの単語帳一覧から、設定したい単語帳をクリックします。
</p>
</li>
<li>
<p>
ウィンドウ下の[オプション]ボタンを押します。
</p>
</li>
<li>
<p>
[忘却]タブをクリックします。
</p>
</li>
<li>
<p>
[無駄なカードの処理]という項目のプルダウンメニューから[タグを付けるだけ]を選択します。
</p>
</li>
<li>
<p>
[OK]ボタンを押す。
</p>
</li>
</ol></div>
<div class="imageblock">
<div class="content">
<img src="/images/leech_1.png" alt="単語帳のオプション設定">
</div>
<div class="title">図 1. 単語帳のオプション設定</div>
</div>
<div class="paragraph"><p>これで、無駄なカードに設定されても、学習を続けることができます。</p></div>
<h2 id="無駄なカードを隔離して学習する方法" class="section">無駄なカードを隔離して学習する方法</h2>
<div class="paragraph"><p>無駄なカードを保留したまま、通常の学習セッションと分離して学習することもできます。</p></div>
<div class="paragraph"><p>フィルター単語帳を作成し、検索条件に　<code>tag:leech</code> を設定します。
出題方法で、[無作為]や[忘却回数の多い順]などが設定できます。</p></div>
<div class="imageblock">
<div class="content">
<img src="/images/leech_2.png" alt="無駄なカードを学習するフィルター単語帳">
</div>
<div class="title">図 2. 無駄なカードを学習するフィルター単語帳</div>
</div>
<div class="paragraph"><p>フィルター単語帳の詳しい使い方については、<a href="/how-to-customize-learning/">フィルター単語帳でAnki学習をカスタマイズしよう</a>をご覧ください。</p></div>


