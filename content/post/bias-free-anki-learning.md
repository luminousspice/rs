---
slug: "bias-free-anki-learning"
date: "2014-09-12T22:45:57+00:00"
lastmod: "2014-09-24T17:18:33+00:00"
title: "もっと Anki に集中する使い方"
weight: 10
categories: ["Anki","Art of Anki"]
tags: ["Anki"]
anki: ["AnkiDroid","AnkiMobile"]
excerpt: "Anki に慣れている方を対象に、Anki の本来持っている機能を使いこなすために、学習に不要な情報を非表示にする 設定方法を紹介します。"
---
<section id="preamble">
<p>Anki に慣れている方を対象に、Anki の本来持っている機能を使いこなすために、学習に不要な情報を非表示にする 設定方法を紹介します。</p>
</section>
<section id="はじめに">
  <div class="page-header">
    <h1>はじめに</h1>
  </div>
<p>Anki は、学習履歴やコンテンツについてリアルタイムに色々な情報を取り出せる設計になっています。
この機能を利用して、ユーザーインターフェイスの至る所に情報を表示しています。</p>
<p>Anki について理解が不十分な場合には、Anki の動作を理解するのに非常に役立ちます。</p>
<p>しかし、Anki になれてたくさんの学習コンテンツを処理する場合には、
学習コンテンツに関係ないデータの表示は、集中力を低下させたり、自己バイアスを混入させたり、
Anki の得意とする本来の機能の妨げになります。</p>
<p>そこで、この記事では、Anki に使い慣れた人向けに、学習中の情報表示の設定変更方法を説明します。</p>
</section>
<section id="復習間隔の表示">
  <div class="page-header">
    <h1>復習間隔の表示</h1>
  </div>
<p>Anki は、暗記したカードをどれだけの日数を空ければ覚えているか、その限界を拡張していくソフトです。
また、毎回の復習時に、記憶している強度を 3 段階で評価して、次の復習間隔に反映しています。</p>
<p>下に示す 2 種類のカードの解答ボタンを見てください。
両方とも次回の復習間隔として [5 日] のボタンを表示しています。
同じ日数でも、カードの進捗によって評価の難易度まったく反対の結果になります。</p>
<div class="imageblock">
<div class="content">
<img src="/images/bias-free-due-ease.png" alt="復習間隔表示 2">
</div>
<div class="title">図 1. 復習間隔表示 簡単が5日</div>
</div>
<div class="imageblock">
<div class="content">
<img src="/images/bias-free-due-hard.png" alt="復習間隔表示 1">
</div>
<div class="title">図 2. 復習間隔表示 難しいが5日</div>
</div>
<p>カードの解答ボタンを選択する場合に、このカードは 5 日にしておこうとか、難易度の評価から離れて日数だけで判断して選択してしまうのは無理のないことです。</p>
<p>単語帳を使い始めた時に、解答ボタン [難しい]、[普通]、[簡単] を押す明確な基準を決めていないことが原因の一つです。</p>
<p>残念ながらこのような選択方法では、 Anki の復習アルゴリズムを歪めてしまいます。わざわざ Anki を使う意味がなくなります。
また、記憶すべき内容から離れて、日数の方に関心が移ってしまうと、集中力を削ぎ、学習速度を低下させることになります。</p>
<p>そこで、そのような障害を防ぐために、日数表示をボタンから削除しましょう。</p>
<div class="imageblock">
<div class="content">
<img src="/images/bias-free-due-empty.png" alt="復習間隔を非表示">
</div>
<div class="title">図 3. 復習間隔を非表示</div>
</div>
<p>この記事を書くために、久々に表示して毎日のルーチンをやってみました。
無意識のうちに表示する情報に目が行きがちになり、なにか引っかかる感じで、集中力が削がれました。</p>
<p>非表示にすると最初のうちは、違和感がありますが、慣れてしまえばスピード感を持って復習に集中できます。</p>
</section>
<section id="セッション中の残り枚数">
  <div class="page-header">
    <h1>セッション中の残り枚数</h1>
  </div>
<p>セッション中の残り枚数も、誘惑に駆られる情報です。
時間がない場合や、再学習の枚数が多い時に、まだ十分学習が済んでいないのに、つい妥協してセッションを終わらせたくなってしまいます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/bias-free-remain.png" alt="セッションの残り枚数表示">
</div>
<div class="title">図 4. セッションの残り枚数表示</div>
</div>
<p>この枚数表示も設定を変更することで、消すことができます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/bias-free-remain-empty.png" alt="残り枚数を非表示">
</div>
<div class="title">図 5. 残り枚数を非表示</div>
</div>
<p>時間がない、量が多いと感じるのは、単語帳の設計自体に無理があるのかもしれません。<a href="/how-to-make-anki-decks-sustainable/">長続きする Anki 単語帳の作り方</a>では、統計情報を活用した単語帳サイズの最適化の方法を取り上げていますので参考にしてください。</p>
</section>
<section id="設定方法">
  <div class="page-header">
    <h1>設定方法</h1>
  </div>
<ol>
<li>
メニューバーから [Anki]-[環境設定] (または、Command+,) を選択し、[基本] タブを選択します。
</li>
<li>
[次回の復習時期を解答ボタンの上に表示する] と [復習の際にカードの残り枚数を表示する] の両方を無効にします。
</li>
</ol>
<div class="imageblock">
<div class="content">
<img src="/images/bias-free-settings.png" alt="Anki 環境設定">
</div>
<div class="title">図 6. Anki 環境設定</div>
</div>
<h2 id="ankimobile_iphone_の場合">AnkiMobile (iPhone) の場合</h2>
<p>iOS アプリを、iPhone、iPad、iPod touch で使っている場合は、
設定画面を表示するのに画面右上の歯車のアイコンをタップし、[Review] を選択します。</p>
<div class="ulist"><ul>
<li>
<p>
<strong>[Next Time]</strong> を無効にします。次回の復習までの間隔を解答ボタン上に表示する項目です。
</p>
</li>
<li>
<p>
<strong>[Remaining Counts]</strong> を無効にします。学習セッション中の残り枚数を表示する項目です。
</p>
</li>
</ul></div>
<div class="imageblock">
<div class="content">
<img src="/images/bias-free-settings-ios.png" alt="表示の設定箇所" width="300">
</div>
<div class="title">図 7. 表示の設定箇所</div>
</div>
<p>設定後すぐに反映されない場合は、一度アプリを終了してみてください。</p>
<div class="imageblock">
<div class="content">
<img src="/images/bias-free-due-ios.png" alt="ボタンから復習間隔が消えた" width="300">
</div>
<div class="title">図 8. ボタンから復習間隔が消えた</div>
</div>
<h2 id="ankidroid_android_の場合">AnkiDroid (Android) の場合</h2>
<p>アンドロイド機器の場合は、画面左上の Anki のアイコンをタップしてドロワーを開き、[設定]-[カードの復習と評価] を選択すると表示します。</p>
<div class="ulist"><ul>
<li>
<p>
<strong>[ボタン上に時間を表示]</strong> を無効にします。
</p>
</li>
<li>
<p>
<strong>[残りのカード枚数を表示]</strong> を無効にします。
</p>
</li>
</ul></div>
<div class="imageblock">
<div class="content">
<img src="/images/bias-free-settings-android.png" alt="表示の設定箇所" width="300">
</div>
<div class="title">図 9. 表示の設定箇所</div>
</div>
</section>