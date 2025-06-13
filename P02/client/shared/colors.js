export default class Colors {
    constructor(red=0, green=0, blue=0){
        this.data = new Uint8Array([
            this.sanitize(red),
            this.sanitize(green),
            this.sanitize(blue),            
        ]);
    }

    // Tratamento de dados
    sanitize(c) {
        const val = parseInt(c);
        return isNaN(val) ? 0 : Math.max(0, Math.min(255, val));
    }
    toArray() {
        return [this.colorRed, this.colorGreen, this.colorBlue];
    }

    clone() {
        return new Colors(...this.toArray());
    }

    // Getters das cores bases
    get colorRed(){
        return this.data[0];
    }
    get colorGreen(){
        return this.data[1];
    }
    get colorBlue(){
        return this.data[2];
    }

    // Funções de formatação
    get rgb() {
        return `rgb(${this.colorRed}, ${this.colorGreen}, ${this.colorBlue})`;
    }
    get hexCode() {
        const toHex = (c) => c.toString(16).padStart(2, '0');
        return `#${toHex(this.colorRed)}${toHex(this.colorGreen)}${toHex(this.colorBlue)}`;    
    }

    // Operações
    Blend(other, amount=0.5) {
        const lerp = (a, b, t) => Math.round(a + (b - a) * t);
        return new Colors(
            lerp(this.colorRed, other.colorRed, amount),
            lerp(this.colorGreen, other.colorGreen, amount),
            lerp(this.colorBlue, other.colorBlue, amount),
        );
    }
    Equals(other) {
        return  this.colorRed === other.colorRed &&
                this.colorGreen === other.colorGreen &&
                this.colorBlue === other.colorBlue;
    }

    // Cores padrões
    static get white() { return new Colors(255, 255, 255); }
    static get black() { return new Colors(0, 0, 0); }

    static get red() { return new Colors(255, 0, 0); }
    static get green() { return new Colors(0, 255, 0); }
    static get blue() { return new Colors(0, 0, 255); }

    // Criar nova Cor por hex
    static fromHex(hex = '#000000') {
        const clean = hex.replace('#', '');
        const r = parseInt(clean.substring(0, 2), 16);
        const g = parseInt(clean.substring(2, 4), 16);
        const b = parseInt(clean.substring(4, 6), 16);
        return new Colors(r, g, b);
    }
}