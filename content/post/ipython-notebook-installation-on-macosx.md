---
slug: "ipython-notebook-installation-on-macosx"
date: "2013-12-02T00:00:49+00:00"
lastmod: "2013-12-07T23:22:25+00:00"
title: "Mac OS X に IPython Notebook をインストールする場合の注意点"
categories: ["開発"]
tags: ["IPython","matplotlib","Python"]
excerpt: "IPython Notebook を Mac OS X にインストールする際に発生する、matplotlib のインストールの問題を解決する方法を紹介します。"
---
<section id="preamble">
<p>IPython Notebook を Mac OS X にインストールする際に発生する、matplotlib のインストールの問題を解決する方法を紹介します。</p>
<p>この記事は、Mac OS X 10.7 上に virtualenv で構築した Python 2.7.5 の仮想環境に IPython 1.1.0 をインストールする場合の注意点を取り上げます。</p>
<p><a href="http://ipython.org/notebook.html" target="_new">IPython Notebook</a> は、Python の対話的な Web ベースの使いやすいシェルで、グラフや数式を表示することができます。特に Python の科学計算パッケージを利用する場合に重宝します。
IPython のオフィシャルサイトで紹介している Anaconda という Python の商用配布パッケージには、IPython と関連パッケージが全て含まれていて、簡単にインストール可能です。</p>
<p>しかしながら、既に Python の独自環境を構築していて、追加で IPython Notebook のインストールには、複数の Python パッケージをインストールする必要があります。
Mac OS X 環境に IPython Notebook インストールする手順としては、 <a href="http://slowquery.hatenablog.com/entry/2013/04/01/010927" target="_new">IPython notebookでブラウザ内にグラフを描画する</a> などの記事が参考になります。</p>
<p>ただし Mac OS X の場合、<code>pip install matplotlib</code> だけでは、matplotlib がインストールできず、IPython 実行後のグラフの描画の際にエラーが発生する場合があります。</p>
<p>これは、Stack Overflow の投稿 <a href="http://superuser.com/questions/242190/how-to-install-matplotlib-on-os-x" target="_new">How to install matplotlib on OS X?</a> によれば、Mac OS X の場合、matplotlib をインストールする前に、コンパイルオプションを指定すると解決できるそうです。</p>
<p>pip を使う場合は、次のように実行します。</p>
<div class="listingblock">
<div class="content"><div class="highlight"><pre><span class="nb">export </span><span class="nv">LDFLAGS</span><span class="o">=</span><span class="s2">&quot;-L/usr/X11/lib&quot;</span>
<span class="nb">export </span><span class="nv">CFLAGS</span><span class="o">=</span><span class="s2">&quot;-I/usr/X11/include -I/usr/X11/include/freetype2 -I/usr/X11/include/libpng12&quot;</span>
pip install matplotlib
</pre></div></div></div>
<p>インストール終了後、再度グラフを描画して、確認すれば作業完了です。</p>
</section>


