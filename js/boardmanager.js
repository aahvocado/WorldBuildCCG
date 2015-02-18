var board;

function init(){
	resetBoard();
	console.log(board);
}

//create a new 5x5 board
function resetBoard(){
	board = new Array();
	var size = 5;
	for(var i=0;i<size;i++){
		board[i] = new Array();
		for(var j=0;j<size;j++){
			board[i][j] = "empty";
		}
	}
}