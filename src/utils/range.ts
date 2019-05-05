export interface IRange {
  lowBound: number
  upBound: number
  includes(n: number): boolean
  extendUpBy(n: number): Range
}

class Range implements IRange {
  public readonly lowBound: number
  public readonly upBound: number
  constructor(lowBound: number, upBound: number) {
    this.lowBound = lowBound
    this.upBound = upBound
  }
  public includes(number: number) {
    return this.lowBound < number && this.upBound > number
  }
  public extendUpBy(n: number) {
    return new Range(this.lowBound, this.upBound + n)
  }
}

export default Range
