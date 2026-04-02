export async function POST(req){
 const formData=await req.formData();
 const file=formData.get("video");
 if(!file){return Response.json({message:"No file"},{status:400});}
 return Response.json({message:"Upload success",name:file.name});
}