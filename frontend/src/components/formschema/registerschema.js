import z from "zod";
export const registerschema=z.object({
    name:z.string().min(3,"Name must contain atleast 3 letters"),
    email:z.string().email("enter a valid email"),
    password:z.string().min(8,"password should be minium of 8"),
    age:z.coerce.number().min(18,"age must be 18 or above")

})
