let n = prompt('digite aqui');

if(n == 1)
{
    console.log("Pertence");
}
else
{
    // realiza o cálculo da sequencia de fibonacci 
    // (utilizando um for para repetição para garantir que o número esteja na sequencia) 
    if(n>1)
    {
        a1 = 1;
        a2 = 0;
        for(cont = 1; cont < n; cont++)
        {
        x = a1+a2;
        a2 = a1;
        a1 = x;
        if(x==n){
            console.log('Pertence');
            }
        }
    }
}
