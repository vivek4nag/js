function x(){
    var a = 7;
    function y(){
        console.log(a);
        
    }
    return y;
}
var z = x();
console.log(z);
z();
// Closure :Function bundled with its lexical environment is known as a closure. Whenever function is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure