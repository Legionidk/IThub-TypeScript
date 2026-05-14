export default class ShapeRecord {
    protected _shape: string;
    protected _color: string;

    constructor(shape: string, color: string) {
        this._shape = shape;
        this._color = color;
    }

    get shape() {
        return this._shape;
    }

    get color() {
        return this._color;
    }
}
