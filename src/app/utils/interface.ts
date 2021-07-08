export interface transferInterface {
    valor: number,
    destino: number
}

export interface transferWithDate extends transferInterface {
    data: Date
}