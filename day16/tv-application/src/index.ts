class Television{
    proxy:string;
    index: number;
    data: Array<string>;

    constructor(){
        this.index = 0;
        // tried to use API but coudn't able to go through with typescript.
        //so went with list of data instead.
        this.data = [
            "https://www.youtube.com/embed/w1oM3kQpXRo",
            "https://www.youtube.com/embed/GkD20ajVxnY",
            "https://www.youtube.com/embed/yCMqcFAigRg",
            "https://www.youtube.com/embed/xKCek6_dB0M",
            "https://www.youtube.com/embed/Jb2stN7kH28",
            "https://www.youtube.com/embed/ptSjNWnzpjg",
            "https://www.youtube.com/embed/Pb-K2tXWK4w",
            "https://www.youtube.com/embed/8xg3vE8Ie_E",
            "https://www.youtube.com/embed/D1Xr-JFLxik",
            "https://www.youtube.com/embed/VuNIsY6JdUw"
        ]
        this.proxy = "?controls=0&autoplay=1&showinfo=1&enablejsapi=1&origin=http%3A%2F%2Flocalhost%3A5500&widgetid=1"
    }

    playSong(): void{
        let item = <HTMLIFrameElement>document.getElementById("ytplayer");
        item.src = this.data[this.index] + this.proxy;
    }

    nextSong(): void{
        if(this.index === 9){
            this.index = 0;
            let item = <HTMLInputElement>document.getElementById("n_value");
            item.value = this.data[this.index + 1] + this.proxy;
            let item2 = <HTMLInputElement>document.getElementById("p_value");
            item2.value = this.data[0] + this.proxy;
            this.index += 1;
        }else{
            if(this.index == 8){
                this.index += 1;
                let item = <HTMLInputElement>document.getElementById("n_value");
                item.value = this.data[0] + this.proxy;
                let item2 = <HTMLInputElement>document.getElementById("p_value");
                item2.value = this.data[this.index - 1] + this.proxy;
            }else{
                this.index += 1;
                let item = <HTMLInputElement>document.getElementById("n_value");
                item.value = this.data[this.index + 1] + this.proxy;
                let item2 = <HTMLInputElement>document.getElementById("p_value");
                item2.value = this.data[this.index - 1] + this.proxy;
            }
        }
    }

    prevSong(): void{
        if(this.index === 0){
            this.index = 9;
            let item = <HTMLInputElement>document.getElementById("n_value");
            item.value = this.data[0] + this.proxy;
            let item2 = <HTMLInputElement>document.getElementById("p_value");
            item2.value = this.data[this.index - 1] + this.proxy;
        }else{
            if (this.index == 1){
                this.index -= 1;
                let item = <HTMLInputElement>document.getElementById("n_value");
                item.value = this.data[this.index + 1] + this.proxy;
                let item2 = <HTMLInputElement>document.getElementById("p_value");
                item2.value = this.data[9] + this.proxy;
            }else{
                this.index -= 1;
                let item = <HTMLInputElement>document.getElementById("n_value");
                item.value = this.data[this.index + 1] + this.proxy;
                let item2 = <HTMLInputElement>document.getElementById("p_value");
                item2.value = this.data[this.index - 1] + this.proxy;
            }
        }
    }
}

let tvObj = new Television;
tvObj.playSong()

let bw =<HTMLButtonElement>document.getElementById("button_fw")
if(bw){
    bw.addEventListener("click", function() {tvObj.nextSong()});
}

let fw =<HTMLButtonElement>document.getElementById("button_bw")
if(fw){
    fw.addEventListener("click", function() {tvObj.prevSong()})
}