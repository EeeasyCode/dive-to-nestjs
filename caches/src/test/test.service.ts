import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  @Cacheable('test', 300)
  getHello(): string {
    return 'Hello World!';
  }
}

function Cacheable(key: string, ttl: number) {
  return function (target: any, _key: string, descriptor: PropertyDescriptor) {
    const methodRef = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      console.log(this); // TestService {}

      // TypeError: Cannot read properties of undefined (reading 'get')
      const value = await this.cache.get(key);
      if (value) {
        return value;
      }

      const result = await methodRef.call(this, ...args);
      await this.cache.set(key, result, ttl);
      console.log(result);
      return result;
    };
  };
}
