
class Camara{
    constructor(videoNode){
        this.videoNode = videoNode;
    }

    encender(){
        navigator.mediaDevices.getUserMedia({
            audio:false,
            video: { width:300,height:300 }
        }).then( stream => {
            this.videoNode.srcObject = stream;
            this.stream = stream;
        });
    }

    apagar(){
        this.videoNode.pause();

        if (this.stream) {
            this.stream.getTracks()[0].stop();
        }
    }

    tomarFoto(){

        //Crear un elemento canvas para renderizar ahí la foto 
        let canvas = document.createElement('canvas');
        //colocar las dimensiones igual 

        canvas.setAttribute('width',300);
        canvas.setAttribute('height',300);

        let context = canvas.getContext('2d');

        context.drawImage(this.videoNode,0,0,canvas.width,canvas.height);

        this.foto = context.canvas.toDataURL();

        canvas = null;
        context = null;

        return this.foto;
    }
}

