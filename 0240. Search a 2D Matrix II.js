function searchMatrix (matrix, v) {
      if (matrix.length == 0) return false;
      let n = matrix.length, m = matrix[0].length, l = 0, r = m-1;
      while (l < n && r >= 0) {
        if (matrix[l][r] === v) return true;
        else if (matrix[l][r] > v) r--;
        else l++;
      }
      return false;
}
