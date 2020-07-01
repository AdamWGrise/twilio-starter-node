class Materializer {
    constructor(targ) {
        this.target = targ;
        this.activated = false;
        this.activate = function() {
            this.activated = true;
        }
        this.materialize = function() {
            if(this.activated) {
                return this.target;
            }
        }
    }
}