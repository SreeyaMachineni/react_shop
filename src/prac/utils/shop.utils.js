export const getShopItems = async()=>{
   const shop =  await fetch('https://run.mocky.io/v3/850151fa-7e70-4fa5-9e7d-230194549178')
    return shop.json()
}