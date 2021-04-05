class pixmap {

    constructor (sizex, sizey, pixelSize){
        this.sizex = sizex;
        this.sizey = sizey;
        this.pixelSize = pixelSize;
        this.wrapper = document.createElement('div');
        this.wrapper.style.width = sizex * pixelSize + sizex + 'px';
        this.wrapper.style.height = sizey * pixelSize + sizey + 1 + 'px';
        this.pixels = []
        this.pixels2d = {}
        for(let yi = 0; yi < sizey; yi++){
            for(let xi = 0; xi < sizex; xi++){
                const pixel = document.createElement('div')
                pixel.style.width = pixelSize + 'px';
                pixel.style.height = pixelSize + 'px';
                pixel.style.border = '1px solid #000';
                pixel.style.display = 'inline-block'
                pixel.style.marginRight = '-1px'; 
                pixel.style.marginBottom = '-5px'; 

                this.wrapper.appendChild(pixel);
                this.pixels.push(pixel)

                if (!(xi in this.pixels2d)) this.pixels2d[xi] = {}
                this.pixels2d[xi][yi] = pixel
            }
        }
        
    }

    getElement(){
        return this.wrapper
    }

    get2dmap(){
        return this.pixels2d
    }

}