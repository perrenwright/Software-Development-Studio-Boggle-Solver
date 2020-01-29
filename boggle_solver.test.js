var grid = [['A', 'B', 'C', 'D'], ['E', 'F', 'G', 'H'], ['I', 'J', 'K', 'L'], ['A', 'B', 'C', 'D']];
var dictionary = ['ABEF','AFJIEB', 'DGKD', 'DGKA'];
var grid1 = [['A', 'B'], ['C', 'D']];
var dictionary1 = ['A', 'B', 'AC', 'ACA', 'ACB', 'DE'];


const findallsolustions = require('./boggle_solver');

test('base case 1', () => { 
    expect(findallsolustions(grid, dictionary)).toMatchObject(['ABEF', 'AFJIEB', 'DGKD']);
})

test('base case 2', () =>  {
    expect(findallsolustions(grid1, dictionary1)).toMatchObject(['ACB']);
})