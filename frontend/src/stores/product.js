import {create} from 'zustand'

export const useProductStore = create((set)=>({
products:[],
setProducts:(product)=>set({product}),
createProduct: async function (newProduct) {
    if(!newProduct.name||!newProduct.price||!newProduct.image){
        return {success:false,message:"Please provide all fields"};
    }

    const res = await fetch("/api/products",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newProduct)
    }
    );
    const data = res.json()
    set((state)=>({products:[...state.products,data.data]}));
    return {success:true,message:"Product Create Successfully"};
},
fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({products:data.data})
},

deleteProduct: async (pid)=>{
const res = await fetch(`api/products/${pid}`,{
    method:"DELETE"
})
const data = await res.json();
if(!data.success) return {success:false,message:data.message}
//update our UI without fetching.
set((state)=>({products:state.products.filter((product)=>product._id !== pid)}))
return {success:true,message:data.message}
},

updateProduct: async (pid,updatedProduct)=>{
    const res = await fetch(`/api/products/${pid}`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(updatedProduct)
    })
    const data = await res.json();
    if(!data.success) return {success:false,message:data.message}
    //update our UI without fetching.
    set((state)=>({products:state.products.map((product)=>product._id === pid?data.data:product)}))
    return {success:true,message:"Product Updated Successfully"}

}
}))