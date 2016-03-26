---
slug: "reduce-anki-backlog-with-stats"
date: "2013-05-19T20:00:04+00:00"
lastmod: "2013-11-03T17:47:35+00:00"
title: "Anki統計情報を活用したバックログ解消法"
categories: ["Anki","Anki2の使い方"]
tags: ["Anki","統計"]
anki: ["カスタム学習","バックログ","フィルター単語帳","ブラウザー","子単語帳","統計"]
excerpt: "Ankiを使っている人なら知っている使い方をあえて紹介する連載の7回目は、統計情報について解説します。統計情報の知識を使って、バックログを解消する方法を紹介します。How to reduce Anki backlog with stats."
---
<div id="preamble">
<div class="sectionbody">
<div class="paragraph">
<p><strong>連載: Ankiの使い方 〜覚えるために忘れろ〜</strong></p>
</div>
<div class="paragraph">
<p><strong>第7回目 統計情報を活用して復習カードの山から回復しよう</strong></p>
</div>
<div class="paragraph">
<p>Ankiを使っている人なら知っている使い方をあえて紹介する連載の7回目は、統計情報について解説します。統計情報の知識を使って、バックログを解消する方法を紹介します。</p>
</div>
<div class="sidebarblock">
<div class="content">
<div class="paragraph">
<p><a href="http://ankisrs.net/">Anki</a>とはDamien Elmesが開発している分散学習システム(SRS; Spaced Repetition learning Systems)です。</p>
</div>
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_この記事の目標">この記事の目標</h2>
<div class="sectionbody">
<div class="paragraph">
<p>統計情報の読み方に慣れる。
統計情報を活用して学習の進捗状況の把握と学習計画ができるようになる。</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_使うもの">使うもの</h2>
<div class="sectionbody">
<div class="ulist">
<ul>
<li>
<p><a href="http://ankisrs.net/">Anki2</a></p>
</li>
</ul>
</div>
</div>
</div>
<div class="sect1">
<h2 id="stats">統計情報を表示する</h2>
<div class="sectionbody">
<div class="paragraph">
<p></p>
</div>
<div class="paragraph">
<p>Ankiは復習アルゴリズムに加えて、学習継続を支援してくれる色々な機能を提供してくれます。統計情報もその機能の一つです。自分の学習結果を統計情報として確認することは、学習の進捗状況を管理するのに役立ちます。</p>
</div>
<div class="paragraph">
<p>Ankiの統計情報はメインウィンドウから単語帳を選択し、ウィンドウ右上の棒グラフのボタンを押すと表示されます。</p>
</div>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_2_11.png" alt="メインウィンドウ">
</div>
<div class="title">Figure 1. メインウィンドウ</div>
</div>
<div class="paragraph">
<p>既定では図2のような情報が得られます。</p>
</div>
<div class="imageblock" style="float: right">
<div class="content">
<img src="/images/how2anki_7_2.png" alt="統計情報" width="80%">
</div>
<div class="title">Figure 2. 統計情報</div>
</div>
<div class="olist arabic">
<div class="title">統計情報の項目</div>
<ol class="arabic">
<li>
<p><strong>今日</strong> その日学習結果。枚数と時間。</p>
</li>
<li>
<p><strong>予測</strong> 1か月先までの復習カードの予想発生枚数。</p>
</li>
<li>
<p><strong>復習した回数</strong> 過去1か月間の平均復習回数。</p>
</li>
<li>
<p><strong>学習した時間</strong> 過去1ヶ月間の平均学習時間。</p>
</li>
<li>
<p><strong>間隔</strong> カードの復習間隔の分布。</p>
</li>
<li>
<p><strong>時間毎の分析</strong> 時間帯別の解答数と正解率。</p>
</li>
<li>
<p><strong>答えたボタン</strong> ボタンの選択状況。成熟度別正解率。</p>
</li>
<li>
<p><strong>カードの種類</strong> カードの成熟度の比率。</p>
</li>
</ol>
</div>
<div class="paragraph">
<p>ウィンドウの一番下のラジオボタンを選択すると、コレクション全体、1年間、全期間に統計情報の取得範囲を広げることができます。</p>
</div>
<div class="paragraph">
<p>それぞれの単語帳の進捗の理解に役立つ、一日あたりの学習枚数、学習時間、復習カードの期日の分布、正解率、成熟カードの比率などの情報を提供してくれます。</p>
</div>
<div class="paragraph">
<p>統計情報を拡張するアドオンも公開されています。 <a href="https://ankiweb.net/shared/info/1147586609">Maturing Cards</a> は成熟カードの発生枚数の推移を統計情報に追加してくれます。</p>
</div>
<div class="paragraph">
<p>カードの枚数に目が奪われがちですが、更に多角的な視点から学習の進捗状況、成熟状況を知ることができます。</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_バックログ解消の方針">バックログ解消の方針</h2>
<div class="sectionbody">
<div class="paragraph">
<p>
</p>
</div>
<div class="paragraph">
<p>Anki学習を始めると、最初の意欲の高いうちは学習が順調に進むのですが、連休や長期休暇、旅行などの間に復習が中断しがちになると、復習カードの山、バックログが膨大に積み上って途方に暮れていることがあります。</p>
</div>
<div class="paragraph">
<p>危機感からバックログの山から無理に長時間掛けてたくさんの枚数の復習すると、結果として3、4日後にもう一度同じ数復習するように設定することになります。無理も繰り返すとなると辛いです。</p>
</div>
<div class="paragraph">
<p>無理な学習は、Anki学習のスケジュール設定の中に急激なスパイクを取り込むことになります。統計情報の「予測」の項目を見てください。</p>
</div>
<div class="paragraph">
<p>毎日安定した枚数復習している場合は、棒グラフの高さがそろって滑らかに推移しています。
断続的に集中して学習した場合には、ギザギザな山がたくさんできていると思います。
このような状況では、毎日のAnkiの学習体験が極端なストレスを感じるものになっているはずです。</p>
</div>
<div class="paragraph">
<p>復習期日の分布を平滑に管理することは、Anki学習を「毎日のささやかな儀式」に保ち、「断続的に訪れる拷問」に陥ることから防いでくれます。</p>
</div>
<div class="sidebarblock">
<div class="content">
<div class="title">バックログを解消する原則</div>
<div class="paragraph">
<p>「闇雲に無理をしない。少しずつ削り取る。」</p>
</div>
</div>
</div>
<div class="paragraph">
<p>統計情報を使えば、明確な見通しが立ち、バックログの大きさに立ち向かっていく意欲もわきます。学習継続の動機にもつながります。</p>
</div>
<div class="paragraph">
<p>わたしが1,500枚のバックログを解消した、Ankiの統計情報の力を借りた方法を紹介します。イメージとしては大根の桂剥きのようにバックログを少しずつはがしていく方法です。
図2は、バックログ解消直前の残り50枚の時点で記録したものです。</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_統計情報を読む">統計情報を読む</h2>
<div class="sectionbody">
<div class="paragraph">
<p>それでは、具体的にバックログを解消するのに必要な情報を、統計情報から読み取っていきましょう。</p>
</div>
<div class="sect2">
<h3 id="_学習状況を確認する">学習状況を確認する</h3>
<div class="paragraph">
<p></p>
</div>
<div class="paragraph">
<p>統計情報の一番最初の項目「今日」では、その日の学習結果について情報を提供してくれます。新規カードの枚数(学習)、復習枚数、間違えたカードの枚数(再学習)、スケジュール外で追加学習した枚数(フィルター)です。それはどれだけ時間がかかって、記憶の定着の度合いはどうだったか(正解率)知らせてくれます。</p>
</div>
<div class="paragraph">
<p>これは体温計とか体重計のような一日の学習状況の基本情報です。</p>
</div>
<div class="paragraph">
<p>次に2番目の項目「予測」を見てみましょう。今後の発生する復習カード分布が分かります。一日の学習が終わった時、0日のところにカードが積み上っているカードの枚数がバックログになります。</p>
</div>
<div class="paragraph">
<p>最終的な目標は、既定の学習枚数が終るとこの数が0になる状態になることです。
日々の目標としては、この山が昨日より縮小していけばいいわけです。</p>
</div>
<div class="paragraph">
<p>そのためには、今日何枚学習すれば良いのでしょうか。</p>
</div>
</div>
<div class="sect2">
<h3 id="_バックログを減らす一日の最低学習量">バックログを減らす一日の最低学習量</h3>
<div class="paragraph">
<p></p>
</div>
<div class="paragraph">
<p>話を単純化するために新規カードは0として説明します。</p>
</div>
<div class="paragraph">
<p><code>今日の学習対象カード = 昨日のバックログ + 今日が期日のカード (1)</code></p>
</div>
<div class="paragraph">
<p>また、次のようにも表現できます。</p>
</div>
<div class="paragraph">
<p><code>今日の学習対象カード = 今日復習したカード　+ 今日のバックログ (2)</code></p>
</div>
<div class="paragraph">
<p>(1)と(2)からバックログの変化が計算できます。</p>
</div>
<div class="paragraph">
<p><code>今日のバックログの変化量 = 今日のバックログ　-　昨日のバックログ　= 今日が期日のカード - 今日復習したカード</code></p>
</div>
<div class="paragraph">
<p>つまり、「今日が期日のカード」の枚数以上に復習すればバックログは削減できます。</p>
</div>
<div class="sidebarblock">
<div class="content">
<div class="paragraph">
<p>バックログが減少する一日の最低学習量は、<strong>今日が期日のカードの枚数 + 1</strong> です。</p>
</div>
</div>
</div>
<div class="paragraph">
<p>統計情報を使うと、例えばバックログが1000枚あって、100枚のバックログを減らす枚数を毎日復習すれば10日で実現可能という予測ができるようになります。これでかなり見通しが明るくなってきました。</p>
</div>
<div class="paragraph">
<p><code>100枚のバックログを減らす枚数 = 今日が期日のカードの枚数 + 100</code></p>
</div>
</div>
<div class="sect2">
<h3 id="_今日が期日のカードの枚数を知る方法">今日が期日のカードの枚数を知る方法</h3>
<div class="paragraph">
<div class="title">統計情報を利用する</div>
<p>一番手っ取り早いのは、前日に統計情報から「予測」項目の[明日が期日のカード]を書き留めておくことです。</p>
</div>
<div class="paragraph">
<p>いま始めようとする人には、この方法は使えないので別の方法を紹介します。どちらも、今日の学習をまだしていないという条件があります。今日学習済みカードは、既に新しい期日が設定されています。</p>
</div>
<div class="paragraph">
<div class="title">ブラウザーを利用する</div>
<p>ブラウザーのカード一覧から表示することができます。ブラウザーから期日でソート表示して、期日が今日のカードを選択するとタイトルバーに枚数が表示されます。</p>
</div>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_7_3.png" alt="ブラウザー表示" width="80%">
</div>
<div class="title">Figure 3. ブラウザー表示</div>
</div>
<div class="paragraph">
<div class="title">フィルター単語帳を利用する</div>
<p>今日が期日のカードを検索するフィルター単語帳を作って調べることもできます。</p>
</div>
<div class="paragraph">
<div class="title">今日が期日のカードを検索する条件</div>
<p><code>deck:"単語帳名" prop:due=0</code></p>
</div>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_7_4.png" alt="フィルター単語帳">
</div>
<div class="title">Figure 4. フィルター単語帳</div>
</div>
<div class="paragraph">
<p>学習が済んでいない「今日が期日のカード」が取得できます。</p>
</div>
</div>
<div class="sect2">
<h3 id="_バックログ解消の学習手順">バックログ解消の学習手順</h3>
<div class="paragraph">
<p></p>
</div>
<div class="paragraph">
<p>復習の中断を挟んでいる場合は、毎日新たに期日に達するカードの枚数は大きく上下します。この様子は、統計情報の「予測」の項目のグラフで確認できます。単語帳のオプション変更して、一律に一日の上限を引き上げる方法は現実的ではありません。</p>
</div>
<div class="paragraph">
<p>一日の学習後に、翌日の学習枚数を決定していく方法になります。</p>
</div>
<div class="olist arabic">
<div class="title">毎日の作業手順</div>
<ol class="arabic">
<li>
<p>毎日学習終了時に、統計情報の「予測」項目から[明日が期日のカード]枚数を確認して、次の日の学習枚数を予め決定します。<code>翌日バックログから削減したい枚数 + [明日が期日のカード]枚数</code> になります。</p>
</li>
<li>
<p>翌日は既定枚数の復習します。</p>
</li>
<li>
<p>前日計算した予定枚数に満たない場合は、カスタム学習セッションで追加学習を行います。</p>
</li>
</ol>
</div>
<div class="paragraph">
<div class="title">追加学習の方法</div>
<p>メインウィンドウ下の[カスタム学習]ボタンを押して[今日の復習カードの上限を上げる]を選択します。上で計算した枚数を設定します。</p>
</div>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_6_1.png" alt="カスタム学習設定画面">
</div>
<div class="title">Figure 5. カスタム学習で復習カードの上限を引き上げる</div>
</div>
<div class="olist arabic">
<div class="title">前日の記録を忘れた場合</div>
<ol class="arabic">
<li>
<p>前の項目「今日が期日のカードの枚数を知る方法」のブラウザーかフィルター単語帳による確認方法で、[今日が期日のカード]の残数を確認します。</p>
</li>
<li>
<p><code>今日バックログから削減したい枚数 + [今日が期日のカード]の残数</code> を追加学習します。</p>
</li>
</ol>
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_バックログを分割処理する方法_マニュアルより">バックログを分割処理する方法 (マニュアルより)</h2>
<div class="sectionbody">
<div class="paragraph">
<p></p>
</div>
<div class="paragraph">
<p>マニュアルにも、 <a href="/how-to-customize-learning/">フィルター単語帳</a>を使った <a href="http://ankisrs.net/docs/manual.html#catching-up">バックログの解消法の例</a>が載っています。この項目はまだ翻訳されていないようですので、簡単に説明します。</p>
</div>
<div class="paragraph">
<p>バックログからストレスのない適正な学習ができる量だけ取り出して選択的に学習しようと言う考え方です。上で紹介した方法より穏当な方法になります。</p>
</div>
<div class="paragraph">
<p>期日に達して間もない「新鮮なカード」はAnkiの復習スケジュールアルゴリズムを強く反映した復習間隔が設定されています。そこで、選択基準として復習期日に達してからの経過時間を使っています。</p>
</div>
<div class="sect2">
<h3 id="_優先カードの選別方法">優先カードの選別方法</h3>
<div class="paragraph">
<p>期日に達して一週間以内の「新鮮なカード」と、もっと前に期日に達した「古いカード」に分割するフィルター単語帳の子単語帳を作ります。</p>
</div>
<div class="olist arabic">
<div class="title">フィルター単語帳の設定例</div>
<ol class="arabic">
<li>
<p><strong>期日に達して一週間以内:</strong> <code>deck:"親単語帳名" "is:due prop:due&gt;-7"</code></p>
</li>
<li>
<p><strong>期日に達して一週間以上:</strong> <code>deck:"親単語帳名" "is:due prop:due&#8656;-7"</code></p>
</li>
</ol>
</div>
<div class="paragraph">
<p>2つのフィルター単語帳をつくると、カードはそれぞれの子単語帳に移動します。なお、フィルター単語帳内での学習が終わると、親の単語帳に戻ります。</p>
</div>
<div class="paragraph">
<div class="title">新鮮なカードの作業手順</div>
<p>期日に達して間もない「新鮮なカード」は、通常の学習を続けます。バックログを分離したので、大きなバックログを気にすることなく学習できます。</p>
</div>
<div class="paragraph">
<p>経過日7日の設定は自分の環境に合わせてカスタマイズします。「新鮮なカード」の単語帳に適正な学習ができる量だけ残るように設定します。</p>
</div>
<div class="paragraph">
<p><strong>注意</strong>:
フィルター単語帳内のカードは復習が終わると親の単語帳に戻ります。一日の学習の前に[再構築]ボタンを押して、カードをフィルター単語帳内に集め直す作業が必要です。</p>
</div>
<div class="paragraph">
<div class="title">古いカードの作業手順</div>
<p>期日に達してから時間が経ったは「古いカード」は、新規カードと同じように扱い、「新鮮なカード」の学習が負担にならない程度に順次追加いきます。</p>
</div>
<div class="paragraph">
<p>こちらは、再構築の必要はありません。「新鮮なカード」の学習状況を見ながら、この子単語帳が空になるまで学習していけば良いです。</p>
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_バックログ分割処理法の改善案">バックログ分割処理法の改善案</h2>
<div class="sectionbody">
<div class="paragraph">
<p>上の方法をもっと簡潔にする方法があります。「古いカード」をフィルター単語帳を作って元の単語帳外に隔離します。子単語帳にしません。</p>
</div>
<div class="paragraph">
<div class="title">フィルター単語帳設定</div>
<p><code>deck:"元の単語帳名" "is:due prop:due&#8656;-7"</code></p>
</div>
<div class="paragraph">
<p>元の単語帳には「新鮮なカード」が残ります。元の単語帳のカードの学習を通常通り続けます。</p>
</div>
<div class="paragraph">
<p>余力がある日は、「古い単語帳」のフィルター単語帳の中のカードを学習します。この中のカードは学習が済むと、元の単語帳に戻ります。フィルター単語帳が空になったところで、バックログは解消です。</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_強行突破したい方へ">強行突破したい方へ</h2>
<div class="sectionbody">
<div class="paragraph">
<p>最短時間でバックログをどうしても解消したいという、意欲と学習時間に恵まれた方もいらっしゃるかと思います。</p>
</div>
<div class="paragraph">
<p>その方には <a href="https://ankiweb.net/shared/info/1417170896">load balancer</a> アドオンをお勧めします。特定の日に復習カードが偏らないようにならしてくれます。一日の復習カードの中の成熟カードと未熟カードの比率を固定する機能を持っています。</p>
</div>
<div class="paragraph">
<p>平準化するがゆえ、本来翌日に学習したい間違えたカードの復習期日が、翌々日以降に設定になるなどの副作用が出る場合もあります。</p>
</div>
<div class="paragraph">
<p>現在の学習ペースで安定的にバックログが削減できているか、常に統計情報を確認することをお勧めします。がんばっていること自体が目的とならないように注意しましょう。
辛くなったら、上で説明した穏当な方法への転換も検討してみてください。</p>
</div>
<div class="paragraph">
<p>私自身も、最初強行突破の方針で取り組んでいたのですが、毎回学習後に統計情報を眺めていたところ、最初に紹介した方法を思いつき方針転換しました。見通しが立つと、バックログ削減のスピート感が体感できるようになり、作業が楽になりました。</p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_まとめ">まとめ</h2>
<div class="sectionbody">
<div class="paragraph">
<p>バックログの解消方法は、バックログの規模や単語帳の内容、一日の学習時間などによって、最適な方法は様々だと思います。</p>
</div>
<div class="paragraph">
<p>いずれの方法でも、Ankiの統計情報を活用すれば、その方法を最適化することができます。</p>
</div>
<div class="paragraph">
<p>安定期に達したAnki学習ではどのような統計データになるのか、図2のその後のデータとして今日のデータの抜粋を図6に参考までに紹介します。</p>
</div>
<div class="paragraph">
<p>通常の学習でも、カードの枚数の変化以外の多面的な進捗情報が統計情報から得られます。ぜひ、この統計情報を活用してAnkiをもっと楽しんでください。次回は最終回、単語帳の共有方法を説明します。</p>
</div>
<div class="imageblock">
<div class="content">
<img src="/images/how2anki_7_5.png" alt="今日の統計情報" width="66%">
</div>
<div class="title">Figure 6. 今日の統計情報</div>
</div>
</div>
</div>
