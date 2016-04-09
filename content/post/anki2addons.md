---
slug: "anki2addons"
date: "2012-09-16T00:00:47+00:00"
lastmod: "2015-10-31T23:49:11+00:00"
title: "Anki 2.0 アドオンの作成 日本語訳"
categories: ["Anki","AnkiDoc","開発"]
tags: ["Anki","Python","Qt","SQLite","アドオン"]
anki: ["アドオン"]
aliases: ["/2012/09/anki2addons/"]
excerpt: "Writing Anki 2.0 Add-ons  の日本語訳。簡単なサンプルを使ったアドオン作成の概要、データベースアクセスの方法、フックを使った既存コードのカスタマイズ、デバッグ、直前バージョン 1.2 のプラグインからの移行、アドオンの共有方法について説明しています。"
---
<hr />
<h2>日本語版をご覧いただく前に</h2>
この文書は、<a href="http://ankisrs.net/docs/dev/addons.html" title="Writing Anki 2.0 Add-ons" target="_blank">Writing Anki 2.0 Add-ons (http://ankisrs.net/docs/dev/addons.html)</a> 2014-02-14 版の日本語訳です。

この文書は、簡単なサンプルを使ったアドオン作成の概要、データベースアクセスの方法、フックを使った既存コードのカスタマイズ、デバッグ、直前バージョン 1.2 のプラグインからの移行、アドオンの共有方法について説明しています。

Anki 2.0 は 2014年2月15日現在、最新バージョンは 2.0.22 です。より最新で正確な情報をご覧になりたい方は、原本をご覧ください。

<hr />
<section id="原文">
  <div class="page-header">
    <h2>原文</h2>
  </div>
<div class="ulist"><ul>
<li>
<p>
英語: <a href="http://ankisrs.net/docs/addons.html">http://ankisrs.net/docs/addons.html</a>
</p>
</li>
</ul></div>
</section>
<section id="概要">
  <div class="page-header">
    <h2>概要</h2>
  </div>
<p>Anki は、ユーザーフレンドリーなプログラミング言語 Python で作成しています。
Python についてあまり詳しくない方は、この文書の先を読む前に
<a href="http://docs.python.org/tutorial/">Python tutorial</a> をお読みください。
(訳注: <a href="http://www.python.jp/doc/release/tutorial/index.html">Python チュートリアル
日本語版</a>)</p>
<p>Python は動的言語なため、Anki ではアドオンが極めて強力に機能します。アドオンは Anki の処理
を拡張するだけでなく、Anki の任意の側面に変更を加えることができます。例えば、スケジュール
設定の処理を変更したり、ユーザーインターフェイスを修正したりすることができます。</p>
<p>プラグインの開発には、特定の開発環境は必要ありません。テキストエディタがあれば十分です。
WindowsやMacをお使いの方は、このサイトからパッケージ版のAnkiをお使いください。これらの
プラットフォーム上で、ゼロからAnkiを構築するために入手可能な説明はないからです。</p>
<p>メモ帳のような単純なテキストエディタでプラグインを作成できますが、シンタックスハイライト
機能 (コードの色分け) を持ったエディタを探してみると、作業がより簡単になります。</p>
<p>Anki を構成する2つの要素</p>
<p><em>libanki</em> には、「背後」で動作する全てのコードが含まれています。コレクションを開いたり、
カードを取得し、回答する処理などです。これは、Anki の GUI が使用していますが、GUI を使わず
に Anki 単語帳にアクセスするコマンドラインプログラムに含めることもできます。</p>
<p><em>ankiqt</em> には、Anki のユーザーインターフェイス部分が含まれています。Anki のユーザー
インターフェイスは、PyQt 上に構築されています。PyQt とは、クロスプラットフォーム GUI
ツールキット Qt に対する Python バインディングです。PyQt は、Qt の API に密接に動作
します。<a href="http://doc.qt.io/qt-4.8/index.html">Qt documentation</a> は、特定の GUI
コンポーネントの使い方を調べたい時に、非常に役立ちます。</p>
<p>Anki が起動すると、Anki は、Documents/Anki/addons フォルダの中にある .py ファイルを
探し、見つけたら一つずつ実行します。アドオンが実行されると、通常は既存のコードを修正したり、
新しい機能を提供する新しいメニュー項目を増やしたりします。</p>
</section>
<section id="簡単なアドオンの一例">
  <div class="page-header">
    <h2>簡単なアドオンの一例</h2>
  </div>
<p>次に示す test.py ファイルを、自分の add-ons フォルダーに追加してみてください:</p>
<pre># ankiqt からメインウィンドウオブジェクト (mw) を読み込みます
from aqt import mw
# utils.py から "show info" ツールを読み込みます
from aqt.utils import showInfo
# Qt GUI ライブラリの全てを読み込みます
from aqt.qt import *

# 次のようなメニュー項目を追加してみましょう。まず最初にメニュー項目が利用可能になったら
# 呼び出される関数を作ります。

def testFunction():
    # 現在使用中のコレクションの中のカードの枚数を取得します
    # このコレクションはメインウィンドウの中に保存しています
    cardCount = mw.col.cardCount()
    # メッセージボックスを表示します
    showInfo("Card count: %d" % cardCount)

# 新しいメニュー項目 "test" を作成します。
action = QAction("test", mw)
# この項目をクリックしたら testFunction が呼び出されるように設定します。
mw.connect(action, SIGNAL("triggered()"), testFunction)
# そして、この設定をツールメニューに反映します。
mw.form.menuTools.addAction(action)</pre>
<p>Anki を再起動すると、ツールメニューの中に <em>test</em> 項目が追加されていることに気づくでしょう。
この項目を選択して実行するとカード枚数を表示するダイアログが現れます。</p>
<p>プラグインの入力中に間違いがあった場合には、Anki は起動時にエラーメッセージを表示して
どこに問題があるか指摘します。</p>
</section>
<section id="コレクション">
  <div class="page-header">
    <h2>コレクション</h2>
  </div>
<p>コレクションファイル上の全ての操作は、mw.col を通じてアクセスします。基本的な例で
何ができるがご紹介します。注意してほしいのは、上の例のように testFunction() の中で行ってください。
アドオンの中で直接実行することはできません。それは、Ankiを起動中に、コレクションやプロファイルを
読み込む前にアドオンが初期化されるからです。</p>
<p><strong>復習時期のカードの取得:</strong></p>
<pre>card = mw.col.sched.getCard()
if not card:
    # 現在の単語帳は復習済み</pre>
<p><strong>カードを解答する:</strong></p>
<pre>mw.col.sched.answerCard(card, ease)</pre>
<p><strong>ノートを編集する (各フィールドの最後に " new" を追加):</strong></p>
<pre>note = card.note()
for (name, value) in note.items():
    note[name] = value + " new"
note.flush()</pre>
<p><strong>ノートにタグ x を持つカードの ID を取得する:</strong></p>
<pre>ids = mw.col.findCards("tag:x")</pre>
<p><strong>指定したカード ID から質問と解答を取得する:</strong></p>
<pre>for id in ids:
    card = mw.col.getCard(id)
    question = card.q()
    answer = card.a()</pre>
<p><strong>データベースの変更後にスケジュールをリセットする。GUI も更新しなければならないので、
メインウィンドウ上で reset() を呼び出すことに注意してください:</strong></p>
<pre>mw.reset()</pre>
<p><strong>テキストファイルをコレクションに読み込む</strong></p>
<pre>from anki.importing import TextImporter
file = u"/path/to/text.txt"
# 単語帳を選択
did = mw.col.decks.id("ImportDeck")
mw.col.decks.select(did)
# 単語帳にノートタイプを設定
m = mw.col.models.byName("Basic")
deck = mw.col.decks.get(did)
deck['mid'] = m['id']
mw.col.decks.save(deck)
# コレクションに読み込む
ti = TextImporter(mw.col, file)
ti.initMapping()
ti.run()</pre>
<p>ほとんど全ての GUI 処理は libanki 内に関連する関数を持っています。このため、Anki が利用
できるどんな処理でも、アドオンの中で同様に呼び出すことができます。</p>
<p>GUI の外側のコレクションにアクセスする場合は、次のようなコードを使います:</p>
<pre>from anki import Collection
col = Collection("/path/to/collection.anki2")</pre>
<p>Ankiの外部のコレクションに何らかの修正を加えたときは、修正が済んだら col.close() を必ず呼び出さなければなりません。
これを怠ると修正点は失われます。</p>
</section>
<section id="データベース">
  <div class="page-header">
    <h2>データベース</h2>
  </div>
<p>libanki がサポートしていない処理を実行する必要がある場合は、データベースに直接アクセスする
ことができます。Anki コレクションは、SQLite ファイル内に保存されています。詳しい情報は、
<a href="http://www.sqlite.org/lang.html">SQLite documentation</a>をご覧ください。</p>
<p>Anki のデータベースオブジェクトは次のような関数をサポートしています:</p>
<p><strong>execute() は、挿入と更新処理を実行します。指定した引数は ? を一緒に使います。例えば:</strong></p>
<pre>mw.col.db.execute("update cards set ivl = ? where id = ?", newIvl, cardId)</pre>
<p><strong>executemany() は、更新と挿入を一括処理します。大規模な更新にはこの関数の方が、
execute() で個別にデータを処理するよりも非常に高速に処理します。例えば:</strong></p>
<pre>data = [[newIvl1, cardId1], [newIvl2, cardId2]]
mw.col.db.executemany(same_sql_as_above, data)</pre>
<p><strong>scalar() は、単一の項目を返します:</strong></p>
<pre>showInfo("card count: %d" % mw.col.db.scalar("select count() from cards"))</pre>
<p><strong>list() は、各行の最初の列をリストで返します。次のコードの戻り値は [1, 2, 3]です:</strong></p>
<pre>ids = mw.col.db.list("select id from cards limit 3")</pre>
<p><strong>all() は、各行がリストの場合、行のリストを返します:</strong></p>
<pre>ids_and_ivl = mw.col.db.all("select id, ivl from cards")</pre>
<p><strong>execute() は、中間リストを作らずに結果の集まりへの処理を繰り返すのに使えます。例:</strong></p>
<pre>for id, ivl in mw.col.db.execute("select id, ivl from cards limit 3"):
    showInfo("card id %d has ivl %d" % (id, ivl))</pre>
<p>アドオンが、コレクションの中のテーブルを修正することが決してないように注意してください。
このことは、Anki 将来のバージョンで変更になる場合があります。プラグイン専用のデータを保存する
必要がある時には、衝突を避けて新しいテーブルを作るか、別のファイルにデータを保存するようにして
ください。小さい設定項目は、mw.col.conf の中に保存できますが、同期の度にコピーするため、
大規模なデータを保存しないでください。</p>
</section>
<section id="フック">
  <div class="page-header">
    <h2>フック</h2>
  </div>
<p>フックは、アドオンの作成がもっと簡単になるように、コードのほんのわずかな箇所に追加されました。
フックは 2 種類あります。<em>hook</em> は引数を取り、戻り値はありませんが、<em>filter</em> は引数を取り、
(おそらく何らかの修正を加えて) 値を返します。</p>
<p><em>hook</em> の簡単な例は、記憶困難なカード (leech) の処理の中に見つかります。スケジューラー
(libanki/sched.py) が、記憶困難なカードを見つけると、<em>hook</em> を呼び出します。</p>
<pre>runHook("leech", card)</pre>
<p>記憶困難なカードが現れた時に、特定の処理を行いたい場合、例えばそのカードを "Difficult"
という名前の単語帳に移動する場合、次のようなコードで実現できます。</p>
<pre>from anki.hooks import addHook
from aqt.mw import mw

def onLeech(card):
    # スケジューラーが修正する際には、 .flush() を使わずに修正できます。
    card.did = mw.col.decks.id("Difficult")
    # カードが詰め込み単語帳の中にある場合は、元の復習時期で元の単語帳に戻さなければ
    # なりません
    card.odid = 0
    if card.odue:
        card.due = card.odue
        card.odue = 0

addHook("leech", onLeech)</pre>
<p>aqt/editor.py の中に <em>filter</em> の例があります。エディターは、入力欄からフォーカスが外れる
と "editFocusLost" filter を呼び出します。そして、アドオンはノートに変更を加えます。</p>
<pre>if runFilter(
    "editFocusLost", False, self.note, self.currentField):
    # ノートを更新して、スケジュールを再度読み込む
    def onUpdate():
        self.loadNote()
        self.checkValid()
    self.mw.progress.timer(100, onUpdate, False)</pre>
<p>filter は 3 つの引数を指定できます。修正フラグ、ノート、現在のフィールドです。
filter が変更を加えない場合は、修正フラグは受け取った値と同じ値を返します。
変更を加えた場合は、True を返します。このようにして、どんな単一のアドオンでも変更を加えると
ユーザーインターフェイスは、ノートを読み込み直して、更新内容を表示します。</p>
<p>Japanese Support アドオンは、このフックを使って別の欄から新しい欄を自動的に生成します。
単純化したものを次に示します。</p>
<pre>def onFocusLost(flag, n, fidx):
    from aqt import mw
    # japanese model か?
    if "japanese" not in n.model()['name'].lower():
        return flag
    # src 欄と dst 欄を持つか?
    for c, name in enumerate(mw.col.models.fieldNames(n.model())):
        for f in srcFields:
            if name == f:
                src = f
                srcIdx = c
        for f in dstFields:
            if name == f:
                dst = f
    if not src or not dst:
        return flag
    # dst 欄は入力済みか?
    if n[dst]:
        return flag
    # イベントは src 欄で発生したか?
    if fidx != srcIdx:
        return flag
    # ソーステキストを取得
    srcTxt = mw.col.media.strip(n[src])
    if not srcTxt:
        return flag
    # 欄を更新
    try:
        n[dst] = mecab.reading(srcTxt)
    except Exception, e:
        mecab = None
        raise
    return True

addHook('editFocusLost', onFocusLost)</pre>
<p>filter の第一引数は、必ず返される引数です。このフォーカスを失った時の filter の中では、
引数はフラグですが、別のオブジェクトになる場合もあります。例えば、libanki/collection.py
の中では、_renderQA() は、カードの表面と裏面用に生成した HTML を持つ "mungeQA" filter
を呼び出します。latex.py は、この filter を LaTeX タグの中のテキストを画像に変換する
のに使っています。</p>
</section>
<section id="モンキーパッチとメソッドの隠蔽">
  <div class="page-header">
    <h2>モンキーパッチとメソッドの隠蔽</h2>
  </div>
<p>フックを持っていない関数を修正したい場合には、カスタム版の関数で上書きすることが可能です。
このことを、「モンキーパッチ」を呼ぶことがあります</p>
<p>aqt/editor.py には、setupButtons() という関数があり、エディターの中にある太字ボタン、
斜字体ボタンのようなボタンを生成します。自分のアドオンに違ったボタンを追加することを考えて
みましょう。</p>
<p>一番簡単な方法は、Anki のソースコードからその関数をコピーペーストして、自分のテキストを
ボタンに追加します。そして、元の関数を上書きします。次の通りです。</p>
<pre>from aqt.editor import Editor

def mySetupButtons(self):
    &lt;オリジナルからコピーペーストしたコード&gt;
    &lt;カスタムアドオンのコード&gt;

Editor.setupButtons = mySetupButtons</pre>
<p>この方法は、将来の Anki のバージョンで元のコードが更新されるような場合に、自分のアドオンも
更新する必要になる問題をはらんでいます。もっと良い方法は、オリジナルの関数を保存しておいて
自分のカスタムバージョンの中で呼び出すことです。</p>
<pre>from aqt.editor import Editor

def mySetupButtons(self):
    origSetupButtons(self)
    &lt;カスタムアドオンのコード&gt;

origSetupButtons = Editor.setupButtons
Editor.setupButtons = mySetupButtons</pre>
<p>これはよく行われる処理なので、Anki では wrap() という関数を提供して、もう少し使いやすく
しています。実際の例をご紹介します。</p>
<pre>from anki.hooks import wrap
from aqt.editor import Editor
from aqt.utils import showInfo

def buttonPressed(self):
    showInfo("pressed " + `self`)

def mySetupButtons(self):
    # - size=False は、小さいボタンは使わない
    # - lambda は、予め設定されているメソッドの代わりに関数の中で
    #    エディタインスタンスをコールバックに渡す時に必要
    self._addButton("mybutton", lambda s=self: buttonPressed(self),
                    text="PressMe", size=False)

Editor.setupButtons = wrap(Editor.setupButtons, mySetupButtons)</pre>
<p>既定では、wrap() は元のコードの後にカスタムコードを実行します。第3引数 "before" を渡すと
これを逆転できます。元のバージョンの前と後の両方で実行する必要がある場合は、次のようにします。</p>
<pre>from anki.hooks import wrap
from aqt.editor import Editor

def mySetupButtons(self, _old):
    &lt;オリジナルの前で実行するコード&gt;
    ret = _old(self)
    &lt;オリジナルの後で実行するコード&gt;
    return ret

Editor.setupButtons = wrap(Editor.setupButtons, mySetupButtons, "around")</pre>
<p>関数の前後でコードを実行するのではなく、関数の中を修正する必要がある場合には、元のコードの
中の対象とする関数にフックを追加するのが良い方法かも知れません。このような場合には、
追加するフックについての質問をフォーラムに投稿してください。</p>
</section>
<section id="qt">
  <div class="page-header">
    <h2>Qt</h2>
  </div>
<p>上記にあるとおり、<a href="http://doc.qt.io/qt-4.8/index.html">Qt documentation</a> が
色々な GUI を表示する方法を学ぶのに非常に貴重な文書です。</p>
<p>一つ覚えておいてほしいことは、Python ではオブジェクトはガベージコレクションされます。
次のように記述するとどうなるでしょうか。</p>
<pre>def myfunc():
    widget = QWidget()
    widget.show()</pre>
<p>すると、この関数を終了するとすぐにウェジットは消えてしまいます。これを避けるには、
トップレベルのウェジットに既存のオブジェクトを割り当てます。次の通りです。</p>
<pre>def myfunc():
    mw.myWidget = widget = QWidget()
    widget.show()</pre>
</section>
<section id="標準モジュール">
  <div class="page-header">
    <h2>標準モジュール</h2>
  </div>
<p>Anki は、このプログラムの実行に必要な標準モジュールだけを含めて提供しています。Python
の完全な複製を含んではいません。このために、Anki が含んでいない標準モジュールを使う必要が
ある場合には、自分のアドオンに同梱する必要があります。</p>
</section>
<section id="デバッグ">
  <div class="page-header">
    <h2>デバッグ</h2>
  </div>
<p>自分のコードから例外が発生した時には、Anki の標準例外ハンドラー (標準エラー出力に書き出さ
れるものは何でも) が補足します。デバッグ目的のために、情報を出力する必要がある場合は、
aqt.utils.showInfo を使うか、sys.stderr.write("text\n") で標準エラー出力に書き出す
必要があります。</p>
<p>Anki には、REPL が含まれています。プログラムの中から Ctrl+: または Command+: を押すと
ウィンドウが立ち上がります。上の欄に式や文を入力し、ctrl+return/command+return を押すと
評価します。セッション例を次に挙げます。</p>
<pre>&gt;&gt;&gt; mw
&lt;no output&gt;

&gt;&gt;&gt; print mw
&lt;aqt.main.AnkiQt object at 0x10c0ddc20&gt;

&gt;&gt;&gt; invalidName
Traceback (most recent call last):
  File "/Users/dae/Lib/anki/qt/aqt/main.py", line 933, in onDebugRet
    exec text
  File "&lt;string&gt;", line 1, in &lt;module&gt;
NameError: name 'invalidName' is not defined

&gt;&gt;&gt; a = [a for a in dir(mw.form) if a.startswith("action")]
... print a
... print
... pp(a)
['actionAbout', 'actionCheckMediaDatabase', ...]

['actionAbout',
 'actionCheckMediaDatabase',
 'actionDocumentation',
 'actionDonate',
 ...]

&gt;&gt;&gt; pp(mw.reviewer.card)
&lt;anki.cards.Card object at 0x112181150&gt;

&gt;&gt;&gt; pp(card()) # mw.reviewer.card.__dict__ へのショートカット
{'_note': &lt;anki.notes.Note object at 0x11221da90&gt;,
 '_qa': [...]
 'col': &lt;anki.collection._Collection object at 0x1122415d0&gt;,
 'data': u'',
 'did': 1,
 'due': -1,
 'factor': 2350,
 'flags': 0,
 'id': 1307820012852L,
 [...]
}

&gt;&gt;&gt; pp(bcard()) # ブラウザで選択したカードへのショートカット
&lt;as above&gt;</pre>
<p>何が評価されたか知るためには、式を明示的に出力する必要があることに注意してください。Anki では
pp() (pretty print) がスコープの中でオブジェクトの詳細を素早くダンプすることが簡単に
できるようになっています。ショートカット ctrl+shift+return は上の欄中の現在のテキストを
pp() で囲んで実行し結果を表示します。</p>
<p>Linux を使っているかソースコードから Anki を実行している場合は、自分のスクリプトを pdb を
使ってデバッグすることも可能です。次の行を自分のコードのどこかに置けば、Anki がその場所に
達するとターミナルにデバッガーが立ち上がります。</p>
<pre>from aqt.qt import debug; debug()</pre>
<p>別の方法としては、export DEBUG=1 と自分のシェルで実行すれば、補足していない例外個所で
デバッガーが立ち上がります。</p>
</section>
<section id="もっと詳しく学びたい場合には">
  <div class="page-header">
    <h2>もっと詳しく学びたい場合には</h2>
  </div>
<p>libanki と ankiqt の両方が <a href="http://github.com/dae/">http://github.com/dae/</a> で入手できます。コレクション
オブジェクトは、libanki の collection.py の中で定義されています。他に調べる価値のある
ファイルは、cards.py、notes.py、sched.py、models.py や decks.py があります。</p>
<p>ankiqt のソースコード見ることも、特定の処理のための libanki の呼び出し方や GUI の詳細
を理解するのに役立ちます。</p>
<p>多くの GUI は、designer ファイルの中で定義されてます。Qt Designer というプログラムを
使えば .ui ファイルを開いて、GUI をブラウズすることが簡単にできます。</p>
<p>最後になりますが、他のアドオンが何かを実現している方法を見ることも、非常に役立つことです。</p>
</section>
<section id="anki_1_2_プラグインからの移植">
  <div class="page-header">
    <h2>Anki 1.2 プラグインからの移植</h2>
  </div>
<p>注意すべき主な変更点:</p>
<div class="ulist"><ul>
<li>
<p>
テーブルの変更: facts&#8594;notes、reviewHistory&#8594;revlog
</p>
</li>
<li>
<p>
フィールドは、現在 notes テーブルに <em>flds</em> という単体のテキストフィールドに保存している。
   各フィールドは \x1f で区切られている。
</p>
</li>
<li>
<p>
cardTags テーブルは廃止になりました。以前と同様の方法で検索するには
   col.findCards("tag:x note:y card:z") をお使いください。
</p>
</li>
<li>
<p>
スケジュールのコードは全て sched.py にあります。単語帳のコードは collection.py です。
</p>
</li>
<li>
<p>
notes テーブルを一括更新する場合は、findReplace() を使わないでください。
   必ず col.updateFieldCache() を呼び出してください。
</p>
</li>
<li>
<p>
Q/A キャッシュは廃止になりました。このため質問か解答を生成していないカードの中を
   テキスト検索することはできません。
</p>
</li>
<li>
<p>
変更の前にコレクションを保存するには、古いやり直しシステムの代わりに
   mw.checkpoint("Undo Name") を呼び出してください。ユーザーが操作をやり直す場合、
   保存済みの状態に戻ります。
</p>
</li>
<li>
<p>
変更の同期を確実にするには、ノートやカードをデータベース内で修正した場合に、mod の更新と
   usn が col.usn() に設定を必ず行ってください。
</p>
</li>
<li>
<p>
同様に、モデルや単語帳を修正した場合は、適切なマネージャで必ず save() を呼んでください。
</p>
</li>
<li>
<p>
タイマーを設定する場合は、mw.progress.timer() を使って、データベース処理の最中に
   タイマーが起動することが決して起らないようにしてください。
</p>
</li>
<li>
<p>
stats テーブルは廃止されました。同期中のマージはできなくなりました。統計は revlog
   テーブルから引き出す必要があります。
</p>
</li>
</ul></div>
</section>
<section id="アドオンの共有">
  <div class="page-header">
    <h2>アドオンの共有</h2>
  </div>
<p>単純な一つのファイルからなるアドオンは、その .py をアップロードできます。複数のファイルの
アドオンは、Python パッケージとして動作するようにサブホルダーを作って、パッケージを読み込む
小さな .py ファイルを作ってください。Japanese support アドオンを使って説明しますと
次のような構造になります。</p>
<div class="literalblock">
<div class="content monospaced">
<pre>japanese/file1.py
japanese/file2.py
japanese/__init__.py # 空も可能。このフォルダーがパッケージであることを示す
japanese/&lt;バイナリーのサポートファイル&gt;
jp.py</pre>
</div></div>
<p>複数ファイルのアドオンをアップロードするには、フォルダーとローダー .py ファイルを zip
ファイルにして、その zip ファイルをアップロードしてください。</p>
<p><a href="https://ankiweb.net/shared/addons/">https://ankiweb.net/shared/addons/</a> にアドオンをアップロードしてください。</p>
</section>

<hr />

<h2>日本語版訳注</h2>
<p>Anki 2 の変更点を知るには、<a href="/changeinanki2/" target="_blank">Anki 2の変更点</a> が役立ちます。</p>
<p>更に、アプリケーションの個々の機能や処理を詳しく理解するには <a href="http://ankisrs.net/docs/manual.html" target="_blank">Anki User Manual</a> をご覧ください。</p>
<p>アドオン開発の簡単なチュートリアルとして <a href="/how_to_create_anki_add-ons/">フックを使った Anki アドオンのつくり方</a>を用意しました。この記事を補足して独自フックの追加してアドオンを作成する方法や、作成したアドオンを AnkiWeb のアドオン一覧へ登録する方法について説明しています。</p>

<h2>日本語版更新履歴</h2>
<ul>
<li>2012/09/16 Anki 2 Release Candidate 4準拠 (2012/09/08版)</li>
<li>2013/02/03 Anki 2.0.5準拠 (2012/12/20版)</li>
<li>2013/05/07 Anki 2.0.8準拠 (2013/05/07版)</li>
<li>2013/06/07 Anki 2.0.8準拠 (2013/05/13版)</li>
<li>2014/02/15 Anki 2.0.22準拠 (2014/02/14版)</li>
</ul>

