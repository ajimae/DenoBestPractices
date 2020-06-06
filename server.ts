import app from './src/app.ts';

// @ts-ignore
const port = Deno.env.PORT || 8000;

// start server
console.log(`server running on ${port}`);
await app.listen({ port });
