
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Gemstone
 * 
 */
export type Gemstone = $Result.DefaultSelection<Prisma.$GemstonePayload>
/**
 * Model GemstoneImage
 * 
 */
export type GemstoneImage = $Result.DefaultSelection<Prisma.$GemstoneImagePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model BlacklistedToken
 * 
 */
export type BlacklistedToken = $Result.DefaultSelection<Prisma.$BlacklistedTokenPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartItem
 * 
 */
export type CartItem = $Result.DefaultSelection<Prisma.$CartItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPERUSER: 'SUPERUSER',
  BUYER: 'BUYER',
  SELLER: 'SELLER',
  ADMIN: 'ADMIN',
  ENDORSER: 'ENDORSER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const GEMSTONE_STATUS: {
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  PENDING: 'PENDING',
  SOLD: 'SOLD'
};

export type GEMSTONE_STATUS = (typeof GEMSTONE_STATUS)[keyof typeof GEMSTONE_STATUS]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type GEMSTONE_STATUS = $Enums.GEMSTONE_STATUS

export const GEMSTONE_STATUS: typeof $Enums.GEMSTONE_STATUS

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Gemstones
 * const gemstones = await prisma.gemstone.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Gemstones
   * const gemstones = await prisma.gemstone.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.gemstone`: Exposes CRUD operations for the **Gemstone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gemstones
    * const gemstones = await prisma.gemstone.findMany()
    * ```
    */
  get gemstone(): Prisma.GemstoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gemstoneImage`: Exposes CRUD operations for the **GemstoneImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GemstoneImages
    * const gemstoneImages = await prisma.gemstoneImage.findMany()
    * ```
    */
  get gemstoneImage(): Prisma.GemstoneImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blacklistedToken`: Exposes CRUD operations for the **BlacklistedToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlacklistedTokens
    * const blacklistedTokens = await prisma.blacklistedToken.findMany()
    * ```
    */
  get blacklistedToken(): Prisma.BlacklistedTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **CartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.CartItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Gemstone: 'Gemstone',
    GemstoneImage: 'GemstoneImage',
    Notification: 'Notification',
    User: 'User',
    BlacklistedToken: 'BlacklistedToken',
    Cart: 'Cart',
    CartItem: 'CartItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "gemstone" | "gemstoneImage" | "notification" | "user" | "blacklistedToken" | "cart" | "cartItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Gemstone: {
        payload: Prisma.$GemstonePayload<ExtArgs>
        fields: Prisma.GemstoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GemstoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GemstoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstonePayload>
          }
          findFirst: {
            args: Prisma.GemstoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GemstoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstonePayload>
          }
          findMany: {
            args: Prisma.GemstoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstonePayload>[]
          }
          create: {
            args: Prisma.GemstoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstonePayload>
          }
          createMany: {
            args: Prisma.GemstoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GemstoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstonePayload>[]
          }
          delete: {
            args: Prisma.GemstoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstonePayload>
          }
          update: {
            args: Prisma.GemstoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstonePayload>
          }
          deleteMany: {
            args: Prisma.GemstoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GemstoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GemstoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstonePayload>[]
          }
          upsert: {
            args: Prisma.GemstoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstonePayload>
          }
          aggregate: {
            args: Prisma.GemstoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGemstone>
          }
          groupBy: {
            args: Prisma.GemstoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<GemstoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.GemstoneCountArgs<ExtArgs>
            result: $Utils.Optional<GemstoneCountAggregateOutputType> | number
          }
        }
      }
      GemstoneImage: {
        payload: Prisma.$GemstoneImagePayload<ExtArgs>
        fields: Prisma.GemstoneImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GemstoneImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstoneImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GemstoneImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstoneImagePayload>
          }
          findFirst: {
            args: Prisma.GemstoneImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstoneImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GemstoneImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstoneImagePayload>
          }
          findMany: {
            args: Prisma.GemstoneImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstoneImagePayload>[]
          }
          create: {
            args: Prisma.GemstoneImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstoneImagePayload>
          }
          createMany: {
            args: Prisma.GemstoneImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GemstoneImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstoneImagePayload>[]
          }
          delete: {
            args: Prisma.GemstoneImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstoneImagePayload>
          }
          update: {
            args: Prisma.GemstoneImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstoneImagePayload>
          }
          deleteMany: {
            args: Prisma.GemstoneImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GemstoneImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GemstoneImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstoneImagePayload>[]
          }
          upsert: {
            args: Prisma.GemstoneImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GemstoneImagePayload>
          }
          aggregate: {
            args: Prisma.GemstoneImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGemstoneImage>
          }
          groupBy: {
            args: Prisma.GemstoneImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<GemstoneImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.GemstoneImageCountArgs<ExtArgs>
            result: $Utils.Optional<GemstoneImageCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      BlacklistedToken: {
        payload: Prisma.$BlacklistedTokenPayload<ExtArgs>
        fields: Prisma.BlacklistedTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlacklistedTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlacklistedTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedTokenPayload>
          }
          findFirst: {
            args: Prisma.BlacklistedTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlacklistedTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedTokenPayload>
          }
          findMany: {
            args: Prisma.BlacklistedTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedTokenPayload>[]
          }
          create: {
            args: Prisma.BlacklistedTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedTokenPayload>
          }
          createMany: {
            args: Prisma.BlacklistedTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlacklistedTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedTokenPayload>[]
          }
          delete: {
            args: Prisma.BlacklistedTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedTokenPayload>
          }
          update: {
            args: Prisma.BlacklistedTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedTokenPayload>
          }
          deleteMany: {
            args: Prisma.BlacklistedTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlacklistedTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlacklistedTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedTokenPayload>[]
          }
          upsert: {
            args: Prisma.BlacklistedTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlacklistedTokenPayload>
          }
          aggregate: {
            args: Prisma.BlacklistedTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlacklistedToken>
          }
          groupBy: {
            args: Prisma.BlacklistedTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlacklistedTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlacklistedTokenCountArgs<ExtArgs>
            result: $Utils.Optional<BlacklistedTokenCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartItem: {
        payload: Prisma.$CartItemPayload<ExtArgs>
        fields: Prisma.CartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findFirst: {
            args: Prisma.CartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          findMany: {
            args: Prisma.CartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          create: {
            args: Prisma.CartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          createMany: {
            args: Prisma.CartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          delete: {
            args: Prisma.CartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          update: {
            args: Prisma.CartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          deleteMany: {
            args: Prisma.CartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CartItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>[]
          }
          upsert: {
            args: Prisma.CartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.CartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    gemstone?: GemstoneOmit
    gemstoneImage?: GemstoneImageOmit
    notification?: NotificationOmit
    user?: UserOmit
    blacklistedToken?: BlacklistedTokenOmit
    cart?: CartOmit
    cartItem?: CartItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GemstoneCountOutputType
   */

  export type GemstoneCountOutputType = {
    images: number
    cartItems: number
  }

  export type GemstoneCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | GemstoneCountOutputTypeCountImagesArgs
    cartItems?: boolean | GemstoneCountOutputTypeCountCartItemsArgs
  }

  // Custom InputTypes
  /**
   * GemstoneCountOutputType without action
   */
  export type GemstoneCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneCountOutputType
     */
    select?: GemstoneCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GemstoneCountOutputType without action
   */
  export type GemstoneCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GemstoneImageWhereInput
  }

  /**
   * GemstoneCountOutputType without action
   */
  export type GemstoneCountOutputTypeCountCartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CartCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Gemstone
   */

  export type AggregateGemstone = {
    _count: GemstoneCountAggregateOutputType | null
    _avg: GemstoneAvgAggregateOutputType | null
    _sum: GemstoneSumAggregateOutputType | null
    _min: GemstoneMinAggregateOutputType | null
    _max: GemstoneMaxAggregateOutputType | null
  }

  export type GemstoneAvgAggregateOutputType = {
    id: number | null
    weight: number | null
    price: number | null
    sellerId: number | null
    quantity: number | null
  }

  export type GemstoneSumAggregateOutputType = {
    id: number | null
    weight: number | null
    price: number | null
    sellerId: number | null
    quantity: number | null
  }

  export type GemstoneMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    shape: string | null
    description: string | null
    treatment: string | null
    weight: number | null
    dimension: string | null
    certification: string | null
    color_grade: string | null
    clarity_grade: string | null
    cut_grade: string | null
    polish: string | null
    symmetry: string | null
    fluorescence: string | null
    color: string | null
    transparency: string | null
    color_saturation: string | null
    additional_specification: string | null
    price: number | null
    origin: string | null
    certification_document: string | null
    certificationStatus: boolean | null
    sellerId: number | null
    status: $Enums.GEMSTONE_STATUS | null
    quantity: number | null
    sku: string | null
    allowOffers: boolean | null
    showOnSaleLabel: boolean | null
    chargeForShipping: boolean | null
    isFeatured: boolean | null
    isActive: boolean | null
  }

  export type GemstoneMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    shape: string | null
    description: string | null
    treatment: string | null
    weight: number | null
    dimension: string | null
    certification: string | null
    color_grade: string | null
    clarity_grade: string | null
    cut_grade: string | null
    polish: string | null
    symmetry: string | null
    fluorescence: string | null
    color: string | null
    transparency: string | null
    color_saturation: string | null
    additional_specification: string | null
    price: number | null
    origin: string | null
    certification_document: string | null
    certificationStatus: boolean | null
    sellerId: number | null
    status: $Enums.GEMSTONE_STATUS | null
    quantity: number | null
    sku: string | null
    allowOffers: boolean | null
    showOnSaleLabel: boolean | null
    chargeForShipping: boolean | null
    isFeatured: boolean | null
    isActive: boolean | null
  }

  export type GemstoneCountAggregateOutputType = {
    id: number
    name: number
    type: number
    shape: number
    description: number
    treatment: number
    weight: number
    dimension: number
    certification: number
    color_grade: number
    clarity_grade: number
    cut_grade: number
    polish: number
    symmetry: number
    fluorescence: number
    color: number
    transparency: number
    color_saturation: number
    additional_specification: number
    price: number
    origin: number
    certification_document: number
    certificationStatus: number
    sellerId: number
    status: number
    quantity: number
    sku: number
    allowOffers: number
    showOnSaleLabel: number
    chargeForShipping: number
    isFeatured: number
    isActive: number
    _all: number
  }


  export type GemstoneAvgAggregateInputType = {
    id?: true
    weight?: true
    price?: true
    sellerId?: true
    quantity?: true
  }

  export type GemstoneSumAggregateInputType = {
    id?: true
    weight?: true
    price?: true
    sellerId?: true
    quantity?: true
  }

  export type GemstoneMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    shape?: true
    description?: true
    treatment?: true
    weight?: true
    dimension?: true
    certification?: true
    color_grade?: true
    clarity_grade?: true
    cut_grade?: true
    polish?: true
    symmetry?: true
    fluorescence?: true
    color?: true
    transparency?: true
    color_saturation?: true
    additional_specification?: true
    price?: true
    origin?: true
    certification_document?: true
    certificationStatus?: true
    sellerId?: true
    status?: true
    quantity?: true
    sku?: true
    allowOffers?: true
    showOnSaleLabel?: true
    chargeForShipping?: true
    isFeatured?: true
    isActive?: true
  }

  export type GemstoneMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    shape?: true
    description?: true
    treatment?: true
    weight?: true
    dimension?: true
    certification?: true
    color_grade?: true
    clarity_grade?: true
    cut_grade?: true
    polish?: true
    symmetry?: true
    fluorescence?: true
    color?: true
    transparency?: true
    color_saturation?: true
    additional_specification?: true
    price?: true
    origin?: true
    certification_document?: true
    certificationStatus?: true
    sellerId?: true
    status?: true
    quantity?: true
    sku?: true
    allowOffers?: true
    showOnSaleLabel?: true
    chargeForShipping?: true
    isFeatured?: true
    isActive?: true
  }

  export type GemstoneCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    shape?: true
    description?: true
    treatment?: true
    weight?: true
    dimension?: true
    certification?: true
    color_grade?: true
    clarity_grade?: true
    cut_grade?: true
    polish?: true
    symmetry?: true
    fluorescence?: true
    color?: true
    transparency?: true
    color_saturation?: true
    additional_specification?: true
    price?: true
    origin?: true
    certification_document?: true
    certificationStatus?: true
    sellerId?: true
    status?: true
    quantity?: true
    sku?: true
    allowOffers?: true
    showOnSaleLabel?: true
    chargeForShipping?: true
    isFeatured?: true
    isActive?: true
    _all?: true
  }

  export type GemstoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gemstone to aggregate.
     */
    where?: GemstoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gemstones to fetch.
     */
    orderBy?: GemstoneOrderByWithRelationInput | GemstoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GemstoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gemstones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gemstones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gemstones
    **/
    _count?: true | GemstoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GemstoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GemstoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GemstoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GemstoneMaxAggregateInputType
  }

  export type GetGemstoneAggregateType<T extends GemstoneAggregateArgs> = {
        [P in keyof T & keyof AggregateGemstone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGemstone[P]>
      : GetScalarType<T[P], AggregateGemstone[P]>
  }




  export type GemstoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GemstoneWhereInput
    orderBy?: GemstoneOrderByWithAggregationInput | GemstoneOrderByWithAggregationInput[]
    by: GemstoneScalarFieldEnum[] | GemstoneScalarFieldEnum
    having?: GemstoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GemstoneCountAggregateInputType | true
    _avg?: GemstoneAvgAggregateInputType
    _sum?: GemstoneSumAggregateInputType
    _min?: GemstoneMinAggregateInputType
    _max?: GemstoneMaxAggregateInputType
  }

  export type GemstoneGroupByOutputType = {
    id: number
    name: string
    type: string
    shape: string
    description: string
    treatment: string
    weight: number
    dimension: string
    certification: string
    color_grade: string
    clarity_grade: string
    cut_grade: string
    polish: string
    symmetry: string
    fluorescence: string
    color: string
    transparency: string
    color_saturation: string
    additional_specification: string
    price: number
    origin: string
    certification_document: string
    certificationStatus: boolean
    sellerId: number
    status: $Enums.GEMSTONE_STATUS
    quantity: number
    sku: string
    allowOffers: boolean
    showOnSaleLabel: boolean
    chargeForShipping: boolean
    isFeatured: boolean
    isActive: boolean
    _count: GemstoneCountAggregateOutputType | null
    _avg: GemstoneAvgAggregateOutputType | null
    _sum: GemstoneSumAggregateOutputType | null
    _min: GemstoneMinAggregateOutputType | null
    _max: GemstoneMaxAggregateOutputType | null
  }

  type GetGemstoneGroupByPayload<T extends GemstoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GemstoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GemstoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GemstoneGroupByOutputType[P]>
            : GetScalarType<T[P], GemstoneGroupByOutputType[P]>
        }
      >
    >


  export type GemstoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    shape?: boolean
    description?: boolean
    treatment?: boolean
    weight?: boolean
    dimension?: boolean
    certification?: boolean
    color_grade?: boolean
    clarity_grade?: boolean
    cut_grade?: boolean
    polish?: boolean
    symmetry?: boolean
    fluorescence?: boolean
    color?: boolean
    transparency?: boolean
    color_saturation?: boolean
    additional_specification?: boolean
    price?: boolean
    origin?: boolean
    certification_document?: boolean
    certificationStatus?: boolean
    sellerId?: boolean
    status?: boolean
    quantity?: boolean
    sku?: boolean
    allowOffers?: boolean
    showOnSaleLabel?: boolean
    chargeForShipping?: boolean
    isFeatured?: boolean
    isActive?: boolean
    images?: boolean | Gemstone$imagesArgs<ExtArgs>
    cartItems?: boolean | Gemstone$cartItemsArgs<ExtArgs>
    _count?: boolean | GemstoneCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gemstone"]>

  export type GemstoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    shape?: boolean
    description?: boolean
    treatment?: boolean
    weight?: boolean
    dimension?: boolean
    certification?: boolean
    color_grade?: boolean
    clarity_grade?: boolean
    cut_grade?: boolean
    polish?: boolean
    symmetry?: boolean
    fluorescence?: boolean
    color?: boolean
    transparency?: boolean
    color_saturation?: boolean
    additional_specification?: boolean
    price?: boolean
    origin?: boolean
    certification_document?: boolean
    certificationStatus?: boolean
    sellerId?: boolean
    status?: boolean
    quantity?: boolean
    sku?: boolean
    allowOffers?: boolean
    showOnSaleLabel?: boolean
    chargeForShipping?: boolean
    isFeatured?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["gemstone"]>

  export type GemstoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    shape?: boolean
    description?: boolean
    treatment?: boolean
    weight?: boolean
    dimension?: boolean
    certification?: boolean
    color_grade?: boolean
    clarity_grade?: boolean
    cut_grade?: boolean
    polish?: boolean
    symmetry?: boolean
    fluorescence?: boolean
    color?: boolean
    transparency?: boolean
    color_saturation?: boolean
    additional_specification?: boolean
    price?: boolean
    origin?: boolean
    certification_document?: boolean
    certificationStatus?: boolean
    sellerId?: boolean
    status?: boolean
    quantity?: boolean
    sku?: boolean
    allowOffers?: boolean
    showOnSaleLabel?: boolean
    chargeForShipping?: boolean
    isFeatured?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["gemstone"]>

  export type GemstoneSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    shape?: boolean
    description?: boolean
    treatment?: boolean
    weight?: boolean
    dimension?: boolean
    certification?: boolean
    color_grade?: boolean
    clarity_grade?: boolean
    cut_grade?: boolean
    polish?: boolean
    symmetry?: boolean
    fluorescence?: boolean
    color?: boolean
    transparency?: boolean
    color_saturation?: boolean
    additional_specification?: boolean
    price?: boolean
    origin?: boolean
    certification_document?: boolean
    certificationStatus?: boolean
    sellerId?: boolean
    status?: boolean
    quantity?: boolean
    sku?: boolean
    allowOffers?: boolean
    showOnSaleLabel?: boolean
    chargeForShipping?: boolean
    isFeatured?: boolean
    isActive?: boolean
  }

  export type GemstoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "shape" | "description" | "treatment" | "weight" | "dimension" | "certification" | "color_grade" | "clarity_grade" | "cut_grade" | "polish" | "symmetry" | "fluorescence" | "color" | "transparency" | "color_saturation" | "additional_specification" | "price" | "origin" | "certification_document" | "certificationStatus" | "sellerId" | "status" | "quantity" | "sku" | "allowOffers" | "showOnSaleLabel" | "chargeForShipping" | "isFeatured" | "isActive", ExtArgs["result"]["gemstone"]>
  export type GemstoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Gemstone$imagesArgs<ExtArgs>
    cartItems?: boolean | Gemstone$cartItemsArgs<ExtArgs>
    _count?: boolean | GemstoneCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GemstoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GemstoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GemstonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gemstone"
    objects: {
      images: Prisma.$GemstoneImagePayload<ExtArgs>[]
      cartItems: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      shape: string
      description: string
      treatment: string
      weight: number
      dimension: string
      certification: string
      color_grade: string
      clarity_grade: string
      cut_grade: string
      polish: string
      symmetry: string
      fluorescence: string
      color: string
      transparency: string
      color_saturation: string
      additional_specification: string
      price: number
      origin: string
      certification_document: string
      certificationStatus: boolean
      sellerId: number
      status: $Enums.GEMSTONE_STATUS
      quantity: number
      sku: string
      allowOffers: boolean
      showOnSaleLabel: boolean
      chargeForShipping: boolean
      isFeatured: boolean
      isActive: boolean
    }, ExtArgs["result"]["gemstone"]>
    composites: {}
  }

  type GemstoneGetPayload<S extends boolean | null | undefined | GemstoneDefaultArgs> = $Result.GetResult<Prisma.$GemstonePayload, S>

  type GemstoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GemstoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GemstoneCountAggregateInputType | true
    }

  export interface GemstoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gemstone'], meta: { name: 'Gemstone' } }
    /**
     * Find zero or one Gemstone that matches the filter.
     * @param {GemstoneFindUniqueArgs} args - Arguments to find a Gemstone
     * @example
     * // Get one Gemstone
     * const gemstone = await prisma.gemstone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GemstoneFindUniqueArgs>(args: SelectSubset<T, GemstoneFindUniqueArgs<ExtArgs>>): Prisma__GemstoneClient<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gemstone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GemstoneFindUniqueOrThrowArgs} args - Arguments to find a Gemstone
     * @example
     * // Get one Gemstone
     * const gemstone = await prisma.gemstone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GemstoneFindUniqueOrThrowArgs>(args: SelectSubset<T, GemstoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GemstoneClient<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gemstone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneFindFirstArgs} args - Arguments to find a Gemstone
     * @example
     * // Get one Gemstone
     * const gemstone = await prisma.gemstone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GemstoneFindFirstArgs>(args?: SelectSubset<T, GemstoneFindFirstArgs<ExtArgs>>): Prisma__GemstoneClient<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gemstone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneFindFirstOrThrowArgs} args - Arguments to find a Gemstone
     * @example
     * // Get one Gemstone
     * const gemstone = await prisma.gemstone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GemstoneFindFirstOrThrowArgs>(args?: SelectSubset<T, GemstoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__GemstoneClient<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gemstones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gemstones
     * const gemstones = await prisma.gemstone.findMany()
     * 
     * // Get first 10 Gemstones
     * const gemstones = await prisma.gemstone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gemstoneWithIdOnly = await prisma.gemstone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GemstoneFindManyArgs>(args?: SelectSubset<T, GemstoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gemstone.
     * @param {GemstoneCreateArgs} args - Arguments to create a Gemstone.
     * @example
     * // Create one Gemstone
     * const Gemstone = await prisma.gemstone.create({
     *   data: {
     *     // ... data to create a Gemstone
     *   }
     * })
     * 
     */
    create<T extends GemstoneCreateArgs>(args: SelectSubset<T, GemstoneCreateArgs<ExtArgs>>): Prisma__GemstoneClient<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gemstones.
     * @param {GemstoneCreateManyArgs} args - Arguments to create many Gemstones.
     * @example
     * // Create many Gemstones
     * const gemstone = await prisma.gemstone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GemstoneCreateManyArgs>(args?: SelectSubset<T, GemstoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gemstones and returns the data saved in the database.
     * @param {GemstoneCreateManyAndReturnArgs} args - Arguments to create many Gemstones.
     * @example
     * // Create many Gemstones
     * const gemstone = await prisma.gemstone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gemstones and only return the `id`
     * const gemstoneWithIdOnly = await prisma.gemstone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GemstoneCreateManyAndReturnArgs>(args?: SelectSubset<T, GemstoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gemstone.
     * @param {GemstoneDeleteArgs} args - Arguments to delete one Gemstone.
     * @example
     * // Delete one Gemstone
     * const Gemstone = await prisma.gemstone.delete({
     *   where: {
     *     // ... filter to delete one Gemstone
     *   }
     * })
     * 
     */
    delete<T extends GemstoneDeleteArgs>(args: SelectSubset<T, GemstoneDeleteArgs<ExtArgs>>): Prisma__GemstoneClient<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gemstone.
     * @param {GemstoneUpdateArgs} args - Arguments to update one Gemstone.
     * @example
     * // Update one Gemstone
     * const gemstone = await prisma.gemstone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GemstoneUpdateArgs>(args: SelectSubset<T, GemstoneUpdateArgs<ExtArgs>>): Prisma__GemstoneClient<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gemstones.
     * @param {GemstoneDeleteManyArgs} args - Arguments to filter Gemstones to delete.
     * @example
     * // Delete a few Gemstones
     * const { count } = await prisma.gemstone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GemstoneDeleteManyArgs>(args?: SelectSubset<T, GemstoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gemstones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gemstones
     * const gemstone = await prisma.gemstone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GemstoneUpdateManyArgs>(args: SelectSubset<T, GemstoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gemstones and returns the data updated in the database.
     * @param {GemstoneUpdateManyAndReturnArgs} args - Arguments to update many Gemstones.
     * @example
     * // Update many Gemstones
     * const gemstone = await prisma.gemstone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gemstones and only return the `id`
     * const gemstoneWithIdOnly = await prisma.gemstone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GemstoneUpdateManyAndReturnArgs>(args: SelectSubset<T, GemstoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gemstone.
     * @param {GemstoneUpsertArgs} args - Arguments to update or create a Gemstone.
     * @example
     * // Update or create a Gemstone
     * const gemstone = await prisma.gemstone.upsert({
     *   create: {
     *     // ... data to create a Gemstone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gemstone we want to update
     *   }
     * })
     */
    upsert<T extends GemstoneUpsertArgs>(args: SelectSubset<T, GemstoneUpsertArgs<ExtArgs>>): Prisma__GemstoneClient<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gemstones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneCountArgs} args - Arguments to filter Gemstones to count.
     * @example
     * // Count the number of Gemstones
     * const count = await prisma.gemstone.count({
     *   where: {
     *     // ... the filter for the Gemstones we want to count
     *   }
     * })
    **/
    count<T extends GemstoneCountArgs>(
      args?: Subset<T, GemstoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GemstoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gemstone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GemstoneAggregateArgs>(args: Subset<T, GemstoneAggregateArgs>): Prisma.PrismaPromise<GetGemstoneAggregateType<T>>

    /**
     * Group by Gemstone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GemstoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GemstoneGroupByArgs['orderBy'] }
        : { orderBy?: GemstoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GemstoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGemstoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gemstone model
   */
  readonly fields: GemstoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gemstone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GemstoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Gemstone$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Gemstone$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cartItems<T extends Gemstone$cartItemsArgs<ExtArgs> = {}>(args?: Subset<T, Gemstone$cartItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Gemstone model
   */
  interface GemstoneFieldRefs {
    readonly id: FieldRef<"Gemstone", 'Int'>
    readonly name: FieldRef<"Gemstone", 'String'>
    readonly type: FieldRef<"Gemstone", 'String'>
    readonly shape: FieldRef<"Gemstone", 'String'>
    readonly description: FieldRef<"Gemstone", 'String'>
    readonly treatment: FieldRef<"Gemstone", 'String'>
    readonly weight: FieldRef<"Gemstone", 'Float'>
    readonly dimension: FieldRef<"Gemstone", 'String'>
    readonly certification: FieldRef<"Gemstone", 'String'>
    readonly color_grade: FieldRef<"Gemstone", 'String'>
    readonly clarity_grade: FieldRef<"Gemstone", 'String'>
    readonly cut_grade: FieldRef<"Gemstone", 'String'>
    readonly polish: FieldRef<"Gemstone", 'String'>
    readonly symmetry: FieldRef<"Gemstone", 'String'>
    readonly fluorescence: FieldRef<"Gemstone", 'String'>
    readonly color: FieldRef<"Gemstone", 'String'>
    readonly transparency: FieldRef<"Gemstone", 'String'>
    readonly color_saturation: FieldRef<"Gemstone", 'String'>
    readonly additional_specification: FieldRef<"Gemstone", 'String'>
    readonly price: FieldRef<"Gemstone", 'Float'>
    readonly origin: FieldRef<"Gemstone", 'String'>
    readonly certification_document: FieldRef<"Gemstone", 'String'>
    readonly certificationStatus: FieldRef<"Gemstone", 'Boolean'>
    readonly sellerId: FieldRef<"Gemstone", 'Int'>
    readonly status: FieldRef<"Gemstone", 'GEMSTONE_STATUS'>
    readonly quantity: FieldRef<"Gemstone", 'Int'>
    readonly sku: FieldRef<"Gemstone", 'String'>
    readonly allowOffers: FieldRef<"Gemstone", 'Boolean'>
    readonly showOnSaleLabel: FieldRef<"Gemstone", 'Boolean'>
    readonly chargeForShipping: FieldRef<"Gemstone", 'Boolean'>
    readonly isFeatured: FieldRef<"Gemstone", 'Boolean'>
    readonly isActive: FieldRef<"Gemstone", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Gemstone findUnique
   */
  export type GemstoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneInclude<ExtArgs> | null
    /**
     * Filter, which Gemstone to fetch.
     */
    where: GemstoneWhereUniqueInput
  }

  /**
   * Gemstone findUniqueOrThrow
   */
  export type GemstoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneInclude<ExtArgs> | null
    /**
     * Filter, which Gemstone to fetch.
     */
    where: GemstoneWhereUniqueInput
  }

  /**
   * Gemstone findFirst
   */
  export type GemstoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneInclude<ExtArgs> | null
    /**
     * Filter, which Gemstone to fetch.
     */
    where?: GemstoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gemstones to fetch.
     */
    orderBy?: GemstoneOrderByWithRelationInput | GemstoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gemstones.
     */
    cursor?: GemstoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gemstones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gemstones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gemstones.
     */
    distinct?: GemstoneScalarFieldEnum | GemstoneScalarFieldEnum[]
  }

  /**
   * Gemstone findFirstOrThrow
   */
  export type GemstoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneInclude<ExtArgs> | null
    /**
     * Filter, which Gemstone to fetch.
     */
    where?: GemstoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gemstones to fetch.
     */
    orderBy?: GemstoneOrderByWithRelationInput | GemstoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gemstones.
     */
    cursor?: GemstoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gemstones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gemstones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gemstones.
     */
    distinct?: GemstoneScalarFieldEnum | GemstoneScalarFieldEnum[]
  }

  /**
   * Gemstone findMany
   */
  export type GemstoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneInclude<ExtArgs> | null
    /**
     * Filter, which Gemstones to fetch.
     */
    where?: GemstoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gemstones to fetch.
     */
    orderBy?: GemstoneOrderByWithRelationInput | GemstoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gemstones.
     */
    cursor?: GemstoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gemstones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gemstones.
     */
    skip?: number
    distinct?: GemstoneScalarFieldEnum | GemstoneScalarFieldEnum[]
  }

  /**
   * Gemstone create
   */
  export type GemstoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Gemstone.
     */
    data: XOR<GemstoneCreateInput, GemstoneUncheckedCreateInput>
  }

  /**
   * Gemstone createMany
   */
  export type GemstoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gemstones.
     */
    data: GemstoneCreateManyInput | GemstoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gemstone createManyAndReturn
   */
  export type GemstoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * The data used to create many Gemstones.
     */
    data: GemstoneCreateManyInput | GemstoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Gemstone update
   */
  export type GemstoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Gemstone.
     */
    data: XOR<GemstoneUpdateInput, GemstoneUncheckedUpdateInput>
    /**
     * Choose, which Gemstone to update.
     */
    where: GemstoneWhereUniqueInput
  }

  /**
   * Gemstone updateMany
   */
  export type GemstoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gemstones.
     */
    data: XOR<GemstoneUpdateManyMutationInput, GemstoneUncheckedUpdateManyInput>
    /**
     * Filter which Gemstones to update
     */
    where?: GemstoneWhereInput
    /**
     * Limit how many Gemstones to update.
     */
    limit?: number
  }

  /**
   * Gemstone updateManyAndReturn
   */
  export type GemstoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * The data used to update Gemstones.
     */
    data: XOR<GemstoneUpdateManyMutationInput, GemstoneUncheckedUpdateManyInput>
    /**
     * Filter which Gemstones to update
     */
    where?: GemstoneWhereInput
    /**
     * Limit how many Gemstones to update.
     */
    limit?: number
  }

  /**
   * Gemstone upsert
   */
  export type GemstoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Gemstone to update in case it exists.
     */
    where: GemstoneWhereUniqueInput
    /**
     * In case the Gemstone found by the `where` argument doesn't exist, create a new Gemstone with this data.
     */
    create: XOR<GemstoneCreateInput, GemstoneUncheckedCreateInput>
    /**
     * In case the Gemstone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GemstoneUpdateInput, GemstoneUncheckedUpdateInput>
  }

  /**
   * Gemstone delete
   */
  export type GemstoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneInclude<ExtArgs> | null
    /**
     * Filter which Gemstone to delete.
     */
    where: GemstoneWhereUniqueInput
  }

  /**
   * Gemstone deleteMany
   */
  export type GemstoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gemstones to delete
     */
    where?: GemstoneWhereInput
    /**
     * Limit how many Gemstones to delete.
     */
    limit?: number
  }

  /**
   * Gemstone.images
   */
  export type Gemstone$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageInclude<ExtArgs> | null
    where?: GemstoneImageWhereInput
    orderBy?: GemstoneImageOrderByWithRelationInput | GemstoneImageOrderByWithRelationInput[]
    cursor?: GemstoneImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GemstoneImageScalarFieldEnum | GemstoneImageScalarFieldEnum[]
  }

  /**
   * Gemstone.cartItems
   */
  export type Gemstone$cartItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Gemstone without action
   */
  export type GemstoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gemstone
     */
    select?: GemstoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Gemstone
     */
    omit?: GemstoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneInclude<ExtArgs> | null
  }


  /**
   * Model GemstoneImage
   */

  export type AggregateGemstoneImage = {
    _count: GemstoneImageCountAggregateOutputType | null
    _avg: GemstoneImageAvgAggregateOutputType | null
    _sum: GemstoneImageSumAggregateOutputType | null
    _min: GemstoneImageMinAggregateOutputType | null
    _max: GemstoneImageMaxAggregateOutputType | null
  }

  export type GemstoneImageAvgAggregateOutputType = {
    id: number | null
    gemstoneId: number | null
  }

  export type GemstoneImageSumAggregateOutputType = {
    id: number | null
    gemstoneId: number | null
  }

  export type GemstoneImageMinAggregateOutputType = {
    id: number | null
    url: string | null
    gemstoneId: number | null
  }

  export type GemstoneImageMaxAggregateOutputType = {
    id: number | null
    url: string | null
    gemstoneId: number | null
  }

  export type GemstoneImageCountAggregateOutputType = {
    id: number
    url: number
    gemstoneId: number
    _all: number
  }


  export type GemstoneImageAvgAggregateInputType = {
    id?: true
    gemstoneId?: true
  }

  export type GemstoneImageSumAggregateInputType = {
    id?: true
    gemstoneId?: true
  }

  export type GemstoneImageMinAggregateInputType = {
    id?: true
    url?: true
    gemstoneId?: true
  }

  export type GemstoneImageMaxAggregateInputType = {
    id?: true
    url?: true
    gemstoneId?: true
  }

  export type GemstoneImageCountAggregateInputType = {
    id?: true
    url?: true
    gemstoneId?: true
    _all?: true
  }

  export type GemstoneImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GemstoneImage to aggregate.
     */
    where?: GemstoneImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GemstoneImages to fetch.
     */
    orderBy?: GemstoneImageOrderByWithRelationInput | GemstoneImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GemstoneImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GemstoneImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GemstoneImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GemstoneImages
    **/
    _count?: true | GemstoneImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GemstoneImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GemstoneImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GemstoneImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GemstoneImageMaxAggregateInputType
  }

  export type GetGemstoneImageAggregateType<T extends GemstoneImageAggregateArgs> = {
        [P in keyof T & keyof AggregateGemstoneImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGemstoneImage[P]>
      : GetScalarType<T[P], AggregateGemstoneImage[P]>
  }




  export type GemstoneImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GemstoneImageWhereInput
    orderBy?: GemstoneImageOrderByWithAggregationInput | GemstoneImageOrderByWithAggregationInput[]
    by: GemstoneImageScalarFieldEnum[] | GemstoneImageScalarFieldEnum
    having?: GemstoneImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GemstoneImageCountAggregateInputType | true
    _avg?: GemstoneImageAvgAggregateInputType
    _sum?: GemstoneImageSumAggregateInputType
    _min?: GemstoneImageMinAggregateInputType
    _max?: GemstoneImageMaxAggregateInputType
  }

  export type GemstoneImageGroupByOutputType = {
    id: number
    url: string
    gemstoneId: number
    _count: GemstoneImageCountAggregateOutputType | null
    _avg: GemstoneImageAvgAggregateOutputType | null
    _sum: GemstoneImageSumAggregateOutputType | null
    _min: GemstoneImageMinAggregateOutputType | null
    _max: GemstoneImageMaxAggregateOutputType | null
  }

  type GetGemstoneImageGroupByPayload<T extends GemstoneImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GemstoneImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GemstoneImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GemstoneImageGroupByOutputType[P]>
            : GetScalarType<T[P], GemstoneImageGroupByOutputType[P]>
        }
      >
    >


  export type GemstoneImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    gemstoneId?: boolean
    gemstone?: boolean | GemstoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gemstoneImage"]>

  export type GemstoneImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    gemstoneId?: boolean
    gemstone?: boolean | GemstoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gemstoneImage"]>

  export type GemstoneImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    gemstoneId?: boolean
    gemstone?: boolean | GemstoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gemstoneImage"]>

  export type GemstoneImageSelectScalar = {
    id?: boolean
    url?: boolean
    gemstoneId?: boolean
  }

  export type GemstoneImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "gemstoneId", ExtArgs["result"]["gemstoneImage"]>
  export type GemstoneImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gemstone?: boolean | GemstoneDefaultArgs<ExtArgs>
  }
  export type GemstoneImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gemstone?: boolean | GemstoneDefaultArgs<ExtArgs>
  }
  export type GemstoneImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gemstone?: boolean | GemstoneDefaultArgs<ExtArgs>
  }

  export type $GemstoneImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GemstoneImage"
    objects: {
      gemstone: Prisma.$GemstonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      gemstoneId: number
    }, ExtArgs["result"]["gemstoneImage"]>
    composites: {}
  }

  type GemstoneImageGetPayload<S extends boolean | null | undefined | GemstoneImageDefaultArgs> = $Result.GetResult<Prisma.$GemstoneImagePayload, S>

  type GemstoneImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GemstoneImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GemstoneImageCountAggregateInputType | true
    }

  export interface GemstoneImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GemstoneImage'], meta: { name: 'GemstoneImage' } }
    /**
     * Find zero or one GemstoneImage that matches the filter.
     * @param {GemstoneImageFindUniqueArgs} args - Arguments to find a GemstoneImage
     * @example
     * // Get one GemstoneImage
     * const gemstoneImage = await prisma.gemstoneImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GemstoneImageFindUniqueArgs>(args: SelectSubset<T, GemstoneImageFindUniqueArgs<ExtArgs>>): Prisma__GemstoneImageClient<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GemstoneImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GemstoneImageFindUniqueOrThrowArgs} args - Arguments to find a GemstoneImage
     * @example
     * // Get one GemstoneImage
     * const gemstoneImage = await prisma.gemstoneImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GemstoneImageFindUniqueOrThrowArgs>(args: SelectSubset<T, GemstoneImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GemstoneImageClient<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GemstoneImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneImageFindFirstArgs} args - Arguments to find a GemstoneImage
     * @example
     * // Get one GemstoneImage
     * const gemstoneImage = await prisma.gemstoneImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GemstoneImageFindFirstArgs>(args?: SelectSubset<T, GemstoneImageFindFirstArgs<ExtArgs>>): Prisma__GemstoneImageClient<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GemstoneImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneImageFindFirstOrThrowArgs} args - Arguments to find a GemstoneImage
     * @example
     * // Get one GemstoneImage
     * const gemstoneImage = await prisma.gemstoneImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GemstoneImageFindFirstOrThrowArgs>(args?: SelectSubset<T, GemstoneImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__GemstoneImageClient<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GemstoneImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GemstoneImages
     * const gemstoneImages = await prisma.gemstoneImage.findMany()
     * 
     * // Get first 10 GemstoneImages
     * const gemstoneImages = await prisma.gemstoneImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gemstoneImageWithIdOnly = await prisma.gemstoneImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GemstoneImageFindManyArgs>(args?: SelectSubset<T, GemstoneImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GemstoneImage.
     * @param {GemstoneImageCreateArgs} args - Arguments to create a GemstoneImage.
     * @example
     * // Create one GemstoneImage
     * const GemstoneImage = await prisma.gemstoneImage.create({
     *   data: {
     *     // ... data to create a GemstoneImage
     *   }
     * })
     * 
     */
    create<T extends GemstoneImageCreateArgs>(args: SelectSubset<T, GemstoneImageCreateArgs<ExtArgs>>): Prisma__GemstoneImageClient<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GemstoneImages.
     * @param {GemstoneImageCreateManyArgs} args - Arguments to create many GemstoneImages.
     * @example
     * // Create many GemstoneImages
     * const gemstoneImage = await prisma.gemstoneImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GemstoneImageCreateManyArgs>(args?: SelectSubset<T, GemstoneImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GemstoneImages and returns the data saved in the database.
     * @param {GemstoneImageCreateManyAndReturnArgs} args - Arguments to create many GemstoneImages.
     * @example
     * // Create many GemstoneImages
     * const gemstoneImage = await prisma.gemstoneImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GemstoneImages and only return the `id`
     * const gemstoneImageWithIdOnly = await prisma.gemstoneImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GemstoneImageCreateManyAndReturnArgs>(args?: SelectSubset<T, GemstoneImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GemstoneImage.
     * @param {GemstoneImageDeleteArgs} args - Arguments to delete one GemstoneImage.
     * @example
     * // Delete one GemstoneImage
     * const GemstoneImage = await prisma.gemstoneImage.delete({
     *   where: {
     *     // ... filter to delete one GemstoneImage
     *   }
     * })
     * 
     */
    delete<T extends GemstoneImageDeleteArgs>(args: SelectSubset<T, GemstoneImageDeleteArgs<ExtArgs>>): Prisma__GemstoneImageClient<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GemstoneImage.
     * @param {GemstoneImageUpdateArgs} args - Arguments to update one GemstoneImage.
     * @example
     * // Update one GemstoneImage
     * const gemstoneImage = await prisma.gemstoneImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GemstoneImageUpdateArgs>(args: SelectSubset<T, GemstoneImageUpdateArgs<ExtArgs>>): Prisma__GemstoneImageClient<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GemstoneImages.
     * @param {GemstoneImageDeleteManyArgs} args - Arguments to filter GemstoneImages to delete.
     * @example
     * // Delete a few GemstoneImages
     * const { count } = await prisma.gemstoneImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GemstoneImageDeleteManyArgs>(args?: SelectSubset<T, GemstoneImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GemstoneImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GemstoneImages
     * const gemstoneImage = await prisma.gemstoneImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GemstoneImageUpdateManyArgs>(args: SelectSubset<T, GemstoneImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GemstoneImages and returns the data updated in the database.
     * @param {GemstoneImageUpdateManyAndReturnArgs} args - Arguments to update many GemstoneImages.
     * @example
     * // Update many GemstoneImages
     * const gemstoneImage = await prisma.gemstoneImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GemstoneImages and only return the `id`
     * const gemstoneImageWithIdOnly = await prisma.gemstoneImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GemstoneImageUpdateManyAndReturnArgs>(args: SelectSubset<T, GemstoneImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GemstoneImage.
     * @param {GemstoneImageUpsertArgs} args - Arguments to update or create a GemstoneImage.
     * @example
     * // Update or create a GemstoneImage
     * const gemstoneImage = await prisma.gemstoneImage.upsert({
     *   create: {
     *     // ... data to create a GemstoneImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GemstoneImage we want to update
     *   }
     * })
     */
    upsert<T extends GemstoneImageUpsertArgs>(args: SelectSubset<T, GemstoneImageUpsertArgs<ExtArgs>>): Prisma__GemstoneImageClient<$Result.GetResult<Prisma.$GemstoneImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GemstoneImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneImageCountArgs} args - Arguments to filter GemstoneImages to count.
     * @example
     * // Count the number of GemstoneImages
     * const count = await prisma.gemstoneImage.count({
     *   where: {
     *     // ... the filter for the GemstoneImages we want to count
     *   }
     * })
    **/
    count<T extends GemstoneImageCountArgs>(
      args?: Subset<T, GemstoneImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GemstoneImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GemstoneImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GemstoneImageAggregateArgs>(args: Subset<T, GemstoneImageAggregateArgs>): Prisma.PrismaPromise<GetGemstoneImageAggregateType<T>>

    /**
     * Group by GemstoneImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GemstoneImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GemstoneImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GemstoneImageGroupByArgs['orderBy'] }
        : { orderBy?: GemstoneImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GemstoneImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGemstoneImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GemstoneImage model
   */
  readonly fields: GemstoneImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GemstoneImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GemstoneImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gemstone<T extends GemstoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GemstoneDefaultArgs<ExtArgs>>): Prisma__GemstoneClient<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GemstoneImage model
   */
  interface GemstoneImageFieldRefs {
    readonly id: FieldRef<"GemstoneImage", 'Int'>
    readonly url: FieldRef<"GemstoneImage", 'String'>
    readonly gemstoneId: FieldRef<"GemstoneImage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GemstoneImage findUnique
   */
  export type GemstoneImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageInclude<ExtArgs> | null
    /**
     * Filter, which GemstoneImage to fetch.
     */
    where: GemstoneImageWhereUniqueInput
  }

  /**
   * GemstoneImage findUniqueOrThrow
   */
  export type GemstoneImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageInclude<ExtArgs> | null
    /**
     * Filter, which GemstoneImage to fetch.
     */
    where: GemstoneImageWhereUniqueInput
  }

  /**
   * GemstoneImage findFirst
   */
  export type GemstoneImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageInclude<ExtArgs> | null
    /**
     * Filter, which GemstoneImage to fetch.
     */
    where?: GemstoneImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GemstoneImages to fetch.
     */
    orderBy?: GemstoneImageOrderByWithRelationInput | GemstoneImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GemstoneImages.
     */
    cursor?: GemstoneImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GemstoneImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GemstoneImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GemstoneImages.
     */
    distinct?: GemstoneImageScalarFieldEnum | GemstoneImageScalarFieldEnum[]
  }

  /**
   * GemstoneImage findFirstOrThrow
   */
  export type GemstoneImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageInclude<ExtArgs> | null
    /**
     * Filter, which GemstoneImage to fetch.
     */
    where?: GemstoneImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GemstoneImages to fetch.
     */
    orderBy?: GemstoneImageOrderByWithRelationInput | GemstoneImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GemstoneImages.
     */
    cursor?: GemstoneImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GemstoneImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GemstoneImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GemstoneImages.
     */
    distinct?: GemstoneImageScalarFieldEnum | GemstoneImageScalarFieldEnum[]
  }

  /**
   * GemstoneImage findMany
   */
  export type GemstoneImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageInclude<ExtArgs> | null
    /**
     * Filter, which GemstoneImages to fetch.
     */
    where?: GemstoneImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GemstoneImages to fetch.
     */
    orderBy?: GemstoneImageOrderByWithRelationInput | GemstoneImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GemstoneImages.
     */
    cursor?: GemstoneImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GemstoneImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GemstoneImages.
     */
    skip?: number
    distinct?: GemstoneImageScalarFieldEnum | GemstoneImageScalarFieldEnum[]
  }

  /**
   * GemstoneImage create
   */
  export type GemstoneImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageInclude<ExtArgs> | null
    /**
     * The data needed to create a GemstoneImage.
     */
    data: XOR<GemstoneImageCreateInput, GemstoneImageUncheckedCreateInput>
  }

  /**
   * GemstoneImage createMany
   */
  export type GemstoneImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GemstoneImages.
     */
    data: GemstoneImageCreateManyInput | GemstoneImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GemstoneImage createManyAndReturn
   */
  export type GemstoneImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * The data used to create many GemstoneImages.
     */
    data: GemstoneImageCreateManyInput | GemstoneImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GemstoneImage update
   */
  export type GemstoneImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageInclude<ExtArgs> | null
    /**
     * The data needed to update a GemstoneImage.
     */
    data: XOR<GemstoneImageUpdateInput, GemstoneImageUncheckedUpdateInput>
    /**
     * Choose, which GemstoneImage to update.
     */
    where: GemstoneImageWhereUniqueInput
  }

  /**
   * GemstoneImage updateMany
   */
  export type GemstoneImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GemstoneImages.
     */
    data: XOR<GemstoneImageUpdateManyMutationInput, GemstoneImageUncheckedUpdateManyInput>
    /**
     * Filter which GemstoneImages to update
     */
    where?: GemstoneImageWhereInput
    /**
     * Limit how many GemstoneImages to update.
     */
    limit?: number
  }

  /**
   * GemstoneImage updateManyAndReturn
   */
  export type GemstoneImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * The data used to update GemstoneImages.
     */
    data: XOR<GemstoneImageUpdateManyMutationInput, GemstoneImageUncheckedUpdateManyInput>
    /**
     * Filter which GemstoneImages to update
     */
    where?: GemstoneImageWhereInput
    /**
     * Limit how many GemstoneImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GemstoneImage upsert
   */
  export type GemstoneImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageInclude<ExtArgs> | null
    /**
     * The filter to search for the GemstoneImage to update in case it exists.
     */
    where: GemstoneImageWhereUniqueInput
    /**
     * In case the GemstoneImage found by the `where` argument doesn't exist, create a new GemstoneImage with this data.
     */
    create: XOR<GemstoneImageCreateInput, GemstoneImageUncheckedCreateInput>
    /**
     * In case the GemstoneImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GemstoneImageUpdateInput, GemstoneImageUncheckedUpdateInput>
  }

  /**
   * GemstoneImage delete
   */
  export type GemstoneImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageInclude<ExtArgs> | null
    /**
     * Filter which GemstoneImage to delete.
     */
    where: GemstoneImageWhereUniqueInput
  }

  /**
   * GemstoneImage deleteMany
   */
  export type GemstoneImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GemstoneImages to delete
     */
    where?: GemstoneImageWhereInput
    /**
     * Limit how many GemstoneImages to delete.
     */
    limit?: number
  }

  /**
   * GemstoneImage without action
   */
  export type GemstoneImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GemstoneImage
     */
    select?: GemstoneImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GemstoneImage
     */
    omit?: GemstoneImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GemstoneImageInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: string | null
    message: string | null
    createdAt: Date | null
    isRead: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    message: string | null
    createdAt: Date | null
    isRead: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    createdAt: number
    isRead: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    isRead?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    isRead?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    createdAt?: true
    isRead?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: string
    message: string
    createdAt: Date
    isRead: boolean
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    isRead?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    isRead?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    isRead?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    createdAt?: boolean
    isRead?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "createdAt" | "isRead", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      message: string
      createdAt: Date
      isRead: boolean
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    picture: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    picture: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    picture: number
    role: number
    createdAt: number
    isActive: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    picture?: true
    role?: true
    createdAt?: true
    isActive?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    picture?: true
    role?: true
    createdAt?: true
    isActive?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    picture?: true
    role?: true
    createdAt?: true
    isActive?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string | null
    lastName: string | null
    email: string
    password: string
    picture: string | null
    role: $Enums.Role
    createdAt: Date
    isActive: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    role?: boolean
    createdAt?: boolean
    isActive?: boolean
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    role?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    role?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    picture?: boolean
    role?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "picture" | "role" | "createdAt" | "isActive", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string | null
      lastName: string | null
      email: string
      password: string
      picture: string | null
      role: $Enums.Role
      createdAt: Date
      isActive: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly picture: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model BlacklistedToken
   */

  export type AggregateBlacklistedToken = {
    _count: BlacklistedTokenCountAggregateOutputType | null
    _min: BlacklistedTokenMinAggregateOutputType | null
    _max: BlacklistedTokenMaxAggregateOutputType | null
  }

  export type BlacklistedTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    createdAt: Date | null
  }

  export type BlacklistedTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    createdAt: Date | null
  }

  export type BlacklistedTokenCountAggregateOutputType = {
    id: number
    token: number
    createdAt: number
    _all: number
  }


  export type BlacklistedTokenMinAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
  }

  export type BlacklistedTokenMaxAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
  }

  export type BlacklistedTokenCountAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    _all?: true
  }

  export type BlacklistedTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlacklistedToken to aggregate.
     */
    where?: BlacklistedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistedTokens to fetch.
     */
    orderBy?: BlacklistedTokenOrderByWithRelationInput | BlacklistedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlacklistedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlacklistedTokens
    **/
    _count?: true | BlacklistedTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlacklistedTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlacklistedTokenMaxAggregateInputType
  }

  export type GetBlacklistedTokenAggregateType<T extends BlacklistedTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateBlacklistedToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlacklistedToken[P]>
      : GetScalarType<T[P], AggregateBlacklistedToken[P]>
  }




  export type BlacklistedTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlacklistedTokenWhereInput
    orderBy?: BlacklistedTokenOrderByWithAggregationInput | BlacklistedTokenOrderByWithAggregationInput[]
    by: BlacklistedTokenScalarFieldEnum[] | BlacklistedTokenScalarFieldEnum
    having?: BlacklistedTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlacklistedTokenCountAggregateInputType | true
    _min?: BlacklistedTokenMinAggregateInputType
    _max?: BlacklistedTokenMaxAggregateInputType
  }

  export type BlacklistedTokenGroupByOutputType = {
    id: string
    token: string
    createdAt: Date
    _count: BlacklistedTokenCountAggregateOutputType | null
    _min: BlacklistedTokenMinAggregateOutputType | null
    _max: BlacklistedTokenMaxAggregateOutputType | null
  }

  type GetBlacklistedTokenGroupByPayload<T extends BlacklistedTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlacklistedTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlacklistedTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlacklistedTokenGroupByOutputType[P]>
            : GetScalarType<T[P], BlacklistedTokenGroupByOutputType[P]>
        }
      >
    >


  export type BlacklistedTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blacklistedToken"]>

  export type BlacklistedTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blacklistedToken"]>

  export type BlacklistedTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["blacklistedToken"]>

  export type BlacklistedTokenSelectScalar = {
    id?: boolean
    token?: boolean
    createdAt?: boolean
  }

  export type BlacklistedTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "createdAt", ExtArgs["result"]["blacklistedToken"]>

  export type $BlacklistedTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlacklistedToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      createdAt: Date
    }, ExtArgs["result"]["blacklistedToken"]>
    composites: {}
  }

  type BlacklistedTokenGetPayload<S extends boolean | null | undefined | BlacklistedTokenDefaultArgs> = $Result.GetResult<Prisma.$BlacklistedTokenPayload, S>

  type BlacklistedTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlacklistedTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlacklistedTokenCountAggregateInputType | true
    }

  export interface BlacklistedTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlacklistedToken'], meta: { name: 'BlacklistedToken' } }
    /**
     * Find zero or one BlacklistedToken that matches the filter.
     * @param {BlacklistedTokenFindUniqueArgs} args - Arguments to find a BlacklistedToken
     * @example
     * // Get one BlacklistedToken
     * const blacklistedToken = await prisma.blacklistedToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlacklistedTokenFindUniqueArgs>(args: SelectSubset<T, BlacklistedTokenFindUniqueArgs<ExtArgs>>): Prisma__BlacklistedTokenClient<$Result.GetResult<Prisma.$BlacklistedTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BlacklistedToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlacklistedTokenFindUniqueOrThrowArgs} args - Arguments to find a BlacklistedToken
     * @example
     * // Get one BlacklistedToken
     * const blacklistedToken = await prisma.blacklistedToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlacklistedTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, BlacklistedTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlacklistedTokenClient<$Result.GetResult<Prisma.$BlacklistedTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlacklistedToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedTokenFindFirstArgs} args - Arguments to find a BlacklistedToken
     * @example
     * // Get one BlacklistedToken
     * const blacklistedToken = await prisma.blacklistedToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlacklistedTokenFindFirstArgs>(args?: SelectSubset<T, BlacklistedTokenFindFirstArgs<ExtArgs>>): Prisma__BlacklistedTokenClient<$Result.GetResult<Prisma.$BlacklistedTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BlacklistedToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedTokenFindFirstOrThrowArgs} args - Arguments to find a BlacklistedToken
     * @example
     * // Get one BlacklistedToken
     * const blacklistedToken = await prisma.blacklistedToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlacklistedTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, BlacklistedTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlacklistedTokenClient<$Result.GetResult<Prisma.$BlacklistedTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BlacklistedTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlacklistedTokens
     * const blacklistedTokens = await prisma.blacklistedToken.findMany()
     * 
     * // Get first 10 BlacklistedTokens
     * const blacklistedTokens = await prisma.blacklistedToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blacklistedTokenWithIdOnly = await prisma.blacklistedToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlacklistedTokenFindManyArgs>(args?: SelectSubset<T, BlacklistedTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistedTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BlacklistedToken.
     * @param {BlacklistedTokenCreateArgs} args - Arguments to create a BlacklistedToken.
     * @example
     * // Create one BlacklistedToken
     * const BlacklistedToken = await prisma.blacklistedToken.create({
     *   data: {
     *     // ... data to create a BlacklistedToken
     *   }
     * })
     * 
     */
    create<T extends BlacklistedTokenCreateArgs>(args: SelectSubset<T, BlacklistedTokenCreateArgs<ExtArgs>>): Prisma__BlacklistedTokenClient<$Result.GetResult<Prisma.$BlacklistedTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BlacklistedTokens.
     * @param {BlacklistedTokenCreateManyArgs} args - Arguments to create many BlacklistedTokens.
     * @example
     * // Create many BlacklistedTokens
     * const blacklistedToken = await prisma.blacklistedToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlacklistedTokenCreateManyArgs>(args?: SelectSubset<T, BlacklistedTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlacklistedTokens and returns the data saved in the database.
     * @param {BlacklistedTokenCreateManyAndReturnArgs} args - Arguments to create many BlacklistedTokens.
     * @example
     * // Create many BlacklistedTokens
     * const blacklistedToken = await prisma.blacklistedToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlacklistedTokens and only return the `id`
     * const blacklistedTokenWithIdOnly = await prisma.blacklistedToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlacklistedTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, BlacklistedTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistedTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BlacklistedToken.
     * @param {BlacklistedTokenDeleteArgs} args - Arguments to delete one BlacklistedToken.
     * @example
     * // Delete one BlacklistedToken
     * const BlacklistedToken = await prisma.blacklistedToken.delete({
     *   where: {
     *     // ... filter to delete one BlacklistedToken
     *   }
     * })
     * 
     */
    delete<T extends BlacklistedTokenDeleteArgs>(args: SelectSubset<T, BlacklistedTokenDeleteArgs<ExtArgs>>): Prisma__BlacklistedTokenClient<$Result.GetResult<Prisma.$BlacklistedTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BlacklistedToken.
     * @param {BlacklistedTokenUpdateArgs} args - Arguments to update one BlacklistedToken.
     * @example
     * // Update one BlacklistedToken
     * const blacklistedToken = await prisma.blacklistedToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlacklistedTokenUpdateArgs>(args: SelectSubset<T, BlacklistedTokenUpdateArgs<ExtArgs>>): Prisma__BlacklistedTokenClient<$Result.GetResult<Prisma.$BlacklistedTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BlacklistedTokens.
     * @param {BlacklistedTokenDeleteManyArgs} args - Arguments to filter BlacklistedTokens to delete.
     * @example
     * // Delete a few BlacklistedTokens
     * const { count } = await prisma.blacklistedToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlacklistedTokenDeleteManyArgs>(args?: SelectSubset<T, BlacklistedTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlacklistedTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlacklistedTokens
     * const blacklistedToken = await prisma.blacklistedToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlacklistedTokenUpdateManyArgs>(args: SelectSubset<T, BlacklistedTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlacklistedTokens and returns the data updated in the database.
     * @param {BlacklistedTokenUpdateManyAndReturnArgs} args - Arguments to update many BlacklistedTokens.
     * @example
     * // Update many BlacklistedTokens
     * const blacklistedToken = await prisma.blacklistedToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BlacklistedTokens and only return the `id`
     * const blacklistedTokenWithIdOnly = await prisma.blacklistedToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlacklistedTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, BlacklistedTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlacklistedTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BlacklistedToken.
     * @param {BlacklistedTokenUpsertArgs} args - Arguments to update or create a BlacklistedToken.
     * @example
     * // Update or create a BlacklistedToken
     * const blacklistedToken = await prisma.blacklistedToken.upsert({
     *   create: {
     *     // ... data to create a BlacklistedToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlacklistedToken we want to update
     *   }
     * })
     */
    upsert<T extends BlacklistedTokenUpsertArgs>(args: SelectSubset<T, BlacklistedTokenUpsertArgs<ExtArgs>>): Prisma__BlacklistedTokenClient<$Result.GetResult<Prisma.$BlacklistedTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BlacklistedTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedTokenCountArgs} args - Arguments to filter BlacklistedTokens to count.
     * @example
     * // Count the number of BlacklistedTokens
     * const count = await prisma.blacklistedToken.count({
     *   where: {
     *     // ... the filter for the BlacklistedTokens we want to count
     *   }
     * })
    **/
    count<T extends BlacklistedTokenCountArgs>(
      args?: Subset<T, BlacklistedTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlacklistedTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlacklistedToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlacklistedTokenAggregateArgs>(args: Subset<T, BlacklistedTokenAggregateArgs>): Prisma.PrismaPromise<GetBlacklistedTokenAggregateType<T>>

    /**
     * Group by BlacklistedToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlacklistedTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlacklistedTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlacklistedTokenGroupByArgs['orderBy'] }
        : { orderBy?: BlacklistedTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlacklistedTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlacklistedTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlacklistedToken model
   */
  readonly fields: BlacklistedTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlacklistedToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlacklistedTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BlacklistedToken model
   */
  interface BlacklistedTokenFieldRefs {
    readonly id: FieldRef<"BlacklistedToken", 'String'>
    readonly token: FieldRef<"BlacklistedToken", 'String'>
    readonly createdAt: FieldRef<"BlacklistedToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlacklistedToken findUnique
   */
  export type BlacklistedTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistedToken to fetch.
     */
    where: BlacklistedTokenWhereUniqueInput
  }

  /**
   * BlacklistedToken findUniqueOrThrow
   */
  export type BlacklistedTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistedToken to fetch.
     */
    where: BlacklistedTokenWhereUniqueInput
  }

  /**
   * BlacklistedToken findFirst
   */
  export type BlacklistedTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistedToken to fetch.
     */
    where?: BlacklistedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistedTokens to fetch.
     */
    orderBy?: BlacklistedTokenOrderByWithRelationInput | BlacklistedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlacklistedTokens.
     */
    cursor?: BlacklistedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlacklistedTokens.
     */
    distinct?: BlacklistedTokenScalarFieldEnum | BlacklistedTokenScalarFieldEnum[]
  }

  /**
   * BlacklistedToken findFirstOrThrow
   */
  export type BlacklistedTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistedToken to fetch.
     */
    where?: BlacklistedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistedTokens to fetch.
     */
    orderBy?: BlacklistedTokenOrderByWithRelationInput | BlacklistedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlacklistedTokens.
     */
    cursor?: BlacklistedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistedTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlacklistedTokens.
     */
    distinct?: BlacklistedTokenScalarFieldEnum | BlacklistedTokenScalarFieldEnum[]
  }

  /**
   * BlacklistedToken findMany
   */
  export type BlacklistedTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
    /**
     * Filter, which BlacklistedTokens to fetch.
     */
    where?: BlacklistedTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlacklistedTokens to fetch.
     */
    orderBy?: BlacklistedTokenOrderByWithRelationInput | BlacklistedTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlacklistedTokens.
     */
    cursor?: BlacklistedTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlacklistedTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlacklistedTokens.
     */
    skip?: number
    distinct?: BlacklistedTokenScalarFieldEnum | BlacklistedTokenScalarFieldEnum[]
  }

  /**
   * BlacklistedToken create
   */
  export type BlacklistedTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a BlacklistedToken.
     */
    data: XOR<BlacklistedTokenCreateInput, BlacklistedTokenUncheckedCreateInput>
  }

  /**
   * BlacklistedToken createMany
   */
  export type BlacklistedTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlacklistedTokens.
     */
    data: BlacklistedTokenCreateManyInput | BlacklistedTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlacklistedToken createManyAndReturn
   */
  export type BlacklistedTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
    /**
     * The data used to create many BlacklistedTokens.
     */
    data: BlacklistedTokenCreateManyInput | BlacklistedTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlacklistedToken update
   */
  export type BlacklistedTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a BlacklistedToken.
     */
    data: XOR<BlacklistedTokenUpdateInput, BlacklistedTokenUncheckedUpdateInput>
    /**
     * Choose, which BlacklistedToken to update.
     */
    where: BlacklistedTokenWhereUniqueInput
  }

  /**
   * BlacklistedToken updateMany
   */
  export type BlacklistedTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlacklistedTokens.
     */
    data: XOR<BlacklistedTokenUpdateManyMutationInput, BlacklistedTokenUncheckedUpdateManyInput>
    /**
     * Filter which BlacklistedTokens to update
     */
    where?: BlacklistedTokenWhereInput
    /**
     * Limit how many BlacklistedTokens to update.
     */
    limit?: number
  }

  /**
   * BlacklistedToken updateManyAndReturn
   */
  export type BlacklistedTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
    /**
     * The data used to update BlacklistedTokens.
     */
    data: XOR<BlacklistedTokenUpdateManyMutationInput, BlacklistedTokenUncheckedUpdateManyInput>
    /**
     * Filter which BlacklistedTokens to update
     */
    where?: BlacklistedTokenWhereInput
    /**
     * Limit how many BlacklistedTokens to update.
     */
    limit?: number
  }

  /**
   * BlacklistedToken upsert
   */
  export type BlacklistedTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the BlacklistedToken to update in case it exists.
     */
    where: BlacklistedTokenWhereUniqueInput
    /**
     * In case the BlacklistedToken found by the `where` argument doesn't exist, create a new BlacklistedToken with this data.
     */
    create: XOR<BlacklistedTokenCreateInput, BlacklistedTokenUncheckedCreateInput>
    /**
     * In case the BlacklistedToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlacklistedTokenUpdateInput, BlacklistedTokenUncheckedUpdateInput>
  }

  /**
   * BlacklistedToken delete
   */
  export type BlacklistedTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
    /**
     * Filter which BlacklistedToken to delete.
     */
    where: BlacklistedTokenWhereUniqueInput
  }

  /**
   * BlacklistedToken deleteMany
   */
  export type BlacklistedTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlacklistedTokens to delete
     */
    where?: BlacklistedTokenWhereInput
    /**
     * Limit how many BlacklistedTokens to delete.
     */
    limit?: number
  }

  /**
   * BlacklistedToken without action
   */
  export type BlacklistedTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlacklistedToken
     */
    select?: BlacklistedTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BlacklistedToken
     */
    omit?: BlacklistedTokenOmit<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CartMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type CartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cart"]>

  export type CartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cart"]>

  export type CartSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Cart$itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      items: Prisma.$CartItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {CartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartCreateManyAndReturnArgs>(args?: SelectSubset<T, CartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {CartUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartWithIdOnly = await prisma.cart.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartUpdateManyAndReturnArgs>(args: SelectSubset<T, CartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Cart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'String'>
    readonly userId: FieldRef<"Cart", 'String'>
    readonly createdAt: FieldRef<"Cart", 'DateTime'>
    readonly updatedAt: FieldRef<"Cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart createManyAndReturn
   */
  export type CartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart updateManyAndReturn
   */
  export type CartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.items
   */
  export type Cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    cursor?: CartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type CartItemSumAggregateOutputType = {
    productId: number | null
    quantity: number | null
    price: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: string | null
    cartId: string | null
    productId: number | null
    quantity: number | null
    price: number | null
    color: string | null
    size: string | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: string | null
    cartId: string | null
    productId: number | null
    quantity: number | null
    price: number | null
    color: string | null
    size: string | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    cartId: number
    productId: number
    quantity: number
    price: number
    color: number
    size: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    productId?: true
    quantity?: true
    price?: true
  }

  export type CartItemSumAggregateInputType = {
    productId?: true
    quantity?: true
    price?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    quantity?: true
    price?: true
    color?: true
    size?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    quantity?: true
    price?: true
    color?: true
    size?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    cartId?: true
    productId?: true
    quantity?: true
    price?: true
    color?: true
    size?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItem to aggregate.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type CartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartItemWhereInput
    orderBy?: CartItemOrderByWithAggregationInput | CartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: CartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: string
    cartId: string
    productId: number
    quantity: number
    price: number
    color: string | null
    size: string | null
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends CartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type CartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    color?: boolean
    size?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | GemstoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    color?: boolean
    size?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | GemstoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    color?: boolean
    size?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | GemstoneDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type CartItemSelectScalar = {
    id?: boolean
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    price?: boolean
    color?: boolean
    size?: boolean
  }

  export type CartItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cartId" | "productId" | "quantity" | "price" | "color" | "size", ExtArgs["result"]["cartItem"]>
  export type CartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | GemstoneDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | GemstoneDefaultArgs<ExtArgs>
  }
  export type CartItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | GemstoneDefaultArgs<ExtArgs>
  }

  export type $CartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      product: Prisma.$GemstonePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cartId: string
      productId: number
      quantity: number
      price: number
      color: string | null
      size: string | null
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type CartItemGetPayload<S extends boolean | null | undefined | CartItemDefaultArgs> = $Result.GetResult<Prisma.$CartItemPayload, S>

  type CartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface CartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartItem'], meta: { name: 'CartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {CartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartItemFindUniqueArgs>(args: SelectSubset<T, CartItemFindUniqueArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartItemFindFirstArgs>(args?: SelectSubset<T, CartItemFindFirstArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartItemFindManyArgs>(args?: SelectSubset<T, CartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartItem.
     * @param {CartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends CartItemCreateArgs>(args: SelectSubset<T, CartItemCreateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartItems.
     * @param {CartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartItemCreateManyArgs>(args?: SelectSubset<T, CartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {CartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CartItem.
     * @param {CartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends CartItemDeleteArgs>(args: SelectSubset<T, CartItemDeleteArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartItem.
     * @param {CartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartItemUpdateArgs>(args: SelectSubset<T, CartItemUpdateArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartItems.
     * @param {CartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartItemDeleteManyArgs>(args?: SelectSubset<T, CartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartItemUpdateManyArgs>(args: SelectSubset<T, CartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems and returns the data updated in the database.
     * @param {CartItemUpdateManyAndReturnArgs} args - Arguments to update many CartItems.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CartItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CartItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CartItem.
     * @param {CartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends CartItemUpsertArgs>(args: SelectSubset<T, CartItemUpsertArgs<ExtArgs>>): Prisma__CartItemClient<$Result.GetResult<Prisma.$CartItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends CartItemCountArgs>(
      args?: Subset<T, CartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartItemGroupByArgs['orderBy'] }
        : { orderBy?: CartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartItem model
   */
  readonly fields: CartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends GemstoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GemstoneDefaultArgs<ExtArgs>>): Prisma__GemstoneClient<$Result.GetResult<Prisma.$GemstonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CartItem model
   */
  interface CartItemFieldRefs {
    readonly id: FieldRef<"CartItem", 'String'>
    readonly cartId: FieldRef<"CartItem", 'String'>
    readonly productId: FieldRef<"CartItem", 'Int'>
    readonly quantity: FieldRef<"CartItem", 'Int'>
    readonly price: FieldRef<"CartItem", 'Float'>
    readonly color: FieldRef<"CartItem", 'String'>
    readonly size: FieldRef<"CartItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CartItem findUnique
   */
  export type CartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findUniqueOrThrow
   */
  export type CartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem findFirst
   */
  export type CartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findFirstOrThrow
   */
  export type CartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItem to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem findMany
   */
  export type CartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter, which CartItems to fetch.
     */
    where?: CartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartItems to fetch.
     */
    orderBy?: CartItemOrderByWithRelationInput | CartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartItems.
     */
    cursor?: CartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * CartItem create
   */
  export type CartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartItem.
     */
    data: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
  }

  /**
   * CartItem createMany
   */
  export type CartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartItem createManyAndReturn
   */
  export type CartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to create many CartItems.
     */
    data: CartItemCreateManyInput | CartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem update
   */
  export type CartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartItem.
     */
    data: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
    /**
     * Choose, which CartItem to update.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem updateMany
   */
  export type CartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
  }

  /**
   * CartItem updateManyAndReturn
   */
  export type CartItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * The data used to update CartItems.
     */
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyInput>
    /**
     * Filter which CartItems to update
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CartItem upsert
   */
  export type CartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartItem to update in case it exists.
     */
    where: CartItemWhereUniqueInput
    /**
     * In case the CartItem found by the `where` argument doesn't exist, create a new CartItem with this data.
     */
    create: XOR<CartItemCreateInput, CartItemUncheckedCreateInput>
    /**
     * In case the CartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartItemUpdateInput, CartItemUncheckedUpdateInput>
  }

  /**
   * CartItem delete
   */
  export type CartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
    /**
     * Filter which CartItem to delete.
     */
    where: CartItemWhereUniqueInput
  }

  /**
   * CartItem deleteMany
   */
  export type CartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartItems to delete
     */
    where?: CartItemWhereInput
    /**
     * Limit how many CartItems to delete.
     */
    limit?: number
  }

  /**
   * CartItem without action
   */
  export type CartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartItem
     */
    select?: CartItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartItem
     */
    omit?: CartItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GemstoneScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    shape: 'shape',
    description: 'description',
    treatment: 'treatment',
    weight: 'weight',
    dimension: 'dimension',
    certification: 'certification',
    color_grade: 'color_grade',
    clarity_grade: 'clarity_grade',
    cut_grade: 'cut_grade',
    polish: 'polish',
    symmetry: 'symmetry',
    fluorescence: 'fluorescence',
    color: 'color',
    transparency: 'transparency',
    color_saturation: 'color_saturation',
    additional_specification: 'additional_specification',
    price: 'price',
    origin: 'origin',
    certification_document: 'certification_document',
    certificationStatus: 'certificationStatus',
    sellerId: 'sellerId',
    status: 'status',
    quantity: 'quantity',
    sku: 'sku',
    allowOffers: 'allowOffers',
    showOnSaleLabel: 'showOnSaleLabel',
    chargeForShipping: 'chargeForShipping',
    isFeatured: 'isFeatured',
    isActive: 'isActive'
  };

  export type GemstoneScalarFieldEnum = (typeof GemstoneScalarFieldEnum)[keyof typeof GemstoneScalarFieldEnum]


  export const GemstoneImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    gemstoneId: 'gemstoneId'
  };

  export type GemstoneImageScalarFieldEnum = (typeof GemstoneImageScalarFieldEnum)[keyof typeof GemstoneImageScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    createdAt: 'createdAt',
    isRead: 'isRead'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    picture: 'picture',
    role: 'role',
    createdAt: 'createdAt',
    isActive: 'isActive'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BlacklistedTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    createdAt: 'createdAt'
  };

  export type BlacklistedTokenScalarFieldEnum = (typeof BlacklistedTokenScalarFieldEnum)[keyof typeof BlacklistedTokenScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    cartId: 'cartId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price',
    color: 'color',
    size: 'size'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'GEMSTONE_STATUS'
   */
  export type EnumGEMSTONE_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GEMSTONE_STATUS'>
    


  /**
   * Reference to a field of type 'GEMSTONE_STATUS[]'
   */
  export type ListEnumGEMSTONE_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GEMSTONE_STATUS[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
  /**
   * Deep Input Types
   */


  export type GemstoneWhereInput = {
    AND?: GemstoneWhereInput | GemstoneWhereInput[]
    OR?: GemstoneWhereInput[]
    NOT?: GemstoneWhereInput | GemstoneWhereInput[]
    id?: IntFilter<"Gemstone"> | number
    name?: StringFilter<"Gemstone"> | string
    type?: StringFilter<"Gemstone"> | string
    shape?: StringFilter<"Gemstone"> | string
    description?: StringFilter<"Gemstone"> | string
    treatment?: StringFilter<"Gemstone"> | string
    weight?: FloatFilter<"Gemstone"> | number
    dimension?: StringFilter<"Gemstone"> | string
    certification?: StringFilter<"Gemstone"> | string
    color_grade?: StringFilter<"Gemstone"> | string
    clarity_grade?: StringFilter<"Gemstone"> | string
    cut_grade?: StringFilter<"Gemstone"> | string
    polish?: StringFilter<"Gemstone"> | string
    symmetry?: StringFilter<"Gemstone"> | string
    fluorescence?: StringFilter<"Gemstone"> | string
    color?: StringFilter<"Gemstone"> | string
    transparency?: StringFilter<"Gemstone"> | string
    color_saturation?: StringFilter<"Gemstone"> | string
    additional_specification?: StringFilter<"Gemstone"> | string
    price?: FloatFilter<"Gemstone"> | number
    origin?: StringFilter<"Gemstone"> | string
    certification_document?: StringFilter<"Gemstone"> | string
    certificationStatus?: BoolFilter<"Gemstone"> | boolean
    sellerId?: IntFilter<"Gemstone"> | number
    status?: EnumGEMSTONE_STATUSFilter<"Gemstone"> | $Enums.GEMSTONE_STATUS
    quantity?: IntFilter<"Gemstone"> | number
    sku?: StringFilter<"Gemstone"> | string
    allowOffers?: BoolFilter<"Gemstone"> | boolean
    showOnSaleLabel?: BoolFilter<"Gemstone"> | boolean
    chargeForShipping?: BoolFilter<"Gemstone"> | boolean
    isFeatured?: BoolFilter<"Gemstone"> | boolean
    isActive?: BoolFilter<"Gemstone"> | boolean
    images?: GemstoneImageListRelationFilter
    cartItems?: CartItemListRelationFilter
  }

  export type GemstoneOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    shape?: SortOrder
    description?: SortOrder
    treatment?: SortOrder
    weight?: SortOrder
    dimension?: SortOrder
    certification?: SortOrder
    color_grade?: SortOrder
    clarity_grade?: SortOrder
    cut_grade?: SortOrder
    polish?: SortOrder
    symmetry?: SortOrder
    fluorescence?: SortOrder
    color?: SortOrder
    transparency?: SortOrder
    color_saturation?: SortOrder
    additional_specification?: SortOrder
    price?: SortOrder
    origin?: SortOrder
    certification_document?: SortOrder
    certificationStatus?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    quantity?: SortOrder
    sku?: SortOrder
    allowOffers?: SortOrder
    showOnSaleLabel?: SortOrder
    chargeForShipping?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    images?: GemstoneImageOrderByRelationAggregateInput
    cartItems?: CartItemOrderByRelationAggregateInput
  }

  export type GemstoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GemstoneWhereInput | GemstoneWhereInput[]
    OR?: GemstoneWhereInput[]
    NOT?: GemstoneWhereInput | GemstoneWhereInput[]
    name?: StringFilter<"Gemstone"> | string
    type?: StringFilter<"Gemstone"> | string
    shape?: StringFilter<"Gemstone"> | string
    description?: StringFilter<"Gemstone"> | string
    treatment?: StringFilter<"Gemstone"> | string
    weight?: FloatFilter<"Gemstone"> | number
    dimension?: StringFilter<"Gemstone"> | string
    certification?: StringFilter<"Gemstone"> | string
    color_grade?: StringFilter<"Gemstone"> | string
    clarity_grade?: StringFilter<"Gemstone"> | string
    cut_grade?: StringFilter<"Gemstone"> | string
    polish?: StringFilter<"Gemstone"> | string
    symmetry?: StringFilter<"Gemstone"> | string
    fluorescence?: StringFilter<"Gemstone"> | string
    color?: StringFilter<"Gemstone"> | string
    transparency?: StringFilter<"Gemstone"> | string
    color_saturation?: StringFilter<"Gemstone"> | string
    additional_specification?: StringFilter<"Gemstone"> | string
    price?: FloatFilter<"Gemstone"> | number
    origin?: StringFilter<"Gemstone"> | string
    certification_document?: StringFilter<"Gemstone"> | string
    certificationStatus?: BoolFilter<"Gemstone"> | boolean
    sellerId?: IntFilter<"Gemstone"> | number
    status?: EnumGEMSTONE_STATUSFilter<"Gemstone"> | $Enums.GEMSTONE_STATUS
    quantity?: IntFilter<"Gemstone"> | number
    sku?: StringFilter<"Gemstone"> | string
    allowOffers?: BoolFilter<"Gemstone"> | boolean
    showOnSaleLabel?: BoolFilter<"Gemstone"> | boolean
    chargeForShipping?: BoolFilter<"Gemstone"> | boolean
    isFeatured?: BoolFilter<"Gemstone"> | boolean
    isActive?: BoolFilter<"Gemstone"> | boolean
    images?: GemstoneImageListRelationFilter
    cartItems?: CartItemListRelationFilter
  }, "id">

  export type GemstoneOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    shape?: SortOrder
    description?: SortOrder
    treatment?: SortOrder
    weight?: SortOrder
    dimension?: SortOrder
    certification?: SortOrder
    color_grade?: SortOrder
    clarity_grade?: SortOrder
    cut_grade?: SortOrder
    polish?: SortOrder
    symmetry?: SortOrder
    fluorescence?: SortOrder
    color?: SortOrder
    transparency?: SortOrder
    color_saturation?: SortOrder
    additional_specification?: SortOrder
    price?: SortOrder
    origin?: SortOrder
    certification_document?: SortOrder
    certificationStatus?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    quantity?: SortOrder
    sku?: SortOrder
    allowOffers?: SortOrder
    showOnSaleLabel?: SortOrder
    chargeForShipping?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
    _count?: GemstoneCountOrderByAggregateInput
    _avg?: GemstoneAvgOrderByAggregateInput
    _max?: GemstoneMaxOrderByAggregateInput
    _min?: GemstoneMinOrderByAggregateInput
    _sum?: GemstoneSumOrderByAggregateInput
  }

  export type GemstoneScalarWhereWithAggregatesInput = {
    AND?: GemstoneScalarWhereWithAggregatesInput | GemstoneScalarWhereWithAggregatesInput[]
    OR?: GemstoneScalarWhereWithAggregatesInput[]
    NOT?: GemstoneScalarWhereWithAggregatesInput | GemstoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gemstone"> | number
    name?: StringWithAggregatesFilter<"Gemstone"> | string
    type?: StringWithAggregatesFilter<"Gemstone"> | string
    shape?: StringWithAggregatesFilter<"Gemstone"> | string
    description?: StringWithAggregatesFilter<"Gemstone"> | string
    treatment?: StringWithAggregatesFilter<"Gemstone"> | string
    weight?: FloatWithAggregatesFilter<"Gemstone"> | number
    dimension?: StringWithAggregatesFilter<"Gemstone"> | string
    certification?: StringWithAggregatesFilter<"Gemstone"> | string
    color_grade?: StringWithAggregatesFilter<"Gemstone"> | string
    clarity_grade?: StringWithAggregatesFilter<"Gemstone"> | string
    cut_grade?: StringWithAggregatesFilter<"Gemstone"> | string
    polish?: StringWithAggregatesFilter<"Gemstone"> | string
    symmetry?: StringWithAggregatesFilter<"Gemstone"> | string
    fluorescence?: StringWithAggregatesFilter<"Gemstone"> | string
    color?: StringWithAggregatesFilter<"Gemstone"> | string
    transparency?: StringWithAggregatesFilter<"Gemstone"> | string
    color_saturation?: StringWithAggregatesFilter<"Gemstone"> | string
    additional_specification?: StringWithAggregatesFilter<"Gemstone"> | string
    price?: FloatWithAggregatesFilter<"Gemstone"> | number
    origin?: StringWithAggregatesFilter<"Gemstone"> | string
    certification_document?: StringWithAggregatesFilter<"Gemstone"> | string
    certificationStatus?: BoolWithAggregatesFilter<"Gemstone"> | boolean
    sellerId?: IntWithAggregatesFilter<"Gemstone"> | number
    status?: EnumGEMSTONE_STATUSWithAggregatesFilter<"Gemstone"> | $Enums.GEMSTONE_STATUS
    quantity?: IntWithAggregatesFilter<"Gemstone"> | number
    sku?: StringWithAggregatesFilter<"Gemstone"> | string
    allowOffers?: BoolWithAggregatesFilter<"Gemstone"> | boolean
    showOnSaleLabel?: BoolWithAggregatesFilter<"Gemstone"> | boolean
    chargeForShipping?: BoolWithAggregatesFilter<"Gemstone"> | boolean
    isFeatured?: BoolWithAggregatesFilter<"Gemstone"> | boolean
    isActive?: BoolWithAggregatesFilter<"Gemstone"> | boolean
  }

  export type GemstoneImageWhereInput = {
    AND?: GemstoneImageWhereInput | GemstoneImageWhereInput[]
    OR?: GemstoneImageWhereInput[]
    NOT?: GemstoneImageWhereInput | GemstoneImageWhereInput[]
    id?: IntFilter<"GemstoneImage"> | number
    url?: StringFilter<"GemstoneImage"> | string
    gemstoneId?: IntFilter<"GemstoneImage"> | number
    gemstone?: XOR<GemstoneScalarRelationFilter, GemstoneWhereInput>
  }

  export type GemstoneImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    gemstoneId?: SortOrder
    gemstone?: GemstoneOrderByWithRelationInput
  }

  export type GemstoneImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GemstoneImageWhereInput | GemstoneImageWhereInput[]
    OR?: GemstoneImageWhereInput[]
    NOT?: GemstoneImageWhereInput | GemstoneImageWhereInput[]
    url?: StringFilter<"GemstoneImage"> | string
    gemstoneId?: IntFilter<"GemstoneImage"> | number
    gemstone?: XOR<GemstoneScalarRelationFilter, GemstoneWhereInput>
  }, "id">

  export type GemstoneImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    gemstoneId?: SortOrder
    _count?: GemstoneImageCountOrderByAggregateInput
    _avg?: GemstoneImageAvgOrderByAggregateInput
    _max?: GemstoneImageMaxOrderByAggregateInput
    _min?: GemstoneImageMinOrderByAggregateInput
    _sum?: GemstoneImageSumOrderByAggregateInput
  }

  export type GemstoneImageScalarWhereWithAggregatesInput = {
    AND?: GemstoneImageScalarWhereWithAggregatesInput | GemstoneImageScalarWhereWithAggregatesInput[]
    OR?: GemstoneImageScalarWhereWithAggregatesInput[]
    NOT?: GemstoneImageScalarWhereWithAggregatesInput | GemstoneImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GemstoneImage"> | number
    url?: StringWithAggregatesFilter<"GemstoneImage"> | string
    gemstoneId?: IntWithAggregatesFilter<"GemstoneImage"> | number
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    isRead?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    isRead?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    picture?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type BlacklistedTokenWhereInput = {
    AND?: BlacklistedTokenWhereInput | BlacklistedTokenWhereInput[]
    OR?: BlacklistedTokenWhereInput[]
    NOT?: BlacklistedTokenWhereInput | BlacklistedTokenWhereInput[]
    id?: StringFilter<"BlacklistedToken"> | string
    token?: StringFilter<"BlacklistedToken"> | string
    createdAt?: DateTimeFilter<"BlacklistedToken"> | Date | string
  }

  export type BlacklistedTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistedTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: BlacklistedTokenWhereInput | BlacklistedTokenWhereInput[]
    OR?: BlacklistedTokenWhereInput[]
    NOT?: BlacklistedTokenWhereInput | BlacklistedTokenWhereInput[]
    createdAt?: DateTimeFilter<"BlacklistedToken"> | Date | string
  }, "id" | "token">

  export type BlacklistedTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    _count?: BlacklistedTokenCountOrderByAggregateInput
    _max?: BlacklistedTokenMaxOrderByAggregateInput
    _min?: BlacklistedTokenMinOrderByAggregateInput
  }

  export type BlacklistedTokenScalarWhereWithAggregatesInput = {
    AND?: BlacklistedTokenScalarWhereWithAggregatesInput | BlacklistedTokenScalarWhereWithAggregatesInput[]
    OR?: BlacklistedTokenScalarWhereWithAggregatesInput[]
    NOT?: BlacklistedTokenScalarWhereWithAggregatesInput | BlacklistedTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BlacklistedToken"> | string
    token?: StringWithAggregatesFilter<"BlacklistedToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BlacklistedToken"> | Date | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: StringFilter<"Cart"> | string
    userId?: StringFilter<"Cart"> | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    items?: CartItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: CartItemOrderByRelationAggregateInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    userId?: StringFilter<"Cart"> | string
    createdAt?: DateTimeFilter<"Cart"> | Date | string
    updatedAt?: DateTimeFilter<"Cart"> | Date | string
    items?: CartItemListRelationFilter
  }, "id">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cart"> | string
    userId?: StringWithAggregatesFilter<"Cart"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cart"> | Date | string
  }

  export type CartItemWhereInput = {
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    id?: StringFilter<"CartItem"> | string
    cartId?: StringFilter<"CartItem"> | string
    productId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    price?: FloatFilter<"CartItem"> | number
    color?: StringNullableFilter<"CartItem"> | string | null
    size?: StringNullableFilter<"CartItem"> | string | null
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<GemstoneScalarRelationFilter, GemstoneWhereInput>
  }

  export type CartItemOrderByWithRelationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    color?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    cart?: CartOrderByWithRelationInput
    product?: GemstoneOrderByWithRelationInput
  }

  export type CartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cartId_productId_color_size?: CartItemCartIdProductIdColorSizeCompoundUniqueInput
    AND?: CartItemWhereInput | CartItemWhereInput[]
    OR?: CartItemWhereInput[]
    NOT?: CartItemWhereInput | CartItemWhereInput[]
    cartId?: StringFilter<"CartItem"> | string
    productId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    price?: FloatFilter<"CartItem"> | number
    color?: StringNullableFilter<"CartItem"> | string | null
    size?: StringNullableFilter<"CartItem"> | string | null
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<GemstoneScalarRelationFilter, GemstoneWhereInput>
  }, "id" | "cartId_productId_color_size">

  export type CartItemOrderByWithAggregationInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    color?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    _count?: CartItemCountOrderByAggregateInput
    _avg?: CartItemAvgOrderByAggregateInput
    _max?: CartItemMaxOrderByAggregateInput
    _min?: CartItemMinOrderByAggregateInput
    _sum?: CartItemSumOrderByAggregateInput
  }

  export type CartItemScalarWhereWithAggregatesInput = {
    AND?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    OR?: CartItemScalarWhereWithAggregatesInput[]
    NOT?: CartItemScalarWhereWithAggregatesInput | CartItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CartItem"> | string
    cartId?: StringWithAggregatesFilter<"CartItem"> | string
    productId?: IntWithAggregatesFilter<"CartItem"> | number
    quantity?: IntWithAggregatesFilter<"CartItem"> | number
    price?: FloatWithAggregatesFilter<"CartItem"> | number
    color?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
    size?: StringNullableWithAggregatesFilter<"CartItem"> | string | null
  }

  export type GemstoneCreateInput = {
    name: string
    type: string
    shape: string
    description: string
    treatment: string
    weight: number
    dimension: string
    certification: string
    color_grade: string
    clarity_grade: string
    cut_grade: string
    polish: string
    symmetry: string
    fluorescence: string
    color: string
    transparency: string
    color_saturation: string
    additional_specification: string
    price: number
    origin: string
    certification_document: string
    certificationStatus: boolean
    sellerId: number
    status?: $Enums.GEMSTONE_STATUS
    quantity: number
    sku: string
    allowOffers?: boolean
    showOnSaleLabel?: boolean
    chargeForShipping?: boolean
    isFeatured?: boolean
    isActive?: boolean
    images?: GemstoneImageCreateNestedManyWithoutGemstoneInput
    cartItems?: CartItemCreateNestedManyWithoutProductInput
  }

  export type GemstoneUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    shape: string
    description: string
    treatment: string
    weight: number
    dimension: string
    certification: string
    color_grade: string
    clarity_grade: string
    cut_grade: string
    polish: string
    symmetry: string
    fluorescence: string
    color: string
    transparency: string
    color_saturation: string
    additional_specification: string
    price: number
    origin: string
    certification_document: string
    certificationStatus: boolean
    sellerId: number
    status?: $Enums.GEMSTONE_STATUS
    quantity: number
    sku: string
    allowOffers?: boolean
    showOnSaleLabel?: boolean
    chargeForShipping?: boolean
    isFeatured?: boolean
    isActive?: boolean
    images?: GemstoneImageUncheckedCreateNestedManyWithoutGemstoneInput
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type GemstoneUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimension?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    color_grade?: StringFieldUpdateOperationsInput | string
    clarity_grade?: StringFieldUpdateOperationsInput | string
    cut_grade?: StringFieldUpdateOperationsInput | string
    polish?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    fluorescence?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transparency?: StringFieldUpdateOperationsInput | string
    color_saturation?: StringFieldUpdateOperationsInput | string
    additional_specification?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    certification_document?: StringFieldUpdateOperationsInput | string
    certificationStatus?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    status?: EnumGEMSTONE_STATUSFieldUpdateOperationsInput | $Enums.GEMSTONE_STATUS
    quantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    allowOffers?: BoolFieldUpdateOperationsInput | boolean
    showOnSaleLabel?: BoolFieldUpdateOperationsInput | boolean
    chargeForShipping?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    images?: GemstoneImageUpdateManyWithoutGemstoneNestedInput
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type GemstoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimension?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    color_grade?: StringFieldUpdateOperationsInput | string
    clarity_grade?: StringFieldUpdateOperationsInput | string
    cut_grade?: StringFieldUpdateOperationsInput | string
    polish?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    fluorescence?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transparency?: StringFieldUpdateOperationsInput | string
    color_saturation?: StringFieldUpdateOperationsInput | string
    additional_specification?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    certification_document?: StringFieldUpdateOperationsInput | string
    certificationStatus?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    status?: EnumGEMSTONE_STATUSFieldUpdateOperationsInput | $Enums.GEMSTONE_STATUS
    quantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    allowOffers?: BoolFieldUpdateOperationsInput | boolean
    showOnSaleLabel?: BoolFieldUpdateOperationsInput | boolean
    chargeForShipping?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    images?: GemstoneImageUncheckedUpdateManyWithoutGemstoneNestedInput
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type GemstoneCreateManyInput = {
    id?: number
    name: string
    type: string
    shape: string
    description: string
    treatment: string
    weight: number
    dimension: string
    certification: string
    color_grade: string
    clarity_grade: string
    cut_grade: string
    polish: string
    symmetry: string
    fluorescence: string
    color: string
    transparency: string
    color_saturation: string
    additional_specification: string
    price: number
    origin: string
    certification_document: string
    certificationStatus: boolean
    sellerId: number
    status?: $Enums.GEMSTONE_STATUS
    quantity: number
    sku: string
    allowOffers?: boolean
    showOnSaleLabel?: boolean
    chargeForShipping?: boolean
    isFeatured?: boolean
    isActive?: boolean
  }

  export type GemstoneUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimension?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    color_grade?: StringFieldUpdateOperationsInput | string
    clarity_grade?: StringFieldUpdateOperationsInput | string
    cut_grade?: StringFieldUpdateOperationsInput | string
    polish?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    fluorescence?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transparency?: StringFieldUpdateOperationsInput | string
    color_saturation?: StringFieldUpdateOperationsInput | string
    additional_specification?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    certification_document?: StringFieldUpdateOperationsInput | string
    certificationStatus?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    status?: EnumGEMSTONE_STATUSFieldUpdateOperationsInput | $Enums.GEMSTONE_STATUS
    quantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    allowOffers?: BoolFieldUpdateOperationsInput | boolean
    showOnSaleLabel?: BoolFieldUpdateOperationsInput | boolean
    chargeForShipping?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GemstoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimension?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    color_grade?: StringFieldUpdateOperationsInput | string
    clarity_grade?: StringFieldUpdateOperationsInput | string
    cut_grade?: StringFieldUpdateOperationsInput | string
    polish?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    fluorescence?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transparency?: StringFieldUpdateOperationsInput | string
    color_saturation?: StringFieldUpdateOperationsInput | string
    additional_specification?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    certification_document?: StringFieldUpdateOperationsInput | string
    certificationStatus?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    status?: EnumGEMSTONE_STATUSFieldUpdateOperationsInput | $Enums.GEMSTONE_STATUS
    quantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    allowOffers?: BoolFieldUpdateOperationsInput | boolean
    showOnSaleLabel?: BoolFieldUpdateOperationsInput | boolean
    chargeForShipping?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GemstoneImageCreateInput = {
    url: string
    gemstone: GemstoneCreateNestedOneWithoutImagesInput
  }

  export type GemstoneImageUncheckedCreateInput = {
    id?: number
    url: string
    gemstoneId: number
  }

  export type GemstoneImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    gemstone?: GemstoneUpdateOneRequiredWithoutImagesNestedInput
  }

  export type GemstoneImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    gemstoneId?: IntFieldUpdateOperationsInput | number
  }

  export type GemstoneImageCreateManyInput = {
    id?: number
    url: string
    gemstoneId: number
  }

  export type GemstoneImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type GemstoneImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    gemstoneId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateInput = {
    message: string
    createdAt?: Date | string
    isRead?: boolean
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: string
    message: string
    createdAt?: Date | string
    isRead?: boolean
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: string
    message: string
    createdAt?: Date | string
    isRead?: boolean
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    picture?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    picture?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    picture?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlacklistedTokenCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type BlacklistedTokenUncheckedCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type BlacklistedTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistedTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistedTokenCreateManyInput = {
    id?: string
    token: string
    createdAt?: Date | string
  }

  export type BlacklistedTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlacklistedTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CartItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: CartItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CartItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartItemCreateInput = {
    id?: string
    quantity: number
    price: number
    color?: string | null
    size?: string | null
    cart: CartCreateNestedOneWithoutItemsInput
    product: GemstoneCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateInput = {
    id?: string
    cartId: string
    productId: number
    quantity: number
    price: number
    color?: string | null
    size?: string | null
  }

  export type CartItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
    product?: GemstoneUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemCreateManyInput = {
    id?: string
    cartId: string
    productId: number
    quantity: number
    price: number
    color?: string | null
    size?: string | null
  }

  export type CartItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumGEMSTONE_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.GEMSTONE_STATUS | EnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.GEMSTONE_STATUS[] | ListEnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.GEMSTONE_STATUS[] | ListEnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumGEMSTONE_STATUSFilter<$PrismaModel> | $Enums.GEMSTONE_STATUS
  }

  export type GemstoneImageListRelationFilter = {
    every?: GemstoneImageWhereInput
    some?: GemstoneImageWhereInput
    none?: GemstoneImageWhereInput
  }

  export type CartItemListRelationFilter = {
    every?: CartItemWhereInput
    some?: CartItemWhereInput
    none?: CartItemWhereInput
  }

  export type GemstoneImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GemstoneCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    shape?: SortOrder
    description?: SortOrder
    treatment?: SortOrder
    weight?: SortOrder
    dimension?: SortOrder
    certification?: SortOrder
    color_grade?: SortOrder
    clarity_grade?: SortOrder
    cut_grade?: SortOrder
    polish?: SortOrder
    symmetry?: SortOrder
    fluorescence?: SortOrder
    color?: SortOrder
    transparency?: SortOrder
    color_saturation?: SortOrder
    additional_specification?: SortOrder
    price?: SortOrder
    origin?: SortOrder
    certification_document?: SortOrder
    certificationStatus?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    quantity?: SortOrder
    sku?: SortOrder
    allowOffers?: SortOrder
    showOnSaleLabel?: SortOrder
    chargeForShipping?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
  }

  export type GemstoneAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    sellerId?: SortOrder
    quantity?: SortOrder
  }

  export type GemstoneMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    shape?: SortOrder
    description?: SortOrder
    treatment?: SortOrder
    weight?: SortOrder
    dimension?: SortOrder
    certification?: SortOrder
    color_grade?: SortOrder
    clarity_grade?: SortOrder
    cut_grade?: SortOrder
    polish?: SortOrder
    symmetry?: SortOrder
    fluorescence?: SortOrder
    color?: SortOrder
    transparency?: SortOrder
    color_saturation?: SortOrder
    additional_specification?: SortOrder
    price?: SortOrder
    origin?: SortOrder
    certification_document?: SortOrder
    certificationStatus?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    quantity?: SortOrder
    sku?: SortOrder
    allowOffers?: SortOrder
    showOnSaleLabel?: SortOrder
    chargeForShipping?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
  }

  export type GemstoneMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    shape?: SortOrder
    description?: SortOrder
    treatment?: SortOrder
    weight?: SortOrder
    dimension?: SortOrder
    certification?: SortOrder
    color_grade?: SortOrder
    clarity_grade?: SortOrder
    cut_grade?: SortOrder
    polish?: SortOrder
    symmetry?: SortOrder
    fluorescence?: SortOrder
    color?: SortOrder
    transparency?: SortOrder
    color_saturation?: SortOrder
    additional_specification?: SortOrder
    price?: SortOrder
    origin?: SortOrder
    certification_document?: SortOrder
    certificationStatus?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    quantity?: SortOrder
    sku?: SortOrder
    allowOffers?: SortOrder
    showOnSaleLabel?: SortOrder
    chargeForShipping?: SortOrder
    isFeatured?: SortOrder
    isActive?: SortOrder
  }

  export type GemstoneSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
    price?: SortOrder
    sellerId?: SortOrder
    quantity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumGEMSTONE_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GEMSTONE_STATUS | EnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.GEMSTONE_STATUS[] | ListEnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.GEMSTONE_STATUS[] | ListEnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumGEMSTONE_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.GEMSTONE_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGEMSTONE_STATUSFilter<$PrismaModel>
    _max?: NestedEnumGEMSTONE_STATUSFilter<$PrismaModel>
  }

  export type GemstoneScalarRelationFilter = {
    is?: GemstoneWhereInput
    isNot?: GemstoneWhereInput
  }

  export type GemstoneImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    gemstoneId?: SortOrder
  }

  export type GemstoneImageAvgOrderByAggregateInput = {
    id?: SortOrder
    gemstoneId?: SortOrder
  }

  export type GemstoneImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    gemstoneId?: SortOrder
  }

  export type GemstoneImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    gemstoneId?: SortOrder
  }

  export type GemstoneImageSumOrderByAggregateInput = {
    id?: SortOrder
    gemstoneId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    picture?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BlacklistedTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistedTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type BlacklistedTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type CartItemCartIdProductIdColorSizeCompoundUniqueInput = {
    cartId: string
    productId: number
    color: string
    size: string
  }

  export type CartItemCountOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    color?: SortOrder
    size?: SortOrder
  }

  export type CartItemAvgOrderByAggregateInput = {
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type CartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    color?: SortOrder
    size?: SortOrder
  }

  export type CartItemMinOrderByAggregateInput = {
    id?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    color?: SortOrder
    size?: SortOrder
  }

  export type CartItemSumOrderByAggregateInput = {
    productId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type GemstoneImageCreateNestedManyWithoutGemstoneInput = {
    create?: XOR<GemstoneImageCreateWithoutGemstoneInput, GemstoneImageUncheckedCreateWithoutGemstoneInput> | GemstoneImageCreateWithoutGemstoneInput[] | GemstoneImageUncheckedCreateWithoutGemstoneInput[]
    connectOrCreate?: GemstoneImageCreateOrConnectWithoutGemstoneInput | GemstoneImageCreateOrConnectWithoutGemstoneInput[]
    createMany?: GemstoneImageCreateManyGemstoneInputEnvelope
    connect?: GemstoneImageWhereUniqueInput | GemstoneImageWhereUniqueInput[]
  }

  export type CartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type GemstoneImageUncheckedCreateNestedManyWithoutGemstoneInput = {
    create?: XOR<GemstoneImageCreateWithoutGemstoneInput, GemstoneImageUncheckedCreateWithoutGemstoneInput> | GemstoneImageCreateWithoutGemstoneInput[] | GemstoneImageUncheckedCreateWithoutGemstoneInput[]
    connectOrCreate?: GemstoneImageCreateOrConnectWithoutGemstoneInput | GemstoneImageCreateOrConnectWithoutGemstoneInput[]
    createMany?: GemstoneImageCreateManyGemstoneInputEnvelope
    connect?: GemstoneImageWhereUniqueInput | GemstoneImageWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumGEMSTONE_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.GEMSTONE_STATUS
  }

  export type GemstoneImageUpdateManyWithoutGemstoneNestedInput = {
    create?: XOR<GemstoneImageCreateWithoutGemstoneInput, GemstoneImageUncheckedCreateWithoutGemstoneInput> | GemstoneImageCreateWithoutGemstoneInput[] | GemstoneImageUncheckedCreateWithoutGemstoneInput[]
    connectOrCreate?: GemstoneImageCreateOrConnectWithoutGemstoneInput | GemstoneImageCreateOrConnectWithoutGemstoneInput[]
    upsert?: GemstoneImageUpsertWithWhereUniqueWithoutGemstoneInput | GemstoneImageUpsertWithWhereUniqueWithoutGemstoneInput[]
    createMany?: GemstoneImageCreateManyGemstoneInputEnvelope
    set?: GemstoneImageWhereUniqueInput | GemstoneImageWhereUniqueInput[]
    disconnect?: GemstoneImageWhereUniqueInput | GemstoneImageWhereUniqueInput[]
    delete?: GemstoneImageWhereUniqueInput | GemstoneImageWhereUniqueInput[]
    connect?: GemstoneImageWhereUniqueInput | GemstoneImageWhereUniqueInput[]
    update?: GemstoneImageUpdateWithWhereUniqueWithoutGemstoneInput | GemstoneImageUpdateWithWhereUniqueWithoutGemstoneInput[]
    updateMany?: GemstoneImageUpdateManyWithWhereWithoutGemstoneInput | GemstoneImageUpdateManyWithWhereWithoutGemstoneInput[]
    deleteMany?: GemstoneImageScalarWhereInput | GemstoneImageScalarWhereInput[]
  }

  export type CartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type GemstoneImageUncheckedUpdateManyWithoutGemstoneNestedInput = {
    create?: XOR<GemstoneImageCreateWithoutGemstoneInput, GemstoneImageUncheckedCreateWithoutGemstoneInput> | GemstoneImageCreateWithoutGemstoneInput[] | GemstoneImageUncheckedCreateWithoutGemstoneInput[]
    connectOrCreate?: GemstoneImageCreateOrConnectWithoutGemstoneInput | GemstoneImageCreateOrConnectWithoutGemstoneInput[]
    upsert?: GemstoneImageUpsertWithWhereUniqueWithoutGemstoneInput | GemstoneImageUpsertWithWhereUniqueWithoutGemstoneInput[]
    createMany?: GemstoneImageCreateManyGemstoneInputEnvelope
    set?: GemstoneImageWhereUniqueInput | GemstoneImageWhereUniqueInput[]
    disconnect?: GemstoneImageWhereUniqueInput | GemstoneImageWhereUniqueInput[]
    delete?: GemstoneImageWhereUniqueInput | GemstoneImageWhereUniqueInput[]
    connect?: GemstoneImageWhereUniqueInput | GemstoneImageWhereUniqueInput[]
    update?: GemstoneImageUpdateWithWhereUniqueWithoutGemstoneInput | GemstoneImageUpdateWithWhereUniqueWithoutGemstoneInput[]
    updateMany?: GemstoneImageUpdateManyWithWhereWithoutGemstoneInput | GemstoneImageUpdateManyWithWhereWithoutGemstoneInput[]
    deleteMany?: GemstoneImageScalarWhereInput | GemstoneImageScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput> | CartItemCreateWithoutProductInput[] | CartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutProductInput | CartItemCreateOrConnectWithoutProductInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutProductInput | CartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartItemCreateManyProductInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutProductInput | CartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutProductInput | CartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type GemstoneCreateNestedOneWithoutImagesInput = {
    create?: XOR<GemstoneCreateWithoutImagesInput, GemstoneUncheckedCreateWithoutImagesInput>
    connectOrCreate?: GemstoneCreateOrConnectWithoutImagesInput
    connect?: GemstoneWhereUniqueInput
  }

  export type GemstoneUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<GemstoneCreateWithoutImagesInput, GemstoneUncheckedCreateWithoutImagesInput>
    connectOrCreate?: GemstoneCreateOrConnectWithoutImagesInput
    upsert?: GemstoneUpsertWithoutImagesInput
    connect?: GemstoneWhereUniqueInput
    update?: XOR<XOR<GemstoneUpdateToOneWithWhereWithoutImagesInput, GemstoneUpdateWithoutImagesInput>, GemstoneUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type CartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
  }

  export type CartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput> | CartItemCreateWithoutCartInput[] | CartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartItemCreateOrConnectWithoutCartInput | CartItemCreateOrConnectWithoutCartInput[]
    upsert?: CartItemUpsertWithWhereUniqueWithoutCartInput | CartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartItemCreateManyCartInputEnvelope
    set?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    disconnect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    delete?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    connect?: CartItemWhereUniqueInput | CartItemWhereUniqueInput[]
    update?: CartItemUpdateWithWhereUniqueWithoutCartInput | CartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartItemUpdateManyWithWhereWithoutCartInput | CartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutItemsInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    connect?: CartWhereUniqueInput
  }

  export type GemstoneCreateNestedOneWithoutCartItemsInput = {
    create?: XOR<GemstoneCreateWithoutCartItemsInput, GemstoneUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: GemstoneCreateOrConnectWithoutCartItemsInput
    connect?: GemstoneWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutItemsInput
    upsert?: CartUpsertWithoutItemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutItemsInput, CartUpdateWithoutItemsInput>, CartUncheckedUpdateWithoutItemsInput>
  }

  export type GemstoneUpdateOneRequiredWithoutCartItemsNestedInput = {
    create?: XOR<GemstoneCreateWithoutCartItemsInput, GemstoneUncheckedCreateWithoutCartItemsInput>
    connectOrCreate?: GemstoneCreateOrConnectWithoutCartItemsInput
    upsert?: GemstoneUpsertWithoutCartItemsInput
    connect?: GemstoneWhereUniqueInput
    update?: XOR<XOR<GemstoneUpdateToOneWithWhereWithoutCartItemsInput, GemstoneUpdateWithoutCartItemsInput>, GemstoneUncheckedUpdateWithoutCartItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumGEMSTONE_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.GEMSTONE_STATUS | EnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.GEMSTONE_STATUS[] | ListEnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.GEMSTONE_STATUS[] | ListEnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumGEMSTONE_STATUSFilter<$PrismaModel> | $Enums.GEMSTONE_STATUS
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGEMSTONE_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GEMSTONE_STATUS | EnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.GEMSTONE_STATUS[] | ListEnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.GEMSTONE_STATUS[] | ListEnumGEMSTONE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumGEMSTONE_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.GEMSTONE_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGEMSTONE_STATUSFilter<$PrismaModel>
    _max?: NestedEnumGEMSTONE_STATUSFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type GemstoneImageCreateWithoutGemstoneInput = {
    url: string
  }

  export type GemstoneImageUncheckedCreateWithoutGemstoneInput = {
    id?: number
    url: string
  }

  export type GemstoneImageCreateOrConnectWithoutGemstoneInput = {
    where: GemstoneImageWhereUniqueInput
    create: XOR<GemstoneImageCreateWithoutGemstoneInput, GemstoneImageUncheckedCreateWithoutGemstoneInput>
  }

  export type GemstoneImageCreateManyGemstoneInputEnvelope = {
    data: GemstoneImageCreateManyGemstoneInput | GemstoneImageCreateManyGemstoneInput[]
    skipDuplicates?: boolean
  }

  export type CartItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    price: number
    color?: string | null
    size?: string | null
    cart: CartCreateNestedOneWithoutItemsInput
  }

  export type CartItemUncheckedCreateWithoutProductInput = {
    id?: string
    cartId: string
    quantity: number
    price: number
    color?: string | null
    size?: string | null
  }

  export type CartItemCreateOrConnectWithoutProductInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemCreateManyProductInputEnvelope = {
    data: CartItemCreateManyProductInput | CartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type GemstoneImageUpsertWithWhereUniqueWithoutGemstoneInput = {
    where: GemstoneImageWhereUniqueInput
    update: XOR<GemstoneImageUpdateWithoutGemstoneInput, GemstoneImageUncheckedUpdateWithoutGemstoneInput>
    create: XOR<GemstoneImageCreateWithoutGemstoneInput, GemstoneImageUncheckedCreateWithoutGemstoneInput>
  }

  export type GemstoneImageUpdateWithWhereUniqueWithoutGemstoneInput = {
    where: GemstoneImageWhereUniqueInput
    data: XOR<GemstoneImageUpdateWithoutGemstoneInput, GemstoneImageUncheckedUpdateWithoutGemstoneInput>
  }

  export type GemstoneImageUpdateManyWithWhereWithoutGemstoneInput = {
    where: GemstoneImageScalarWhereInput
    data: XOR<GemstoneImageUpdateManyMutationInput, GemstoneImageUncheckedUpdateManyWithoutGemstoneInput>
  }

  export type GemstoneImageScalarWhereInput = {
    AND?: GemstoneImageScalarWhereInput | GemstoneImageScalarWhereInput[]
    OR?: GemstoneImageScalarWhereInput[]
    NOT?: GemstoneImageScalarWhereInput | GemstoneImageScalarWhereInput[]
    id?: IntFilter<"GemstoneImage"> | number
    url?: StringFilter<"GemstoneImage"> | string
    gemstoneId?: IntFilter<"GemstoneImage"> | number
  }

  export type CartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartItemCreateWithoutProductInput, CartItemUncheckedCreateWithoutProductInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutProductInput, CartItemUncheckedUpdateWithoutProductInput>
  }

  export type CartItemUpdateManyWithWhereWithoutProductInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type CartItemScalarWhereInput = {
    AND?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    OR?: CartItemScalarWhereInput[]
    NOT?: CartItemScalarWhereInput | CartItemScalarWhereInput[]
    id?: StringFilter<"CartItem"> | string
    cartId?: StringFilter<"CartItem"> | string
    productId?: IntFilter<"CartItem"> | number
    quantity?: IntFilter<"CartItem"> | number
    price?: FloatFilter<"CartItem"> | number
    color?: StringNullableFilter<"CartItem"> | string | null
    size?: StringNullableFilter<"CartItem"> | string | null
  }

  export type GemstoneCreateWithoutImagesInput = {
    name: string
    type: string
    shape: string
    description: string
    treatment: string
    weight: number
    dimension: string
    certification: string
    color_grade: string
    clarity_grade: string
    cut_grade: string
    polish: string
    symmetry: string
    fluorescence: string
    color: string
    transparency: string
    color_saturation: string
    additional_specification: string
    price: number
    origin: string
    certification_document: string
    certificationStatus: boolean
    sellerId: number
    status?: $Enums.GEMSTONE_STATUS
    quantity: number
    sku: string
    allowOffers?: boolean
    showOnSaleLabel?: boolean
    chargeForShipping?: boolean
    isFeatured?: boolean
    isActive?: boolean
    cartItems?: CartItemCreateNestedManyWithoutProductInput
  }

  export type GemstoneUncheckedCreateWithoutImagesInput = {
    id?: number
    name: string
    type: string
    shape: string
    description: string
    treatment: string
    weight: number
    dimension: string
    certification: string
    color_grade: string
    clarity_grade: string
    cut_grade: string
    polish: string
    symmetry: string
    fluorescence: string
    color: string
    transparency: string
    color_saturation: string
    additional_specification: string
    price: number
    origin: string
    certification_document: string
    certificationStatus: boolean
    sellerId: number
    status?: $Enums.GEMSTONE_STATUS
    quantity: number
    sku: string
    allowOffers?: boolean
    showOnSaleLabel?: boolean
    chargeForShipping?: boolean
    isFeatured?: boolean
    isActive?: boolean
    cartItems?: CartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type GemstoneCreateOrConnectWithoutImagesInput = {
    where: GemstoneWhereUniqueInput
    create: XOR<GemstoneCreateWithoutImagesInput, GemstoneUncheckedCreateWithoutImagesInput>
  }

  export type GemstoneUpsertWithoutImagesInput = {
    update: XOR<GemstoneUpdateWithoutImagesInput, GemstoneUncheckedUpdateWithoutImagesInput>
    create: XOR<GemstoneCreateWithoutImagesInput, GemstoneUncheckedCreateWithoutImagesInput>
    where?: GemstoneWhereInput
  }

  export type GemstoneUpdateToOneWithWhereWithoutImagesInput = {
    where?: GemstoneWhereInput
    data: XOR<GemstoneUpdateWithoutImagesInput, GemstoneUncheckedUpdateWithoutImagesInput>
  }

  export type GemstoneUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimension?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    color_grade?: StringFieldUpdateOperationsInput | string
    clarity_grade?: StringFieldUpdateOperationsInput | string
    cut_grade?: StringFieldUpdateOperationsInput | string
    polish?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    fluorescence?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transparency?: StringFieldUpdateOperationsInput | string
    color_saturation?: StringFieldUpdateOperationsInput | string
    additional_specification?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    certification_document?: StringFieldUpdateOperationsInput | string
    certificationStatus?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    status?: EnumGEMSTONE_STATUSFieldUpdateOperationsInput | $Enums.GEMSTONE_STATUS
    quantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    allowOffers?: BoolFieldUpdateOperationsInput | boolean
    showOnSaleLabel?: BoolFieldUpdateOperationsInput | boolean
    chargeForShipping?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cartItems?: CartItemUpdateManyWithoutProductNestedInput
  }

  export type GemstoneUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimension?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    color_grade?: StringFieldUpdateOperationsInput | string
    clarity_grade?: StringFieldUpdateOperationsInput | string
    cut_grade?: StringFieldUpdateOperationsInput | string
    polish?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    fluorescence?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transparency?: StringFieldUpdateOperationsInput | string
    color_saturation?: StringFieldUpdateOperationsInput | string
    additional_specification?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    certification_document?: StringFieldUpdateOperationsInput | string
    certificationStatus?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    status?: EnumGEMSTONE_STATUSFieldUpdateOperationsInput | $Enums.GEMSTONE_STATUS
    quantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    allowOffers?: BoolFieldUpdateOperationsInput | boolean
    showOnSaleLabel?: BoolFieldUpdateOperationsInput | boolean
    chargeForShipping?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    cartItems?: CartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    picture?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    firstName?: string | null
    lastName?: string | null
    email: string
    password: string
    picture?: string | null
    role: $Enums.Role
    createdAt?: Date | string
    isActive?: boolean
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateWithoutUserInput = {
    message: string
    createdAt?: Date | string
    isRead?: boolean
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    isRead?: boolean
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    isRead?: BoolFilter<"Notification"> | boolean
  }

  export type CartItemCreateWithoutCartInput = {
    id?: string
    quantity: number
    price: number
    color?: string | null
    size?: string | null
    product: GemstoneCreateNestedOneWithoutCartItemsInput
  }

  export type CartItemUncheckedCreateWithoutCartInput = {
    id?: string
    productId: number
    quantity: number
    price: number
    color?: string | null
    size?: string | null
  }

  export type CartItemCreateOrConnectWithoutCartInput = {
    where: CartItemWhereUniqueInput
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemCreateManyCartInputEnvelope = {
    data: CartItemCreateManyCartInput | CartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type CartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    update: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartItemCreateWithoutCartInput, CartItemUncheckedCreateWithoutCartInput>
  }

  export type CartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartItemWhereUniqueInput
    data: XOR<CartItemUpdateWithoutCartInput, CartItemUncheckedUpdateWithoutCartInput>
  }

  export type CartItemUpdateManyWithWhereWithoutCartInput = {
    where: CartItemScalarWhereInput
    data: XOR<CartItemUpdateManyMutationInput, CartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CartCreateWithoutItemsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartUncheckedCreateWithoutItemsInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CartCreateOrConnectWithoutItemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
  }

  export type GemstoneCreateWithoutCartItemsInput = {
    name: string
    type: string
    shape: string
    description: string
    treatment: string
    weight: number
    dimension: string
    certification: string
    color_grade: string
    clarity_grade: string
    cut_grade: string
    polish: string
    symmetry: string
    fluorescence: string
    color: string
    transparency: string
    color_saturation: string
    additional_specification: string
    price: number
    origin: string
    certification_document: string
    certificationStatus: boolean
    sellerId: number
    status?: $Enums.GEMSTONE_STATUS
    quantity: number
    sku: string
    allowOffers?: boolean
    showOnSaleLabel?: boolean
    chargeForShipping?: boolean
    isFeatured?: boolean
    isActive?: boolean
    images?: GemstoneImageCreateNestedManyWithoutGemstoneInput
  }

  export type GemstoneUncheckedCreateWithoutCartItemsInput = {
    id?: number
    name: string
    type: string
    shape: string
    description: string
    treatment: string
    weight: number
    dimension: string
    certification: string
    color_grade: string
    clarity_grade: string
    cut_grade: string
    polish: string
    symmetry: string
    fluorescence: string
    color: string
    transparency: string
    color_saturation: string
    additional_specification: string
    price: number
    origin: string
    certification_document: string
    certificationStatus: boolean
    sellerId: number
    status?: $Enums.GEMSTONE_STATUS
    quantity: number
    sku: string
    allowOffers?: boolean
    showOnSaleLabel?: boolean
    chargeForShipping?: boolean
    isFeatured?: boolean
    isActive?: boolean
    images?: GemstoneImageUncheckedCreateNestedManyWithoutGemstoneInput
  }

  export type GemstoneCreateOrConnectWithoutCartItemsInput = {
    where: GemstoneWhereUniqueInput
    create: XOR<GemstoneCreateWithoutCartItemsInput, GemstoneUncheckedCreateWithoutCartItemsInput>
  }

  export type CartUpsertWithoutItemsInput = {
    update: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
    create: XOR<CartCreateWithoutItemsInput, CartUncheckedCreateWithoutItemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutItemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutItemsInput, CartUncheckedUpdateWithoutItemsInput>
  }

  export type CartUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GemstoneUpsertWithoutCartItemsInput = {
    update: XOR<GemstoneUpdateWithoutCartItemsInput, GemstoneUncheckedUpdateWithoutCartItemsInput>
    create: XOR<GemstoneCreateWithoutCartItemsInput, GemstoneUncheckedCreateWithoutCartItemsInput>
    where?: GemstoneWhereInput
  }

  export type GemstoneUpdateToOneWithWhereWithoutCartItemsInput = {
    where?: GemstoneWhereInput
    data: XOR<GemstoneUpdateWithoutCartItemsInput, GemstoneUncheckedUpdateWithoutCartItemsInput>
  }

  export type GemstoneUpdateWithoutCartItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimension?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    color_grade?: StringFieldUpdateOperationsInput | string
    clarity_grade?: StringFieldUpdateOperationsInput | string
    cut_grade?: StringFieldUpdateOperationsInput | string
    polish?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    fluorescence?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transparency?: StringFieldUpdateOperationsInput | string
    color_saturation?: StringFieldUpdateOperationsInput | string
    additional_specification?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    certification_document?: StringFieldUpdateOperationsInput | string
    certificationStatus?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    status?: EnumGEMSTONE_STATUSFieldUpdateOperationsInput | $Enums.GEMSTONE_STATUS
    quantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    allowOffers?: BoolFieldUpdateOperationsInput | boolean
    showOnSaleLabel?: BoolFieldUpdateOperationsInput | boolean
    chargeForShipping?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    images?: GemstoneImageUpdateManyWithoutGemstoneNestedInput
  }

  export type GemstoneUncheckedUpdateWithoutCartItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    shape?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    treatment?: StringFieldUpdateOperationsInput | string
    weight?: FloatFieldUpdateOperationsInput | number
    dimension?: StringFieldUpdateOperationsInput | string
    certification?: StringFieldUpdateOperationsInput | string
    color_grade?: StringFieldUpdateOperationsInput | string
    clarity_grade?: StringFieldUpdateOperationsInput | string
    cut_grade?: StringFieldUpdateOperationsInput | string
    polish?: StringFieldUpdateOperationsInput | string
    symmetry?: StringFieldUpdateOperationsInput | string
    fluorescence?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    transparency?: StringFieldUpdateOperationsInput | string
    color_saturation?: StringFieldUpdateOperationsInput | string
    additional_specification?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    origin?: StringFieldUpdateOperationsInput | string
    certification_document?: StringFieldUpdateOperationsInput | string
    certificationStatus?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    status?: EnumGEMSTONE_STATUSFieldUpdateOperationsInput | $Enums.GEMSTONE_STATUS
    quantity?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
    allowOffers?: BoolFieldUpdateOperationsInput | boolean
    showOnSaleLabel?: BoolFieldUpdateOperationsInput | boolean
    chargeForShipping?: BoolFieldUpdateOperationsInput | boolean
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    images?: GemstoneImageUncheckedUpdateManyWithoutGemstoneNestedInput
  }

  export type GemstoneImageCreateManyGemstoneInput = {
    id?: number
    url: string
  }

  export type CartItemCreateManyProductInput = {
    id?: string
    cartId: string
    quantity: number
    price: number
    color?: string | null
    size?: string | null
  }

  export type GemstoneImageUpdateWithoutGemstoneInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type GemstoneImageUncheckedUpdateWithoutGemstoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type GemstoneImageUncheckedUpdateManyWithoutGemstoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type CartItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    cart?: CartUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    message: string
    createdAt?: Date | string
    isRead?: boolean
  }

  export type NotificationUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CartItemCreateManyCartInput = {
    id?: string
    productId: number
    quantity: number
    price: number
    color?: string | null
    size?: string | null
  }

  export type CartItemUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    product?: GemstoneUpdateOneRequiredWithoutCartItemsNestedInput
  }

  export type CartItemUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CartItemUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    color?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}