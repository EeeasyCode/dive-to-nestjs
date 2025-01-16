# NestJS custom-decorator

## Decorator?

데코레이터를 잘 사용하면 횡단 관심사를 분리하여 관점 지향 프로그래밍을 적용한 코드를 작성할 수 있음

AOP(관점 지향 프로그래밍)를 통해서 횡단 관심사들을 모듈화하여 중복 코드를 줄이고, 가독성과 유지보수성을 높일 수 있음

![AOP](https://i.imgur.com/8DhRMRx.png)

우리가 자주 사용하는 Spring의 @Aspect 어노테이션이나 NestJS의 @Interceptor 데코레이터 등이 존재함

Typescript에서는 다양한 데코레이터를 지원함

```ts
declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
declare type ParameterDecorator = (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => void;
```

NestJS는 TypeScript의 Decorator 기능과 Reflect Metadata를 결합하여 NestJS만의 고유한 데코레이터를 제공함. 이 고유한 데코레이터들은 TypeScript의 데코레이터를 확장하고, NestJS 내부의 DI 컨테이너, 라이프사이클 관리, 메타데이터 프로그래밍 등과 통합되어 동작함

따라서, NestJS에서 custom-decorator를 활용하기 위해서는 NestJS의 DI와 메타 프로그래밍 환경 등을 고려해야 함.

만약 NestJS 환경에서 TS의 Decorator만 사용한다면, NestJS의 DI/IOC 컨테이너의 관리를 받지 못해 NestJS 생명주기에 포함되지 못해 생산성이 저하됨

[TS decorators](https://www.typescriptlang.org/ko/docs/handbook/decorators.html)
[NPM reflect-metadata](https://www.npmjs.com/package/reflect-metadata)

## NestJS의 데코레이터 등록 과정

NestJS에서 데코레이터가 등록되는 과정은 크게 세 가지로 나뉨.

"마킹 - 조회 - 등록"

마킹 - SetMetadata라는 함수로 특정 메서드에 CRON 심볼을 메타데이터 키로 등록합니다.
조회 - 모듈이 초기화되는 시점에 DiscoveryServiced와 MetadataScanner로 모든 Provider 클래스를 순회하며 CRON 심볼을 메타데이터로 가지고 있는 메서드들을 찾습니다.
등록 - 메서드를 찾았으면 해당 메서드를 크론 잡으로 등록합니다.

NestJS에서 제공하는 SetMetadata와 DiscoverService, 그리고 MetadataScanner를 사용하면, 특정 클래스나 메서드만 필터링하여 IoC 내 다른 Provider를 사용해 원하는 로직들을 적용할 수 있습니다.
