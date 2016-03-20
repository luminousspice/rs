---
slug: "frequent-words-in-msdn"
date: "2013-05-27T00:30:32+00:00"
lastmod: "2014-04-14T13:15:42+00:00"
title: "Windows開発者の必修語彙をAnki学習する方法"
categories: ["Anki","コーパス"]
tags: ["Anki","Anki 単語帳","AWL","BNC","CasualConc","Corpus","GSL","msdn magazine","TTS","コーパス"]
excerpt: "Windows開発者が必須の技術情報を原文で読むためのAnki学習法。MSDN Magazine バックナンバーのコーパス分析から頻出語彙表を作成し、Anki単語帳に加工する方法を紹介します。GSL頻出2000語とAWLを理解した上で、作成したMSDN word listを学習すれば、使用語彙の98%をカバーできます。"
---
<section id="ankiを使ってwindows開発者の必須語彙を習得しよう">
<p>Windows開発者が必須の技術情報を原文で読むためのAnki学習法。コーパス分析から頻出語彙表を作成し、Anki単語帳に加工する方法を紹介します。</p>
<div class="sidebarblock well">
<div class="content">
<p><a href="http://ankisrs.net/">Anki</a>とはDamien Elmesが開発している分散学習システム(SRS; Spaced Repetition learning Systems)です。</p>
</div></div>
<h2 id="おことわり" class="section">おことわり</h2>
<div class="sidebarblock well">
<div class="content">
<p>この記事は、楽しむことを目的とした内容で、学術的な厳密性を考慮していません。</p>
<p>MSDNは、Microsoft Corporationの商標であり、
MSDN Magazineは、1105 Media, Inc.の出版物です。</p>
</div></div>
<h2 id="使うもの" class="section">使うもの</h2>
<div class="ulist"><ul>
<li>
<p>
<a href="http://ankisrs.net/">Anki2</a>
</p>
</li>
<li>
<p>
<a href="http://msdn.microsoft.com/en-us/magazine/default.aspx">MSDN Magazine</a> BackNumber 2009.08 - 2013.03
</p>
</li>
<li>
<p>
コンコーダンサーソフト (この記事の作成には、<a href="https://sites.google.com/site/casualconcj/Home">CasualConc</a>を使いました。)
</p>
</li>
<li>
<p>
表計算ソフト (この記事の作成には、<a href="http://ja.libreoffice.org/">LibreOffice Calc</a>を使いました。)
</p>
</li>
</ul></div>
<h2 id="自分にあったオーダーメイドの単語帳" class="section">自分にあったオーダーメイドの単語帳</h2>
<p>既成のAnki単語帳をそのまま使ったり、出会った単語をその都度単語帳に記録して使うのが一般的なAnkiの使い方だと思います。少し慣れた人であれば、既成の語彙リストからAnki単語帳を作成する使い方をしているでしょう。</p>
<p>使用人口が少ない言語の場合や、あるいはある特定の専門分野だけの語彙の場合、共有データの中から学習用の語彙リストを見つけ出すのは非常に困難です。</p>
<p>そこで、そのような語彙リストを自作する方法を紹介します。
対象とする文字資料のデータベース(コーパス)を作成し、その語彙の頻度分析から、Anki単語帳に加工する方法を紹介します。</p>
<p>この方法を使えば、テキストデータさえ手に入れば自分の好みに合うニッチな単語帳をどんどん作り出せます。</p>
<p>その一例として、Windowsアプリケーション開発の正式なリファレンス <a href="http://msdn.microsoft.com">MSDN</a>の使用語彙の頻度表をコーパスから作成し、Anki単語帳に加工する手順を紹介します。</p>
<p>なお、<a href="http://codex.wordpress.org">WordPress Codex</a>の頻出語彙を同様にAnki単語帳に加工する方法を<a href="/frequent-words-in-wordpress-codex/">WordPress Codexの英語 WordPress開発者のためのAnki単語帳</a>に書きました。こちらは、MediaWikiからデータを取り出す方法を説明しています。</p>
<h2 id="収集データの選択" class="section">収集データの選択</h2>
<p>まずは、コーパス作成用の元データを準備します。MSDN全体のテキストデータを入手することは不可能ですので、代表サンプルとして過去3年分のMSDN Magazineのバックナンバーを使います。</p>
<p>MSDN Magazineは、Windowsプラットフォームの開発者のためのQuality Paperです。</p>
<p>Microsoftが戦略的に重要と考えている技術的なテーマを幅広く取り上げています。この分野の技術動向に強い影響力を持っています。執筆陣は、内容理解が極めてに深い内部の製品開発者か、業界で顕著な実績をもつ当該分野の外部専門家です。</p>
<p>有償の定期購読者のために決められた紙面の量を出版することを前提としているので、編集者が非常に高い質の編集をしています。文章の内容と質ともにMSDN内では傑出しています。また、電子データの形で公開されています。</p>
<p>MSDN収録文書に対して代表性を持ち、コーパス分析ソフトによる検索可能な可読性を持っています。</p>
<p><a href="http://msdn.microsoft.com/en-us/magazine/ee310108.aspx">MSDN Magazine Issues and Downloads</a>からMSDN Magazineのバックナンバーがダウンロード可能です。最新のPDF形式のものだけ(2009.08-2013.03)を抽出しました。それ以前のものは、CHM形式で変換が手間が増えるので対象にはしませんでした。</p>
<p><strong>2013/6/7 追記:</strong> 全てのCHMファイルを対象として過去10年間のMSDN Magazineの記事データを分析した内容を、<a href="/frequent-words-in-msdn-magazine-in-10years/">MSDN Magazine過去10年分の頻出語彙からAnki単語帳を作る</a>に書きました。</p>
<h2 id="コーパスの作成と頻度表の生成" class="section">コーパスの作成と頻度表の生成</h2>
<p>一般的なコンコーダンサーアプリケーションであれば、コーパスから頻度表を作成する機能を持っています。この記事では、Mac OS X上で動作するアプリとして<a href="https://sites.google.com/site/casualconcj/Home">CasualConc</a>を選択しました。Mac OS Xの場合には、ほとんど選択肢がないのですが、WindowsやLinuxのアプリは多数に存在します。</p>
<p>CasualConcの良い点は、PDFのまま処理できる点です。コーパス作成から頻度表の作り方の具体的な手順は、<a href="https://sites.google.com/site/casualconcj/tsukaikata">CasualConcの使い方</a>をご覧ください。</p>
<p>今回の記事作成では、前処理をせずダウンロードしたPDFを丸ごとコーパスにしました。このため、ソースコードや広告などが含まれることになります。これらの点は、頻度表を作成した後に整理しました。</p>
<p>CasualConcでコーパスを作成した後、Word Count ツールを使って、使用語彙の頻度表を得ました。単語と発生頻度、登場ファイル数、レマ化した語彙(Lemmaed Words)の情報を表計算ソフトに読み込めるCSV形式で書き出しました。</p>
<h3 id="casualconcの操作手順">CasualConcの操作手順</h3>
<p>CasualConcを使った頻度表作成の手順を簡単に紹介します。</p>
<div class="title">CasualConc 環境設定</div>
<p>[CasualConc]&gt;[環境設定]を選択すると、設定画面が開きます。</p>
<div class="ulist"><ul>
<li>
<p>
一般: コーパスモード[アドバンスト]を指定。
</p>
</li>
<li>
<p>
ファイル: ファイルタイプ設定でPDFを指定。
</p>
</li>
<li>
<p>
Lemma: [Lemma の扱い]と[異綴り処理]の項目を全てチェック。
</p>
</li>
</ul></div>
<p>詳しい設定については、<a href="http://www.mizumot.com/index/method2011.html">外国語教育メディア学会(LET) 関西支部メソドロジー研究部会 2011年度報告論集</a>、「Mac OS X 用コンコーダンサー CasualConc―基本的な使い方と用例検索ツールとしての応用例―」の「2.2.1.4. Lemma/キーワードグループ/異綴り処理」をお読みください。</p>
<div class="title">CasualConc　データベースモードの指定</div>
<p>画面右上の[データベース]ボタンを押す。(図1)</p>
<div class="imageblock">
<div class="content">
<img src="/images/msdnwl2.png" alt="ファイルツール" width="600">
</div>
<div class="title">図 1. CasualConc ファイルツール画面</div>
</div>
<div class="title">コーパス作成手順 (図1)</div>
<ol>
<li>
画面上[ファイル]タブをクリックしてファイルツールを表示する。
</li>
<li>
右上画面下[追加]ボタンでコーパス化するファイルを選択する。
</li>
<li>
左上画面下[新規データベース]ボタンを押すとコーパスが作成できます。
</li>
</ol>
<div class="imageblock">
<div class="content">
<img src="/images/msdnwl1.png" alt="最初の画像" width="600">
</div>
<div class="title">図 2. CasualConc 頻度分析の結果表示</div>
</div>
<div class="title">単語頻度表の作成 (図2)</div>
<ol>
<li>
画面上[Word Count]タブをクリックしてWord Countツールを表示する。
</li>
<li>
画面左上のプルダウンメニューから[単語]を選択して、そのすぐ右にある[実行]ボタンを押す。
</li>
</ol>
<div class="title">CSV書き出し</div>
<p>画面左上[書き出す]ボタンを押す(図2)か、メニューバーから[ファイル]&gt;[テーブルの結果を書き出す]を選択します。</p>
<h2 id="頻度表の整理" class="section">頻度表の整理</h2>
<p>表計算ソフトでは、単語を並び替えや検索などを行って、記号や数字が混入しているソースコードの断片など明らかに英語の単語ではないものを取り除きました。</p>
<p>さらに、約1億語を収録するイギリス英語のコーパスBNC(British National Corpus)の最頻出2万語(レマ化)とつきあわせて、英単語を取り出しました。BNCの頻出20Kリストは、<a href="http://www.lextutor.ca/vp/bnc/">Web VP / BNC-20</a>から入手できます。</p>
<p>ここからは不本意ながら手作業になります。</p>
<p>残ったのは、記号や数字が入っていない文字列で、BNC頻出20Kに入っていないものになります。</p>
<p>表計算ソフト上で、出現頻度の高いものから全てのデータ(英単語確認済み+未確定)を並べて、コーパス全体の累積被覆率を計算しました。4269番目の確認済みの単語で99%に達します。この単語は、12回出現しています。</p>
<p>残りの未確定の文字列を累積被覆率99%に達するまで、見て確認しました。このようなデータは、約3500個ありました。
確認方法は、頻度表を使うのに作ったコーパスデータです。KWIC(Key Word In Context)検索を掛けてみて、実際の文章内で英単語として使われているか確認しました。</p>
<p>頻出語句を探すのが目的なのでここで止めました。
市販の単語集を編集している方の苦労が分かったような気がします。</p>
<p>これで調整済みの頻度表が得られました。頻出上位3200語で被覆率98%に達します。MSDN Magazine3年分のテキストの98%は頻出3200語でカバーできます。</p>
<p>この上位3200語から、非ネイティブな英語学習者が最初に取得すべき一般的な基本語彙(<a href="http://simple.wiktionary.org/wiki/Wiktionary:General_Service_List">GSL</a>2000語+<a href="http://simple.wiktionary.org/wiki/Wiktionary:Academic_word_list">AWL</a>570語)と固有名詞を除き、CasualConcでレマ化できなかった単語、派生語などをまとめました。特定の号に集中的に出現する語彙を取り除くため、平均1年に一回以上の号に出現する条件を加えて、4号以上に出現する語彙に絞りました。
その結果、MSDNに特異的に出現する単語は723語になりました。最低出現回数は25回です。</p>
<h2 id="完成品_msdn_word_list" class="section">完成品 MSDN Word list</h2>
<p>一般的な英語学習者が取得すべき基本語彙2570語(GSL+AWL)に加えてこの750語を覚えれば、MSDN Magazineの98%の使用語彙の98%はカバーできます。</p>
<p>この被覆率98%とは、非ネイティブ向けの英語教育の論文では、支援なしに周囲の情報から未知語を類推して読み進めることのできる比率として使われています。MSDN Magazineの例だと、雑誌の紙面では2段組みされているので、4行に1語未知語が出てくる頻度になります。</p>
<p>722語からなる目標とする語彙表ができました。この語彙表のことを仮にMSDN Word listと呼びます。</p>
<h2 id="作成データの検証" class="section">作成データの検証</h2>
<p>本当にこの語彙表、MSDN word listは有効なのか、確認して見ました。
対象は、コーパスには含んでいないMSDN Magazineの最新号とMSDNライブラリのWindows 8のホワイトペーパーです。
ケベック大学モントリオール校(UQAM)のTom Cobb教授が公開している<a href="http://www.lextutor.ca/vp/bnc/">VocabProfilers Classic VP English v.3</a>を使い、それぞれの記事の使用語彙に対して、頻出基本語句(GSL+AWL)、MSDN word listでどれだけカバーできるか調べてみました。</p>
<table rules="rows"width=""frame="hsides"cellspacing="0" cellpadding="4">
<caption class="title">表 1. 頻出語彙集　MSDN word listの効果</caption>
<colgroup>
</colgroup>
<thead>
<tr>
<th>題名</th>
<th>GSL+AWL</th>
<th>MSDN word list</th>
<th>合計</th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="http://msdn.microsoft.com/en-us/magazine/dn198241.aspx">Parse JSON Strings in Windows Runtime Components</a></td>
<td>95.01%</td>
<td>3.94%</td>
<td>98.95%</td>
</tr>
<tr>
<td><a href="http://msdn.microsoft.com/en-us/magazine/dn198241.aspx">Social Authentication in ASP.NET MVC 4</a></td>
<td>93.00%</td>
<td>5.87%</td>
<td>98.87%</td>
</tr>
<tr>
<td><a href="http://download.microsoft.com/download/0/E/5/0E5ECE25-D240-435E-9FD6-6092896A3F5F/PackagingandBinding.docx">Packaging and assembly binding in the .NET Framework for Windows Store apps</a></td>
<td>92.44%</td>
<td>5.83%</td>
<td>98.27%</td>
</tr>
<tr>
<td><a href="http://msdn.microsoft.com/en-us/library/windows/apps/hh465408.aspx">Windows Store apps using JavaScript versus traditional web apps</a></td>
<td>89.80%</td>
<td>8.47%</td>
<td>98.27%</td>
</tr>
</tbody>
</table>
<p>一般的な基本語彙(GSL+AWL)を理解している場合、使用語彙の10%程度が未知の語句を含むテキストが、このMSDN word listを加えることで、未知の語句を2%にまで圧縮できる結果を得ました。</p>
<p>今回の記事では、Anki単語帳を作成する手順を重視して作成しています。
MSDNの語彙水準と完成したMSDN word listの内容の検討は <a href="/words-in-msdn/">MSDNの英語 MSDNを情報源として利用できる語彙水準と学習戦略</a>で行っています。</p>
<h3 id="msdn_word_listの内訳の検討">MSDN word listの内訳の検討</h3>
<p>抽出したデータを検討すると、Agileなどアプリケーション開発のコミュニケーションでカタカナ英語として既に流通しているものが221個見られました。また、翻訳しようのないGUIなど略語も51個ありました。</p>
<p>これらの用語については、区別のため「カタカナ」、「略語」というタグを付けることにしました。
最終的には純粋な語彙として意味を暗記すべき英単語は456個まで圧縮できました。</p>
<h2 id="anki単語帳へ加工" class="section">Anki単語帳へ加工</h2>
<p>抽出した単語データからAnki単語帳にするCSVファイルを作ります。カタカナ英語については、裏面にカタカナ表記追加し、「カタカナ」、「略語」などタグ情報の追加を行いました。
。</p>
<p>更に、使用頻度が高いものから優先して学習できるように頻度別にタグを付けました。95%被覆が可能な最高頻度のもの(Level1, 344個 )と、それ以外の98%被覆が可能な高頻度なもの(Level2, 378個)に二分してタグを振りました。</p>
<p>Ankiに読み込むCSVファイルは、頻度順に並べました。既定では出現頻度の高いものから出題するようにしました。</p>
<p>実際のAnkiへの読み込み手順は<a href="/how-to-import/">Ankiにデータをまとめて取り込む</a>で紹介していますので、詳しく知りたい方はこちらをご覧ください。</p>
<p>最終的には722個のデータをAnkiに読み込んでから4分割して子単語帳に収めました。子単語帳に分割する具体的な手順は
<a href="/browser-overview/">Ankiのブラウザーの使い方とデータ検索</a>で説明しています。</p>
<p><strong>2013/6/7注:</strong>
過去10年分まで分析対象を拡大した場合、新たに頻出語句に加わる102語をLevel3として追加しました。詳しくは、<a href="/frequent-words-in-msdn-magazine-in-10years/">MSDN Magazine過去10年分の頻出語彙からAnki単語帳を作る</a>をご覧ください。</p>
<table rules="rows"width=""frame="hsides"cellspacing="0" cellpadding="4">
<caption class="title">表 2. 単語帳の内訳</caption>
<colgroup>
<col class="span2">
<col class="span1">
<col class="span4">
</colgroup>
<thead>
<tr>
<th>子単語帳名</th>
<th>単語数</th>
<th>内容</th>
</tr>
</thead>
<tbody>
<tr>
<td>MSDNWords::Level1</td>
<td>179</td>
<td>基本語彙(GSL+AWL)との組み合わせで使用語彙の95%までカバーできる単語(カタカナ、略語を除く)</td>
</tr>
<tr>
<td>MSDNWords::Level2</td>
<td>276</td>
<td>基本語彙(GSL+AWL)との組み合わせで使用語彙の98%までカバーできる単語(カタカナ、略語を除く)</td>
</tr>
<tr>
<td>MSDNWords::Level3</td>
<td>102</td>
<td>過去10年分のバックナンバーまで分析対象を拡大した時、新たに追加になった頻出語彙</td>
</tr>
<tr>
<td>MSDNWords::カタカナ英語</td>
<td>223</td>
<td>カタカナ英語として使われている単語</td>
</tr>
<tr>
<td>MSDNWords::略語</td>
<td>50</td>
<td>訳語をあてずに使われている略語</td>
</tr>
</tbody>
</table>
<h2 id="カードの編集" class="section">カードの編集</h2>
<p>解答面には、オンライン英和和英辞典<a href="http://ejje.weblio.jp/content/retrieve">weblio</a>、オンライン英英辞典<a href="https://www.vocabulary.com/dictionary/retrieve">Vocabulary.com</a>、<a href="http://social.msdn.microsoft.com/Search/en-us?query=retrieve&amp;refinement=118%2C117&amp;ac=2">MSDNオンライン検索</a>(MSDN MagazineとMSDN Library限定)、<a href="http://www.microsoft.com/Language/ja-jp/Search.aspx?sString=retrieve&amp;langID=ja-jp">マイクロソフト用語集</a>へのリンクを追加しました。</p>
<p>また、解答面ではGoogleTTSを使用した読み上げ機能を設定しました。実際に動作させるにはアドオンAwesomeTTSのインストールと設定が必要です。</p>
<p>カードの具体的な編集方法とAwesomeTTSの設定方法は<a href="/how-to-edit-cards/">Ankiのカード表示を編集する</a>をご覧ください。</p>
<p>アドオンのインストール方法については、<a href="/how-to-use-shared-resources/">Ankiの共有リソースを使ってみる</a>で説明しています。</p>
<h2 id="完成品のダウンロード" class="section">完成品のダウンロード</h2>
<p>この記事で作成した単語帳は、Anki単語帳パッケージ msdnwl.apkg をダウンロードしてお使いいただけます。</p>
<p><a href="/apkg/msdnwl.apkg" class="btn btn-large btn-primary"><i class="icon-download-alt icon-white"></i> Anki 単語帳パッケージ msdnwl.apkg</a></p>
<p>この単語帳を使うにはAnkiのインストールが必要です。<a href="http://ankisrs.net/">Ankiサイト</a>から最新版をダウンロードできます。Ankiは、Windows、Mac、Linux/BSD、iOS、Androidに対応しています。その他のデバイスからはAnkiWebを通じて利用可能です。詳しくはAnkiサイトをご覧ください。</p>
<div class="imageblock">
<div class="content">
<img src="/images/msdnwl3.png" alt="完成品画面" width="400">
</div>
<div class="title">図 3. 完成品画面</div>
</div>
<h3 id="ご利用いただく前に" class="section">ご利用いただく前に</h3>
<p>この単語帳は2000ワードファミリーレベルの頻出語彙とAWLとの組み合わせて使用することを前提にしています。
この単語帳の学習の前に、あるいは並行して基本語彙を確認することをお勧めします。</p>
<p>頻出語彙2000語については、GSLの他に<a href="http://www.lextutor.ca/vp/bnc/nation_14/">BNC(British National Corpus)の頻出2000語</a>や英英辞典の定義語集<a href="http://oald8.oxfordlearnersdictionaries.com/oxford3000/">Oxford 3000</a>、Longman Defining Vocabularyなどの入手しやすいものをお使いください。</p>
<p>どうしてもアメリカ英語をという方は、アメリカ英語のコーパスCOCA(Corpus of Contemporary American English)の<a href="http://www.wordfrequency.info/free.asp">上位5000語のリスト</a>から上位3000語を使うこともできます。上位3000語で2000ワードファミリー程度になります。</p>
<h3 id="作成した単語帳の使い方">作成した単語帳の使い方</h3>
<p>親単語帳「MSDNWords」を学習した場合は、Level1&gt;Level2&gt;カタカナ英語&gt;略語の優先順で新規カードの取得が行われます。</p>
<p>子の単語帳を学習するとそれぞれの項目を選択的に学習することができます。</p>
<p>全ての単語をランダムに学習したい場合は、子単語帳のカードを全て親単語帳に戻すか、フィルター単語帳を作成してください。</p>
<p><a href="/how-to-customize-learning/">フィルター単語帳でAnki学習をカスタマイズしよう</a>では、カスタム学習の設定方法を詳しく紹介しています。</p>
<h2 id="まとめ" class="section">まとめ</h2>
<p>共有の頻度データがない場合でも、文字資料が入手できればコンコーダンサーソフトを使うと簡単に語彙頻度リストを得ることができます。</p>
<p>既存のコーパスデータは、その目的から汎用性を重視した内容となっています。
これに付け加えて、自分が理解したい特定分野の頻度データを自作すれば、さらに効果的なAnki学習ができるようになります。
学習が自発的になると、学習意欲が更に高まって、楽しくなってきます。</p>
<p>自家製単語帳を作ってもっとAnkiを楽しんでください。</p>
</section>


