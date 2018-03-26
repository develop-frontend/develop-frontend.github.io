// $(document).ready(function () {
// });

function showAside() {
    $('.wrapper aside').toggleClass('active');
};

function tab(a){
	var _i = a.currentTarget.getAttribute('data-id'),
		_t = a.target,
		_a = _t.getAttribute('data-tab');
	$('div[data-id='+_i+'], ul[data-id='+_i+'] > li').removeClass('active');
	$('li[data-tab='+_a+'], #'+_a).addClass('active');
};
