
// You should implement your task here.

module.exports = function towelSort (matrix) {
    console.log(matrix);
    let res=[];
    let res_i=0;
    if (matrix===undefined) return new Array();
    for (let i=0;i<matrix.length;i++ ){
        for (let j=0;j<matrix[i].length;j++ ){
            if (i%2===0) {
                res[res_i]=matrix[i][j];
                res_i++;
            }
            else {res[res_i]=matrix[i][matrix[i].length-j-1];res_i++;}
        }
    }
    console.log(res);
  return res;
}
