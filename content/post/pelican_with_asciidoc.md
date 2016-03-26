---
slug: "pelican_with_asciidoc"
date: "2013-12-01T21:00:53+00:00"
lastmod: "2013-12-01T21:18:16+00:00"
title: "静的サイトジェネレータ Pelican で AsciiDoc を使う方法"
categories: ["開発"]
tags: ["AsciiDoc","Pelican","Python"]
excerpt: "静的サイトジェネレータ Plican で AsciiDoc を機能させるのに必要な、文書化されていない作業をまとめました。"
---
<section id="preamble">
<p>静的サイトジェネレータ Plican で AsciiDoc を機能させるのに必要な、文書化されていない作業をまとめました。AsciiDoc API  のインストール方法と、日本語を処理した時に発生するユニコードエラーの対応について説明しています。</p>
<p><a href="http://docs.getpelican.com/">Pelican</a> は、Python で書かれた静的なサイトジェネレータです。reStructuredText や Markdown を標準でサポートしています。</p>
<p>マークアップ言語に <a href="http://www.methods.co.nz/asciidoc/">AsciiDoc</a> を利用するために必要な、文書化されていない手続について説明します。</p>
</section>
<section id="asciidoc_api_のインストール">
  <div class="page-header">
    <h2>AsciiDoc API のインストール</h2>
  </div>
<p>Pelican で AsciiDoc を利用するには、<a href="http://www.methods.co.nz/asciidoc/asciidocapi.html">AsciiDoc API</a> をインストールする必要があります。
Markdown を利用するには pip を使ったインストールが可能ですが、AsciiDoc の場合は別途作業になります。</p>
<p>AsciiDoc API は <code>asciidocapi.py</code> ファイルの形で提供されています。Sourceforge から <a href="http://sourceforge.net/projects/asciidoc/">AsciiDoc のソースコード</a>のアーカイブを解凍するとトップレベルに <code>asciidocapi.py</code> が見つかります。</p>
<p>私の環境は、virtualenv を使っていますので次の場所にインストールしました。
<code>~/.virtualenvs/(Pelicanを使う仮想環境名)/bin/asciidocapi.py</code></p>
<p>これで、ドキュメントのファイル名の拡張子を <code>asc</code> にすると、Pelican は AsciiDoc として認識し処理してくれます。</p>
</section>
<section id="ユニコードエラーの問題">
  <div class="page-header">
    <h2>ユニコードエラーの問題</h2>
  </div>
<p>利用している Python 環境によっては、Pelican で日本語の文書を処理した時にユニコードのエラーが発生することがあります。これは既定のエンコーディングが utf-8 になっていないためです。</p>
<div class="listingblock">
<div class="content"><div class="highlight"><pre>WARNING: Could not process ./mydoc.asc
<span class="s1">&#39;ascii&#39;</span> codec can&#39;t encode characters in position 20-22: ordinal not in range<span class="o">(</span>128<span class="o">)</span>
Done: Processed 1 articles and 0 pages in 0.40 seconds.
</pre></div></div></div>
<p>次のように、調べると既定のエンコーディングを調べることができます。</p>
<div class="listingblock">
<div class="content"><div class="highlight"><pre>&gt;&gt;&gt; import sys
&gt;&gt;&gt; sys.getdefaultencoding<span class="o">()</span>
<span class="s1">&#39;ascii&#39;</span>
</pre></div></div></div>
<p>asciidocapi.py を書き換える方法と、Python の環境設定ファイルを編集する方法があります。Python の配布用モジュールを開発している訳ではないので、今回は環境設定ファイルで対応しました。</p>
<p>設定は <code>sitecustomize.py</code> を編集します。
このファイルのありか次のように調べます。</p>
<div class="listingblock">
<div class="content"><div class="highlight"><pre>&gt;&gt;&gt; import sitecustomize
&gt;&gt;&gt; sitecustomize.__file__
<span class="s1">&#39;/usr/local/lib/python2.7/site-packages/sitecustomize.pyc&#39;</span>
</pre></div></div></div>
<p>このファイルに次のような記述を追加します。</p>
<div class="listingblock">
<div class="content"><div class="highlight"><pre><span class="kn">import</span> <span class="nn">sys</span>
<span class="n">sys</span><span class="o">.</span><span class="n">setdefaultencoding</span><span class="p">(</span><span class="s">&#39;utf-8&#39;</span><span class="p">)</span>
</pre></div></div></div>
<p>最後に、既定の設定が反映されているか確認します。次のように utf-8 になっていれば完了です。</p>
<div class="listingblock">
<div class="content"><div class="highlight"><pre>&gt;&gt;&gt; import sys
&gt;&gt;&gt; sys.getdefaultencoding<span class="o">()</span>
<span class="s1">&#39;utf-8&#39;</span>
</pre></div></div></div>
<p>文書化されていない Pelican での AsciiDoc 利用の方法はここまでです。
ここから先は、他のマークアップ言語と同じようにドキュメントの内容に従って使いこなしてください。</p>
</section>


