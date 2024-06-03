//  SWITCH

const a=2
switch (a) {
    case 1:
        console.log(`one`);
        break;
    case 2:
        console.log(`two`);
        break;
    case 3:
        console.log(`three`);
        break;
    
    default:
        console.log(`none of the above`);
        break;
}

/* 
if no break is present then it will execute everything starting from the correct case match except default
"break" breaks the flow
*/