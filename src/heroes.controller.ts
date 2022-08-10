import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class HeroesController {
  @EventPattern('hero.events')
  handleEvent() {
    throw new Error('Some wrong!'); // 2. Throw non-retryable exception
  }
}
