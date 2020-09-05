// EJemplo-----1
    var nombre = "jose"
    var apellido = "martinez"

    function saludar(callback){
        console.log(`hola ,${nombre} ${apellido}`)
        return callback()
    }

    function responderSaludo(){
        console.log(` como estas :${apellido} ${nombre}`)   
        }

    saludar(responderSaludo)

// EJemplo ------2
function sum (num1,num2,callback){
    return callback(num1,num2)
}
 function rev (num1,num2){
     console.log(`numeros invertidos ${num2} ${num1}`)
 }
 sum(1,2,rev)