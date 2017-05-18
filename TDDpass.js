/*** Created by think；pad on 2017/5/18.*/
describe("Word Frequency", function () {
    it("returns empty string given empty string", function () {
        var result = main('');
        expect(result).toEqual('');

    });

    it("returns string given one word", function () {
        var result = main('he');
        expect(result).toEqual('he 1');

    });

    it("returns string given two different word", function () {

        var result = main('he is');
        expect(result).toEqual('he 1\r\nis 1');

    });

    it("returns string given two duplicated word", function () {
        var result = main('he is he');
        expect(result).toEqual('he 2\r\nis 1');

    });

    it("returns string given two duplicated words need to be sorted", function () {
        var result = main('he is is');
        expect(result).toEqual('is 2\r\nhe 1');

    });

    it("returns string given two duplicated words splited by multiple spaces", function () {
        var result = main('he     is');
        expect(result).toEqual('he 1\r\nis 1');

    });
    it("returns string given long string splited by multiple spaces", function () {
        var result = main('it was the age of wisdom it was the age of foolishness it is');
        expect(result).toEqual('it 3\r\nwas 2\r\nthe 2\r\nage 2\r\nof 2\r\nwisdom 1\r\nfoolishness 1\r\nis 1');
        document.write("result:"+"<br>"+result);
    });