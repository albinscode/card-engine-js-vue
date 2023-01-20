
interface IZone {
    name: string,
    id: string,
    layout: string,
}

enum ZoneLayouts {
    STACK = "stack", ROW = "row"
}

export type { IZone }
export { ZoneLayouts }
