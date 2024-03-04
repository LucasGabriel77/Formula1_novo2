class obj {
    constructor(x, y, w, h, a) {
      this.a = a;
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
    }
  
    des_obj() {
      des.fillStyle = this.a;
      des.fillRect(this.x, this.y, this.w, this.h);
    }
  }
  
  class Carro extends obj {
    dir = 0;
    pts = 0;
    vida = 5;
    des_carro(){
  
      //roda dianteira esquerda
      des.beginPath()
      des.lineWidth = '5'
      des.strokeStyle = 'orange'
      des.fillStyle = 'darkorange'
      des.fillRect(this.x+40,this.y-60,10,10)  
      des.closePath()
      des.stroke()
      des.fill()
  
  
      //roda dianteira direita
      des.beginPath()
      des.lineWidth = '5'
      des.strokeStyle = 'orange'
      des.fillStyle = 'darkorange'
      des.fillRect(this.x,this.y-60,10,10)  
      des.closePath()
      des.stroke()
      des.fill()
  
  
      //roda traseira direita
      des.beginPath()
      des.lineWidth = '5'
      des.strokeStyle = 'orange'
      des.fillStyle = 'darkorange'
      des.fillRect(this.x+40,this.y-20,10,10)  
      des.closePath()
      des.stroke()
      des.fill()
  
      //roda traseira esquerda
      des.beginPath()
      des.lineWidth = '5'
      des.strokeStyle = 'orange'
      des.fillStyle = 'darkorange'
      des.fillRect(this.x,this.y-20,10,10)  
      des.closePath()
      des.stroke()
      des.fill()
  
      //trapezio
      des.beginPath()
      des.moveTo(this.x,this.y) //cordenadas x,y
      des.lineTo(this.x+50,this.y)
      des.lineTo(this.x+40,this.y-50)
      des.lineTo(this.x+10,this.y-50)
      des.closePath()
      des.lineWidth = '5'
      des.strokeStyle = 'blue'
      des.fillStyle = this.a
      des.stroke()
      des.fill()
  
      //aerofolio dianteiro
      des.beginPath()
      des.lineWidth = '5'
      des.strokeStyle = 'blue'
      des.fillStyle = this.a
      des.rect(this.x+10, this.y-70,30,20)
      des.closePath()
      des.stroke()
      des.fill()
  
      //desenhando asa dianteira.
      des.beginPath()
      des.lineWidth = '5'
      des.strokeStyle = 'blue'
      des.fillStyle = this.a
      des.rect(this.x,this.y-80,50,10)
      des.closePath()
      des.stroke()
      des.fill()
  
  
    }
  
    atual_carro() {
      this.x += this.dir;
      if (this.x <= 2) {
        this.x = 2;
      } else if (this.x >= 444) {
        this.x = 444;
      }
    }
  
    point(objeto) {
      if ((objeto.y >= 680)&&(objeto.y <= 690)) {
        return true;
      }else{
        false}
    }
  
    colid(objeto) {
      if ((this.x < objeto.x + objeto.w)&&
          (this.x + this.w > objeto.x)&&
          (this.y < objeto.y + objeto.h)&&
          (this.y + this.h > objeto.y)) {
        return true;
      }
    }
  
  }
  
  class Carro2 extends Carro {
    atual_carro2() {
      this.y += 5;
      if (this.y >= 700) {
        this.recomeca();
      }
    }
  
    recomeca() {
      this.y = -100;
      this.x = Math.floor(Math.random() * (424 - 2 + 1 + 2));
      if (this.y >= 700) {
        this.y = -100;
      }
    }
  }
  
  class Estrada extends obj {
    des_est() {
      des.fillStyle = this.a;
      des.fillRect(this.x, this.y, this.w, this.h);
    }
  
    mov_est() {
      this.y += 2;
      if (this.y >= 790) {
        this.y = -100;
      }
    }
  }
  
  class Text {
    des_text(text, x, y, cor, font) {
      des.fillStyle = cor;
      des.lineWidth = "8";
      des.font = font;
      des.fillText(text, x, y);
    }
  }