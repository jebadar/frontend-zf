let env = "local";
let API_URL;
let ASSET_URL;
let MEDIA_URL;
let STORAGE_URL;

if(window.location.hostname.indexOf("zedflix.")>-1){
    env="prod";
} else if (window.location.hostname.indexOf("172.18.11.242.")>-1){
    env="stage";
} 

if(env=="prod"){
    API_URL="http://172.18.11.242:3000/v0/api/";
    ASSET_URL="";
    MEDIA_URL="";
    STORAGE_URL="";
} else{
    API_URL="http://172.18.11.242:3000/v0/api/";
    ASSET_URL="https://images.zedflix.pk:4447//";
    MEDIA_URL="";
    STORAGE_URL="";
}

export class Constants {
    public static get API_URL(): string { return API_URL; };
    public static get ASSET_URL(): string { return ASSET_URL; };
    public static get MEDIA_URL(): string { return MEDIA_URL; };
    public static get STORAGE_URL(): string {return STORAGE_URL; };
 }