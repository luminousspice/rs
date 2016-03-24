---
slug: "anki-fail-to-sync"
date: "2013-11-21T16:17:56+00:00"
lastmod: "2015-03-02T14:09:49+00:00"
title: "Ankiが同期できない問題について"
weight: 10
categories: ["Anki"]
tags: ["Anki","AnkiDroid","iOS","iPad","iPhone","iPod touch"]
anki: ["AnkiDroid","AnkiMobile","AnkiWeb","プロファイル","同期"]
excerpt: "Anki と AnkiWeb の同期の問題をまとめました。プロキシ認証の設定、Anki のバージョン、複数のプロファイルや機器からのアクセス、サポートからのよく回答のあるセキュリティソフトの設定、AnkiWeb の障害情報の入手方法を取り上げます。"
---
<section id="preamble">
<p>Anki と AnkiWeb の同期の問題をまとめました。プロキシ認証の設定、Anki のバージョン、複数のプロファイルや機器からのアクセス、サポートからのよく回答のあるセキュリティソフトの設定、AnkiWeb の障害情報の入手方法を取り上げます。</p>
</section>
<section id="設定の再確認">
  <div class="page-header">
    <h1>設定の再確認</h1>
  </div>
<p>Anki と AnkiWeb との同期で最初につまづく原因は、AnkiWeb のアカウント作成の失敗していること、Anki や連携して使用する AnkiMobile や AnkiDroid の設定が正しく行われていないことです。</p>
<p>設定方法に不安な方は、<a href="/how-to-sync-with-ankiweb/">AnkiWeb 同期機能の使い方</a>で確認してください。</p>
</section>
<section id="プロキシ認証の失敗_mac_os_x_および_windows">
  <div class="page-header">
    <h1>プロキシ認証の失敗 (Mac OS X および Windows)</h1>
  </div>
<p>2014/04/23 更新の <a target="_new" href="http://ankisrs.net/docs/manual.html#proxies">Anki Manual Proxies</a>によれば、Mac OS X および Windows 版の Anki ではツールキットの原因で、システム設定からユーザー名とパスワードの取得ができずプロキシ認証に失敗するとのことです。
このため、Anki を認証が必要なプロキシ経由で同期するには、環境変数 HTTP_PROXY の設定が必要です。</p>
<pre class="prettyprint">http://user:pass@proxy.example.com:8080</pre>
<p>その際にユーザー名やパスワードに @ を使用している場合には、%40 で置き換える必要があります。</p>
<pre class="prettyprint">http://user%40workspace:pass@proxy.example.com:8080</pre>
<p>Mac OS X および Windows ともにそれぞれのバージョンによって環境変数の設定方法が異なります。お使いになっている環境に適した方法で設定ください。</p>
</section>
<section id="同期に必須なバージョン">
  <div class="page-header">
    <h1>同期に必須なバージョン</h1>
  </div>
<p>Anki サポートサイトの告知、<a target="_new" href="https://anki.tenderapp.com/discussions/announcements/60-anki-and-heartbleed">Anki and Heartbleed</a> によれば、Heartbleed 問題の対応のため、AnkiWeb と同期して Anki を使い続けるには、Anki 2.0.24 以降に変更になりました。</p>
<h2 id="mac_os_x_10_5_10_6_用代替ビルドを使用している場合">Mac OS X 10.5, 10.6 用代替ビルドを使用している場合</h2>
<p>Anki サポートサイト Knowledge Base <a target="_new" href="https://anki.tenderapp.com/kb/problems/syncing-errors-with-older-macs">Syncing errors with older Macs</a> によれば、Anki 2.0.30 が必須になりました。</p>
</section>
<section id="同期中にタイムアウトが発生する場合">
  <div class="page-header">
    <h1>同期中にタイムアウトが発生する場合</h1>
  </div>
<p><a href="/changeinanki2/">Anki 変更履歴</a>によれば、Anki 2.0.31 では、定期的に大量のデータを同期した場合に発生するタイムアウトの問題を解決しています。</p>
</section>
<section id="ファイル容量制限">
  <div class="page-header">
    <h1>ファイル容量制限</h1>
  </div>
<p>ファイル容量が 100MB を超えるファイルをアップロードすることは出来ません。サーバーエラーが発生します。</p>
<p>Anki 2.0.29 Beta 2 (Sep 15) 以降では、100MB を超えるファイルは同期対象外になります。</p>
</section>
<section id="複数のプロファイルを使用している場合">
  <div class="page-header">
    <h1>複数のプロファイルを使用している場合</h1>
  </div>
<p>AnkiWeb の特定のアカウントに、特定の機器からは一つのプロファイルだけが接続できます。</p>
<p>一つの機器で複数のプロファイルを使っている場合、認証済みのプロファイルを認証解除して、アクセスしたいプロファイルに変更して認証し直します。</p>
</section>
<section id="複数の機器からアクセスする場合">
  <div class="page-header">
    <h1>複数の機器からアクセスする場合</h1>
  </div>
<p>一つのアカウントに同時に複数の機器からアクセスすることはできません。</p>
<p>それぞれの機器から順番にアクセスしてください。また、同期中の機器がないか確認してみてください。</p>
</section>
<section id="サポートからのよくある回答">
  <div class="page-header">
    <h1>サポートからのよくある回答</h1>
  </div>
<p>Anki のサポートサイトで AnkiWeb の接続障害にする質問に対する、よくある回答は
アンチウィルス、ファイアウォールなどのセキュリティソフトの設定、VPN ソフトの設定、ISP によるフィルタリングを原因として指摘しています。</p>
<p>セキュリティソフトの例外設定のために、Anki の再インストールを勧めている場合もあります。
また、古いバージョンの Anki を使用していることを指摘されることも多いです。</p>
<p>サポートサイトへ質問する前に、これらの項目を事前に確認しておくと良いでしよう。</p>
</section>
<section id="ankiweb_の障害情報">
  <div class="page-header">
    <h1>AnkiWeb の障害情報</h1>
  </div>
<p>Anki と同期する AnkiWeb に障害発生により、同期に失敗したり遅延したりする場合があります。</p>
<p>最新情報の確認は、Anki サポートサイトの<a target="_new" href="https://anki.tenderapp.com/discussions/announcements">Announcements</a>の告知をご覧下さい。</p>
<p>Anki サポートサイトの<a target="_new" href="https://anki.tenderapp.com/discussions/ankiweb">AnkiWeb</a>カテゴリでは、AnkiWebについて障害報告したり、他のユーザーからの報告を読むことができます合わせてご利用ください。</p>
<h2 id="主な障害情報の履歴">主な障害情報の履歴</h2>
<h3>2015/02/26</h3>
<p>AnkiWeb サーバーにパフォーマンス上の問題が発生していましたが、2015/03/02 に最終的な復旧報告がありました。</p>
<p>Anki サポート情報:</p>
<ol>
<li>
<a target="_new" href="https://anki.tenderapp.com/discussions/announcements/80-ankiweb-performance-updates">AnkiWeb performance updates</a> (2015/03/02)
</li>
<li>
<a target="_new" href="https://anki.tenderapp.com/discussions/ankidesktop/12070-slow-to-synchronise-last-few-days-could-you-check-it-for-me">Slow to synchronise last few days - could you check it for me?</a> (2015/03/01)
</li>
<li>
<a target="_new" href="https://anki.tenderapp.com/discussions/ankiweb/928-ankiweb-too-busy-right-now">AnkiWeb too busy right now</a> (2015/02/26)
</li>
</ol>
<h3>2014/09/16</h3>
<p>数時間にわたって発生していたサーバーのメンテナンスエラーが、6時40分過ぎに復旧しました。
Anki サポート情報: <a target="_new" href="https://anki.tenderapp.com/discussions/ankiweb/721-ankiweb-maintenance">AnkiWeb maintenance?</a></p>
<h3>2014/04/04</h3>
<p>数日前から発生していた AnkiWeb サーバーに発生していたパフォーマンス上の問題を、サーバーのアップグレードで解決しました。
Anki サポート情報: <a target="_new" href="https://anki.tenderapp.com/discussions/announcements/58-ankiweb-servers-upgraded">AnkiWeb servers upgraded</a></p>
<h3>2013/11/21</h3>
<p>13時頃から、AnkiWeb サーバーにネットワーク上の問題が発生し、Anki クライアントアプリケーションとの同期ができなくなっていましが、16時20分過ぎに復旧しました。
Anki サポート情報: <a target="_new" href="https://anki.tenderapp.com/discussions/announcements/40-ankiweb-problems-again">AnkiWeb Problems Again</a></p>
</section>
<section id="anki_の同期に関する修正履歴">
  <div class="page-header">
    <h1>Anki の同期に関する修正履歴</h1>
  </div>
<p><a href="/changeinanki2/">Anki 2 の変更点 日本語訳</a>では、これまで Anki に行った修正点を一覧することができます。同期に関する修正内容を確認することができます。</p>
</section>
<section id="ankimobile_固有の問題">
  <div class="page-header">
    <h1>AnkiMobile 固有の問題</h1>
  </div>
<p>iOS アプリ <a target="_new" href="https://itunes.apple.com/jp/app/ankimobile-flashcards/id373493387?mt=8&amp;ign-mpt=uo%3D4">AnkiMobile</a> の過去のバージョンが原因で発生した問題点を紹介します。</p>
<h2 id="同期中にクラッシュ">同期中にクラッシュ</h2>
<p>AnkiMobile 2.0.14 では、AnkiMobile 2.0.13 へ以前のバージョンからアップグレードすると、多数のメディアファイルを同期した場合にアプリケーションがクラッシュする問題を解決しました。</p>
<p>参考情報: Anki サポート Knowledge Base <a target="_new" href="https://anki.tenderapp.com/kb/problems/ankimobile-2013-may-crash-when-syncing">AnkiMobile 2.0.13 may crash when syncing</a></p>
<h2 id="不要な完全同期を求めるメッセージ">不要な完全同期を求めるメッセージ</h2>
<p>AnkiMobile 2.0.15 では、不要な場合にも完全同期を促すメッセージを表示する問題を修正しました。</p>
<p>参考情報: AnkiMobile サポートフォーラム <a target="_new" href="https://anki.tenderapp.com/discussions/ankimobile/2117-deck-needs-total-upload-download-all-the-time">Inconsistent state upload/download messages</a></p>
</section>
<section id="ankidroid_固有の問題">
  <div class="page-header">
    <h1>AnkiDroid 固有の問題</h1>
  </div>
<p>AnkiWeb との同期の障害が、クライアント側の AnkiDroid が原因で発生する場合もあります。</p>
<p>AnkiWeb との同期に必須なバージョンは、AnkiDroid 2.3.2 以降です。</p>
<p><a target="_new" href="https://code.google.com/p/ankidroid/wiki/FAQ#I_get_a_sync_error_about_the_time_of_my_device_when_syncing_with">AnkiDroid FAQ</a> によれば、タイムゾーン選択と時刻設定が正しくないと、AnkiWeb との同期でエラーが発生するそうです。</p>
<p>AnkiDroid の障害に関する最新情報は、<a target="_new" href="http://groups.google.com/group/anki-android">AnkiDroid Forum</a>で確認できます。</p>
<p>また、Issue Tracker (障害案件一覧) を開発者サイトで検索することもできます。
<a target="_new" href="https://code.google.com/p/ankidroid/issues/list?can=2&amp;q=sync%20status=Accepted%20type=Defect&amp;sort=-id%20-milestone&amp;colspec=ID%20Type%20Priority%20Status%20Milestone%20Owner%20Summary">検索例: キーワード sync 優先順位 High 状況 Accepted</a></p>
</section>
<section id="更新情報">
  <div class="page-header">
    <h1>更新情報</h1>
  </div>
<p>2013/11/21: 初出</p>
<p>2014/04/24: 追加: プロキシ認証失敗、必須条件 2.0.24 以上</p>
<p>2014/09/08: 追加: 複数のプロファイルや機器からの接続、サポートからのよくある回答</p>
<p>2014/09/11: 追加: AnkiDroid 固有の問題</p>
<p>2014/09/15: 追加: ファイル容量制限</p>
<p>2014/10/19: 追加: Anki 2.0.30、2.0.31 の変更点</p>
<p>201M/10/30: 追加: AnkiMobile 2.0.13 が同期中にクラッシュする問題</p>
<p>2014/11/11: 追加: AnkiMobile 2.0.14 の変更点、AnkiDroid の必須バージョン</p>
<p>2014/11/12: 追加: AnkiMobile 2.0.15 の変更点</p>
<p>2015/02/26: 追加: AnkiWeb 処理能力の問題</p>
<p>2015/03/02: 更新: AnkiWeb 処理能力の問題</p>
</section>


