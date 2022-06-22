export function urlParamTxHash() {  
    return (window.location.href.match(/0x.{64}/) || [""])[0];
}
