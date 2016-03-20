---
slug: "zencoding-automator-services"
date: "2012-08-06T20:49:29+00:00"
lastmod: "2012-08-11T19:26:23+00:00"
title: "Zencoding Automator Services"
categories: ["開発"]
tags: ["automator","mac","perl","services","zencoding"]
excerpt: "ZenCodingサービスをautomatorと既存のPerl実装を利用して作ったよ。"
---
<p>Mac OS Xのサービス機能を使って、ZenCodingサービスを作りました。</p>
<p><a href="/zen-coding-with-mi/">前回の記事</a>のコードを書いていて、更に汎用的なautomatorのサービスにすると便利だと思い、作り直してみました。</p>

<img c src="/images/zencoding-service.png" alt="完成図" /></a>
<strong>図 1. 完成図</strong>
<h2>はじめにご理解いただきたいこと</h2>
<p>この記事で作成するアプリケーションは、Mac OS X 10.7.4、このOSに付属しているPerl 5.12.3とAutomator 2.2.4を使って作成しました。利用環境の違いによっては動作しない場合も予想されます。この記事は、自分の環境で動作するように一人で修正できる方に向けて書いています。</p>
<h2>準備作業</h2>
<p>前提条件としてOtchyさん作<a href="http://www.otchy.net/20100225/zen-coding-for-perl/">SSSCoding.pm</a>のインストールが必要です。
のPerlモジュールのインストール先は、たとえばターミナルから次のコマンドで調べることが出来ます。</p>
<pre>perl -e 'print $i++ . ":" . "$_\n" foreach @INC'</pre>
<p>Mac OS X 10.7 では、/Library/Perl/5.12 でした。</p>
<h2>Automatorでサービスを作る</h2>
<p>automatorでサービス ワークフローを作成します。</p>
<p>サービスは次の項目を選択項目を受け取ります：の項目は、<strong>テキスト</strong>、検索対象：<strong>全てのアプリケーション</strong>　にします。</p>
<p>次に<strong>シェルスクリプトを実行</strong>というアクションを追加し、Perlのコードを入力します。
	次の画像のようになります。</p>
<img src="/images/zencoding-services-workflow.png" alt="Automatorワークフロー画面" /></a>
<strong>図 2. Automatorワークフロー画面</strong>

中身のコードは次のように書きました。
<div class="highlight"><pre>use SSSCoding;

@tags = split(/\x0d|\x0a/, @ARGV[0]);

foreach (@tags) {
    print SSSCoding::expand($_)."\x0d";
}</pre></div>
<strong>List. ZenCoding.workflow</strong>

<p>このワークフローを保存すれば、サービスとして使えるようになります。この際に指定した名前がサービスの中で表示される名前になります。文字列を選択すると、サービスのメニューにその名前が表示されます。システム環境 - キーボードでショートカットを登録することも出来ます。</p>
<h2>完成品のワークフローファイルをそのままインストールする</h2>
<p>完成品のworkflowファイルは、<a title="github" href="https://github.com/luminousspice/Zen-Coding-Services" target="_blank">githubからダウンロードできるようにしました</a>。</p>
<p>このファイルを開くと、インストールのためのダイアログが表示されます。手作業でインストールするのであれば、~/Library/Services/ に置くと機能するようになります。</p>
<img src="/images/zencoding-services-installer.png" alt="インストールダイアログ" />
<strong>図 3. インストールダイアログ</strong>

<h2>どこでも使えるよ</h2>
<p>これで、miでも、テキストエディットでも、スティッキーズでも、このブログを書いているFireforx上の入力画面でも、Mac OS Xのサービスが利用できるところはどこでも、ZenCodingの省略記法の展開が出来るようになりました。なんて素晴らしいんでしょう。</p>

<p>WordPress上での編集については、<a href="http://code.google.com/p/zen-coding/">Zen Coding for &lt;textarea&gt;</a>をWordPressのプラグイン化した<a href="http://wordpress.org/extend/plugins/wp-zen-coding/">WP Zen-Coding</a>が公開されています。これを使うと今回作成した省略記法の展開以外の全ての機能が使えるようです。</p>

<h2>ありがとう</h2>
Perl実装した<a href="http://www.otchy.net/">Otchyさん</a>、ありがとうございます。たったPerl7行でやりたいことが出来てしまった。

