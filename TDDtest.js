/**
 * Created by think；pad on 2017/5/18.
 */
var formatWordAndCount = function (word, count) {
    return word +
        ' ' +
        count;
};
var group = function (wordArray) {
    return wordArray.reduce((array,word)=>{
            let entry = array.find((e)=> e.word === word);//找对象
    if(entry){
        entry.count++;
    }else{
        array.push({word:word , count:1});
    }
    return array;
},[]);
};
var split = function (words) {
    return words.split(/\s+/);
};
var sort = function (groupWords) {
    groupWords.sort((x, y) => y.count - x.count);
};

function format(groupWords) {
    return groupWords.map((e) = > formatWordAndCount(e.word, e.count)).join('\r\n');
}
function main(words){
    if(words !== ''){
        let wordArray=split(words);
        let groupWords = group(wordArray);
        sort(groupWords);
        return format(groupWords);
    }
    return ''
}