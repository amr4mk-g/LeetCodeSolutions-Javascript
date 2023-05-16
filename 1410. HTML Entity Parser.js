const dict = {
    '&quot;': '"', '&apos;': "'", '&amp;': '&',
    '&gt;': '>', '&lt;': '<', '&frasl;': '/',
};

function entityParser (text) {
    let output = '';
    for (let i=0; i<text.length; i++) {
        if (text[i] !== '&') output += text[i];
        else {
            let sequence = '&';
            let j = i + 1;

            while (j < text.length && text[j] !== '&' && text[j] !== ';') {
                sequence += text[j];
                j++;
            }

            if (j === text.length) {
                output += sequence;
                break;
            }

            if (text[j] === '&') {
                output += sequence;
                i = j - 1;
            } else {
                sequence += ';';
                output += dict[sequence] ?? sequence;
                i = j;
            }
        }
    }
    return output;
}
