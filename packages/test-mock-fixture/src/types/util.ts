import type { Tagged, UnwrapTagged } from 'type-fest';

export type ReturnVIfTExtendsU<
  T,
  U,
  V extends Tagged<unknown, PropertyKey>,
  ShouldUnwrap extends boolean = true
> = T extends U ? MaybeUnwrap<V, ShouldUnwrap> : unknown;

type MaybeUnwrap<
  T extends Tagged<unknown, PropertyKey>,
  ShouldUnwrap extends boolean
> = ShouldUnwrap extends true ? UnwrapTagged<T> : T;
