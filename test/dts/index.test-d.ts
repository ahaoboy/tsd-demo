import { expectType } from "tsd";
import { id } from "../../dist";
expectType<string>(id("1"));
expectType<number>(id(1));
