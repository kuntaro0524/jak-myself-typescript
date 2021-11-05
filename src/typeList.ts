/* eslint-disable @typescript-eslint/no-unused-vars */

// タイプスクリプトの基本の型

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "Unko";

// Array　二通りある
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// タプル型
let tuple: [number, string] = [0, "A"];

// any
let any1: any = false;

// void あえて書かなくとも良い
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
// ちゃんとオブジェクトの内容を設定したいときにはこういうふうに書くこと
let obj2: { id: number; name: string } = { id: 3, name: "Kunio Hirata" };
