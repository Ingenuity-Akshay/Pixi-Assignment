import { BaseTexture, ILoaderResource, Rectangle, Resource, Texture } from "pixi.js";

let resource: { [key: string]: ILoaderResource };
let texture: { [key: string]: Texture<Resource> } = {} as { [key: string]: Texture<Resource> };
export function loadtexture(res: { [key: string]: ILoaderResource }) :{ [key: string]: Texture<Resource> }{
    resource=res;
    const keys = Object.keys(res);
    keys.forEach(ele => {
        texture[ele] = res[ele].texture as Texture<Resource>
    });
    return texture;
}
export function selectTexture(id:string):Texture<Resource>|null{
    if(id in texture){
        return texture[id] as Texture<Resource>
    }
    return null;
}

