---
slug: "restore_corrupt_data"
date: "2013-07-06T21:00:07+00:00"
lastmod: "2013-10-17T10:41:43+00:00"
title: "破損したAnkiデータの修復"
categories: ["Anki"]
tags: ["Anki","SQLite"]
anki: ["コレクション","データ修復","メンテナンス"]
excerpt: "Ankiデータが、何らかの原因で不幸にして破損した場合の修復方法について紹介します。"
---
<section id="preamble">
<p>Ankiデータが、何らかの原因で不幸にして破損した場合の修復方法について紹介します。起動後に大量のデータ更新を行ったりして、自動バックアップからの復元では対応できない場合の手順を説明します。</p>
<p>注意: この作業はデスクトップPC上でのみ作業が可能です。また、コマンドラインツールの操作が必要となります。なお、モバイル機器での作業は対象外です。</p>
</section>
<section id="コレクションデータの破損と確認">
  <div class="page-header">
    <h1>コレクションデータの破損と確認</h1>
  </div>
<p></p>
<p>メニューバーから[ツール]&gt;[データベースをチェック]を実行すると、データが破損していないか確認できます。</p>
<p>データの破損が発生した場合、一番簡単な復旧方法は最新の<a href="/anki_automatic_backup/">自動バックアップファイルから復旧する</a>ことです。</p>
<p>Ankiは、アプリケーション終了時、ユーザープロファイル変更時に自動バックアップを行います。まずは、自動バックアップファイルの復元を試みて、問題発生の直前の状況と比較してみましょう。</p>
<p>この記事で紹介するデータ修復の手順は、最新の自動バックアップ以降に、大量のデータの読み込みを行った場合など、最新のデータと自動バックアップファイルの間に差が大きい場合に有効です。</p>
<p>Ankiは、プロファイル毎にコレクションファイルを作成します。データの破損が発生しているのはどのプロファイルか改めて確認してください。</p>
</section>
<section id="修復作業の準備">
  <div class="page-header">
    <h1>修復作業の準備</h1>
  </div>
<ol>
<li>
プロファイルフォルダーの中にある <code>collection.anki2</code> のバックアップを取ってください。
このファイルが、修復対象のファイルです。
なお、プロファイルフォルダーは、Ankiフォルダーの中に、プロファイル名を使って作成しています。
</li>
<li>
つぎに <code>sqlite3</code> がインストール済みか確認してください。
<div class="ulist"><ul>
<li>
<p>
Mac OS Xの場合は、既定でインストール済みです。
</p>
</li>
<li>
<p>
Linuxの場合は、パッケージ管理システムを使ってインストール済みか確かめることができます。
</p>
</li>
<li>
<p>
Windowsの場合は、<a href="http://www.sqlite.org/download.html" target="_new">SQLite サイト</a>からWindows用の最新のコマンドラインシェル(command-line shell)をダウンロードします。
2013/10/16時点で、最新版は<a href="http://www.sqlite.org/2013/sqlite-shell-win32-x86-3080002.zip">sqlite-shell-win32-x86-3080002.zip</a>です。なお、Ankiユーザーマニュアルでは、<a href="http://www.sqlite.org/sqlite-3_6_23.zip">sqlite-3_6_23.zip</a>を指定しています。
</p>
</li>
</ul></div>
</li>
</ol>
</section>
<section id="コレクションファイルのダンプ">
  <div class="page-header">
    <h1>コレクションファイルのダンプ</h1>
  </div>
<p>SQLite3のコマンドラインシェルを使って、コレクションのダンプファイルを作ります。作業に使用するプラットフォームによって手順が異なりますのでご注意ください。</p>
<h2 id="mac_os_x_または_linuxの場合">Mac OS X または Linuxの場合</h2>
<p>ターミナルを開き、Ankiフォルダーの中のプロファイルフォルダーに移動して次のコマンドを実行します。</p>
<pre>sqlite3 collection.anki2 .dump &gt; dump.txt</pre>
<p>生成したファイル <code>dump.txt</code> をテキストエディタで開きます。
最終行に "rollback;" という記述があれば、"commit;" に変更します。</p>
<p>さらに、ターミナルで次のコマンドを実行します。</p>
<pre>cat dump.txt | sqlite3 temp.file</pre>
<p>注意: コレクションファイルを上書きせず、必ず <code>temp.file</code> とテンポラリーファイルを指定してください。</p>
<h2 id="windowsの場合">Windowsの場合</h2>
<ol>
<li>
ダウンロードしたSqliteファイルを解凍すると、<code>sqlite3.exe</code> が生成します。これをAnkiフォルダーの中のプロファイルフォルダーにコピーします。
</li>
<li>
コマンドプロンプトを起動して次のコマンドを実行します。
コマンドプロンプトを開くには、[スタート]ボタンを押し、[プログラムとファイルの検索]フィールドに <code>cmd</code> と入力して、<code>cmd.exe</code> を実行します。
</li>
</ol>
<pre>sqlite3 collection.anki2 .dump &gt; dump.txt</pre>
<p>生成したファイル <code>dump.txt</code> をテキストエディタで開きます。
最終行に "rollback;" という記述があれば、"commit;" に変更します。</p>
<p>さらに、ターミナルで次のコマンドを実行します。</p>
<pre>cat dump.txt | sqlite3 temp.file</pre>
<p>注意: コレクションファイルを上書きせず、必ず <code>temp.file</code> とテンポラリーファイルを指定してください。</p>
</section>
<section id="ankiに読み込む">
  <div class="page-header">
    <h1>Ankiに読み込む</h1>
  </div>
<ol>
<li>
ダンプファイル作成時にエラーメッセージを表示しないこと、ダンプファイルが空でないことを確認します。
</li>
<li>
コレクションファイル <code>collection.anki2</code> を別の名前に変更し、ダンプファイル <code>temp.file</code> を <code>collection.anki2</code> に変更します。
</li>
<li>
Ankiを起動し、ツールバーから[ツール]&gt;[データベースをチェック]を実行します。
</li>
</ol>
<p>問題がなければ修復作業は成功です。</p>
</section>
<section id="更新情報">
  <div class="page-header">
    <h1>更新情報</h1>
  </div>
<p>2013/10/16: Anki 2.0.14のリリースと同時に行われた<a href="http://ankisrs.net/docs/manual.html#corrupt-collections" target="_new">マニュアル</a>の変更に基づいて、内容を更新しました。</p>
<p>2013/7/6: 初出</p>
</section>


