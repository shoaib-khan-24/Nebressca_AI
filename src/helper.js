export function checkHeading(str){
    const regex = /^\*\*.+\*$/;
    return regex.test(str);
}

export function replaceHeadingStars(str){
    return str.replace(/^\*\*(.+)\*\s*$/, "$1");
}