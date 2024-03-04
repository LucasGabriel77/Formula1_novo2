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
  