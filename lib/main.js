function main(){
    let beer = 99;
    let verses = [];
    while (beer >= 0) {
        let str0=beer-1;
        let quantifiers='bottles';
        if(beer===1){
            quantifiers='bottle';
            str0 = 'no more';
        }
        let verse =
`${beer} ${quantifiers} of beer on the wall, ${beer} ${quantifiers} of beer.
Take one down and pass it around, ${str0} bottles of beer.`;
        if(beer===0){
            verse =
`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
        }
        verses.push(verse);
        beer--;
    }
    return verses;
    
}

module.exports = main;
