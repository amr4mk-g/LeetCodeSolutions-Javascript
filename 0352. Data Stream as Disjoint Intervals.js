var SummaryRanges = function() {
    this.arr = [];
};

SummaryRanges.prototype.addNum = function(val) {
    let valIsInside = false;
    let n = this.arr.length;
    for (let i=0; i<n; i++){
        let [x,y] = this.arr[i];
        if (val >= x && val <= y){
            valIsInside = true;
            break;
        }
        else if(val == y+1){
            this.arr[i][1] = val;
            if (val+1 == this.arr[i+1]?.[0]){
                this.arr[i][1] = this.arr[i+1][1];
                this.arr.splice(i+1, 1);
            }
            valIsInside = true;
            break;
        }
        else if (val < x){
            if (val+1 == x) this.arr[i][0] = val;
            else this.arr.splice(i,0,[val,val])
            valIsInside = true;
            break;
        }
    }
    if (!valIsInside) this.arr.push([val,val]);
};

SummaryRanges.prototype.getIntervals = function() {
    return this.arr;
};
