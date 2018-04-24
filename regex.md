
.       - Matches Any Character Except New Line
\d      - Matches any Digit (0-9)
\D      - Not a Digit (0-9)
\w      - Matches any word Character (a-z, A-Z, 0-9, _)
\W      - Not a Word Character "Symbols and white space"
\s      - Whitespace (space, tab, newline)
\S      - Not Whitespace (space, tab, newline)
\t      - Matches any tab character only

\b      - Word Boundary "spaces tabs between characters or words"
\B      - Not a Word Boundary
^       - Beginning of a String
$       - End of a String

[]      - Matches Characters in brackets
[^ ]    - Matches Characters NOT in brackets
|       - Either Or
( )     - Group

Quantifiers:
*       - 0 or More
.       - Any character
+       - 1 or More
?       - 0 or One make the char optional
{3}     - Exact Number
{3,4}   - Range of Numbers (Minimum, Maximum)
[0-9]+  - Any number or unlimited times at least one
\       - Scape the character

[n|g]   - OR n or g ninja or ginga


#### Sample Regexs ####

[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+
