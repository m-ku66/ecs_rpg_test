// An EntityId is just a string that uniquely identifies an entity
export type EntityID = string;

// All components must have a type property for identification
export interface Component {
    type: string; // This is how we know what kind of component it is
}

// Systems process entities with certain components
export interface System {
    update(deltaTime: number): void // called every frame/game tick
}