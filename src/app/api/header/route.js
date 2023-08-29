import { headers } from 'next/headers'
import { NextResponse } from 'next/server';
export async function GET(req,res){
    const headersInstance = headers();
    const authorization = headersInstance.get('authorization');
    const Authorization = `Bearer-${authorization}`

    return NextResponse.json({
        Authorization
    },{
        status:200,
        headers:{
            "Authorization": Authorization
        }
    });
}