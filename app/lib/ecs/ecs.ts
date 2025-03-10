import { EntityID, Component, System } from "./types";

export class ECS {
  // Store all entities
  // We use a set because they only store unique values
  // and have easy lookup methods/patterns
  private entities: Set<EntityID> = new Set();

  // Store components by type, then by entity
  // Map<ComponentType, Map<EntityId, Component>>
  // This creates a 2D map where we can quickly look up
  // components by type and entity
  // The inner map allows us to quickly look up components
  // by entity and the outer map allows us to quickly
  // look up components by type
  private components: Map<string, Map<EntityID, Component>> = new Map();

  // Store all systems
  // We can use an array because we just need to iterate
  // over all systems and call their update method
  private systems: System[] = [];

  // Create a new entity and return its ID
  createEntity(): EntityID {
    const id = crypto.randomUUID(); // Generate a unique ID for the entity
    this.entities.add(id);
    return id;
  }

  // Add a component to an entity
  // This is a generic method that accepts any component type T that extends the Component interface
  // It takes an entity ID and a component instance as parameters
  addComponent<T extends Component>(entityId: EntityID, component: T): void {
    // Make sure the entity exists
    if (!this.entities.has(entityId)) {
      throw new Error(`Entity ${entityId} does not exist :/`);
    }

    // Get or create the component type map
    // This looks up the inner Map for this component type from the outer Map
    // If this is the first component of this type being added to any entity, the inner Map won't exist yet
    // In that case, it creates a new Map and stores it in the outer Map under the component's type
    let componentTypeMap = this.components.get(component.type);
    if (!componentTypeMap) {
      componentTypeMap = new Map();
      this.components.set(component.type, componentTypeMap);
    }

    // Add the component to the entity
    componentTypeMap.set(entityId, component);
  }

  // Get a component from an entity
  getComponent<T extends Component>(
    entityId: EntityID,
    componentType: string
  ): T | undefined {
    const componentTypeMap = this.components.get(componentType);
    if (!componentTypeMap) return undefined;

    return componentTypeMap.get(entityId) as T | undefined;
  }

  // Add a system to the ECS
  addSystem(system: System): void {
    this.systems.push(system);
  }

  // Update all systems
  update(deltaTime: number): void {
    for (const system of this.systems) {
      system.update(deltaTime);
    }
  }

  // Find entities that have all the specified component types
  getEntitiesWithComponents(...componentTypes: string[]): EntityID[] {
    // Start with all entities
    let result = [...this.entities];

    // Filter down to entities that have all the required components
    for (const componentType of componentTypes) {
      const componentMap = this.components.get(componentType);
      if (!componentMap) return []; // If any component type isn't found, return empty

      // Keep only entities that have this component
      result = result.filter((entityId) => componentMap.has(entityId));
    }

    return result;
  }
}
