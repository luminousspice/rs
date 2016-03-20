---
slug: "audio-stdout-into-anki-for-mac"
date: "2015-12-27T23:45:15+00:00"
lastmod: "2015-12-28T01:04:42+00:00"
title: "Mac で再生中の音声を Anki に直接録音する"
categories: ["Anki"]
tags: ["Anki","Soundflower"]
anki: ["ノートの登録","メディアの登録","動画","録音","音声"]
excerpt: " Mac 上で再生した音声を Anki のカードに直接取り込む方法を紹介します。ここで紹介するのは仮想オーディオデバイス Soundflower と Audio MIDI 設定を使った簡単な方法です。"
---
<section id="preamble">
<p>Mac 上で再生した音声を Anki のカードに直接取り込む方法を紹介します。ここで紹介するのは仮想オーディオデバイス Soundflower と Audio MIDI 設定を使った簡単な方法です。</p>
</section>
<section id="はじめに">
  <div class="page-header">
    <h1>はじめに</h1>
  </div>
<p>この投稿は、Mac ユーザー限定の内容です。</p>
<p>SNS にその特色を生かした語学コンテンツが共有されるようになってきました。<a target="_new" href="https://www.youtube.com/user/russianpod101/videos">Learn Russian with RussianPod101.com</a> や <a target="_new" href="https://www.youtube.com/playlist?list=PLA5UIoabheFMYWWnGFFxl8_nvVZWZSykc">Easy French - Learn French from the Streets!</a> のように、学校や出版社が作り込んだ学習教材とは違った日常の表現を取り上げている点が面白いです。
このような動画を見ている時に気に入った表現に出会ったら、手軽に音声を Anki のカードに取り込む方法を紹介します。</p>
<p>Mac 版の Anki は内蔵マイクから音声を取り込むことができますが、アプリが再生する音声を取り込むことは標準設定ではできません。
ダウンロードした動画データから音声ファイルを編集して、メディアファイルとして Anki に取り込めばできますがその場で手軽にできません。トリミングして mp3 にエンコードするのは意外と手間がかかります。</p>
<p>再生している音声を直接 Anki の録音機能で取り込めるように設定し、もっと簡単に日常の表現のカードを作れるようにするのがこの投稿の目標です。</p>
</section>
<section id="必要なもの">
  <div class="page-header">
    <h1>必要なもの</h1>
  </div>
<ul>
<li>
仮想オーディオデバイス <a target="_new" href="https://github.com/mattingalls/Soundflower/releases/tag/2.0b2">Soundflower 2.0b2</a>
</li>
</ul>
</section>
<section id="soundflower_インストール">
  <div class="page-header">
    <h1>Soundflower インストール</h1>
  </div>
<p>上で紹介した Soundflower の GitHub のリポジトリでは、Signed Version for Yosemite/Mavericks/El Capitan という有効な署名済みビルドを公開しています。当該バージョン以外の OS X をお使いの方は他のリポジトリを探してみてください。(なお、このバージョンでは Soundflowerbed が削除されています)</p>
<p><code>Soundflower-2.0b2.dmg</code> をダウンロードして開き、<code>Soundflower.pkg</code> を起動するとインストールが行われます。</p>
</section>
<section id="設定の手順">
  <div class="page-header">
    <h1>設定の手順</h1>
  </div>
<p>次に、Soundflower の設定方法を紹介します。内蔵マイクが拾う音声の代わりにアプリケーションが再生した音声を Anki に入力し、更にその音声を内蔵スピーカから出力する設定内容になります。</p>
<h2 id="audio_midi_設定">Audio MIDI 設定</h2>
<p>OS X 付属の [Audio MIDI 設定] というアプリケーションを起動します。Spotlight に <code>midi</code> と打って検索するのが簡単です。</p>
<div class="imageblock">
<div class="content">
<img src="/images/audio-stdout-spotlight-audiomidi.png" alt="Spotlight から Audio MIDI 設定を起動">
</div>
<div class="title">図 1. Spotlight から Audio MIDI 設定を起動</div>
</div>
<ol>
<li>
起動した [オーディオ装置] ウィンドウの左下の [+] ボタンを押し、[複数出力装置の作成] を選択します。
</li>
<li>
右のオーディオを装置の一覧から、[内蔵出力] と [Soundflower (2ch)] をチェックします。
</li>
</ol>
<div class="imageblock">
<div class="content">
<img src="/images/audio-stdout-audiomidi.png" alt="複数出力装置を作成">
</div>
<div class="title">図 2. 複数出力装置を作成</div>
</div>
<h2 id="入出力装置の設定">入出力装置の設定</h2>
<ol>
<li>
メニューバーの [音量] アイコンを [Option] キーを押しながらクリックし、入力装置に [Soundflower (2ch)] を割り当てます。
</li>
<li>
同様に、出力装置に Audio MIDI 設定 で作成した [複数出力装置] を割り当てます。
</li>
</ol>
<div class="imageblock">
<div class="content">
<img src="/images/audio-stdout-sound-settings.png" alt="入出力装置を割り当てる">
</div>
<div class="title">図 3. 入出力装置を割り当てる</div>
</div>
<p>作業が終わって元に戻したい時には、入力装置 [内蔵マイク]、出力装置 [内蔵スピーカー] に設定します。</p>
</section>
<section id="録音方法">
  <div class="page-header">
    <h1>録音方法</h1>
  </div>
<p>ノートエディタを立ち上げ、音声を取り込みたいフィールドを選択し、取り込みたい音声を再生し、[F5] を押すか、ツールバーの [録音ボタン] (図　4 参照) を押します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/audio-stdout-add-sound.png" alt="ノートエディタで録音">
</div>
<div class="title">図 4. ノートエディタで録音</div>
</div>
<p>ポップアップした録音時間を表示するウィンドウの中の [停止] ボタンを押すと録音は終了します。</p>
</section>
<section id="カード作成例">
  <div class="page-header">
    <h1>カード作成例</h1>
  </div>
<p>RussianPod101.com のような字幕付きの動画であれば、画面キャプチャだけで文字を打つ必要もなく簡単にカードを作成できます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/audio-stdout-russianpod-card.png" alt="作成例">
</div>
<div class="title">図 5. 作成例</div>
</div>
<p>(参考 <a target="_new" href="https://www.youtube.com/watch?v=2dbuynYNBz0">Learn the Top 10 Hardest Russian Words to Pronounce</a>)</p>
</section>
<section id="おわりに">
  <div class="page-header">
    <h1>おわりに</h1>
  </div>
<p>今回紹介した方法をつかえば、ブラウザ以外に、iTunes、VLC、Audacity などのアプリケーションから手軽に音声が Anki に取り込めるようになります。オーディオブック、動画、音楽データから自分に必要な部分だけを切り取って Anki で覚えることができます。</p>
<p>SNS の利用人口が広がって、今までにない自然な表現の語学データが簡単に手に入るようになったのは喜ばしいです。
自分だけのお楽しみ表現が学習データに加われば、毎日 Anki を開くのがもっと楽しくなってきます。</p>
</section>


