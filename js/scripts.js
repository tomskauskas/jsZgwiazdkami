'use strict';

var i;
for(i=0; i<10; i++){
    if( i % 2 === 0){
        document.write('*****');
    }else{
        document.write('**********');
    }
    document.write('<br>');
}

document.write('------------------------------------------<br>');

for (i=0; i<10; i++){
    (i % 2 === 0) ? document.write('*****') : document.write('***********');
    document.write('<br>');
}

document.write('------------------------------------------<br>');

for(i=0; i<10; i++){
    var j =i;
    for(j=i; j%2; j++){                  
        document.write('*****');
    }
    document.write('*****<br>');
}