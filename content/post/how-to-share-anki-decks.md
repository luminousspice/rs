---
slug: "how-to-share-anki-decks"
date: "2013-05-30T00:30:22+00:00"
lastmod: "2016-02-12T19:56:55+00:00"
title: "Anki単語帳を共有する方法"
weight: 10
categories: ["Anki","Anki2の使い方"]
tags: ["Anki"]
anki: ["apkg","AnkiWeb","Anki単語帳パッケージ","CSV","Export Browser’s card list contents to CSV file","テキストファイル","共有単語帳","同期","書き出し","読み込み"]
excerpt: "Ankiを使っている人なら知っている使い方をあえて紹介する連載の最終回は、単語帳の共有方法について紹介します。Ankiは色々な出力機能で、ユーザー間のデータ共有を支援しています。自分の単語帳を友達と交換して、Ankiの楽しみを広げましょう。How to share your Anki decks."
---
<section id="preamble">
<p><strong>連載: Ankiの使い方 〜覚えるために忘れろ〜</strong></p>
<p><strong>第8回目 最終回 Anki単語帳を共有する方法</strong></p>
<p>Ankiを使っている人なら知っている使い方をあえて紹介する連載の最終回は、単語帳の共有方法について紹介します。Ankiは色々な出力機能で、ユーザー間のデータ共有を支援しています。自分の単語帳を友達と交換して、Ankiの楽しみを広げましょう。</p>
<div class="sidebarblock well">
<div class="content">
<p><a href="http://ankisrs.net/" target="_new">Anki</a>とはDamien Elmesが開発している分散学習システム(SRS; Spaced Repetition learning Systems)です。</p>
</div></div>
</section>
<section id="この記事の目標">
  <div class="page-header">
    <h1>この記事の目標</h1>
  </div>
<p>単語帳を書き出す色々な方法に慣れる。</p>
</section>
<section id="使うもの">
  <div class="page-header">
    <h1>使うもの</h1>
  </div>
<div class="ulist"><ul>
<li>
<p>
<a href="http://ankisrs.net/" target="_new">Anki2</a>
</p>
</li>
</ul></div>
</section>
<section id="単語帳を共有する方法">
  <div class="page-header">
    <h1>単語帳を共有する方法</h1>
  </div>
<p>Ankiには共有する相手や、目的に応じてさまざまな共有方法が選択できます。Ankiから単語データだけを取り出して共有する方法、Anki単語帳のカスタマイズしたカードとして共有する方法、AnkiWebから共有単語帳を提供する方法があります。
それぞれの方法を簡単にご紹介します。</p>
</section>
<section id="export">
  <div class="page-header">
    <h1>Ankiの単語帳書き出し機能</h1>
  </div>
<p></p>
<p>Ankiの単語帳の書き出し方は、メニューバーから[ファイル]&gt;[書き出す]を選択します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_8_1.png" alt="書き出し設定画面">
</div>
<div class="title">図 1. 書き出し設定画面</div>
</div>
<p>[ファイルの形式]でAnki単語帳パッケージ、フィールド内容の出力(ノート)、出題画面の出力(カード)を選択することができます。</p>
<table cellpadding="4" class="table table-striped">
<caption class="title">表 1. 書き出すファイルの形式の説明</caption>
<thead>
<tr>
<th>ファイルの形式</th>
<th>設定内容</th>
</tr>
</thead>
<tbody>
<tr>
<td>Anki 単語帳パッケージ(*.apkg)</td>
<td>フィールド、タグの内容の出力に加えてスケジュール情報やメディアファイルを含めることができます。</td>
</tr>
<tr>
<td>テキストファイル形式のノート(*.txt)</td>
<td>フィールドの内容を出力します。</td>
</tr>
<tr>
<td>テキストファイル形式のカード(*.txt)</td>
<td>画面の内容を出力します(htmlでマークアップ)</td>
</tr>
</tbody>
</table>
<p>[対象]項目では、書き出す単語帳を指定します。
単語帳全体のコレクションを書き出す場合には[全ての単語帳]を指定します。
単語帳パッケージで書き出すと、カードタイプやカードテンプレート、フィルター単語帳も一緒に書き出してくれます。</p>
<p>単語データだけを書き出したい時には、テキストファイル形式のノートを選択し、単語データに加えてレイアウトやリンクも含めたAnki単語帳のカードとして書き出したい時には単語帳パッケージを選ぶのが良いでしょう。</p>
<p>自分の学習データを他のPCやデバイスに持ち込む時には、[スケジュール情報を含める]を選択すると学習履歴も含めることができます。</p>
<pre>memory  記憶  Grade4
remember        思い出す    Grade6</pre>
<p>この例では、Front、Back、タグの順にタブで区切って出力しています。</p>
<pre>memory  辞書: &lt;a href="dict://memory"&gt;rmemory&lt;/a&gt;&lt;br /&gt;&lt;br&gt;Vocabulary.com: &lt;a href="http://www.vocabulary.com/dictionary/memory" target="vocabcom"&gt;memory&lt;/a&gt;&lt;br /&gt;&lt;br&gt;&lt;br&gt;記憶
remember        辞書: &lt;a href="dict://remember"&gt;remember&lt;/a&gt;&lt;br /&gt;&lt;br&gt;Vocabulary.com: &lt;a href="http://www.vocabulary.com/dictionary/remember" target="vocabcom"&gt;remember&lt;/a&gt;&lt;br /&gt;&lt;br&gt;&lt;br&gt;思い出す</pre>
<p>この例では、表面の内容、裏面の内容をタブで区切って出力しています。</p>
</section>
<section id="アドオンを使った書き出し方">
  <div class="page-header">
    <h1>アドオンを使った書き出し方</h1>
  </div>
<p></p>
<p><a href="/how-to-use-shared-resources/">Ankiの共有リソースを使ってみる</a>で紹介した、アドオン <a href="https://ankiweb.net/shared/info/46837454" target="_new">Export Browser's card list contents to CSV file Enhanced</a>でも単語帳内容を書き出すことができます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_8_2.png" alt="ブラウザーで選択した項目を出力" width="600">
</div>
<div class="title">図 2. ブラウザーで選択した項目を出力</div>
</div>
<p>内容としては、単語帳パッケージとテキストファイル出力の中間ぐらいの機能になります。
このアドオンの場合、ブラウザーで選択した内容をCSVで出力してくれます。ブラウザーの表示項目をカスタマイズすれば、Anki本体の書き出し機能より豊富な情報を出力できます。</p>
<ol>
<li>
ブラウザー上で出力したいカードを選択する。
</li>
<li>
[編集]&gt;[Export Selected to CSV]
</li>
</ol>
<pre>a,辞書と読み上げ,2013-05-20,中学英単語,基本
a.m.,辞書と読み上げ,2013-05-20,中学英単語,基本
Abel,辞書と読み上げ,9777,中学英単語,基本</pre>
<p>この例では、ソートフィールド、カードタイプ、期日、単語帳名、ノートタイプの順に書き出しています。</p>
<p>単語帳の中から特定のグループの単語を絞り込んで出力したい場合は、この機能が便利です。</p>
</section>
<section id="ankiに書き出したデータを読み込むには">
  <div class="page-header">
    <h1>Ankiに書き出したデータを読み込むには</h1>
  </div>
<p>Ankiへの読み込み処理を呼び出す方法は、次の2通りあります。単語帳パッケージ形式(<strong>.apkg)でも、テキストファイル形式(</strong>.txt)でも呼び出し方は同じです。</p>
<ol>
<li>
メインウィンドウ右下の[ファイルを読み込む]ボタンを押す。
</li>
<li>
メニューバーから[ファイル]&gt;[読み込む](Command + I)を選択する。
</li>
</ol>
<p>更に詳しい手順は、<a href="/how-to-import/">Ankiにデータをまとめて取り込む</a>で説明しています。</p>
</section>
<section id="単語帳をankiwebへの共有する方法">
  <div class="page-header">
    <h1>単語帳をAnkiWebへの共有する方法</h1>
  </div>
<p></p>
<p>AnkiWebにある共有単語帳どうやって作っているのか、ご紹介しましょう。</p>
<p>まずは、<a href="/how-to-sync-with-ankiweb/">AnkiWebにアカウントを作って単語帳を同期</a>します。
次にログイン先の単語帳一覧の右側のプルダウンメニューから[Share]を選択します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_8_3.png" alt="AnkiWeb単語帳一覧から選択">
</div>
<div class="title">図 3. AnkiWeb単語帳一覧から選択</div>
</div>
<p>共有単語帳の提出フォームが開きますので、内容を入力して送信すると共有単語帳一覧に追加になります。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_8_4.png" alt="共有単語帳の提出フォーム" width="600">
</div>
<div class="title">図 4. 共有単語帳の提出フォーム</div>
</div>
<p>自分の作った単語帳・デッキを世界中のAnkiユーザーと共有する方が皆さんの中から現れるのを期待しています。きっと今までとは違う喜びが得られるはずです。</p>
<h2 id="単語帳内容の登録について注意点">単語帳内容の登録について注意点</h2>
<p>全ての項目に日本語が入力可能です。単語帳の内容を日本語で具体的に説明しましょう。</p>
<p>このサイトの共有単語帳の検索機能は、Title と Tag を対象にして検索します。
日本語キーワードが使えますので、Title や Tag に日本語を使えばその内容も検索できます。</p>
<p>なお、共有単語帳トップページの分類項目 "<a target="_new" href="https://ankiweb.net/shared/decks/japanese">Japanese</a>" に掲載するには、Tag に "Japanese" を指定します。</p>
<h2 id="共有単語帳とプライバシー">共有単語帳とプライバシー</h2>
<p>クライアント上で共有単語帳に設定した単語帳を更新し、同期しても自動的に内容は公開しません。
また、AnkiWeb 上で直接編集した場合も同様です。
再度提出フォームを送信しない限り、共有単語帳の内容は更新しません。</p>
<p>カードに未使用であっても、メディアフォルダーに存在するファイルは共有単語帳に含めて公開します。
意図しないメディアデータを公開する可能性がありますので注意してください。
メニューバーから [ツール]-[メディアをチェック] を選択して、不要なデータが残っていないか、公開前に確認すると良いでしょう。</p>
<h2 id="共有単語帳を更新">共有単語帳を更新</h2>
<p>更新した単語帳を AnkiWeb に同期し、単語帳名を変更せずに再度共有します。</p>
<ol>
<li>
更新した単語帳を AnkiWeb に同期します。
</li>
<li>
AnkiWeb にサインインします。
</li>
<li>
単語帳一覧の右側のプルダウンメニューから[Share]を選択します。
</li>
<li>
提出フォームを送信します。
</li>
</ol>
<h2 id="共有単語帳を削除">共有単語帳を削除</h2>
<p>サインイン後の単語帳一覧の右側のプルダウンメニューから[Delete]を選択します。
この場合、AnkiWeb に同期している単語帳データも同時に削除するので注意してください。</p>
<h2 id="共有単語帳の有効期限">共有単語帳の有効期限</h2>
<p>共有単語帳の有効期限は、公開したアカウントが削除される時までです。
なお、AnkiWeb のアカウントは 3 か月間アクセスがないと自動削除対象になるので注意が必要です。</p>
<p>参考情報: Anki Support Knowledge Base <a target="_new" href="https://anki.tenderapp.com/kb/anki-ecosystem/ankiweb-account-removal">AnkiWeb account removal</a></p>
</section>
<section id="まとめ">
  <div class="page-header">
    <h1>まとめ</h1>
  </div>
<p>単語帳の共有方法は色々用意されています。それぞれの方法の特徴を良く理解しておくと、自分の目的にあった方法が見つかるはずです。
自分で作った単語帳を友だちと交換し合うと、Ankiの学習はもっと楽しくなると思います。</p>
</section>
<section id="連載の終わりに">
  <div class="page-header">
    <h1>連載の終わりに</h1>
  </div>
<p>アプリケーションソフトウェアはたとえ完全なマニュアルやチュートリアルがあっても、はじめて使う時には非常に戸惑うものです。
このような時には、まずアプリケーションに触れてみて、その反応からそのアプリ独自の使い方を体感するのが有効だと考えています。
体感から基本的な使い方を理解した上で、再びチュートリアルやマニュアルに戻るとはじめて理解できる内容も多いです。</p>
<p>Ankiはこの分野のアプリとしては、独自の強力な機能を提供してくれます。
同じようなソフトを使った経験のない方、暗記法についての一般的な知識のない方にとって、最初に触れた時に無力感に苛まれるのではないでしょうか。</p>
<p>そこでこの連載ではAnkiに触れながら覚えた経験を再現しました。Ankiを使った学習全般を体験できるよう内容を構成しました。
使い方の勘所を感じていただけたらと思います。</p>
<p>この体験があれば、ユーザーマニュアルやウェブ上の色々な情報を参考にして、自分独自の使い方を編み出していけると思います。</p>
<p>最後にこの連載の応用例として、テキストデータの集まりから頻出単語を抽出してAnki単語帳に仕上げる方法を「<a href="/frequent-words-in-msdn/">Windows開発者の必修語彙をAnki学習する方法</a>」という記事にしました。頻度表を作成するアプリケーションの使い方以外は、この連載の内容だけで実現できます。
皆様の専門分野ならではの単語帳作成にお役立てください。</p>
<p>Ankiは単なるフラッシュカードにとどまらない機能を提供しています。作者や既存ユーザーも意図しないような使い方をする方がたくさん現れると予想しています。この連載で分かりやすく書こうと心がけましたが、全ての人の状況に当てはまるとは考えていません。</p>
<p>友だちにAnkiの使い方を説明したとき、この連載よりもっと分かりやすい説明に気がついたら、ぜひその方法を共有してください。</p>
<p>この連載を最後までお読みくださいましてありがとうございました。Ankiで暗記を楽しんでください。</p>
</section>
<section id="更新情報">
  <div class="page-header">
    <h1>更新情報</h1>
  </div>
<p>2013/05/30: 初出</p>
<p>2014/09/10: 共有単語帳のプライバシー、更新、削除を追加</p>
<p>2015/01/17: 単語帳内容の登録について注意点</p>
<p>2016/01/27: AnkiWeb アカウントの自動削除について追加</p>
</section>
