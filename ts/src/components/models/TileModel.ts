import {ResourceType} from "./ResourceModel"

export class Tile {
    type: TileType
    textureVariant: number
    x: string
    y: string
    controllingPlayerId: number = -1

    constructor(x: string, y: string, type?: TileType, textureVariant?: number) {
        this.x = x
        this.y = y
        this.type = type
        this.textureVariant = textureVariant || (type && type.texture) ? Math.floor(Math.random()*this.type.texture.numberOfVariants + 1) : null
    }
}

export class TileType {
    name: string
    color: Color
    cost?: TileResourceCost[]
    description?: string
    texture?: Texture

    constructor(name: string, color: Color, cost?: TileResourceCost[], description?: string, texture?: Texture) {
        this.name = name
        this.color = color
        this.cost = cost
        this.description = description
        this.texture = texture
    }
}

export class TileResourceCost {
    resourceType: ResourceType
    amount: number

    constructor(resourceType: ResourceType, amount: number) {
        this.resourceType = resourceType
        this.amount = amount
    }
}

export class Texture {
    numberOfVariants: number
    name: string
}

export class Color {
    r: number
    g: number
    b: number
    a: number

    constructor(r, g, b, a) {
        this.r = r
        this.g = g
        this.b = b
        this.a = a
    }
}