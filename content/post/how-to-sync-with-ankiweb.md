---
slug: "how-to-sync-with-ankiweb"
date: "2014-08-31T22:00:26+00:00"
lastmod: "2016-01-09T11:29:42+00:00"
title: "AnkiWeb 同期機能の使い方"
weight: 30
categories: ["Anki"]
tags: ["Anki","AnkiDroid","iOS","iPad","iPhone","iPod touch"]
anki: ["AnkiDroid","AnkiMobile","AnkiWeb","同期"]
excerpt: "AnkiWeb は、デスクトップ PC (OS X, Windows, Linux)、iPhone、iPad iPod touch、 Android など機器から Anki データを保存し、複数のデバイス間で同期できる無料のサービス です。この機能の使い方を活用すると学習履歴を最新に保ちながら、利用場面に最適な機器で Anki を使うことができ、学習効率を高めることができます。How to sync data through AnkiWeb for Anki, AnkiMobile, AnkiDroid."
---
<section id="preamble">
<p>AnkiWeb は、デスクトップ PC (OS X, Windows, Linux)、iPhone、iPad iPod touch、 Android など機器から Anki データを保存し、複数のデバイス間で同期できる無料のサービス です。この機能の使い方を活用すると学習履歴を最新に保ちながら、利用場面に最適な機器で Anki を使うことができ、学習効率を高めることができます。</p>
</section>
<section id="はじめに">
  <div class="page-header">
    <h2>はじめに</h2>
  </div>
<p>AnkiWeb を活用すると複数の機器にまたがって学習を継続できます。コレクションデータをコピーする方法では、コピー先の機器の学習履歴が上書きされてしまいますが、AnkiWeb を経由すると、別々の機器で学習したデータの差分を統合することができます。</p>
<p>このサービスを使うには、AnkiWeb でのアカウント作成と、アクセスする機器からの設定が必要になります。それぞれの方法を順を追って解説します。</p>
</section>
<section id="登録の方法">
  <div class="page-header">
    <h2>登録の方法</h2>
  </div>
<p><a target="_new" href="https://ankiweb.net/">AnkiWeb</a> への登録は全ての機器で共通の作業です。</p>
<p>まず、ウェブブラウサーを使って <a target="_new" href="https://ankiweb.net/">AnkiWeb</a>へアクセスし、右上の [Sign Up]ボタンを押します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/sync-aw-top.png" alt="AnkiWeb トップページ アカウント登録ボタン" width="300">
</div>
<div class="title">図 1. AnkiWeb トップページ アカウント登録ボタン</div>
</div>
<p>登録画面が出たら、メールアドレス (Your Email) とパスワード (New Password) を入力し、[Sign Up] を押します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/sync-aw-signup.png" alt="登録画面" width="300">
</div>
<div class="title">図 2. 登録画面</div>
</div>
<p>登録完了すると確認画面が現れます。もう一度、登録したばかりのメールアドレス (Confirm Email) とパスワード (Confirm Password) を入力して、[Sign Up] を押します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/sync-aw-signup-confirmation.png" alt="確認画面" width="300">
</div>
<div class="title">図 3. 確認画面</div>
</div>
<p><strong>ここはよく陥りがちな注意箇所です。</strong></p>
<p>メールアドレスやパスワードに問題があると勘違いして、別のものに変更してしまうと登録作業が進まなくなってしまうので注意しましょう。</p>
<p>登録が完了したら、AnkiWeb での作業は終了です。同期するだけなら、AnkiWeb にサインインする必要はありません。
また、アドオンや共有単語帳の閲覧、ダウンロードする場合もサインインは不要です。</p>
<p>AnkiWeb にサインインが必要になるのは、AnkiWeb 上で直接カードを学習する時、共有単語帳やアドオンを登録、コメント、レイティングする時などです。</p>
</section>
<section id="クライアントの設定">
  <div class="page-header">
    <h2>クライアントの設定</h2>
  </div>
<p>お使いになっている Anki アプリケーションから、AnkiWeb へ同期アクセスする設定を説明します。</p>
<h3 id="デスクトップ版の場合">デスクトップ版の場合</h3>
<p>デスクトップ版 Anki の場合は、画面右上の循環する矢印のボタンを押す (ショートカット Y) と、AnkiWeb で作成したアカウントを入力する画面が現れます。
先ほど登録したメールアドレス (AnkiWeb ID) とパスワードを入力してください。</p>
<div class="imageblock">
<div class="content">
<img src="/images/sync-signin.png" alt="Anki 上でのアカウント設定画面">
</div>
<div class="title">図 4. Anki 上でのアカウント設定画面</div>
</div>
<p>同期の際には、登録情報を使用してアクセスするので、同期の度にアカウント情報を入力することはありません。
次に、アカウント情報を解除するなど同期機能の詳細設定を説明しましょう。</p>
<h4>同期機能の設定</h4>
<p>同期機能の設定画面は、環境設定の中にあります。
メニューバーから [Anki]-[環境設定] (または、Command+,) を選択し、[ネットワーク] タブを選択します。</p>
<div class="imageblock">
<div class="content">
<img src="/images/sync-settings.png" alt="デスクトップ版 Anki ネットワーク設定">
</div>
<div class="title">図 5. デスクトップ版 Anki ネットワーク設定</div>
</div>
<ul>
<li>
[音声と画像も同期する] を有効にすると、AnkiWeb にメディアデータも同期します。メディアデータが大きい場合は、同期に時間が掛かりますので注意してください。
</li>
<li>
[次回の同期は、一方向に変更を強制実行する] を有効にすると、次回の同期は差分のアップデートではなく、サーバー側かクライアント側の情報のどちらかに上書きします。
</li>
</ul>
<h4>アカウント情報の解除</h4>
<p>AnkiWeb のアカウントが登録済みの場合は、[認証解除] ボタンと登録メールアドレスを表示します。
登録済みのアカウント情報を取り消すには、[認証解除] ボタンを押します。</p>
<h4>同期してみる</h4>
<p>環境設定ウィンドウを閉じて、メインウィンドウ画面右上の循環する矢印のボタンを押す (ショートカット Y) と同期が始まります。今度は、アカウント情報を入力するダイアログは表示しません。</p>
<h3 id="ios_アプリ_の場合">iOS アプリ の場合</h3>
<p>iPhone などで iOS アプリ AnkiMobile Flashcards を使っている場合、
AnkiWeb のアカウント情報を登録するには、起動直後に表示するメインスクリーンの右下の [Synchronize] ボタンをタップします。</p>
<div class="imageblock">
<div class="content">
<img src="/images/sync-am-mainscreen.png" alt="AnkiMobile Flashcards から AnkiWeb へ同期" width="300">
</div>
<div class="title">図 6. AnkiMobile Flashcards から AnkiWeb へ同期</div>
</div>
<p>AnkiWeb で登録したメールアドレス (Login) とパスワード (Password) を入力してください。</p>
<div class="imageblock">
<div class="content">
<img src="/images/sync-am-signin.png" alt="AnkiMobile 上でのアカウント設定画面" width="300">
</div>
<div class="title">図 7. AnkiMobile 上でのアカウント設定画面</div>
</div>
<h4>同期機能の設定</h4>
<p>同期機能の設定をするには、メインスクリーン右上の歯車のアイコンをタップして、環境設定画面を開きます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/sync-am-mainscreen.png" alt="AnkiMobile Flashcards から AnkiWeb へ同期" width="300">
</div>
<div class="title">図 8. AnkiMobile Flashcards から AnkiWeb へ同期</div>
</div>
<p>次に、[Syncing] 項目をタップします。</p>
<div class="imageblock">
<div class="content">
<img src="/images/sync-am-preferences.png" alt="環境設定画面" width="300">
</div>
<div class="title">図 9. AnkiMobile 環境設定画面</div>
</div>
<p>デスクトップ版との違いは、プロファイル変更時の自動同期機能はなく、その代わりにモバイルデータ通信 (携帯電話回線) の利用の可否を設定できます。また、完全同期は直ちに行われます。</p>
<ul>
<li>
[Transfer Media] を有効にすると、AnkiWeb にメディアデータも同期します。メディアデータが大きい場合は、同期に時間が掛かりますので注意してください。
</li>
<li>
[Confirm Cell Sync] を有効にすると、モバイルデータ通信を使って同期できるようになります。
</li>
<li>
[Full Sync] をタップすると、同期処理を開始しサーバー側かクライアント側の情報のどちらかに上書き (完全同期) します。
</li>
</ul>
<div class="imageblock">
<div class="content">
<img src="/images/sync-am-pref-sync.png" alt="同期設定" width="300">
</div>
<div class="title">図 10. AnkiMobile 同期設定</div>
</div>
<h4>アカウント情報の解除</h4>
<p>AnkiWeb のアカウントが登録済みの場合は、[Deauth] ボタンと登録メールアドレスを表示します。
登録済みのアカウント情報を取り消すには、[Deauth] ボタンをタップします。</p>
<h4>同期してみる</h4>
<p>メインスクリーンまで戻り、右下の [Synchronize] ボタンをタップすると同期が始まります。今度は、アカウント情報を入力するダイアログは表示しません。</p>
<h3 id="android_アプリの場合">Android アプリの場合</h3>
<p>バージョン毎にユーザーインターフェイスに違いがありますが、現時点での最新安定板 AnkiDroid 2.2.3 を例に説明します。
AnkiWeb との同期機能の呼び出しは、メインスクリーン右上の循環する矢印ボタンをタップします。</p>
<div class="imageblock">
<div class="content">
<img src="/images/sync-ad-mainscreen.png" alt="同期の呼び出し" width="300">
</div>
<div class="title">図 11. AnkiDroid の同期の呼び出し</div>
</div>
<p>また、同期設定画面は、画面左上の Anki のアイコンをタップしてドロワーを開き、[設定]-[AnkiDroid] を選択すると表示します。
[AnkiWeb アカウント] をタップすると、アカウントの登録や解除ができます。</p>
<div class="imageblock">
<div class="content">
<img src="/images/sync-ad-pref-sync.png" alt="一般設定" width="300">
</div>
<div class="title">図 12. AnkiDroid 一般設定</div>
</div>
</section>
<section id="制限事項">
  <div class="page-header">
    <h2>制限事項</h2>
  </div>
<p>AnkiWeb には、ファイル容量と同時アクセス数に制限があります。通常の使い方をすれば、問題とならない制限です。</p>
<h3 id="容量制限">容量制限</h3>
<ul>
<li>
コレクションファイル全体 100MB
</li>
</ul>
<p>平均 25,000 枚のカードを数年間学習しても、コレクション容量は 25MB 程度となります。</p>
<ul>
<li>
メディアファイル 1ファイルにつき 100MB
</li>
</ul>
<p>メディアファイルは、容量全体の制限はありませんが、ファイル毎に制限を設定しています。</p>
<p>参考資料 Anki サポート Knowledge Base <a target="_new" href="https://anki.tenderapp.com/kb/anki-ecosystem/are-there-limits-on-file-sizes-on-ankiweb">Are there limits on file sizes on AnkiWeb?</a></p>
<h3 id="アクセス数制限">アクセス数制限</h3>
<p>一アカウント当たり、同時に一つの機器からしかアクセスできません。</p>
</section>
<section id="おわりに">
  <div class="page-header">
    <h2>おわりに</h2>
  </div>
<p>AnkiWeb と同期機能はデータの差分更新だけを行うため、コレクションデータのコピーに比べると簡単に短時間に完了します。
呼び出しもボタン一つで簡単です。AnkiWeb との同期を活用すると、色々な PC やデバイスにまたがって Anki 学習を継続することができます。</p>
<p>なお、AnkiWeb との同期が上手く行かない場合、<a href="/anki-fail-to-sync/">Ankiが同期できない問題について</a>
に注意すべき点をまとめていますので、参考にしてください。</p>
</section>
<section id="更新情報">
  <div class="page-header">
    <h2>更新情報</h2>
  </div>
<p>2014/08/31: 初出</p>
<p>2014/11/26: 追加: 制限事項</p>
</section>


