let m = document.getElementsByTagName('div')
for(let i=0; i<5; i++)
    {
        if(i%2!=0)
            {
                m[i].style.backgroundColor='lime'
                m[i].style.fontWeight='bold'
                m[i].style.padding='0px 5px'
            }
    }