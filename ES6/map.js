map=new Map();
map.set("Name","Shreyas")
map.set("Address",["Pavan Park","Dharwad","Karnataka","India"])
// console.log(map.get("Name"))
// console.log(map.get("Address"))
// console.log(map.size)
// console.log(map.values())
// console.log(map.keys())
for(let [keys,value] of map)
{
    console.log(keys+"-"+value)
}