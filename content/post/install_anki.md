---
slug: "install_anki"
date: "2013-09-29T18:00:18+00:00"
lastmod: "2015-01-30T15:32:24+00:00"
title: "Ankiのインストール"
weight: 30
categories: ["Anki"]
tags: ["Anki"]
anki: ["AnkiDroid","AnkiMobile","AnkiWeb","アンインストール","インストール","ダウンロード","メンテナンス"]
excerpt: "最新版 Anki 2.0.31 対応。Ankiを使ってみたい方のために、入手方法とインストール方法を簡単に日本語で説明します。オフィシャルサイトの英文の内容をまとめて紹介します。AnkiのデスクトップPC版(Mac, Windows, Linux/BSD)については、ダウンロードからインストールまでの手順を、Apple機器(ipod touch, ipad, iPhone)とAndroid(アンドロイド)機器、Chromebookについては、最新版Ankiのダウンロードサイトを紹介します。最後にアンインストールの方法にも触れています。"
---
<section id="preamble">
<p>最新版 Anki 2.0.31 対応。Ankiを使ってみたい方のために、入手方法とインストール方法を簡単に日本語で説明します。オフィシャルサイトの英文の内容をまとめて紹介します。Anki のデスクトップ PC 版 (OS X, Windows, Linux/BSD) については、ダウンロードからインストールまでの手順を、Apple 機器 (ipod touch, ipad, iPhone) とAndroid (アンドロイド) 機器、Chromebook については、最新版 Anki のダウンロードサイトを紹介します。最後にアンインストールの方法にも触れています。</p>
</section>
<section id="anki_のダウンロードとインストール">
  <div class="page-header">
    <h2>Anki のダウンロードとインストール</h2>
  </div>
<p>Anki は、デスクトップ PC 版とモバイルデバイス版で機能に違いがあります。
モバイルデバイス版は主に学習に特化した機能制限版です。
また OS 毎にダウンロードファイルが異なり、入手先も異なります。
デスクトップ PC 版は、<a target="new" href="http://ankisrs.net/">Anki サイト</a>からアプリケーションをローカルにダウンロードしてインストールします。
モバイルデバイス版は、iOS 版 AnkiMobile は iTunes App Store、Android 版 Ankidroid は Google Play よりインストールします。
この記事では、デスクトップ版のダウンロード先とインストール方法、モバイルデバイス版の入手先について紹介します。
また、インストールの際に役立つ参考文書についても紹介します。</p>
<p><strong>注意</strong>:</p>
<ul>
<li>
この記事の作成時のデスクトップ版の最新バージョンは、Anki 2.0.31 です。今後のアップグレードで、URLやファイル名が変更になる可能性があります。
</li>
<li>
デスクトップ版を AnkiWeb サーバーとデータを同期する場合は、Anki 2.0.24 以降が必須条件になりました。
</li>
</ul>
</section>
<section id="デスクトップpcの場合">
  <div class="page-header">
    <h2>デスクトップPCの場合</h2>
  </div>
<p>デスクトップ PC 版はダウンロードファイルは別々ですが、一つのプロジェクトとして開発していて OS は違ってもドキュメントは共通です。</p>
<ul>
<li>
Anki1 からアップグレードする場合は、<a href="/changeinanki2/#v2">Anki2の変更点</a>をアップグレードの前に確認しておくことをお勧めします。
</li>
<li>
前回の記事、<a href="/anki_reset/">Ankiと初期化</a>では Anki の環境設定の初期化、クリーンインストールする際の注意点をまとめています。
</li>
<li>
<a target="new" href="http://ankisrs.net/download/mirror/">最新版以外のアプリケーションを含むアーカイブ</a>
</li>
</ul>
<h3 id="os_x_へインストール">OS X へインストール</h3>
<ol>
<li>
起動中の Anki があれば終了します。
</li>
<li>
<a target="new" href="http://ankisrs.net/#mac">ダウンロードページ</a>より[Download Anki for Mac]ボタンを押し、<code>anki-2.0.31.dmg</code> をダウンロードします。
</li>
<li>
ダウンロードした dmg ファイルを開き、Anki ファイルをアプリケーションフォルダーかデスクトップにドラッグしてコピーします。
</li>
<li>
コピーしたファイルを開くと Anki は起動します。
</li>
</ol>
<p><strong>注意</strong>:</p>
<ul>
<li>
OS X 版 Anki をお使いになるには、OS X 10.7 以降の Intel Mac が必要です。
</li>
<li>
OS X 10.5、10.6 Intel ユーザーのために代替バージョン (Alternate Version) を用意しています。<a target="new" href="http://ankisrs.net/#mac">ダウンロードページ</a>の[Alternate Version]というリンクをクリックして入手できます。ダウンロードファイルは <code>anki-2.0.31.qt47.dmg</code> です。
</li>
</ul>
<h3 id="windows_へインストール">Windows へインストール</h3>
<ol>
<li>
<a target="new" href="http://ankisrs.net/#windows">ダウンロードページ</a>より[Download Anki for Windows]ボタンを押し、<code>anki-2.0.31.exe</code> をダウンロードします。
</li>
<li>
<code>anki-2.0.31.exe</code> をダブルクリックしてインストーラーを実行します。
</li>
<li>
デスクトップ上の Anki のショートカットアイコンをダブルクリックすると、Anki は起動します。
</li>
</ol>
<h3 id="ubuntu_debian_へインストール">Ubuntu/Debian へインストール</h3>
<ol>
<li>
<a target="new" href="http://ankisrs.net/#linux">ダウンロードページ</a>より[Download Anki for Ubuntu/Debian]ボタンを押し、<code>anki-2.0.31.deb</code> をダウンロードします。
</li>
<li>
お使いになっているシステムのパッケージマネージャーを使ってダウンロードした deb ファイルをインストールします。
</li>
</ol>
<p><strong>注意</strong>: Anki サイトで提供しているバージョンに比べて、Ubuntu/Debian の正式リポジトリに含まれている配布パッケージのバージョンは古いため、Anki サイトから直接アプリケーションを入手することをお勧めします。</p>
<h3 id="fedora_へインストール">Fedora へインストール</h3>
<p><code>sudo yum install anki</code> を実行するだけでインストールできます。</p>
<h3 id="その他の_linux_bsd_システムへインストール">その他の Linux/BSD システムへインストール</h3>
<ol>
<li>
<a target="new" href="http://ankisrs.net/#linux">ダウンロードページ</a>より[Download Anki Source]ボタンを押し、<code>anki-2.0.31.tgz</code> をダウンロードします。
</li>
<li>
ダウンロードした tarball(tgz) を解凍し、<code>README</code> ファイルに記載している指示に従ってインストールします。
</li>
</ol>
</section>
<section id="モバイルデバイスの場合">
  <div class="page-header">
    <h2>モバイルデバイスの場合</h2>
  </div>
<p>モバイルデバイス版のアプリケーションは iOS と Android でそれぞれ別々のプロジェクトで開発しています。
名称も、iOS 版は AnkiMobile、Android 版は AnkiDroid といったデスクトップ版とは違った名称を使っています。
必ずしも PC 版と同じ機能が使える訳ではありません。また、バージョン番号も一致していません。
ドキュメントもそれぞれ独自に作成しており、デスクトップ PC 版のドキュメントがそのまま使える訳ではないことに注意してください。</p>
<h3 id="ios_端末_ipod_touch_ipad_iphone_へ_ankimobile_をインストール">iOS 端末 (iPod Touch, iPad, iPhone) へ AnkiMobile をインストール</h3>
<p>Anki の iOS アプリ AnkiMobile は有料アプリケーションです。
このアプリケーションを購入すると、将来のAnkiの開発を支援することができます。</p>
<p>AnkiMobile は、<a target="new" href="https://itunes.apple.com/jp/app/ankimobile-flashcards/id373493387?mt=8&amp;uo=4&amp;at=11lGoS">iTunes App Store</a> から購入できます。</p>
<p>どうしても無償のアプリケーションを使いたい場合は、<a target="new" href="https://ankiweb.net/">AnkiWeb</a> が利用できます。</p>
<ul>
<li>
<a href="/how-to-use-ankimobile/">iPhone ユーザーのためのはじめての Anki</a>
</li>
<li>
<a target="new" href="http://ankisrs.net/docs/am-upgrade.html">AnkiMobile2へのアップグレード</a> (英文)
</li>
</ul>
<h3 id="android_端末へ_ankidroid_をインストール">Android 端末へ AnkiDroid をインストール</h3>
<p>AnkiDroid (アンキドロイド) は、Anki の開発者 Damien Elmes とは別のグループが独自に開発している無償のアプリケーションです。</p>
<p>AnkiDroid は、<a target="new" href="https://play.google.com/store/apps/details?id=com.ichi2.anki">Google Play</a>から入手できます。</p>
<ul>
<li>
<a target="new" href="https://ankidroid.org/docs/manual-ja.html">AnkiDroid 2 取扱説明書</a>
</li>
<li>
<a target="new" href="http://code.google.com/p/ankidroid/wiki/Upgrading?wl=ja">AnkiDroid 2.0へのアップグレード方法</a>
</li>
</ul>
<h3 id="chromebook_へ_ankidroid_をインストール">Chromebook へ AnkiDroid をインストール</h3>
<p>AnkiDroid 2.4 以降で Chromebook がサポートされています。</p>
<p>AnkiDroid は、<a target="new" href="https://chrome.google.com/webstore/detail/ankidroid/ckmbkodkbmkmdjdimeiddeljndcneifo">Chrome ウェブストア</a>から入手できます。</p>
<h3 id="その他の端末">その他の端末</h3>
<p>その他の端末には専用のクライアントソフトはありませんが <a target="new" href="https://ankiweb.net/">AnkiWeb</a>が利用できます。
<a target="new" href="http://ankisrs.net/#other">Ankiサイト</a>の　Download Anki 項目の Other タブの内容をご覧ください。
このページでは、携帯電話、Blackberry 端末、Maemo、Windows Phone/Windows Mobile/Windows RT、ニンテンドーDS、Sony PSP、Palm端末の情報を掲載しています。</p>
<ul>
<li>
Knowledge Base <a target="new" href="https://anki.tenderapp.com/kb/anki-ecosystem/windows-phone-windows-rt">Windows Phone &amp; Windows RT</a>
</li>
</ul>
</section>
<section id="anki_のアンインストール">
  <div class="page-header">
    <h2>Anki のアンインストール</h2>
  </div>
<p>Anki のアンインストールをするには、Anki のアプリケーション本体と Anki フォルダー <code>Documents/Anki/</code> を削除します。
Anki フォルダーに含まれている単語帳、学習履歴、ユーザープロファイル、バックアップファイルも削除されます。</p>
</section>
<section id="さっそく_anki_を使ってみよう">
  <div class="page-header">
    <h2>さっそく Anki を使ってみよう</h2>
  </div>
<p>インストールしてどこから手をつけたら良いか分からない方には、<a href="/how-to-anki/">はじめてのAnki - まず使ってみる</a>をお勧めします。デスクトップPC版を例にして、Ankiの使い方の基本的な流れが体験できます。</p>
</section>
<section id="更新情報">
  <div class="page-header">
    <h2>更新情報</h2>
  </div>
<p>2013/09/29: 初出</p>
<p>2014/04/13: Anki 2.0.24 からの提供ファイルの変更に対応</p>
<p>2014/04/24: Anki 2.0.26 リリースへの対応</p>
<p>2014/09/22: Anki 2.0.29 リリースへの対応</p>
<p>2015/01/15: AnkiDroid 日本語マニュアル、Anki 2.0.31 リリースへの対応</p>
<p>2015/01/29: AnkiDroid の Chromebook サポートへの対応</p>
</section>


