export class LifeLeft {
  leftMercury(input){
    this.remain = Math.round((78.6/.24)-(input/.24));
    this.remain = Math.abs(Math.round((78.6/.24)-(input/.24)));
    console.log(this.remain);
    return this.remain;
  }
  leftVenus(input){
    this.remain = Math.round((78.6/.62)-(input/.62));
    this.remain = Math.abs(Math.round((78.6/.62)-(input/.62)));
    console.log(this.remain);
    return this.remain;
  }
  leftMars(input){
    this.remain = Math.round((78.6/1.88)-(input/1.88));
    this.remain = Math.abs(Math.round((78.6/1.88)-(input/1.88)));
    console.log(this.remain);
    return this.remain;
  }
  leftJupiter(input){
    this.remain = Math.round((78.6/11.86)-(input/11.86));
    this.remain = Math.abs(Math.round((78.6/11.86)-(input/11.86)));
    console.log(this.remain);
    return this.remain;
  }
} 