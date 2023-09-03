'use server'

import data from '@/data/examp.json'

export default async function getLocalStructure() {

    let count = 0;
    const getFileStruct = (data, lvl=0, parentId=null) => {
        if(data.type != "directory") return [null, null];
    
        let struct  = [],
            content = []
        const curId = count++
        
        const elFill = {id: curId, content: data.contents.filter(node => node.type == 'file')}
        content.push(elFill)
        
        const index = parentId!=null ? `${parentId}-${curId}` : '0'

        const listEl = {id: curId, level: lvl, text: data.name, inner: []}
        if(data.contents) data.contents.forEach(elem => { 
            const [innerStruct, innerContent] = getFileStruct(elem, lvl+1, index);
            if(innerStruct)   innerStruct.forEach(node => {listEl.inner.push(node)}); 
            if(innerContent)  innerContent.forEach(node => {content.push(node)});
        });
        struct.push(listEl)

        return [struct, content];
    } 

    return await getFileStruct(data[0])
}