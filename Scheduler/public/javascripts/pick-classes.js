(function(window, document, undefined) {

var classes = [
	'CS106A',
	'CS106B',
	'CS107',
	'CS109',
	'CS110',
	'CS124'
];

var $search = $("#search-class");

// create unordered list to hold suggestions
var $suggestions = $('<ul></ul>').attr('id', 'suggestions').attr('class', 'list-group');	//id="suggestions"
$search.after($suggestions);	//Insert $suggestions after $search

SearchBar.setUp($search, $suggestions, classes, createIcon);

$modal = $("#class-up-close");

$("body").click(function(event) {
	if(event.target.type === 'button') {
		if(event.target.className.indexOf('course') !== -1) {
			$('#class-up-close .modal-title').text(event.target.innerHTML);
			return;
		}
		
		//If the user clicks 'Delete Course' button
		if(event.target.innerHTML === 'Delete Course') {
			var courseName = $('.modal-title').text();
			$('.course').each(function(index) {
				if($(this).text() === courseName) {
					$(this).remove();

					return;
				}
			});
		}
	}
});


function createIcon(course) {
	$searchBarArea = $("#enter-class-bar");
	var $newClass = $('<button></button>')
		.attr('type', 'button')
		.attr('data-toggle', 'modal')
		.attr('data-target', '#class-up-close')
		.attr('class', 'btn btn-lg course')
		.text(course);
	$searchBarArea.after($newClass);
}



  })(this, this.document);