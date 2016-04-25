$(document).ready(function() {
	$('table.table td a').attr('target','_new');
	$('#decklist td:first-child a').attr('target','_new');
	$('#decklist td:nth-last-child(-n+2)').css({ cursor: 'pointer' });
	var decktable = $('#decklist').DataTable({
	    order: [],
	    lengthMenu: [ 5, 10, 20, 50],
	    pageLength: 10,
	    initComplete: function () {
	         var api = this.api();
	         api.$('td:nth-last-child(-n+1)').getWordByEvent('click', function(event, word) {
	       api.search( word ).draw();
	         });
	    },
		responsive: true,
	    dom: 'l<"toolbar">frtip',
	    language:{
		     "sEmptyTable":     "テーブルにデータがありません",
		     "sInfo":           " _TOTAL_ 件中 _START_ から _END_ まで表示",
		     "sInfoEmpty":      " 0 件中 0 から 0 まで表示",
		     "sInfoFiltered":   "（全 _MAX_ 件より抽出）",
		     "sInfoPostFix":    "",
		     "sInfoThousands":  ",",
		     "sLengthMenu":     "表示単位 _MENU_ 件",
		     "sLoadingRecords": "読み込み中...",
		     "sProcessing":     "処理中...",
		     "sSearch":         "検索: ",
		     "sZeroRecords":    "一致するレコードがありません",
		     "oPaginate": {
		           "sFirst":    "先頭",
		           "sLast":     "最終",
		           "sNext":     "次",
		           "sPrevious": "前"
		     },
		     "oAria": {
		           "sSortAscending":  ": 列を昇順に並べ替えるにはアクティブにする",
		           "sSortDescending": ": 列を降順に並べ替えるにはアクティブにする"
		     }
	    }
        
	});
	$("div.toolbar").html('<p id="searchtool" class="btn-group"><a class="btn" href="javascript:void(0);">条件取消</a></p>');
	$('#searchtool a').click(function() {
		var text = $(this).text();
		if (text == "条件取消"){
			text = '';
		}
		decktable.search( text ).draw();
		$("input[aria-controls='decklist']").val(text);
	});
});
