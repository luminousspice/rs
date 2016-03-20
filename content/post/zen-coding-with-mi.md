---
slug: "zen-coding-with-mi"
date: "2012-08-05T23:20:40+00:00"
lastmod: "2013-11-05T13:43:17+00:00"
title: "ZenCoding with mi"
categories: ["開発"]
tags: ["AppleScript","automator","mac","mi","perl","zencoding"]
excerpt: "miでZenCodingする方法。既存のPerl実装を利用して、ツールをAppleScriptで書きます。"
---
<hr>
<h3>ご注意:</h3>
2013.5.30追記
miの最新版、<a href="http://www.mimikaki.net/" target="_blank">mi3</a>ではZencodingの機能が実装になりました。この記事で取り上げている内容よりも豊富な機能を提供しています。ぜひmi3を使ってください。

<img src="/images/mi3.png" alt="mi3" />

<h4>mi3のZencoding機能を使う方法</h4>
<p>機能の呼び出し方は、ドキュメントモードを[HTML]か[HTML5]に設定した上で、展開したい箇所を選択して(Control+Command+E)を押します。</p>

<p>ドキュメントモードの設定方法はドキュメントウィンドウ上部のプルダウンリストから選択するか、メニューバーから[ドキュメント]>[モード]>[HTML5]/[HTML]を選択します。
	</p>
<p>メニューバーから[ツール]>[HTML]>[_zencoding]を選択すると、下図のような展開以外の機能を呼び出すことができます。</p>

<img src="/images/mi3zencoding.png" alt="mi3zencoding" />

<p>この記事は、役割を終えたことになります。</p>
<hr>
<h2>miでもZenCodingしたい</h2>
<p>と思い続けていたところ、<a href="http://d.hatena.ne.jp/makog/20110706/1309969364">Jedit Xで動作させている記事</a>を発見しました。</p>
<p>この記事によれば、作者のmakogさんは、OtchyさんのZencodingの<a href="http://www.otchy.net/20100225/zen-coding-for-perl/">Perlモジュール実装</a>を使って、Jedit XのマクロをAppleScriptで作成したそうです。アクションの内、省略記法の展開が使えるようになっています。
おお、素晴らしい、miで使うのに一気に敷居が下がりました。</p>

<p>そこで、この記事を参考にmi用にAppleScriptを書き起こしました。miのツールにzencodingの機能を追加できました。</p>
<img src="/images/mi-zencoding.png" alt="完成図" />
<strong>図 1. 完成図</strong>


<h2>はじめにご理解いただきたいこと</h2>

<p>この記事で作成するアプリケーションは、Mac OS X 10.7.4、このOSに付属しているPerl 5.12.3とAutomator 2.2.4を使って作成し、mi 2.1.12r1で動作確認しました。利用環境の違いによっては動作しない場合も予想されます。この記事は、自分の環境で動作するように一人で修正できる方に向けて書いています。</p>

<h2>準備作業</h2>

<p>前提条件として<a href="http://www.otchy.net/20100225/zen-coding-for-perl/">SSSCoding.pm</a>のインストールが必要です。
	このPerlモジュールのインストール先は、たとえばターミナルから次のコマンドで調べることが出来ます。</p>
<pre>perl -e 'print $i++ . ":" . "$_\n" foreach @INC'</pre>
Mac OS X 10.7 では、/Library/Perl/5.12 でした。

<h2>mi用AppleScriptの作成</h2>

<p>miのヘルプの説明を参考にAppleScriptを次のように書きました。</p>
<div class="highlight"><pre>tell document 1 of application "mi"
	set startP to index of paragraph 1 of selection object 1
	set endP to startP + (count paragraph of selection object 1) - 1
	repeat with i from startP to endP
		set str to paragraph i
		set res1 to do shell script "perl -e 'chomp($ARGV[0]);print $ARGV[0];'" &amp; " " &amp; quoted form of str
		set res to do shell script "perl -MSSSCoding -e 'print SSSCoding::expand($ARGV[0]);'" &amp; " " &amp; quoted form of res1
		set paragraph i to res &amp; (ASCII character 10)
	end repeat
end tell</pre></div>
<strong>表 1. zencoding.scpt</strong>

<h2>インストール</h2>
<p>このスクリプトをAppleScript エディタで、スクリプト(.scpt)形式で保存します。
そのファイルを、モード設定ウインドウ→ツールタブの左側のツール一覧にドラッグすると使えるようになります。</p>

<img src="/images/mi-mode-setting.png" alt="インストール先-モード設定ウィンドウ"  />
<strong>図 2. インストール先-モード設定ウィンドウ</strong>

<p>手作業でインストールする場合は、標準モードのツールとして使うなら、
	<code>~/Library/Application Support/mi/mode/Normal/tool</code>
になります。 </p>

<p>ZenCodingの省略記法した箇所を選択して、メニューから<strong>ツール</strong>-<strong>zencoding</strong>と選択してツールを実行するすると、選択範囲が展開されます。また、コンテクストメニューからも同様に選択して実行できます。(図 1. 完成図 参照)
	これで、miでZenCodingするという目的が達成できました。</p>

<p>なお、今回実装した省略記法の展開以外にも、ZenCodingの<a href="http://code.google.com/p/zen-coding/wiki/Actions">アクション</a>には、編集箇所の移動など便利な機能が含まれています。</p>

<h2>完成品も用意しました</h2>
<a href="https://github.com/luminousspice/zencoding-mi">GitHubにscptファイルの完成品を置きました</a>。

<h2>ところが</h2>
<p>作っているうちに、これをautomatorのサービスにした方が便利なのでは感じるようになりました。miに限らずどこでも使えるし。そこで次の記事では、<a href="/zencoding-automator-services/">automatorサービスを作る方法</a>を紹介します。</p>

<h2>ありがとう</h2>
<p>Perl実装した<a href="http://www.otchy.net/">Otchyさん</a>、Jedit Xマクロを書いた<a href="http://d.hatena.ne.jp/makog/">makogさん</a>、素晴らしい。
たったAppleScript10行でやりたいことが出来てしまった。ありがとうございます。</p>

<p>このブログを建てて記事を書いたのは、お二方に対する感謝の気持ちであります。</p>

