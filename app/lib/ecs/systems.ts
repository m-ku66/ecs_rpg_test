import { System } from "./types";
import { MageComponent } from "./components";
import { ECS } from "./ecs";

export class MagiaRegenerationSystem implements System {
  constructor(private ecs: ECS) {}

  update(deltaTime: number): void {
    // Find all entities with mage components
    const mageEntities = this.ecs.getEntitiesWithComponents("mage");

    // For each mage entity, regenerate magia
    for (const entityId of mageEntities) {
      const mage = this.ecs.getComponent<MageComponent>(entityId, "mage");
      if (mage) {
        // Regenerate magia up to the maximum
        mage.magia = Math.min(mage.maxMagia, mage.magia + mage.magiaRegenRate);
      }
    }
  }
}
