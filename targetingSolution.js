class TargetingSolution {
    constructor(coords) {
        this.x = coords.x;
        this.y = coords.y;
        this.z = coords.z;
        this.target = function() {
            return `(${this.x}, ${this.y}, ${this.z})`
        }
    }
}