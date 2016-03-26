---
slug: "html5-on-anki"
date: "2015-12-31T23:00:39+00:00"
lastmod: "2015-12-31T23:19:15+00:00"
title: "Anki カードへの HTML5 メディアの埋め込み"
categories: ["Anki"]
tags: ["Anki","HTML5","iOS","iPhone","開発"]
anki: ["メディア","動画","同期","音声"]
excerpt: "HTML5 Video の機能を使って、Anki に埋め込んだ動画のインターフェイスを変更する方法について説明します。さらに Mac と iPhone でデータを同期する場合の注意点についても扱います。"
---
<section id="preamble">
<p>HTML5 Video の機能を使って、Anki に埋め込んだ動画のインターフェイスを変更する方法について説明します。さらに Mac と iPhone でデータを同期する場合の注意点についても扱います。</p>
</section>
<section id="はじめに">
  <div class="page-header">
    <h2>はじめに</h2>
  </div>
<p>Anki に動画を埋め込むと別ウィンドウで再生します。この動作が些細なことですが違和感を覚えていました。Anki の動画再生に使っている <a href="/mplayer-shortcut-for-anki-video/">MPlayer のショートカット</a>を使えばかなり動作を細かく制御できることは分かったのですが、別ウィンドウが開くことへわだかまりは消えませんでした。そこでこの問題を解決するするために辿り着いた、HTML5 Video 要素を使ってカードに埋め込んだ動画を再生する方法を紹介します。なお、HTML5 によるメディアの埋め込みは Anki のサポート対象外です。</p>
<p>こちらもサポート対象外ながら Iframe を使うという方法もあります。この方法を以前利用していたのですが、Google API のサポートの変更にともなって今年の 4 月頃から YouTube の動画を Anki 上に埋め込み表示できなくなりました。さて、何か代わりの方法はないだろうかというのが、HTML5 の利用を考え始めた切っ掛けです。</p>
</section>
<section id="注意事項">
  <div class="page-header">
    <h2>注意事項</h2>
  </div>
<p>この記事は、Anki のサポート対象外の機能について説明しています。</p>
<p>たとえば、Anki サポートフォーラムの記事 <a target="_new" href="https://anki.tenderapp.com/discussions/ankidesktop/12516-can-i-embed-youtube-videos">Can I embed Youtube videos?</a> 、<a target="_new" href="https://anki.tenderapp.com/discussions/ankidesktop/4745-embedding-external-websites-with-iframe-or-object-html-tags">Embedding external websites with iframe or object html tags</a>によれば、Anki は HTML5 や Flash の埋め込みコンテンツやIFrame によるリモート表示をサポートしていません。</p>
<p>このことを理解した上で、動作している自分の環境 (OS X および iOS)の経験に基づいてこの投稿を作成しています。お使いになっている環境によっては、この記事の方法では動作しないかもしれません。
この記事を理解するには、HTML5 メディア埋め込みに関するの知識が必要です。</p>
</section>
<section id="html5_の記述">
  <div class="page-header">
    <h2>HTML5 の記述</h2>
  </div>
<p>一番シンプルな書き方は、Anki のメディアフォルダに <code>myvideo.mp4</code> という動画を表示するなら、次のような HTML の記述をノートに書き込みます。<code>controls</code> 属性を付けているのは、再生位置や音量などの再生コントロールを表示するためです。<code>src</code> 属性は、http サーバー上にあるコンテンツを指定しても動作します。</p>
<div class="listingblock">
<div class="title">動画の埋め込み</div>
<div class="content"><div class="highlight"><pre><span class="nt">&lt;video</span> <span class="na">src=</span><span class="s">&quot;myvideo.mp4&quot;</span> <span class="na">controls</span><span class="nt">&gt;&lt;/video&gt;</span>
</pre></div></div></div>
</section>
<section id="コードの入力">
  <div class="page-header">
    <h2>コードの入力</h2>
  </div>
<p>HTML を入力する際の注意点は、HTML エディタを開いて入力することです。ノートエディタで入力したいフィールドにフォーカスをあわせたら、Command + Shift + X を押すと HTML エディタが開きます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/html5-anki-htmleditor.png" alt="HTML エディタで HTML5 Video 要素を入力する">
</div>
<div class="title">図 1. HTML エディタで HTML5 Video 要素を入力する</div>
</div>
<p>完成品は次の通りです。動画下部に再生コントロールが現れます。左から、再生ボタン、再生時間、再生位置表示、全画面表示、音量が調節できます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/html5-anki-card.png" alt="HTML5 Video で動画をカードに埋め込む">
</div>
<div class="title">図 2. HTML5 Video で動画をカードに埋め込む</div>
</div>
</section>
<section id="音声の埋め込み">
  <div class="page-header">
    <h2>音声の埋め込み</h2>
  </div>
<p>なお、HTML5 Audio 機能を使って音声も埋め込むことができます。
この場合は次のように HTML を記述します。この場合は、動画と同様のコントロールだけを表示します。</p>
<div class="listingblock">
<div class="title">音声の埋め込み</div>
<div class="content"><div class="highlight"><pre><span class="nt">&lt;audio</span> <span class="na">src=</span><span class="s">&quot;myvideo.mp4&quot;</span> <span class="na">controls</span><span class="nt">&gt;&lt;/audio&gt;</span>
</pre></div></div></div>
</section>
<section id="iphone_との連携">
  <div class="page-header">
    <h2>iPhone との連携</h2>
  </div>
<p>なお、HTML5 Video および Audio ともに iPhone (iOS) 上で動作します。同じデータを Mac、iPhone 間で同期して使うことができます。双方の環境で利用可能なフォーマットは、動画は mp4、音声は mp3 でした。</p>
<p>また、iPhone から HTML5 のコードを直接入力しても動作します。</p>
<p>動画の場合は、動画の真ん中のボタンをタップすると <code>[sound:]</code> タグで埋め込んだときと同様のコントロールが立ち上がって、動画を再生します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/html5-anki-iphone-video.png" alt="HTML5 Video を iPhone 上で表示">
</div>
<div class="title">図 3. HTML5 Video を iPhone 上で表示</div>
</div>
<p>音声の場合は、再生コントロールを表示します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/html5-anki-iphone-audio.png" alt="HTML5 Audio を iPhone 上で表示">
</div>
<div class="title">図 4. HTML5 Audio を iPhone 上で表示</div>
</div>
</section>
<section id="同期の注意点">
  <div class="page-header">
    <h2>同期の注意点</h2>
  </div>
<p>この記事では触れませんでしたが、フィールドではなくテンプレートに HTML5 のコードを直接書き込んでいる場合、iTunes および AnkiWeb 経由ともにメディアファイルの同期が行われません。この場合は、別途メディアファイルを持ち込む操作が必要になります。</p>
</section>
<section id="おわりに">
  <div class="page-header">
    <h2>おわりに</h2>
  </div>
<p>HTML5 の力を借りれば、ちょっと HTML のコードを書くだけで、Anki のカードの使い勝手を変更できることが分かりました。</p>
<p>Anki を使った学習は、毎日継続する作業なので、ちょっとしたユーザーインターフェイスの使い勝手であっても、モチベーションに大きな影響を与えます。たとえ、正式にサポートされていない機能であっても、自分が使っている機器で動作が確認できれば、そのインターフェイスを帰ることもできる柔軟性を Anki は持っています。
自分の知識を活用して、毎日少しずつ Anki の学習環境を改善していくことも、Anki を使う楽しみではないかと思います。</p>
</section>


