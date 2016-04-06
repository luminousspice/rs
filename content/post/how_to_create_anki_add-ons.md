---
slug: "how_to_create_anki_add-ons"
date: "2014-01-17T22:55:53+00:00"
lastmod: "2014-04-28T10:50:50+00:00"
title: "フックを使った Anki アドオンのつくり方"
categories: ["Anki","開発"]
tags: ["Anki","Python","開発"]
anki: ["AnkiWeb","アドオン","タグ"]
excerpt: "Anki は、アドオンを作成することで、標準機能を拡張したり、変更したりすることが出来ます。このアドオンの作成を簡単にするために、Anki はフック (Hook) という機能を提供しています。Anki の本体機能にカスタムのフックを追加し、機能拡張するアドオンを作成する方法を簡単に説明します。復習後、熟知になったノートにタグを付けるアドオンを開発します。Simple tutorial to create Anki Add-ons for developer with an custom hook."
---
<section id="preamble">
<p>Anki は、アドオンを作成することで、標準機能を拡張したり、変更したりすることができます。このアドオンの作成を簡単にするために、Anki はフック (Hook) という機能を提供しています。フックを使うと標準機能の中に簡単に外部の関数を組み込むことができます。この記事では更に進んで Anki の標準のフックがない場所にカスタムのフックを追加し、機能拡張するアドオンを作成する方法を簡単に説明します。復習後、熟知になったノートにタグを付けるアドオンを開発します。オフィシャルドキュメント「Anki 2.0 アドオンの作成」を補足する内容です。</p>
<p>この記事は、АnkiWeb に公開済みの Аnki アドオン (Add-on) <a href="https://ankiweb.net/shared/info/1299246957" target="_new">Mature Tag</a>を例にとって、解説します。
完成品をインストールして動作させることができますし、ソースコードを見ることもできます。最後に作成したアドオンを AnkiWeb の共有アドオン一覧に登録する方法を紹介します。</p>
<p>アドオンのインストール方法は、<a href="/how-to-use-shared-resources/">Ankiの共有リソースを使ってみる</a>で紹介しています。</p>
<p>また、ソースコードの表示方法は、インストールが完了した後、メニューバーの[ツール]-[アドオン]-[Mature_Tag]-[編集&#8230;]を選択してください。</p>
</section>
<section id="前提知識">
  <div class="page-header">
    <h2>前提知識</h2>
  </div>
<p>この記事の内容を理解するには、次の知識が必要です。</p>
<div class="ulist"><ul>
<li>
<p>
Anki の操作方法
特に、Anki というアプリケーションの機能を十分理解した上での操作方法の習熟は必須です。
</p>
</li>
<li>
<p>
Python による開発経験
他の開発言語の経験でも構いませんが、自分で資料を読み Python の開発方法を学べる能力は必要です。
</p>
</li>
<li>
<p>
<a href="/anki2addons/">Anki 2.0 アドオンの作成</a>の内容理解
本文中のサンプルコードを実際に動かしてアドオンを作成する経験があると理解に役立ちます。
</p>
</li>
</ul></div>
<p>この記事の最後に <a href="/how_to_create_anki_add-ons/#review">Anki アドオン開発のおさらい</a> という項目を設けて、必要な知識をまとめています。</p>
</section>
<section id="つくるアドオンの要件">
  <div class="page-header">
    <h2>つくるアドオンの要件</h2>
  </div>
<p>まず最初にアドオンの要件を決めておきます。</p>
<p>「復習が終わったら、新たに設定した復習間隔を調べ、熟知なら "Mature" というタグをノートに追加し、それ以外なら  "Mature" を削除します。」</p>
</section>
<section id="モジュールのインポート">
  <div class="page-header">
    <h2>モジュールのインポート</h2>
  </div>
<p>最初に必要なモジュールをインポートします。
Anki の復習で解答した時の処理は <a href="https://github.com/dae/anki/blob/master/anki/sched.py" target="_new">sched.py</a> の中のクラス <code>Scheduler</code> のメソッド <code>answerCard</code> で記述しています。</p>
<div class="highlight"><pre><strong>from</strong> anki.sched <strong>import</strong> Scheduler</pre></div>
<p>残念ながら復習に関する処理の中にフック (Hook) は存在しません。そこで独自のフックをこのメソッドの最後に追加します。
フックの設置、呼び出しに必要なモジュールをインポートします。</p>
<div class="highlight"><pre><strong>from</strong> anki.hooks <strong>import</strong> addHook, runHook, wrap</pre></div>
<p>もちろん <code>answerCard</code> を書き換えることもできますが、今回の様な条件では独自フックの設置したほうが簡単に記述できます。</p>
</section>
<section id="復習の解答後に処理するフックを設置する">
  <div class="page-header">
    <h2>復習の解答後に処理するフックを設置する</h2>
  </div>
<p></p>
<p>まず、独自のフック "anseweredRevCard" を追加する関数 <code>newAnswerCard()</code> を定義します。
runHook() はフックを新たに設置する標準の関数です。</p>
<div class="highlight"><pre><strong>def</strong> newAnswerCard(self, card, ease):
    runHook('anseweredRevCard', self, card)</pre></div>
<p>次に標準の <code>wrap()</code> 関数を使って、<code>answerCard</code> の後に <code>newAnswerCard</code> の内容を追加する処理を記述します。</p>
<div class="highlight"><pre>Scheduler.answerCard = wrap(Scheduler.answerCard, newAnswerCard)</pre></div>
<p>すると <code>answerCard</code> の最後に次の行が追加されます。</p>
<div class="highlight"><pre>runHook('anseweredRevCard', self, card)</pre></div>
<p>これで、復習で解凍した後に処理を呼び出すフックを設置できました。</p>
</section>
<section id="タグを追加_削除する">
  <div class="page-header">
    <h2>タグを追加、削除する</h2>
  </div>
<p>復習が終わったら、復習間隔を調べ 21 日以上であったら、"Mature" タグを追加し、それ以外の場合は削除する関数　<code>matureCheck()</code> を定義します。
熟知の基準日数は変数 <code>threshold</code> に、設定するタグ文字列は変数 <code>MatureTag</code> に設定しました。
タグをノートに追加するには <code>Note</code> クラスのメソッド <code>addTag()</code> を、削除するには <code>delTag()</code> を使います。</p>
<div class="highlight"><pre><i># Threshold interval for tagging</i>
threshold = 21
<i># Tag string for mature note</i>
MatureTag = u"Mature"

<strong>def</strong> matureCheck(self, card):
    f = card.note()
    <strong>if</strong> (card.ivl &gt;= threshold):
        f.addTag(MatureTag)
    <strong>else</strong>:
        f.delTag(MatureTag)
    f.flush()
    <strong>return</strong> True</pre></div>
<p>最後に <code>addHook()</code> 関数を使って上で作成したカスタムフック "anseweredRevCard"　で <code>matureCheck()</code> 関数を呼び出す設定をします。</p>
<div class="highlight"><pre>addHook("anseweredRevCard", matureCheck)</pre></div>
<p>これで、完成です。完成品は次の通りです。</p>
<div class="highlight"><pre><strong>from</strong> anki.hooks <strong>import</strong> addHook, runHook, wrap
<strong>from</strong> anki.sched <strong>import</strong> Scheduler

<i># Threshold interval for tagging</i>
threshold = 21
<i># Tag string for mature note</i>
MatureTag = u"Mature"

<strong>def</strong> matureCheck(self, card):
    f = card.note()
    <strong>if</strong> (card.ivl &gt;= threshold):
        f.addTag(MatureTag)
    <strong>else</strong>:
        f.delTag(MatureTag)
    f.flush()
    <strong>return</strong> True

<strong>def</strong> newAnswerCard(self, card, ease):
    runHook('anseweredRevCard', self, card)

Scheduler.answerCard = wrap(Scheduler.answerCard, newAnswerCard)

addHook("anseweredRevCard", matureCheck)</pre></div>
</section>
<section id="もっとかんたんに書く">
  <div class="page-header">
    <h2>もっとかんたんに書く</h2>
  </div>
<p>実は、フックを設置せずに記述を簡略化できます。メソッドを上書きする方法です。
<code>wrap()</code> 関数で直接 <code>matureCheck</code> を指定します。</p>
<div class="highlight"><pre>- <strong>def</strong> newAnswerCard(self, card, ease):
-    runHook('anseweredRevCard', self, card)

- Scheduler.answerCard = wrap(Scheduler.answerCard, newAnswerCard)
+ Scheduler.answerCard = wrap(Scheduler.answerCard, matureCheck)

- addHook("anseweredRevCard", matureCheck)</pre></div>
<p>この場合は、フックを使わないので、他の関数も追加で呼び出すような追加拡張はできません。</p>
</section>
<section id="ファイルの配置">
  <div class="page-header">
    <h2>ファイルの配置</h2>
  </div>
<p>完成したファイル Mature_Tag.py を動作させるには、<code>Documents/Anki/addons</code> フォルダの中に保存します。Anki を再起動すると、この Python スクリプトファイルを読み込みます。</p>
<p>アドオンが読み込まれるとメニューバーに [ツール]-[アドオン]-[Mature_Tag] という項目が追加されます。</p>
</section>
<section id="ankiweb_の共有アドオン一覧に登録する">
  <div class="page-header">
    <h2>AnkiWeb の共有アドオン一覧に登録する</h2>
  </div>
<p>作成したアドオンを AnkiWeb に公開して、アドオン一覧に登録する方法を紹介します。
まず、<a href="https://ankiweb.net/shared/addons/" target="_new">共有アドオン一覧</a>を開き、AnkiWeb にサインインします。</p>
<div class="imageblock">
<div class="content">
<img src="/images/anki_addon_tutorial_1.png" alt="アドオン一覧" width="60%">
</div>
<div class="title">図 1. 共有アドオン一覧</div>
</div>
<p>登録フォームは画面右上の [Upload Add-on] ボタンをクリックすると表示します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/anki_addon_tutorial_2.png" alt="登録フォーム" width="60%">
</div>
<div class="title">図 2. アドオン登録フォーム</div>
</div>
<p>このフォームでは次のように項目入力します。</p>
<div class="ulist"><ul>
<li>
<p>
<strong>Title:</strong> アドオンの名前を入力します。アドオン一覧に表示する名前にになります。
</p>
</li>
<li>
<p>
<strong>File:</strong> 登録したいアドオンの Python スクリプトを選択します。今回の例では <code>Mature_Tag.py</code> です。
</p>
</li>
<li>
<p>
<strong>Description</strong> アドオンユーザーのためにアドオンの機能や使い方の説明を入力します。
</p>
</li>
</ul></div>
<p>入力が済んだら [Upload] を押すと登録できます。特に AnkiWeb に障害がなければ即座に公開されます。
登録したアドオンのページに移動します。</p>
<p>公開したアドオンのページの下にある [Update] ボタンを押すと登録内容の編集ができ、[Remove] ボタンを押すとアドオンを削除することができます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/anki_addon_tutorial_3.png" alt="アドオンページ 編集、削除ボタン">
</div>
<div class="title">図 3. アドオンページ 編集、削除ボタン</div>
</div>
</section>
<section id="まとめ">
  <div class="page-header">
    <h2>まとめ</h2>
  </div>
<p>「Anki 2.0 アドオンの作成」で説明しているとおり、Anki が標準で用意しているフックを利用すると Anki の機能の修正や追加が簡単になります。フックが用意されていない箇所にも、この記事で紹介した方法で自分でカスタムのフックを自由に追加することができます。フックの使い方になれると Anki アドオン作成するを能力が向上し、Anki 自身の機能についても理解を深めることができます。</p>
</section>
<section id="review">
  <div class="page-header">
    <h2>遺補: Anki アドオン開発のおさらい</h2>
  </div>
<p>Anki のアドオンは、Python スクリプトで記述し、<code>Documents/Anki/addons</code> フォルダの中に保存します。
Anki に Python インタープリタが含まれているため、アドオンの開発に Python のインストールは必要ありません。</p>
<p>Anki は起動時に <code>addons</code> フォルダの中の <code>.py</code> ファイルを読み込みます。
従って、新たにアドオンファイルを追加した場合、再起動して初めて機能するようになります。
なお、シフトキーを押したまま Anki を起動すると、アドオンファイルの読み込みは行いません。</p>
<p>Anki には、WordPress のようにフック (Hook) という機能を提供していて、標準機能を拡張したり、変更したりするアドオン開発が容易にできます。Anki 自身もたくさんのフックを利用しています。</p>
<p>アドオンをつくるために Anki が用意している関数は次の通りです。</p>
<table rules="rows" frame="hsides"cellspacing="0" cellpadding="4">
<caption class="title">表 1. アドオン開発用関数</caption>
<colgroup>
<col class="span1">
<col class="span4">
</colgroup>
<thead>
<tr>
<th>関数名</th>
<th>説明</th>
</tr>
</thead>
<tbody>
<tr>
<td>runHook</td>
<td>フックを実行する。値は返さない。</td>
</tr>
<tr>
<td>runFilter</td>
<td>フィルターを実行し値を返す。</td>
</tr>
<tr>
<td>addHook</td>
<td>フックを追加する。</td>
</tr>
<tr>
<td>remHook</td>
<td>フックを削除する。</td>
</tr>
<tr>
<td>wrap</td>
<td>既存の関数を上書きする。第3引数でオリジナルの関数の位置を指定。既定はオリジナルの後にカスタム関数を実行する。</td>
</tr>
</tbody>
</table>
<p>フックを見つけるには、Anki のソースコードを　"runHook"、"runFilter" で検索します。Anki 2.0.20 現在　36 のフックが存在します。</p>
<p>フックの使い方を詳しく知るには、<a href="/anki2addons/">Anki 2.0 アドオンの作成</a>、および <a href="https://github.com/dae/anki/blob/master/anki/hooks.py" target="_new">anki/hooks.py</a> をお読みください。</p>
</section>


