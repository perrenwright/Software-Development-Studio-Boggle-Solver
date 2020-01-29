//structure contains information about each specific key

// var grid = [['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H'], ['I', 'J', 'K', 'L'], ['A', 'B', 'C', 'D']];
// var dictionary = ['ABEF','AFJIEB', 'DGKD', 'DGKA'];
// var finaldictionary = [];

function findallsolutions(grid, dictionary)
{
	window.grid = grid;
	window.finaldictionary = [];
	dictionary.forEach(lettersplitter);
	console.log('Final Dictionary'); 
	console.log(finaldictionary)
	return(finaldictionary);
} 

//split letters one by one
//TODO account for Qu letters 
function lettersplitter(value)
{
	//split words in the dictionary
	var arr = value.split('');

	//turning the grid into a 1D array 
	var board = [].concat(...grid);
	//finding the width of the grid 
	var gridwidth = Object.keys(grid).length;
	var times = arr.length;
	var storedindexes = {};
	var wholeword = [];
	var found = null;
	if(arr.length < 3)
	{
		found = false; 
	} 
	for(let i = 0; i < arr.length; i++)
	{
		var returned = boardsearch(board, arr[i], times, arr, storedindexes);
		if(returned[0] === false) {
			found = false;
			break;
		}
		times--; 
	}
	console.log(storedindexes);
	for(let m = 0 ; m < arr.length; m++)
	{
		for(var key in storedindexes)
		{
			if(arr[m] === storedindexes[key])
			{
				wholeword.push(parseInt(key));
				break;
			}
		}
	}
	var returned1 = boardsearchadjacent(board, gridwidth, wholeword, arr); 
	if(returned1 === false){
		found = false;
	}
	if(found !== false)
	{
		console.log('Value pushed ' + value);
		finaldictionary.push(value);
	}
}

function boardsearch(board, charat, times, arr, storedindexes)
{
	var foundletter;
	if(times > 0)
	{
		for(let j = 0; j < board.length; j++)
		{
			if(charat === board[j])
			{
				storedindexes[j] = charat;
				//wholeword.push(j);
			}
			else if(storedindexes === null)
			{
				console.log('letter not found');
				console.log(charat);
				foundletter = false;
				console.log(arr); 
			}
		}	
		return [foundletter, storedindexes];
	}
}

function boardsearchadjacent(board, length, wholeword, arr)
{
	for(let l = 0; l < wholeword.length - 1; l++)
	{
		var topleft = (wholeword[l]-length-1 > 0 && wholeword[l]-length-1 < board.length) ? wholeword[l]-length-1:null;
		var top = (wholeword[l]-length > 0 && wholeword[l]-length < board.length) ? wholeword[l]-length:null;
		var topright = (wholeword[l]-length+1 > 0 && wholeword[l]-length+1 < board.length) ? wholeword[l]-length+1:null;
		var middleleft = (wholeword[l]-1 > 0 && wholeword[l]-1 < board.length) ? wholeword[l]-1:null;
		var middleright = (wholeword[l]+1 > 0 && wholeword[l]+1 < board.length) ? wholeword[l]+1:null;
		var bottomleft = (wholeword[l]+length-1 > 0 && wholeword[l]+length-1 < board.length) ? wholeword[l]+length-1:null;
		var bottom = (wholeword[l]+length > 0 && wholeword[l]+length < board.length) ? wholeword[l]+length:null;
		var bottomright = (wholeword[l]+length+1 > 0 && wholeword[l]+length+1 < board.length) ? wholeword[l]+length+1:null;
	
		switch(arr[l+1])
		{
			case board[topleft]:
				break;
			case board[top]:
				break;
			case board[topright]:
				break;
			case board[middleleft]:
				break;
			case board[middleright]:
				break;
			case board[bottomleft]:
				break;
			case board[bottom]:
				break;
			case board[bottomright]:
				break;
			default:
				return false;
		}
	}
	return true;
}

module.exports = findallsolutions;