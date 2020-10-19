
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    } else {
        let outputArray = [];
        for (let i = 0; i < matrix.length; i++) {
            if ((i + 1) % 2 === 0) {            
                for (let j = matrix[i].length - 1; j >= 0; j--) {
                    outputArray.push(matrix[i][j]);            
                }
            } else {            
                for (let j = 0; j < matrix[i].length; j++) {
                    outputArray.push(matrix[i][j]);            
                }
            }
        }
        return outputArray;
    }    
}
