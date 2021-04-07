class pixmap {

    constructor (sizex, sizey, pixelSize){
        this.sizex = sizex;
        this.sizey = sizey;
        this.pixelSize = pixelSize;
        this.wrapper = document.createElement('div');
        this.wrapper.style.width = sizex * pixelSize + sizex + 'px';
        this.wrapper.style.height = sizey * pixelSize + sizey + 1 + 'px';
        this.wrapper.style.position = 'relative'
        this.pixels = []
        this.bites = []

        this.pixels2d = {}
        for(let yi = 0; yi < sizey; yi++){
            for(let xi = 0; xi < sizex; xi++){
                this.bites.push(0)
                const pixel = document.createElement('div')
                pixel.style.width = pixelSize + 'px'
                pixel.style.height = pixelSize + 'px'
                pixel.style.fontSize = pixelSize + 'px'
                pixel.style.textAlign = 'center'
                pixel.style.border = '1px solid #222'
                pixel.style.top = yi * this.pixelSize - yi + 'px'
                pixel.style.left = xi * this.pixelSize - xi + 'px'
                pixel.style.position = 'absolute'
                pixel.style.boxSizing = 'border-box'
                pixel.style.background = '#000'


                this.wrapper.appendChild(pixel)
                this.pixels.push(pixel)

                if (!(xi in this.pixels2d)) this.pixels2d[xi] = {}
                this.pixels2d[xi][yi] = pixel
            }
        }
    }

    rand(){
        return [Math.floor(Math.random() * this.sizex), Math.floor(Math.random() * this.sizey)];
    }

    set([x,y], color, vector = ''){
        if (color[0]=='#')
            this.pixels2d[x][y].style.background = color
        else
            if (color==0){
                this.pixels2d[x][y].style.background = '#444'
                const pos = y * (this.sizex) + x;
                this.bites[pos] = 0
            } else {
                this.pixels2d[x][y].style.background = '#fff'
                const pos = y * (this.sizex) + x;
                this.bites[pos] = 1
            }
            


        if (vector!='')
            this.pixels2d[x][y].innerHTML = vector
    }

    bite(){
        return this.bites
    }

    getElement(){
        return this.wrapper
    }

    get2dmap(){
        return this.pixels2d
    }

}