import Colors from "../shared/colors.js";

export default class Tile{ 
    constructor(type=0) {
        this.type = type
    }

    getColor() {
        switch(this.type) {
            case 1:
                return Colors.green.rgb
                
            case 2:
                return Colors.blue.rgb

            case 3:
                return Colors.red.rgb
                
            case 4:
                return Colors.fromHex("#FFFF00").rgb

            case 5:
                return Colors.fromHex("#00FFFF").rgb
                
            case 6:
                return Colors.fromHex("#FF00FF").rgb

            case 7:
                return Colors.fromHex("FF5500").rgb
                
            case 8:
                return Colors.fromHex("AA00CC").rgb

            default:
                return Colors.black.rgb
        }
    }

}