---
slug: "how-to-anki"
date: "2013-04-12T23:30:03+00:00"
lastmod: "2016-01-16T14:17:09+00:00"
title: "はじめてのAnki – まず使ってみる"
weight: 30
categories: ["Anki","Anki2の使い方"]
tags: ["Anki"]
anki: ["オフィシャルビデオ","ノートの登録","メディアの登録","動画","学習","学習の中断","復習","画像","解答ボタン押し間違え","言語設定","音声","音声の再生"]
excerpt: "分散学習システム Anki を今すぐ使い始めるのに最低限必要な使い方を紹介します。最新版 Anki 2.0.33 に準拠しています。Ankiをダウンロードして、記憶するカードを作成し、学習してみましょう。画像や動画、音声を追加する方法、学習中に音声ファイルを再生する方法も取り上げています。Survival skill to learn with Anki."
---
<section id="preamble">
<p><strong>連載: Ankiの使い方 〜覚えるために忘れろ〜 第1回</strong></p>
<p>Ankiを始めたいけど、何から始めて良いか分からない方のためにこの記事を書きました。インストールから、問題作成、学習までの基本的な使い方の流れになれていきましょう。Ankiを使っている人なら誰でも知っていて、常に使っている機能、マニュアルにも当然書いてある機能を説明しています。</p>
<p>画像や動画、音声を追加する方法、学習中に音声ファイルを再生する方法も取り上げています。</p>
<div class="sidebarblock well">
<div class="content">
<div class="title label label-inverse">確認事項</div>
<p><a target="_new" href="http://ankisrs.net/">Anki</a>とはDamien Elmesが開発している分散学習システム(SRS; Spaced Repetition learning Systems)です。</p>
<p>この記事は、執筆者が独自に第三者の立場で作成したのもです。開発者が作成した文書の翻訳ではありません。</p>
<p>開発者が提供する正式な情報を必要とする方、Anki の機能全般を知りたい方は、<a target="_new" href="http://ankisrs.net/docs/manual.html">Anki User Manual</a>をご覧下さい。</p>
</div></div>
</section>
<section id="この記事を読む前に">
  <div class="page-header">
    <h2>この記事を読む前に</h2>
  </div>
<p>この情報は、デスクトップ PC 版 Anki 2.0.33 (Mac OS X) に基づいて作成しています。
他のプラットフォーム版をお使いの方は、適宜読み替えてください。</p>
<p>特に PC 版と、iOS アプリ AnkiMobile や Android(アンドロイド)アプリ AnkiDroid の間では、データの互換性はありますが、ユーザーインターフェイスや機能に違いがあります。</p>
<h3 id="ios_アプリ向け情報">iOS アプリ向け情報</h3>
<p>iPhone や iPad などで AnkiMobile をお使いの方は、<a href="/how-to-use-ankimobile/">iPhone ユーザーのためのはじめての Anki</a>をご覧下さい。はじめて使うときに必要な、毎日の学習が続けられる最低限の使い方をまとめました。AnkiMobile だけではできない機能を PC 版 Anki と連携して実現する方法も取り上げています。</p>
<h3 id="android_アプリ向け情報">Android アプリ向け情報</h3>
<p>AnkiDroid の使い方については、<a target="_new" href="https://ankidroid.org/docs/manual-ja.html">AnkiDroid 2 取扱説明書</a>をご覧下さい。</p>
</section>
<section id="どんなソフトなの">
  <div class="page-header">
    <h2>どんなソフトなの</h2>
  </div>
<p>Ankiとは、分散学習(Spaced Repetition)ができるフラッシュカードです。
Ankiでは思い出しやすさで次の復習のタイミングが決まります。覚えにくいカードは頻繁に復習し、簡単に記憶できたカードは時間をあけて記憶を確認します。
このような原則に基づくと効果的な結果が得られるという学習理論に基づいて作られています。
多量のカードを持っていても、結果として一日の復習量は散らばって、負担を軽減してくれます。</p>
<p>忘れてはいけないポイントは、毎日続けることです。中断が頻繁に発生すると分散学習の効果が期待できません。</p>
<p>いつでもどこでも復習しやすいように、Ankiは、Mac、Windows、Linux/BSD、iOS(iphone, ipad, ipod touch)、Androidなどいろいろなシステム上で使うことができ、無料のウェブサービス AnkiWeb を経由して、端末間で学習内容、履歴を同期することができます。
専用のアプリケーションがない端末でもウェブブラウザ機能を持っているなら、AnkiWebにアクセスして直接学習ができます。</p>
<p>Ankiには、ユーザーが作ったデータを共有するコミュニティがあります。
自分でカードを作らなくても共有単語帳をダウンロードすればすぐ学習が始められます。また、アドオンを使えば簡単に機能拡張することができます。
もちろん、自分で作った単語帳を共有したり、アドオンと作ってAnkiに機能追加することもできます。</p>
<h3 id="anki学習の流れ">Anki学習の流れ</h3>
<p>まず最初に、Ankiの作者Damien Elmesが作成した、Shared decks and review basics というYouTubeのビデオをご覧ください。</p>
<p>このビデオでは、最初に共有単語帳一覧にアクセスして、単語帳をインストールします。
この単語帳を使って、Ankiの一通りの学習をした後に、単語帳オプションの設定方法について解説する内容です。</p>
<iframe width="420" height="315" src="https://www.youtube-nocookie.com/embed/QS2G-k2hQyg" frameborder="0" allowfullscreen></iframe><p>説明の英語が分からなくても、全体のAnki学習の流れを感じを掴んでいただけると思います。</p>
</section>
<section id="入手方法">
  <div class="page-header">
    <h2>入手方法</h2>
  </div>
<p>Anki2は、<a target="_new" href="http://ankisrs.net/">Ankiオフィシャルサイト</a>からMac、Windows、Linux/BSD版がダウンロードできます。モバイルデバイス用のアプリケーションのダウンロード先もこちらで紹介しています。</p>
<p>「<a href="/install_anki/">Ankiのインストール</a>」では、アプリケーションのダウンロードからインストールまでを利用システム別に簡単に説明しています。ダウンロードサイトの英文に気後れするような方はこちら記事をご覧ください。</p>
</section>
<section id="言語設定">
  <div class="page-header">
    <h2>言語設定</h2>
  </div>
<p>ダウンロードファイルを解凍し、最初に起動すると言語設定の画面が出ます。ここでユーザーインターフェースに使いたい言語を選択してください。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_1.png" alt="言語設定画面">
</div>
<div class="title">図 1. 言語設定画面</div>
</div>
<p>次に確認ウィンドウを表示しますので、自分が使用したい言語を選択しているか確認してください。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_15.png" alt="言語設定 確認ウィンドウ">
</div>
<div class="title">図 2. 言語設定 確認ウィンドウ</div>
</div>
<p>[No]を選択すると、先ほどの選択画面に戻ります。</p>
<p>後から変更するのは大変なので、慎重に選択項目を確認してください。
Anki1.2のように環境設定画面から変更することができません。
具体的な方法は、「<a href="/how-to-change-lang/">Anki2の言語設定を変更する</a>」で紹介しています。</p>
</section>
<section id="起動直後に開くメインウィンドウ">
  <div class="page-header">
    <h2>起動直後に開くメインウィンドウ</h2>
  </div>
<p>言語設定が終わると、メインウィンドウが開きます(図 3)。なお、次回のAnkiの起動からこの画面が最初に開きます。
メインウィンドウには、使用中の単語帳一覧を表示します。学習中でもウィンドウ上部の[単語帳]リンクをクリックすると、この画面に戻ります。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_2.png" alt="初回起動直後のメインウィンドウ">
</div>
<div class="title">図 3. 初回起動直後のメインウィンドウ</div>
</div>
<p><code>Default</code> という単語帳があるのがわかります。<code>Default</code> 単語帳は特殊な単語帳で削除することが出来ません。また、<code>Default</code> の中身が空の場合、他の単語帳があれば表示されません。</p>
</section>
<section id="問題の登録">
  <div class="page-header">
    <h2>問題の登録</h2>
  </div>
<p></p>
<p>問題を登録してみましょう。
[追加]リンクをクリックすると、ノート追加ウィンドウを表示します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_3.png" alt="問題を登録">
</div>
<div class="title">図 4. ノート追加ウィンドウで問題を登録</div>
</div>
<p>Frontフィールドには表面に表示する問題を、Backフィールドには裏面に表示する解答を入力します。[追加]ボタンを押すとフィールドに入力した問題を登録します。ここで登録した一組のデータをAnkiでは <strong>ノート</strong> と呼びます。</p>
<p>Ankiでは、ノートのデータをHTMLを使って書式設定できます。ノートエディタのフィールドは、WYSIWYGエディタの機能を持っていますので、ウィンドウ上部のボタンを使って文字の装飾をしたり、メディアファイルを追加したりできます。HTMLを直接編集するには、ショートカット(Mac OS X: Command+Shift+X, Windows: Ctrl+Shift+X)を使って HTML エディタを呼び出します。</p>
<p>既定ではDefaultという名前の単語帳にこの問題を追加します。保存先を変更するには、ウィンドウ右上の[Default]ボタンを押します(図3)。</p>
<h3 id="画像_音声_動画の登録方法">画像、音声、動画の登録方法</h3>
<p>表面(質問)、裏面(解答)ともにメディアファイル(画像、音声、動画)を読み込むことができます。</p>
<p>一番簡単な方法は、メディアファイルを読み込みたいフィールドにドラッグアンドドロップすることです。ウェブブラウザに表示している画像をAnkiに直接ドロップすることもできます。コピーアンドペーストでに取り込むことも可能です。</p>
<p>また、Frontフィールド、Backフィールドにカーソルを合わせて、追加ウィンドウの上部のボタンの並びから[クリップの画像]ボタン (Mac OS X: fn+F3, Windows: F3) を押して現れた画面からメディアファイルを選択して読み込むこともできます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_12.png" alt="メディアを登録">
</div>
<div class="title">図 5. メディアを登録</div>
</div>
<p>上の例では画像と、<code>ripple.mp3</code> という名前の音声ファイルを読み込んだところです。</p>
<p>問題を全て登録し終わったら、今度は問題を出題させてみましょう。
[閉じる]ボタンを押して追加ウィンドウを閉じると、元のホームページに戻ります。</p>
<h3 id="テキストの読み上げ">テキストの読み上げ</h3>
<p>音声ファイルを用意するのではなく、フィールドのテキストをPCに読んでもらう (発音する) こともできます。それにはAwesomeTTSというアドオンファイルが必要になります。具体的な設定方法は、<a href="/how-to-use-shared-resources/">Ankiの共有リソースを使ってみる</a>で紹介しています。</p>
<p>フィールドは追加削除、名前の変更もできます。また、<a href="/how-to-edit-cards/">カードを編集すると表面、裏面のどこに表示するか設定</a>できます。またカードに表示しないフィールドを設定することもできます。
<a href="/how-to-import/">CSVファイル形式などに保存した複数の問題を一括で読み込む</a>ことができます。</p>
</section>
<section id="登録したカードの確認">
  <div class="page-header">
    <h2>登録したカードの確認</h2>
  </div>
<p>Anki は、一日の学習の上限値20を設定しているので、20以上登録した場合は、このあとすぐに学習をはじめても全部のカードを見ることが出来ません。</p>
<p>登録したカードを確認したい場合は、<a href="/browser-overview/">ブラウザーのプレビュー機能</a>を利用すると便利です。</p>
</section>
<section id="新規の問題を学習">
  <div class="page-header">
    <h2>新規の問題を学習</h2>
  </div>
<p>ホームページの単語一覧から単語帳を選択すると、その単語帳のトップページを表示します。
この画面では、単語帳の概要と学習キューに入っているカードの内訳を表示します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_4.png" alt="単語帳のトップページ">
</div>
<div class="title">図 6. 単語帳のトップページ</div>
</div>
<p>上の例では、新規に学習するカードが6枚学習キューに入っていることを示しています。
ここで[学習する]ボタンを押すと、学習セッションを開始し、問題を表示します。</p>
<h3 id="学習の進め方">学習の進め方</h3>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_5.png" alt="出題画面">
</div>
<div class="title">図 7. 出題画面</div>
</div>
<p>[解答を表示]ボタンを押すと、罫線をはさんで問題と解答が現れます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_6.png" alt="解答表示">
</div>
<div class="title">図 8. 解答表示</div>
</div>
<p>ウィンドウの下中央に3つのボタンの中から、記憶状態に応じてボタンを選択するとこのカードの学習は終了します。</p>
<div class="ulist"><ul>
<li>
<p>
[もう一回]ボタンは、忘れてしまった時に押します。ボタンの上に表示した時間後に再度出題します。既定では1分後です。解答を記憶し直しましょう。
</p>
</li>
<li>
<p>
[普通]ボタンは、覚えていた場合に押します。既定では10分後に再度出題します。
</p>
</li>
<li>
<p>
[簡単]ボタンは、覚えていて簡単に感じた場合に押します。このボタンを押すとこのカードの学習は終了し、既定では4日後に復習が設定します。
</p>
</li>
</ul></div>
<p>問題を解答していき、全ての問題の復習期日を翌日以降に設定したところで、その日の学習が終了します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_7.png" alt="一日の学習終了">
</div>
<div class="title">図 9. 一日の学習終了</div>
</div>
<h3 id="音声ファイルの再生方法">音声ファイルの再生方法</h3>
<p>既定の設定では、音声ファイルは自動再生する設定になっています。もし、自動再生しない場合は、単語帳のオプション設定を確認してみてください。</p>
<p>単語帳のオプション設定は、メインウィンドウの単語帳一覧から設定したい単語帳をクリックし、画面下の[オプション]ボタンを押すか、キーボードの[O]を押してください。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_13.png" alt="音声ファイルについての単語帳のオプション設定">
</div>
<div class="title">図 10. 音声ファイルについての単語帳のオプション設定</div>
</div>
<p>一度再生した音声ファイルをもう一度聴きたい場合は、キーボードの[R]を押すか、画面右下のドロップダウンリスト[もっと]から、[オーディオを再生]を選択してください。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_14.png" alt="音声ファイルの再生">
</div>
<div class="title">図 11. 音声ファイルの再生</div>
</div>
<h3 id="学習の上限">学習の上限</h3>
<p>Anki は、一日の学習枚数に上限を設定しています。初期設定は20で、20枚以上カードを追加しても、初日の学習は20枚です。残りのカードは翌日以降に繰り返します。</p>
</section>
<section id="復習する">
  <div class="page-header">
    <h2>復習する</h2>
  </div>
<p>既定では、普通と答えた場合の新規カードの復習期日は1日後です。一日経ったらAnkiを起動し、単語帳一覧から単語帳Default(保存指定した単語帳)をクリックして、出題してみましょう。前の日に学習した問題を出題します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_9.png" alt="復習問題の解答画面">
</div>
<div class="title">図 12. 復習問題の解答画面</div>
</div>
<div class="ulist"><ul>
<li>
<p>
[もう一回]ボタンは、忘れてしまった時に押します。ボタンの上に表示した時間後に再度出題します。既定では10分後です。解答を記憶し直しましょう。
</p>
</li>
<li>
<p>
[難しい]ボタンは、覚えていて難しく感じた場合に押します。
</p>
</li>
<li>
<p>
[普通]ボタンは、覚えていた場合に押します。
</p>
</li>
<li>
<p>
[簡単]ボタンは、覚えていて簡単に感じた場合に押します。
</p>
</li>
</ul></div>
<p>正解した場合の次回の復習期日は、過去の学習履歴によって決定します。[難しい]を押せば期日は短めに、[簡単]を押せば復習期日は長く設定します。</p>
<p>出題カードを全て復習し、復習期日を翌日以降に全て設定すると、その日の学習が終了します。</p>
<h3 id="解答ボタンを押し間違えた">解答ボタンを押し間違えた</h3>
<p>学習中よくある失敗が、間違ったボタンを押して、カードの行方が分からなくなってしまうことです。このような時には、落ち着いてメニューバーから[編集]&gt;[取り消す](Mac OS X: Command+Z, Windows: Ctrl+Z)を選択しましょう。再度出題画面に戻ります。</p>
<h3 id="復習の上限">復習の上限</h3>
<p>Anki は、一日の復習枚数に上限を設定しています。初期設定は100で、100枚以上のカードが復習期日に達していても、出題数は100枚です。残りのカードは翌日以降に繰り返します。</p>
</section>
<section id="学習を中断するには">
  <div class="page-header">
    <h2>学習を中断するには</h2>
  </div>
<p>学習セッションを途中で止める方法を使い分ければ、学習セッションを自分の都合にあわせて分割できるようになります。
Anki学習できる短い時間がもっとたくさん増えるはずです。</p>
<h3 id="ankiを終了する">Ankiを終了する</h3>
<p>Ankiそのものを終了したいなら、メニューバーから[ファイル]&gt;[終了](Mac OS: Command+Q, Windows: Ctrl+Q)を選びます。学習セッション中で直接終了しても問題はありません。次回起動した時には、残りのカードを学習できます。</p>
<h3 id="学習セッションから抜ける">学習セッションから抜ける</h3>
<p>Ankiを起動したまま、中断したい場合は、ウィンドウ上部の[単語帳]リンクをクリックするか、[D]キーを押します。学習セッションから抜け出して、起動直後に表示する単語帳一覧に戻ります。</p>
<p>上の2つの方法で中断した後に、その日の内に再開すれば残りのカードを学習できます。再開した時に、一日の上限までカードを取得しなおすことはありません。</p>
<p>翌日以降にセッションを再開した場合は、残りのカードにその日の上限までカードが追加になります。</p>
<h3 id="特定のカードだけ学習をやめる">特定のカードだけ学習をやめる</h3>
<p>特定のカードだけを学習対象から外して、他のカードはそのまま継続したい場合もあります。画面右下のドロップダウンリスト[もっと]から[ノートを延期]、[カードを保留]、[ノートを保留]のいずれか適切なものを選びます(図 11)。この3つの処理の違いについては、<a href="/how-to-suspend-this-card/">いま表示しているAnkiカードだけ学習をやめる方法</a>で詳しく説明しています。</p>
</section>
<section id="出題上限の変更">
  <div class="page-header">
    <h2>出題上限の変更</h2>
  </div>
<p>カードの出題数を変更するには、2通りの方法があります。</p>
<div class="ulist"><ul>
<li>
<p>
一時的に上限を変更する場合は、<a href="/how-to-customize-learning/">カスタム学習セッション</a>を使います。
</p>
</li>
<li>
<p>
変更内容をそのまま使い続けるには、単語帳オプションを変更します。
</p>
</li>
</ul></div>
</section>
<section id="単語帳オプションの変更">
  <div class="page-header">
    <h2>単語帳オプションの変更</h2>
  </div>
<p>単語帳のトップページ下にある[オプション]ボタン(図 6)を押すと、あるいは [O]キーを押すと、オプション設定画面が開きます。</p>
<h3 id="新規カードの学習オプション">新規カードの学習オプション</h3>
<p>既定の設定は次の通りです。</p>
<div class="ulist"><ul>
<li>
<p>
新規の問題の上限は一日20題です。
</p>
</li>
<li>
<p>
新規カードの学習ステップは1分、10分の二段階の設定です。
</p>
</li>
<li>
<p>
新規カードの出題順は追加順です。ランダムに出題するように変更することもできます。
</p>
</li>
<li>
<p>
新規カードの学習後に設定する復習期日は1日後です。
</p>
</li>
<li>
<p>
新規カードで[簡単]と選択した場合の復習期日は4日後です。
</p>
</li>
</ul></div>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_8.png" alt="単語帳のオプション設定">
</div>
<div class="title">図 13. 単語帳のオプション設定</div>
</div>
<h3 id="復習カードの学習オプション">復習カードの学習オプション</h3>
<p>既定の設定は次の通りです。</p>
<div class="ulist"><ul>
<li>
<p>
復習問題の上限は100題です。
</p>
</li>
</ul></div>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_10.png" alt="復習のオプション設定">
</div>
<div class="title">図 14. 復習のオプション設定</div>
</div>
<h3 id="忘却カードの学習オプション">忘却カードの学習オプション</h3>
<p>忘却カードとは復習した時に思い出せなかったカードのことです。</p>
<div class="ulist"><ul>
<li>
<p>
忘れた場合の再学習のステップは10分後の一段階です。
</p>
</li>
</ul></div>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_1_11.png" alt="忘却のオプション設定">
</div>
<div class="title">図 15. 忘却のオプション設定</div>
</div>
<p>忘却回数が設定値を超えると無駄なカード (Leech) の扱いを受け、保留するか、タグをつけるかどちらかの処理が行われます。</p>
<p>初期設定では[保留]に設定され、復習スケジュールから外されます。
<a href="/management_of_leeches/">無駄なカード(Leech)になってもAnki学習を続ける方法</a>で、復習スケジュールに復帰する方法を説明しています。</p>
</section>
<section id="おわりに">
  <div class="page-header">
    <h2>おわりに</h2>
  </div>
<p>Ankiを使うのに最低限必要な操作は以上です。
Ankiが設定した期日通りに復習を進めて行きましょう。
Ankiがスケジュール管理しているので安心して忘れることができます。</p>
<p>Ankiの詳しい機能は、<a target="_new" href="http://ankisrs.net/docs/manual.html">ユーザーマニュアル</a>をお読みください。
一部未翻訳の項目が残っていますが、<a href="http://wikiwiki.jp/rage2050/">日本語マニュアル</a>も参考にしてみてください。</p>
<p>この8回の連載では実際の使用手順に基づいた活用方法を紹介します。
Ankiを使った学習全般を体験できるよう内容を構成しました。
簡単なものから難しいものにステップアップしていく順番に配置しています。</p>
<p>Ankiは、このアプリケーションで特別な意味を持つ用語を多数使用しています。<a href="/anki_glossary/">Anki 用語集</a>をまとめていますので、もしAnkiを使っている時に意味の分からない用語にであったら、調べてみてください。</p>
</section>
<section id="この連載について">
  <div class="page-header">
    <h2>この連載について</h2>
  </div>
<p>はじめてAnkiを使おうとして、何から始めて良いか分からず途方に暮れている人のためにこの連載を書きました。Ankiを使うのに最低限必要な操作を取り上げました。Ankiを使っている人なら誰でも知っていて、常に使っている機能、マニュアルにも当然書いてある機能を説明しています。</p>
<p>この連載で取り上げたAnkiの機能は、<a href="/index-how-to-anki/">はじめてAnkiを使う人のための索引</a>としてまとめています。調べたい機能が決まっている場合はこの索引も活用してみてください。</p>
<p>Ankiの慣れ親しんで、使い方の感覚が掴めれば、<a target="_new" href="http://ankisrs.net/docs/manual.html">ユーザーマニュアル</a>やネット上の情報を活用して、読者の皆さんの専門分野が発揮できるような使い方ができるようになると思います。
学習する教科、分野によって最適な使い方に違いがあるはずです。その時はぜひ皆さんの高度な技を共有してくださいです。</p>
<h3 id="連載_ankiの使い方_覚えるために忘れろ_記事一覧">連載: Ankiの使い方 〜覚えるために忘れろ〜 記事一覧</h3>
<ol>
<li>
はじめてのAnki – まず使ってみる(インストール、問題入力、学習の流れ)
</li>
<li>
<a href="/how-to-import/">Ankiにデータをまとめて取り込む</a>(テキストデータの一括登録)
</li>
<li>
<a href="/how-to-use-shared-resources/">Ankiの共有リソースを使ってみる</a>(アドオン、共有単語帳)
</li>
<li>
<a href="/how-to-edit-cards/">Ankiのカード表示を編集する</a>(カード編集、外部リンク設定、読み上げ)
</li>
<li>
<a href="/browser-overview/">Ankiのブラウザーの使い方とデータ検索 </a>(ブラウザー、検索条件)
</li>
<li>
<a href="/how-to-customize-learning/">フィルター単語帳でAnki学習をカスタマイズしよう </a>(カスタム学習、フィルター単語帳、独自の学習条件を設定)
</li>
<li>
<a href="/reduce-anki-backlog-with-stats/">Anki統計情報を活用したバックログ解消法</a>(統計情報の見方、たまった復習カードの解決法)
</li>
<li>
<a href="/how-to-share-anki-decks/">Anki単語帳を共有する方法 </a>(単語帳の書き出し、AnkiWebへの共有)
</li>
<li>
<a href="/index-how-to-anki/">はじめてAnkiを使う人のための索引</a>(連載内容の索引)
</li>
<li>
<a href="/anki_glossary/">Anki 用語集</a>(Ankiの基本概念の説明)
</li>
</ol>
<p>ユーザーマニュアルやウェブ上の色々な情報を参考にして、自分独自の使い方を見つけられる程度までAnkiの使い方に慣れていただくのが目標です。</p>
</section>
<section id="ankiの使い方になれるためのボット">
  <div class="page-header">
    <h2>Ankiの使い方になれるためのボット</h2>
  </div>
<p>ツイッターアカウント Ankigene (@Ankigene) は、<a href="/ankigene-bot-guide/">Anki を使い始めた時に、知っておくと役立つ知識</a>を定期的につぶやきます。
事前に基本的な使い方を目にしていれば、いざという時に情報を探す時間を短縮できます。全ての投稿が20日で一周するスケジュールです。</p>
<blockquote class="twitter-tweet" data-lang="ja"><p lang="ja" dir="ltr">単語帳を削除するには、[D] キーを押してから、単語帳名右のドロップダウンから[削除]を選択します。| Anki Tips <a href="https://t.co/WtFRo51sAM">https://t.co/WtFRo51sAM</a></p>&mdash; Ankigene (@Ankigene) <a href="https://twitter.com/Ankigene/status/712921013919617025">2016年3月24日</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
</section>
<section id="もっと深く知りたい">
  <div class="page-header">
    <h2>もっと深く知りたい</h2>
  </div>
<p>Ankiの具体的な使い方というより、効果を上げるための考え方についての記事を紹介します。</p>
<p><a target="_new" href="http://wikiwiki.jp/rage2050/?manual#s17ae333">Anki 日本語ユーザーマニュアル - はじめに</a></p>
<p>Ankiのマニュアルの日本語訳の最初の部分ですが、Ankiとはどんな機能を提供するアプリケーションソフトなのか丁寧に説明しています。使い始める前に理解しておきたい内容です。</p>
<p><a target="_new" href="http://readingmonkey.blog45.fc2.com/blog-entry-678.html">決して後退しない学習ーAnkiを使うとどうして一生忘れないのか？</a></p>
<p>Ankiが提供する分散学習機能について簡単に紹介しています。</p>
<p><a target="_new" href="http://readingmonkey.blog45.fc2.com/blog-entry-666.html"> 根気も時間もないあなたが外国語習得の臨界点を越える一番ゆるいスタートアップの方法</a></p>
<p>ゼロから新しい言語を始める方に最適です。Ankiを活用した学習手順を丁寧に解説しています。</p>
<p><a target="_new" href="http://d.hatena.ne.jp/rage2050/20110502">効果的な学習法: 知識を定式化する20個のルール</a></p>
<p>Ankiに先行する記憶用アプリケーションSuperMemoの作者による効果的な記憶法の解説の日本語訳です。</p>
</section>
<section id="更新情報">
  <div class="page-header">
    <h2>更新情報</h2>
  </div>
<p>2013/04/12: 初出</p>
<p>2013/06/11: カードへメディアを登録、音声ファイルの再生方法を追加</p>
<p>2013/09/26: Ankiのインストール方法について情報追加</p>
<p>2013/10/15: 全面改訂</p>
<p>2014/03/24: 言語設定の方法を更新</p>
<p>2014/09/21: 再構成</p>
<p>2015/01/24: スマホアプリの注意点追加</p>
<p>2016/01/16: ノート編集について加筆</p>
</section>


