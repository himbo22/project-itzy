export async function GET(request: Request) {
  return new Response(JSON.stringify({name:'zxc',image:'https://'}),{
    status: 200,
    headers:{'Content-Type':'application/json'}
  })
}