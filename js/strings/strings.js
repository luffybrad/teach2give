// JavaScript String Practice Questions
// 1. Check String Input
// ○ Write a JavaScript function to check whether an 'input' is a string or not.
function is_string(inp){
    return typeof inp === 'string'
}
// Test Data:
// console.log(is_string('w3resource')); // true

// ○ console.log(is_string([1, 2, 4, 0])); // false

// 2. Check Blank String
// ○ Write a JavaScript function to check whether a string is blank or not.
function is_Blank(inp){
    if(typeof inp === 'string'){
     return inp.trim().length === 0
    }
}
// Test Data:
// console.log(is_Blank('')); // true
// ○ console.log(is_Blank('abc')); // false

// 3. String to Array of Words
// ○ Write a JavaScript function to split a string and convert it into an array of words.
function string_to_array(inp){
    if(typeof inp === 'string'){
        return inp.split(/\s+/);
    }  
}
// ○ Test Data:
//  console.log(string_to_array("Robin Singh")); // ["Robin", "Singh"]

// 4. Extract Characters
// ○ Write a JavaScript function to extract a specified number of characters from a string.
function truncate_string(inp, count){
    if(typeof inp === 'string'){
        return inp.substring(inp, count)
    }
}
// ○ Test Data:
// console.log(truncate_string("Robin Singh", 4)); // "Robi"

// 5. Abbreviate Name
// ○ Write a JavaScript function to convert a string into abbreviated form.
function abbrev_name(inp){
    if(typeof inp === 'string'){
        inp = inp.split(/\s+/);
        if (inp.length < 2){
            return inp
        }
        return `${inp[0]} ${inp[1][0].toUpperCase()}.`
    }
}
// ○ Test Data:
// console.log(abbrev_name("Robin Singh")); // "Robin S."

// 6. Hide Email Address
// ○ Write a JavaScript function that hides email addresses to prevent unauthorized access.
function protect_email(inp){
    if(typeof inp === 'string' && inp.includes("@")){
        let [name, domain] = inp.split('@')
        return name.substring(inp, 5) + "...@" + domain 
    }
}
// ○ Test Data:
// console.log(protect_email("robin_singh@example.com")); //
// "robin...@example.com"

// 7. Parameterize String
// ○ Write a JavaScript function to parameterize a string.
function string_parameterize(inp){
    if(typeof inp === 'string'){
    inp = inp.toLowerCase().trim()
    inp = inp.replace(/\s+/g, "-")
    return inp
}
}
// ○ Test Data:
// console.log(string_parameterize("Robin Singh from USA.")); //
// "robin-singh-from-usa"

// 8. Capitalize First Letter
// ○ Write a JavaScript function to capitalize the first letter of a string.
function capitalize(inp){
    if(typeof inp === 'string'){
    return inp.charAt(0).toUpperCase() + inp.slice(1)
}
}
// ○ Test Data:
// console.log(capitalize('js string exercises')); // "Js string exercises"

// 9. Capitalize Each Word
// ○ Write a JavaScript function to capitalize the first letter of each word in a string.
function capitalize_Words(inp){
    if(typeof inp === 'string'){
        inp = inp.split(/\s+/)
        return inp.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    }
}
// ○ Test Data:
// console.log(capitalize_Words('js string exercises')); // "Js String Exercises"

// 10. Swap Case
// ○ Write a JavaScript function that converts uppercase letters to lowercase and vice versa.
    function swapcase(inp){
        inp = inp.split("")
        inp = inp.map(k => {
            if(k === k.toLowerCase()){
                return k.toUpperCase();
            }else{
                return k.toLowerCase();
            }
        }).join("")
        return inp
    }
// ○ Test Data:
// console.log(swapcase('AaBbc')); // "aAbBC"

// 11. Camelize String
// ○ Write a JavaScript function to convert a string into camel case.
function camelize(inp){
    if(typeof inp === 'string'){
        inp = inp.replace(" ", "");
        return inp
    }
}
// ○ Test Data:
// console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"

// 12. Uncamelize String
// ○ Write a JavaScript function to uncamelize a string.
function uncamelize(inp){
    if(typeof inp === 'string'){
        inp = inp.replace(/([a-z])([A-Z])/g, '$1-$2').toLocaleLowerCase();
        return inp;
    }
}
// Test Data:
// console.log(uncamelize('helloWorld')); // "hello world"

// ○ console.log(uncamelize('helloWorld','-')); // "hello-world"
// 13. Repeat String
// ○ Write a JavaScript function to concatenate a given string n times.
// ○ Test Data:
// console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"

// 14. Insert in String
// ○ Write a JavaScript function to insert a string within another string at a given
// position.

// Test Data:
// console.log(insert('We are doing some exercises.', 'JavaScript ', 18));
// ○ // "We are doing some JavaScript exercises."
// 15. Humanize Format
// ○ Write a JavaScript function that formats a number with the correct suffix (1st,
// 2nd, etc.).
// ○ Test Data:
// console.log(humanize_format(301)); // "301st"

// 16. Truncate String with Ellipsis
// ○ Write a JavaScript function to truncate a string and append "...".

// Test Data:
// console.log(text_truncate('We are doing JS string exercises.', 15, '!!'));

// ○ // "We are doing !!"
// 17. Chop String into Chunks

// ○ Write a JavaScript function to chop a string into chunks.
// ○ Test Data:
// console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"]

// 18. Count Substring Occurrences
// ○ Write a JavaScript function to count occurrences of a substring in a string.

// Test Data:
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));

// ○ // Output: 2
// 19. Reverse Binary Representation
// ○ Write a JavaScript function that reverses the binary representation of a number
// and returns its decimal form.
// ○ Test Data:
// console.log(reverse_binary(100)); // 19

// 20. Pad String to Length
// ○ Write a JavaScript function to pad a string to a specified length.
// ○ Test Data:
// console.log(formatted_string('0000', 123, 'l')); // "0123"