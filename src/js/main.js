let i = 0;
const a = Array( 5 ).fill( "" ).map( () => i++ );

a.map( b => b ** 2 );

console.log( process.env.NODE_ENV );
