/// <reference types="react-scripts" />

declare module "*.jpg";
declare module "*.JPG";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.MOV";
declare module "*.mov";

declare module '*.mp3' {
  const src: string;
  export default src;
}