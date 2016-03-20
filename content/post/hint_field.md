---
slug: "hint_field"
date: "2013-07-07T15:00:46+00:00"
lastmod: "2014-01-17T17:12:15+00:00"
title: "Ankiのカードにヒントを付ける方法"
categories: ["Anki"]
tags: ["Anki"]
anki: ["ヒント"]
excerpt: "Ankiのカードにヒント用のフィールドを使ってヒントを付ける方法について紹介します。"
---
<section id="カードにヒントを付ける方法">
  <div class="page-header">
    <h2>カードにヒントを付ける方法</h2>
  </div>
<div class="paragraph"><p>穴埋め機能を使って空欄にヒントを付ける方法は、<a href="/cloze-deletion/">Ankiにおける空欄補充問題の作り方</a>で説明しました。この場合は、問題のフィールドの中にヒントを書き込む方法です。</p></div>
<div class="paragraph"><p>この方法とは別に、ある特定フィールドをヒント用に指定することができます。</p></div>
</section>
<section id="ヒント用のフィールドを追加する">
  <div class="page-header">
    <h2>ヒント用のフィールドを追加する</h2>
  </div>
<div class="paragraph"><p>新規にヒント用のフィールドを追加するには、追加ウィンドウから画面左上[フィールド]ボタンを押して、フィールド管理画面から追加します。</p></div>
<div class="imageblock">
<div class="content">
<img src="/images/hint_field_1.png" alt="images/hint_field_1.png">
</div>
<div class="title">図 1. ヒント用のフィールドを追加</div>
</div>
<div class="paragraph"><p>この例では、フィールド名をあえて「ヒント」としました。その理由は、カード面に表示するヒントへのリンクが 「&lt;ヒントフィールドの名前&gt;を表示」となるからです。</p></div>
<div class="paragraph"><p>ヒント用のフィールドが、追加ウィンドウに現れたところで、このノートのヒントを入力します。
この例では、コロケーションと反対語をヒントに使いました。</p></div>
<div class="imageblock">
<div class="content">
<img src="/images/hint_field_2.png" alt="images/hint_field_2.png">
</div>
<div class="title">図 2. ヒント用のフィールドが追加ウィンドウに現れた</div>
</div>
</section>
<section id="ヒントをカードに追加する">
  <div class="page-header">
    <h2>ヒントをカードに追加する</h2>
  </div>
<div class="paragraph"><p>追加ウィンドウから画面左上の[カード]ボタンを押して、カードレイアウトを表示します。
画面左上の表面のテンプレートにヒントフィールドを表示する設定をします。 <code>{{hint:&lt;ヒントに使いたいフィールドの名前&gt;}}</code> を指定します。</p></div>
<div class="imageblock">
<div class="content">
<img src="/images/hint_field_3.png" alt="images/hint_field_3.png">
</div>
<div class="title">図 3. ヒント用のフィールドをカードの表面に追加</div>
</div>
<div class="paragraph"><p>この例では次のように指定しました。</p></div>
<div class="listingblock">
<div class="title">カードテンプレートへのヒントフィールドの設定例</div>
<div class="content monospaced">
<pre>{{Front}}&lt;br&gt;
{{hint:ヒント}}</pre>
</div></div>
<div class="paragraph"><p>プレビュー画面に[ヒントを表示]というリンクが追加になったことが分かります。</p></div>
<div class="paragraph"><p>なお、カードの基本的な編集方法については、<a href="/how-to-edit-cards/">Ankiのカード表示を編集する</a>で紹介しています。</p></div>
</section>
<section id="学習画面で表示を確認">
  <div class="page-header">
    <h2>学習画面で表示を確認</h2>
  </div>
<div class="paragraph"><p>それでは、学習画面での表示例を紹介しましょう。</p></div>
<div class="imageblock">
<div class="content">
<img src="/images/hint_field_4.png" alt="images/hint_field_4.png">
</div>
<div class="title">図 4. カードの表面にヒントへのリンクが現れた</div>
</div>
<div class="paragraph"><p>ここで[ヒントを表示]というリンクをクリックすると、ヒントフィールドに設定した、ヒント内容が現れます。なお、ヒントフィールドが空欄の場合は、[ヒントを表示]というリンクは表示しません。</p></div>
<div class="imageblock">
<div class="content">
<img src="/images/hint_field_5.png" alt="images/hint_field_5.png">
</div>
<div class="title">図 5. リンクをクリックしてヒントを表示</div>
</div>
<div class="paragraph"><p>これで完成です。
カードレイアウトでヒントと問題の書式やレイアウトを細かく設定して、さらに見やすいカードになるようにカスタマイズしてお使いください。</p></div>
</section>


