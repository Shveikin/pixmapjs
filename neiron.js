class neiron {
    buffer = []
    w = []
    a = 0.02
    constructor(n){
        for (let i = 0; i<n; i++){
            this.w[i] = .5;
        }
    }

    bufferResult(){
        let result_summ = 0;

        for (let buf of this.buffer){
            result_summ += (buf[1] - this.run(buf[0]))
        }
        return Math.abs(result_summ / this.buffer.length)
    }

    lern(x, right){
        if (this.buffer.length > 3) this.buffer.shift()
        this.buffer.push([x, right])

        const main_error = this.bufferResult()
        for (let i = 0; i < this.w.length; i++) {
            const last_w = this.w[i]


            this.w[i] = this.w[i] - this.a; ////
            if (this.bufferResult()>=main_error){
                this.w[i] = last_w

                this.w[i] = this.w[i] + this.a; ///
                if (this.bufferResult()>=main_error){
                        this.w[i] = last_w
                } else {
                    console.log(this.w, i, '+');
                }
            } else {
                console.log(this.w, i, '-');
            }
        }
    }

    run(x){
        let Y = 0;
        for (let i = 0; i < x.length; i++) {
            Y += x[i] * this.w[i];
        }
        return Y;
    }
}
