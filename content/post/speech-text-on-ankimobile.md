---
slug: "speech-text-on-ankimobile"
date: "2014-06-21T23:30:03+00:00"
lastmod: "2015-11-20T16:18:37+00:00"
title: "iPhone 版 Anki でテキストを読み上げるには"
weight: 10
categories: ["Anki","開発"]
tags: ["Anki","iOS","iPad","iPhone","iPod touch","JavaScript","TTS","Web Speech API"]
anki: ["AnkiMobile","カードテンプレート","読み上げ","音声"]
excerpt: "iPhone 版 Anki では、システムのアクセシビリティ機能を利用するとテキストを読み上げることが出来ます。この機能の呼び出し方を紹介します。How to use text-to-speech on iOS (AnkiMobile)"
---
<div id="preamble">
<div class="sectionbody">
<div class="paragraph"><p>iPhone 版 Anki では、システムのアクセシビリティ機能を利用するとテキストを読み上げることが出来ます。この機能の呼び出し方を紹介します。</p></div>
</div>
</div>
<div class="sect1">
<h2 id="_はじめに">はじめに</h2>
<div class="sectionbody">
<div class="paragraph"><p><a target="itunes_store" href="https://itunes.apple.com/jp/app/ankimobile-flashcards/id373493387?mt=8&amp;uo=4&amp;at=11lGoS">AnkiMobile</a> <a href="https://itunes.apple.com/jp/app/ankimobile-flashcards/id373493387?mt=8&amp;uo=4&amp;at=11lGoS" target="itunes_store"></a> 
とは、Anki のデータを学習するための iOS 機器用の有償アプリケーションです。</p></div>
<div class="paragraph"><p></p></div>
<div class="paragraph"><p>iPhone などの iOS 機器は、システム自体は音声認識や音声合成などの豊富なアクセシビリティ機能を持っています。iOS 版の Anki からアプリの標準設定では直接呼び出すことが出来ませんので、テキストから音声合成する、読み上げる方法を紹介します。</p></div>
<div class="paragraph"><p>次の 2 通りの方法を紹介します。テキストを読み上げる用途に適したものをお使いください。</p></div>
<div class="ulist"><ul>
<li>
<p>
選択項目を読み上げ機能の利用
</p>
</li>
<li>
<p>
読み上げ機能を持つカードテンプレートの作成
</p>
</li>
</ul></div>
<div class="paragraph"><p>AnkiMobile の最低限な使用方法を理解していることを前提として説明します。
文中にもし不明な項目が出てきたら <a href="/ankimobile-survival-guide/">iPhone ユーザーのための AnkiMobile サバイバルガイド</a>を参考にしてください。</p></div>
</div>
</div>
<div class="sect1">
<h2 id="_選択項目を読み上げ">選択項目を読み上げ</h2>
<div class="sectionbody">
<div class="paragraph"><p>カードの好きな場所を選択して、読み上げる方法を紹介します。読み上げるタイミングも自分で決めることが出来ます。</p></div>
<div class="paragraph"><p>選択項目を読み上げ (Speak Selection) は、iPhoneの設定項目を一か所変更するだけですぐ利用できるようになります。
呼び出す手順は、一見複雑そうに思うかもしれませんが、使ってみると意外に簡単です。
自分ではこちらの方法を通常使っています。</p></div>
<div class="sect2">
<h3 id="_設定の手順">設定の手順</h3>
<div class="olist arabic"><ol class="arabic">
<li>
<p>
[設定]-[一般]-[アクセシビリティ]-[選択項目の読み上げ]
</p>
</li>
<li>
<p>
[選択項目の読み上げ] 項目を [オン] (1) にします。
</p>
</li>
</ol></div>
<div class="imageblock">
<div class="content">
<img src="/images/setting-selectionspeech.png" alt="setting-selectionspeech.png" width="300">
</div>
<div class="title">図 1. 選択項目を読み上げ設定</div>
</div>
</div>
<div class="sect2">
<h3 id="_設定の調整">設定の調整</h3>
<div class="ulist"><ul>
<li>
<p>
[声] (2) の項目をタップして表示する設定する言語選択できます。
</p>
</li>
<li>
<p>
[読み上げ速度] (3) のスライダーで設定を変更すると、読み上げ速度のプレビューを聴くことが出来ます。
</p>
</li>
</ul></div>
</div>
<div class="sect2">
<h3 id="_音声の詳細設定">音声の詳細設定</h3>
<div class="paragraph"><p>[声] (2) で表示した言語の一覧から、言語をタップして指定すると言語別に音声の種類(a)、品質(b)、読み上げ速度(c) を設定できます。</p></div>
<div class="imageblock">
<div class="content">
<img src="/images/setting-voice.png" alt="setting-voice.png" width="300">
</div>
<div class="title">図 2. 声の詳細設定</div>
</div>
</div>
<div class="sect2">
<h3 id="_iphoneで読み上げ可能な言語">iPhoneで読み上げ可能な言語</h3>
<div class="paragraph"><p>なお、音声は次の 26 言語に対応しています。</p></div>
<div class="paragraph"><p>日本語、アラビア語、イタリア語、インドネシア語、オランダ語、ギリシャ語、スウェーデン語、スペイン語、スロバキア語、タイ語、チェコ語、デンマーク語、ドイツ語、トルコ語、ノルウェー語[ブークモール]、ハンガリー語、ヒンディー語、フィンランド語、フランス語、ポーランド語、ポルトガル語、ルーマニア語、ロシア語、英語、韓国語、中国語</p></div>
</div>
<div class="sect2">
<h3 id="_テキストを読み上げる方法">テキストを読み上げる方法</h3>
<div class="olist arabic"><ol class="arabic">
<li>
<p>
読み上げたいテキストをダブルタップして、選択項目を指定します。
</p>
</li>
<li>
<p>
[Speak]をタップします。
</p>
</li>
</ol></div>
<div class="imageblock">
<div class="content">
<img src="/images/speak-selection.png" alt="speak-selection.png" width="300">
</div>
<div class="title">図 3. 選択範囲を指定して読み上げる</div>
</div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_ノートを読み上げるカードテンプレートの作り方">ノートを読み上げるカードテンプレートの作り方</h2>
<div class="sectionbody">
<div class="paragraph"><p>AnkiMobile でカードを表示した時に自動的にテキストを読み上げる方法を紹介しましょう。</p></div>
<div class="paragraph"><p>Anki の作者は Anki のサポートサイトの記事 <a target="_new" href="https://anki.tenderapp.com/discussions/ankimobile/890-req-text-to-speech-in-ankimobile-for-ios7">Req: Text to speech in AnkiMobile for ios7..</a> の中でノートを読み上げるカードテンプレートの作り方を紹介しています。</p></div>
<div class="paragraph"><p>この方法は、テキスト読み上げ機能を呼び出す JavaScript をカードテンプレートに導入する方法です。テキストの読み上げには <a target="_new" href="https://dvcs.w3.org/hg/speech-api/raw-file/tip/speechapi.html">Web Speech API</a> という Web 標準を使います。
なお、AnkiMobile ではカートテンプレートの編集できませんので、PC 版 Anki で編集します。</p></div>
<div class="paragraph"><p>カードの表面に配置した <span class="monospaced">Front</span> フィールドを読み上げるには、表面のテンプレートを次のように設定します。</p></div>
<div class="listingblock">
<div class="title">Front フィールドを読み上げる設定例</div>
<div class="content"><div class="highlight"><pre><span class="nt">&lt;span</span> <span class="na">id=</span><span class="s">&quot;word&quot;</span><span class="nt">&gt;</span>{{Front}}<span class="nt">&lt;/span&gt;</span>
<span class="nt">&lt;script&gt;</span>
<span class="kd">var</span> <span class="nx">w</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementById</span><span class="p">(</span><span class="s2">&quot;word&quot;</span><span class="p">);</span>
<span class="nb">window</span><span class="p">.</span><span class="nx">setTimeout</span><span class="p">(</span><span class="s2">&quot;speak(w.innerHTML)&quot;</span><span class="p">,</span> <span class="mi">500</span><span class="p">);</span>
<span class="kd">function</span> <span class="nx">speak</span><span class="p">(</span><span class="nx">word</span><span class="p">)</span>
<span class="p">{</span>
<span class="kd">var</span> <span class="nx">speech</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">SpeechSynthesisUtterance</span><span class="p">();</span>
<span class="nx">speech</span><span class="p">.</span><span class="nx">text</span> <span class="o">=</span> <span class="nx">word</span><span class="p">;</span>
<span class="nx">speech</span><span class="p">.</span><span class="nx">volume</span> <span class="o">=</span> <span class="mf">0.5</span><span class="p">;</span> <span class="c1">// 音量: 0 to 1 (1)</span>
<span class="nx">speech</span><span class="p">.</span><span class="nx">rate</span> <span class="o">=</span> <span class="mf">0.6</span><span class="p">;</span> <span class="c1">// 速度: 0.1 to 9 (2)</span>
<span class="nx">speech</span><span class="p">.</span><span class="nx">pitch</span> <span class="o">=</span> <span class="mi">1</span><span class="p">;</span> <span class="c1">// ピッチ: 0 to 2, 1=normal (3)</span>
<span class="nx">speech</span><span class="p">.</span><span class="nx">lang</span> <span class="o">=</span> <span class="s2">&quot;en-US&quot;</span><span class="p">;</span> <span class="c1">// 言語: アメリカ英語、日本語なら ja-JP (4)</span>
<span class="nx">speechSynthesis</span><span class="p">.</span><span class="nx">cancel</span><span class="p">();</span>
<span class="nx">speechSynthesis</span><span class="p">.</span><span class="nx">speak</span><span class="p">(</span><span class="nx">speech</span><span class="p">);</span>
<span class="p">}</span>
<span class="nt">&lt;/script&gt;</span>
</pre></div></div></div>
<div class="paragraph"><p>音声の読み上げ速度(1)、音量(2)、ピッチ(3)、言語(4)を指定することが出来ます。
カードテンプレートの編集方法については、<a href="/how-to-edit-cards/">Ankiのカード表示を編集する</a>で説明しています。</p></div>
<div class="sect2">
<h3 id="_anki_と_ankimobile_を同期している場合">Anki と AnkiMobile を同期している場合</h3>
<div class="paragraph"><p>読み込み機能を使いたいカードのカードテンプレートに上の設定を追加し、AnkiMobile と同期します。</p></div>
</div>
<div class="sect2">
<h3 id="_ankimobile_単独で利用している場合">AnkiMobile 単独で利用している場合</h3>
<div class="paragraph"><p>新規のノートのみに読み上げ機能を設定できます。
このカードテンプレートを含んだ共有単語帳を使います。</p></div>
<div class="olist arabic"><ol class="arabic">
<li>
<p>
共有単語帳 <a target="_new" href="https://ankiweb.net/shared/info/810249417">Speech Text template for iOS (AnkiMobile)</a>を ダウンロードします。
</p>
</li>
<li>
<p>
ダウンロードファイルを AnkiMobile で開くと、読み込み機能を持つノートタイプ (Note Type) を導入できます。
</p>
</li>
<li>
<p>
ノート追加画面の [Type] 項目でノートタイプ指定します。アメリカ英語を読み上げる場合は [Basic (iOS Speech en-US;アメリカ英語)]へ変更します。
</p>
</li>
</ol></div>
<div class="imageblock">
<div class="content">
<img src="/images/add-note.png" alt="add-note.png" width="300">
</div>
<div class="title">図 4. ノート追加画面</div>
</div>
<div class="paragraph"><p>共有単語帳のインストール手順やノートの追加方法は <a href="/ankimobile-survival-guide/">iPhone ユーザーのための AnkiMobile サバイバルガイド</a>をご覧下さい。</p></div>
<div class="paragraph"><p>音声データをカードに使いたい方は、<a href="/bulk-import-media-files-into-anki/">画像、音声、動画などメディアファイルを Anki へ一括登録</a>を参考にしてください。</p></div>
<div class="paragraph"><p></p></div>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_おわりに">おわりに</h2>
<div class="sectionbody">
<div class="paragraph"><p>iPhone のシステム iOS 自体は音声に関する豊富な機能を持っています。AnkiMobile から呼び出す方法さえ理解すれば、Anki の学習を妨げることなく簡単に呼び出すことが出来るようになります。
テキストの読み上げ機能をどのように使うか、その用途によって紹介した 2 つの方法を使い分けて頂ければと思います。</p></div>
</div>
</div>
<div class="sect1">
<h2 id="_更新情報">更新情報</h2>
<div class="sectionbody">
<div class="paragraph"><p>2014/06/21: 初出<br>2015/11/20: 共有単語帳リンク先変更</p></div>
</div>
</div>


