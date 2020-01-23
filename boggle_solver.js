//structure contains information about each specific key

var grid = [['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H'], ['I', 'J', 'K', 'L'], ['A', 'B', 'C', 'D']];
var dictionary = ['ABEF', 'AFJIEB', 'DGKD', 'DGKA'];
var finaldictionary = [];

function findallsolutions(grid, dictionary)
{
	dictionary.forEach(lettersplitter);
	console.log('Final Dictionary'); 
	console.log(finaldictionary)
} 

function lettersplitter(value)
{
	var arr = value.split('');
	var board = [].concat(...grid);
	var gridwidth = Object.keys(grid).length;
	var times = arr.length;
	storedindexes = {};
	var found = null; 
	for(let i = 0; i < arr.length; i++)
	{
		if(i  noin storedindexes)
		{
			storedindexes[i] = []
		}
		else
		{

		}
		var returned = boardsearch(board, arr[i], times, storedindexes, gridwidth, arr);
		storedindexes = returned[1];
		if(returned[0] === false) {
			found = false;
			break;
		}
		times--; 
	}
	if(found !== false)
	{
		console.log('Value pushed ' + value);
		finaldictionary.push(value);
	}
}

function boardsearch(board, charat, times, previndexes, length, arr)
{
	var foundletter;
	if(times > 0)
	{
		//Searches for the first letter in the list
		if(times === arr.length)
		{
			for(let j = 0; j < board.length; j++)
			{
				if(charat === board[j])
				{
					foundletter = true;
					console.log('first letter found at ' + j);
					storedindexes.push(j);
				}
				else if(storedindexes === null)
				{
					console.log('first letter not found');
					console.log(charat);
					foundletter = false;
					console.log(arr); 
				}
			}	
			return [foundletter, storedindexes];
		}
		else
		{
			var returned1 = boardsearchadjacent(charat, board, previndexes, length);
			if(returned1[0] === true)
			{
				foundletter = returned1[0];
				storedindexes.push(returned1[1]);
				console.log('stored index ' + storedindexes);
			}
			else if(returned1[0] === false)
			{
				console.log('triggered character');
				console.log(charat);
				console.log('word to be removed');
				console.log(arr);
				foundletter = false;
			}		
		}
		return [foundletter, storedindexes]; 
	}
}


function boardsearchadjacent(charat, board, previndexes, length)
{
	for(let k = 0; k < previndexes.length; k++)
	{
		var topleft = (previndexes[k]-length-1 > 0 || previndexes[k]-length-1 < board.length) ? previndexes[k]-length-1:null;
		var top = (previndexes[k]-length > 0 || previndexes[k]-length < board.length) ? previndexes[k]-length:null;
		var topright = (previndexes[k]-length+1 > 0 || previndexes[k]-length+1 < board.length) ? previndexes[k]-length+1:null;
		var middleleft = (previndexes[k]-1 > 0 || previndexes[k]-1 < board.length) ? previndexes[k]-1:null;
		var middleright = (previndexes[k]+1 > 0 || previndexes[k]+1 < board.length) ? previndexes[k]+1:null;
		var bottomleft = (previndexes[k]+length-1 > 0 || previndexes[k]+length-1 < board.length) ? previndexes[k]+length-1:null;
		var bottom = (previndexes[k]+length > 0 || previndexes[k]+length < board.length) ? previndexes[k]+length:null;
		var bottomright = (previndexes[k]+length+1 > 0 || previndexes[k]+length+1 < board.length) ? previndexes[k]+length+1:null;
	
		switch(charat)
		{
			case board[topleft]:
				return [true, topleft];
			case board[top]:
				return [true, top];
			case board[topright]:
				return [true, topright];
			case board[middleleft]:
				return [true, middleleft];
			case board[middleright]:
				return [true, middleright];
			case board[bottomleft]:
				return [true, bottomleft];
			case board[bottom]:
				return [true, bottom];
			case board[bottomright]:
				return [true, bottomleft];
		}
	}
	return[false, null]
}

findallsolutions(grid, dictionary);