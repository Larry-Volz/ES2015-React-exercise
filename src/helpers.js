/**choice(items): returns a randomly selected item from array of items
*/
const choice = (items) =>{
    const rnd = Math.floor(Math.random()*items.length) 
    return items[rnd];
}

/**remove(items, item): removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.*/

function remove(items, item){
    const idx = items.findIndex(i => i == item)
    if (idx){
        items.splice(idx, idx);
        return items;
    }
    return "undefined";
}
